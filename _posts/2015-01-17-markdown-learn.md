---
layout: post
title:  "Markdown学习笔记"
date:   2015-01-17 13:13:30
categories: markdown
---

> 知识这东西学了不用，很快就忘记了  
  刚好最近想要用jekll搭建一个笔记博客，使用markdown编写，就再重新学习一下，并记录下来

#段落

使用空行作为段落的分隔，每个空行都会被转为`<br>`  
如果单纯想实现换行，可以在上一行后面输入两个空格，然后回车

    this is a content

    this is another content

> this is a content
> 
> this is another content

#标题

标题有两种写法，分别是**类Setext**和**类atx**

类Setext用底线的形式

    this is a h1 title
    ==================

    this is a h2 title
    ------------------

> this is a h1 title
> ==================
>
> this is a h2 title
> ------------------

类atx使用#形式

    # this is a h1 title

    ## this is a h2 title
    
    ### this is a h3 title
    
    #### this is a h4 title

> # this is a h1 title
> 
> ## this is a h2 title
> 
> ### this is a h3 title
> 
> #### this is a h4 title

#区块引用

区块引用使用`>`，可以放在一段的开头，也可以每行都写，引用内部可以嵌套，引用内的markdonw语法也会正常解析

    > 引用内容
    >
    > 引用内容

    > 引用内容
      引用内容

    > 引用内容`强调`

> 引用内容
>
> 引用内容
>
> 引用内容
  引用内容
>
> 引用内容`强调`

#列表

列表分为无序列表和有序列表  
无序列表使用*、+、-表示，有序列表使用数字加点的方式表示

无序列表

    * red
    * green
    * white

    + red
    + green
    + white

> * red
> * green
> * white
>
> + red
> + green
> + white

有序列表

    1. red
    2. green
    3. white

> 1. red
> 2. green
> 3. white

#代码区块

代码区块使用4个空格或者一个tab开始，直到遇到没有4个空格或tab的地方结束  
行内的代码使用`括起来表示

    var test = {};
    test.hello = function(){}

    上面就是一段`code`块

上面就是一段`code`块

#链接

链接有两种方式，内联或引用

    this is an [example](http://example.com)
    this is an [example](http://example.com "with a title") with a title

    this is an reference [example][2], you can click [google][1] or [yahoo][3]

    [1]: http://www.google.com  "google"
    [2]: http://example.com     "example title"
    [3]: http://yahoo.com       "yahoo"

> this is an [example](http://example.com)
>
> this is an [example](http://example.com "with a title") with a title
>
> this is an reference [example][example], you can click those links: [google][1] or [yahoo][3]
>
> [1]: http://www.google.com  "google"
> [example]: http://example.com     "example title"
> [3]: http://yahoo.com       "yahoo"

#图片

图片和链接类似，也是有两种方式，内联或引用

    ![alt text](path/to/demo.png "title text")
    
    ![alt text][id]

    [id]: path/to/demo.png  "title text"

#强调

强调在行内使用*、_表示，可以是一个或两个

    this is a *test*  
    this is a **test**  
    this is a _test_  
    this is a __test__  

> this is a *test*  
> this is a **test**  
> this is a _test_  
> this is a __test__  

#参考链接

[Markdown语法说明-简体中文][4]  
[Daring Fireball: Markdown][5]  

[4]: http://wowubuntu.com/markdown/     "Markdown语法说明-简体中文"
[5]: http://daringfireball.net/projects/markdown/basics     "Daring Fireball: Markdown"
