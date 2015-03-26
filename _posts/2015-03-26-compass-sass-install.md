---
layout: post
title: Compass Sass 安装笔记
date:   2015-03-26 19:20:30
categories: compass
---

> 一直不想用sass，就是因为安装起来太费劲，以前的项目中也因为这个原因而选择less，可不想什么就偏偏来什么。最近，加入一个新的项目，里面就用的sass，折腾了我大半天的时间来安装环境，最终算是跑起来了，赶紧记录一下。

# 安装ruby

首先，compass和sass都需要在ruby的环境下才能运行，所以第一步是安装ruby。Mac下自带ruby，不需要安装，后面记录的也都是window下安装的方法。

直接去[rubyinstaller][rubyinstaller]下载安装程序，直接运行安装就好了，唯一要注意的是勾选"添加到系统路径"

![install ruby][img-install-ruby]

安装完成后如果在命令窗口中运行`ruby -v`查看是否安装成功

![install ruby success][img-install-ruby-success]

如果提示找不到ruby命令，重启一下电脑

# 设置镜像

gem sources -a http://ruby.taobao.org/ --http-proxy=http://proxy.tencent.com:8080

# 无网络下安装


# 各种问题


[rubyinstaller]: http://rubyinstaller.org/downloads/
[img-install-ruby]: /assets/images/compass/install-ruby.jpg
[img-install-ruby-success]: /assets/images/compass/install-ruby-success.jpg