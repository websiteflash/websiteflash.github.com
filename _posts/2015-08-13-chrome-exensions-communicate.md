---
layout: post
title: chrome插件开发组件间通信
date:  2015-08-13 21:20:30
categories: chrome extensions communicate
---

> 最近研究chrome插件开发，还是挺有意思，可以做很多插件帮助我们去做事，非常方便省事。chrome官方开发文档还是很齐全的，边学边看，不过，对其中的插件各部分之间通信方式还不是很清楚。今天花一天的学习再次学习官方文档，总算有个基本的掌握，本文即是对学习后的一个总结。

# 组件间关系

chrome插件的实现形式有多种，包含不通的组件部分，下面这张图摘自chrome官方开发文档，我觉得很形象的表述了chrome插件各组件之间的关系。
![img-devtools-extension][img-devtools-extension]  
一个复杂插件的运行时，包含了很多组成部分，对图中的几个部分简单介绍：  

1. Inspected Window，当前所打开的chrome窗口，也可以理解为当前所在的web页面 

    a. web scripts，即web页面原本的脚本，运行在一个独立的sandbox内  
    b. content scripts，通过插件插入的脚本，运行在独立的sanbox内  

2. Background Page，插件后台程序，顾名思义，是不可见的，运行在浏览器的后台，起着通信控制的作用 
3. DevTools Page，调试工具栏，即我们常见的netwrok等 

当然，还有其他的比如popup page，暂不讨论。

# 组件间通信

这几个组件的脚本都有运行在自己的sandbox内，那他们之间是如何进行消息通信和数据传输的呢，根据官方的说明整理，大致可以归纳为下面这张流程图
![img-message][img-message]

1. web scripts 和 content scripts之间，通过postMessage进行通信
    
    ```javascript
    // in web scrips
    window.addEventListener('message', function(e){
         if(e.data.from == 'content'){
            console.log(e.data.text)
         }
    });
    window.postMessage({from:'web', text:'hello, content scrips.'}, '*');

    // in content scripts
    window.addEventListener('message', function(e){
         if(e.data.from == 'web'){
            console.log(e.data.text)
         }
    });
    window.postMessage({from:'content', text:'hello, web scrips.'}, '*');
    ```
2. content scrips 和 Background Page之间，通过chrome.runtime.onMessage进行通信，还可以通过chrome.tab由Background Page到content scrips

    ```javascript
    // in content scripts
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        console.log(request);
    });
    chrome.runtime.sendMessage('hello, background page, i am from content script.');

    // in background page
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        console.log(request);
    });
    chrome.runtime.sendMessage('hello, content script, i am from background page.');

    // 还可以通过chrome.tab从Background Page到content scripts传递消息

    // in content scripts
    chrome.extension.onMessage.addListener(function(request){
        console.log(request); 
    });

    // in background page
    chrome.tabs.query({active: true}, function(tab){
        tab.sendMessage('hello, content script, from background page.');
    });
    ```
3. Background Page 和 Devtools Page之间，通过chrome.runtime.onConnect进行通信

    ```javascript
    // in background page

    // listen devtools page connect create
    chrome.runtime.onConnect.addListener(function (port) {

        var extensionListener = function (message, sender, sendResponse) {
            console.log(message);
        };

        // listen devtools page send message
        port.onMessage.addListener(extensionListener);

        // remove listner when conect close
        port.onDisconnect.addListener(function(port) {
            port.onMessage.removeListener(extensionListener);
        });

        // send a message to devtools page
        port.postMessage('hello, devtools page, i am from background page.');
    });
    
    // in devtools page

    // create a connect
    var backgroundPageConnection = chrome.runtime.connect({
        name: "devtools-page"
    });

    // listen message from background
    backgroundPageConnection.onMessage.addListener(function (message) {
        console.log(message);
    });

    // send a message to background page
    backgroundPageConnection.postMessage('hello, background page, i am from devtolls page.');
    ```
4. Devtools Page 和 content scripts只能通过Devtools Page主动去调用content scripts的方法进行通信
    
    ```javascript
    // in content scripts
    function selectAll(text){
        console.log('select all called. ' + text);
    }

    // in devtools page
    chrome.devtools.inspectedWindow.eval(
        "selectAll('i am from devtools page.')",
        function(result, isException){

        }
    );
    ```

组件间的通信大致就是这样。

[img-devtools-extension]: /assets/images/chrome/devtools-extension.png
[img-message]: /assets/images/chrome/message.png
