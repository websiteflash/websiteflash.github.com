---
layout: post
title: 搭建自己的代理
date:  2015-08-06 20:20:30
categories: vps shadowsocks proxy
---

> 习惯了使用Google来搜索各种资料，不能Google感觉整个人都不好了。最近一直在用的代理工具又被取缔了，于是，抱着学习的心态，准备自己来搭建一个代理。

## 准备一台服务器

代理的过程就是将我们的网络请求转给一台可访问世界网络的服务器，通过它访问被限制的网络，所以我们的首先要准备一台可访问世界网络的服务器，这样的服务器一般放在国外。比较著名的服务器提供商有digitalocean、linode，经过对比和同事推荐，最终我选择了[digitalocean][digitalocean]。

1. 首先注册一个账号，然后往账号充钱，充值这里建议使用Paypal
2. 创建Droplet，选择$5一个月的就够用，系统选择Ubuntu，这样你的vps主机就创建完成
3. 使用ssh登录，默认账号是root，密码在注册时发送到邮箱，`ssh root@128.128.128.128`，首次登录会要求修改密码

## 安装shadowsocks

shadowsocks是一个代理工具，项目托管在github上，[shadowsocks][shadowsocks]，按照教程安装

```bash
apt-get install python-pip

pip install shadowsocks
```

## 启动shadowsocks

```bash
# 启动shadowsocks
ssserver -p 443 -k password -m aes-256-cfb

# 后台启动shadowsocks
ssserver -p 443 -k password -m aes-256-cfb --user nobody -d start
```

参数说明：

* p  启动的端口号 
* k  连接密码 
* m  通信的加密方式 

当然还有停止的命令

```bash
# 停止shadowsocks
ssserver -d stop
```

## 设置client代理

shadowsocks分别提供了windows/OS X、android/iOS客户端的client版本

以OS X为例，下载client并安装，启动，设置服务器：

![img client][img-client]

配置完成后，重启shadowsocks，打开Google，成功。

[digitalocean]: https://www.digitalocean.com/ 
[shadowsocks]: https://github.com/shadowsocks/shadowsocks

[img-client]: /assets/images/shadowsocks/client.png