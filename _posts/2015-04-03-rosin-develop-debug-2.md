---
layout: post
title: Rosin 开发调试笔记(二)
date:   2015-04-03 15:20:30
categories: rosin
---

> 最近把Rosin开源，在公司和github上对外发布，收到不少同学的反馈，到昨天基本都解决完。这里做一个总结，记录反馈的问题以及解决方案。

# 设置Fiddler插件图标的问题

之前开发时，自定义设置图标的问题一直没有解决，都是使用系统自带的图标，但是在低版本的Fiddler中，有的图标类型是没有的。有同学反馈这个问题，尝试了多种方法后依然不可行，最后无意在github上发现了Fiddler Docs的项目，向作者提问才得知，icon的设置应该放在tabPage添加到tabViews之后，究其原因是.Net的UI在渲染前是不会去加载图片的，具体可以看下这个[issue](https://github.com/telerik/fiddler-docs/issues/4)

搞清楚这个问题，那设置图标的代码就很简单

```c#
TabPage oPage = new TabPage("Rosin");

oPage.Controls.Add(this.oConfigControl);
this.oConfigControl.Dock = DockStyle.Fill;

int size = FiddlerApplication.UI.tabsViews.TabPages.Count;
FiddlerApplication.UI.tabsViews.TabPages.Insert(size, oPage);

// 这里的图片是通过资源的方式打包到项目中的
FiddlerApplication.UI.imglSessionIcons.Images.Add("Rosin", Rosin.Properties.Resources.icon);
oPage.ImageKey = "Rosin";
```

# 违反安全透明规则

京东的同学给我反馈，在使用时报了一个奇怪的错误，`尝试访问违反安全按透明规则的方法`，一开始我以为是京东内部it系统做了什么限制，导致没有权限。后来，google了一下，发现这个是.Net Framework 4中引入的一个特性，可以设置代码的执行权限，具体说明可以看下[官网文档](https://msdn.microsoft.com/zh-cn/library/dd233102(v=vs.110).aspx)，要解决这个报错，按照官方的示例写就可以，即将下面的代码添加到 `Properties/AssemblyInfo.cs`

```c#
[assembly: SecurityRules(SecurityRuleSet.Level1)]
```

# 缺少编译器要求的成员`System.Runtime.CompilerServices.ExtensionAttribute..ctor`

出现的原因不是很清楚，只是在低版本的Fiddler上会出现这个问题，编译也不能通过，应该是缺少部分类的原因，修复方案就是自己写一个静态类，可以参考下这篇文章，[链接](http://www.cnblogs.com/zihuxinyu/archive/2013/05/06/3063181.html)

```c#
//缺少编译器要求的成员“ystem.Runtime.CompilerServices.ExtensionAttribute..ctor”
namespace System.Runtime.CompilerServices
{
    public class ExtensionAttribute : Attribute { }
}
```

# https页面支持

https的情况由于平时业务基本没有涉及，所以在开发Rosin时将这点遗漏。受微信同事的提醒，新增加对https的支持，但实现方案和之前设想的大不相同。设想之初，认为只要将发送日志的协议由http改为https就可以简单实现，但现实告诉我们，too simple! 

首先，要讲一下http/https和fiddler这些代理工具之间的一个关系，所谓代理，就是fiddler在接受到客户端的请求后，自己模拟一个同样的请求发送到服务器，再将服务器返回的数据返回给客户端，这样它就能得到整个过程中的所有数据，这在处理http协议的请求时很好实现，但是我们知道https和http一个最大的不同就是数据加密，所以fiddler不能直接获取到服务器端返回的数据。

那fiddler是怎么实现对https的支持的呢，其中的关键就是服务器的443端口。fiddler首先通过向服务器的443端口发送一个请求，获取到服务器的ip地址和端口号，然后通过IP地址和端口号直接同服务器建立TCP/IP连接通道，从而进行数据传输，这也就是为什么我们在抓https的包时，总能看到一个端口为443的请求的原因。

理解了fiddler怎么实现对https的支持，再来看Rosin的实现原理，Rosin是通过在页面端发送一个\_\_rosin\_\_.qq.com的请求，将日志内容带上，在fiddler侧拦截这个请求，接收日志数据，所以当协议换为https的时候，这样的实现方式就意味着我们还需要模拟一个服务器去处理443的请求，实现的成本太高了。

最后改变策略，针对https的请求，利用已建好的tcp/ip通道，将日志请求域名改为页面的域名，在请求的链接上带上特殊标识，以便Rosin能够识别，最后再拦截fiddler模拟的请求，从而达到获取日志数据的目的。不过，这样的实现方式存在一个问题，即这次请求一定会先到达服务器
端，在开发测试时，量比较小还可以接受。

