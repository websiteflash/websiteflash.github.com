---
layout: post
title: Rosin 开发调试笔记
date:   2015-03-28 12:20:30
categories: rosin
---

> 开发Fiddler插件Rosin，被各种问题折腾得欲仙欲死，其实开发Fiddler插件很简单，主要是使用C#编程遇到各种问题。跟使用前端脚本编程还是大不相同。

# List 和 Array

List和Array都可以用来表示列表，不同之处是List是不固定长度，Array是固定长度的，另外List可以通过toArray()方法转为Array

# Collection 遍历时不可编辑

在Rosin运行时报错 `collection was modified enumeration operation may not execute` ，查阅资料得知是collection在foreach时，是不能对其进行修改、增加、删除的，否则会导致报错，解决方案是，在foreach时拷贝一个collection的复制，对复制对象进行foreach，`Collection.ToArray()`

参考链接 [stackoverflow link][stackoverflow link]

# 文件进程占用

Rosin的日志内容都是先写在本地文件，再通过事件通知从本地文件读取内容输出到Fiddler面板，这里就涉及到同时访问同一个io进程的问题，针对读写进程的共用，可以通过配置`FileShare`参数实现：

```
new FileStream(this.sFileDir, FileMode.Append, FileAccess.Write, FileShare.ReadWrite);
```

但是对于高频访问，导致同时要对同一文件进行写操作，必然导致io进程占用报错，这只能通过改变写文件的机制去解决，具体的做法是：

1. 建立一个文件的管理collection，管理所有涉及过的file
2. 每个文件需要写入的内容先分别缓存起来，每次调用写方法后，遍历缓存对象，依次写入

# 高并发写入

上面的方案解决了写文件进程占用的问题，但是由于瞬时高频大量的日志内容需要写入，最终引发了更多的并发问题。解决方案其实很简单了，既然高频会造成问题，就采用降频的方式，将每次日志发送触发条件的最高阈值调高，这样到Rosin里面时，基本就不会存在高频的问题。

最后，不得不说，方法比努力重要，只需一分钟就能解决的问题花了我一个星期。

[stackoverflow link]: http://stackoverflow.com/questions/6177697/c-sharp-collection-was-modified-enumeration-operation-may-not-execute