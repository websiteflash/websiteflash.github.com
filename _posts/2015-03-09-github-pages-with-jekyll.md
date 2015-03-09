---
layout: post
title: Github Pages with Jekyll
date:   2015-03-09 17:06:30
categories: jekyll
---

> 生命在于折腾，最近折腾jekyll+github pages生成个人github博客和项目主页，走了一些弯路，这里总结一下以作备忘。

# 什么是github pages

简单来说，github pages是github提供给开发者的一个免费存放静态网页的地方，开发者可以通过github pages来放置项目的主页或个人、组织的主页，比如:

* [http://websiteflash.github.io/][websiteflash]
* [http://websiteflash.github.io/canvas-log/][canvas-log]

详细介绍可以参考官网说明[github pages][github pages]

# 怎么创建github pages

github pages创建对项目和个人，有一些稍微的差别

* 项目： 创建一个名叫gh-pages的分支，可以通过项目的`setting`自动创建，也可以手动创建分支，自动创建会有一些模版可以选择，页面代码就放在这个分支里面，通过`username.github.io/project-name`访问
* 个人或组织： 直接把页面代码放在对应项目的主干中就可以，然后通过`username.github.io`直接访问

详细步骤也可以参考官网说明[github pages][github pages]

# github pages 和 jekyll

github pages是如何实现这个功能的呢，其实它背后就是jekyll，只是它的jekyll是在服务器端，而一般我们都是自己的电脑上，所以这里仅仅是对我们透明了而已。

所以我们在本地写的jekyll markdown文件可以直接上传，github会自动给我们生成对应的静态页面

不过，编译生成静态页面会有一些依赖库，为了确保本地的编译环境和github服务器构建的环境一致，有一个叫[pages-gem][pages gem]工具，可以帮助我们实现这一目的，具体可以参考：

* [github pages width jekyll][github pages width jekyll]
* [github pages gem][github pages gem]

按照上面的步骤安装完成后，只是建好了jekyll的目录，此时只能根据markdown生成一个没有样式的简单文件，我们还需要初始化jekyll的必要目录，项目目录下执行

    bundle exec jekyll new ./

这会收到一个错误提示：

    Conflict: /Users/test/Documents/code/github/websiteflash.github.com exists and is not empty.

此时我们只能先将现有目录下得文件拷贝到一个临时目录，待安装完成后再拷贝出来，new的执行方式也稍微调整

    jekyll new ./

这样就可以生成带样式的页面

# 总结

* 项目主页不建议在本地再搞一套jekyll
    
    + 过于复杂，很多文件基本都不需要
    + 难以满足需求实现，项目主页一般都会包含一些演示demo，这些都不是纯静态html页面能完成的，还需要写css和javascript配合，所以这里markdown的优势就不再明显
    + 项目主页一般都很简单，也不会涉及到过多的页面，所以不存在太多管理和维护上得问题

* jekyll更适合是配合github pages搭建个人博客

    + markdown的书写方式
    + 自动生成目录和文章导航
    + 参数可配置
    + 页面片可共用
    + ......

[github pages]: https://pages.github.com/
[pages gem]: https://github.com/github/pages-gem
[github pages width jekyll]: https://help.github.com/articles/using-jekyll-with-pages/
[github pages gem]: http://wcc723.github.io/jekyll/2014/09/05/github-page/
[websiteflash]: http://websiteflash.github.io/
[canvas-log]: http://websiteflash.github.io/canvas-log/