---
layout: post
title: Compass Sass 安装笔记
date:   2015-03-26 19:20:30
categories: compass
---

> 一直不想用sass，就是因为安装起来太费劲，以前的项目中也因为这个原因而选择less，可不想什么就偏偏来什么。最近，加入一个新的项目，里面就用的sass，折腾了我大半天的时间来安装环境，最终在大神的帮助下算是跑起来了，赶紧记录一下。

# 安装ruby

首先，compass和sass都需要在ruby的环境下才能运行，所以第一步是安装ruby。Mac下自带ruby，不需要安装，后面记录的也都是window下安装的方法。

去[rubyinstaller][rubyinstaller]下载安装程序，直接安装就好了，唯一要注意的是勾选"添加到系统路径"

![install ruby][img-install-ruby]

安装完成后在命令窗口中运行`ruby -v`查看是否安装成功

![install ruby success][img-install-ruby-success]

如果提示找不到ruby命令，重启一下电脑

# 设置镜像

ruby对应的包管理器rubygem会随ruby一起安装。另外默认的镜像地址是 `https://rubygems.org/` ，有时候也可能没有，可以通过 `gem sources -l` 查看当前的镜像地址列表

由于相关原因， `https://rubygems.org/` 在国内不访问不到的，不过可以使用淘宝提供了镜像地址： `http://ruby.taobao.org/` ，具体做法是：  
1. 先移除原有的镜像地址，`gem sources -r https://rubygems.org/`  
2. 添加新的镜像地址，`gem sources -a http://ruby.taobao.org/`  

# 安装comapss

设置完镜像地址之后，我们就可以开始安装compass，运行 `gem install compass` ，如果没有网络问题，gem就会去下载相应的包以及依赖的包

# 无网络下安装

上面都是在网络正常的情况下安装，但是公司的环境比较特殊，有两台电脑，一台电脑只能访问内部网页，所以以上的方法在这里都失效了。

采用曲线的方法，通过外网电脑将compass包安装下载好，然后到ruby gems的目录中，找到对应的包，拷贝到内网电脑上，最后运行 `gem install --local compass-1.0.3.gem` ,这样ruby直接从本地文件进行包的安装。

# 各种问题
1. 公司网络限制，连 `gem sources` 增加淘宝的镜像地址都不行，只能通过设置公司的代理来解决
```
gem sources -a http://ruby.taobao.org/ --http-proxy=http://proxy.example.com:8080
```

2. 无网络安装，两台电脑的ruby版本必须是一致的，否则会出现兼容性问题，导致运行失败

[rubyinstaller]: http://rubyinstaller.org/downloads/
[img-install-ruby]: /assets/images/compass/install-ruby.jpg
[img-install-ruby-success]: /assets/images/compass/install-ruby-success.jpg