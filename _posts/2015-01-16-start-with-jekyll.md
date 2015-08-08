---
layout: post
title:  "Start with Jekyll"
date:   2015-01-16 00:31:30
categories: jekyll
---

> 最近准备用jekyll搭建一个博客，用来记录平时学习的笔记，这个做为使用jekyll写得第一篇文章，就记录怎么使用jekyll搭建博客！

# 安装jekyll

只需要简单几步就可以完成安装

```bash
$ gem install jekyll

$ jekyll new myblog

$ cd myblog

~/myblog $ jekyll serve

# => Now browse to http://localhost:4000
```

执行上面几步后就在本地初始化好了一个博客系统，执行`jekyll serve`启动博客，之后就可以通过浏览器访问了。

# 环境依赖

* Ruby
* Rubygems
* Linux,Unix, or Mac OSX
* NodeJS

如果要在windows下搭建需要准备的环境很多，在mac下就会简单很多，具体每个环境怎么安装就不在详述，都是可以google到的，我们重点说下怎么用。

# 目录介绍

说下我们需要关心和常用的目录

* _includes     ——页面片的目录，可以把一些通用的内容抽出来放在这里，在布局中引用
* _layouts      ——页面布局结构的目录，布局之间可以嵌套引用
* _posts        ——文章markdown的目录，平时写得内容都是放在这里
* _sass         ——sass文件的目录
* _site         ——生成的页面和样式文件的目录

# 写文章

编写文章很简单，按照格式建好一个md文档，剩下的就是用markdown编写，保存后jekyll就会编译生成html文章，如果没有自动生成，也可以手动运行`jekyll build`

参考格式：

```text
---
layout: post
title:  "Welcome to Jekyll!"
date:   2015-01-16 00:31:30
categories: jekyll update
---

这里是文章内容开始！！
```

参数说明：

* layout        —— 文章使用的页面布局结构
* title         —— 文章的标题
* date          —— 文章的撰写时间
* categories    —— 文章的类别，子类别空格分隔，会按照这个类别生成目录

文件命名：

文件命名也需要按照一定规范{YYYY}-{MM}-{DD}-{title}.md，jekyll会按照前面的日期来生成目录，比如：  

`2015-01-16-welcomen-to-jekyll.md` => `2015/01/16/welcome-to-jekyll.html`

# 其他

一些高级的使用，比如模板、配置等，建议去官网查看[Jekyll docs][jekyll]

更详细的文档教程可以参考下面的内容：

> Check out the [Jekyll docs][jekyll] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll’s dedicated Help repository][jekyll-help].

[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
