---
layout: post
title: nodejs运行shell脚本
date:  2015-08-05 17:20:30
categories: nodejs shell child_process
---

> 这是一个忧伤的故事，前几天用nodejs写了一个定时脚本来跑任务，感觉棒棒的。但是，诡异的是每隔3天这个进程就会意外挂掉，没办法，查日志，发现有报错`Error: maxBuffer exceeded`，原来是child_preocess.exec有一个输出最大限制200k，达到上限后就会导致进程退出。这个问题说明对child_preocess的spawn和exec用法掌握不足，需要好好学习总结。

# nodejs运行linux命令

有时候，需要在服务器上执行linux命令，但是又不想写shell脚本（其实是不太会写），好在有node，给我们提供了执行linux命令方法。
