---
layout: post
title: "Git 常用操作"
date: 2015-03-06 20:03
categories: git
---

> git 常用操作笔记

# git init

`git init` 用于创建新的代码仓库

# git clone

`git clone` 用于克隆一个远程仓库的本地版本

    git clone https://github.com/websiteflash/javascript.git

# git add

`git add <filename>` 将修改的文件添加到缓存区，以备后续提交

    git add .

# git commit

`git commit -m "commit log message"` 将缓存区的代码提交，但是还未发送到远端代码库

    git commit -m "init project"

# git push

`git push origin master` 将修改提交到远程代码库  
如果还没克隆仓库，可以使用  
`git remote add origin <server>` 连接到远程服务器，并推送修改  

# git pull

`git pull` 将远程仓库的代码合并到本地分支

# git status

`git status` 查看当前的版本库的状态，包括分支信息，待提交文件等

# git log

`git log` 查看提交的日志记录，可以待负数，表示最近的几条日志，默认显示全部

    git log -1  # 查看最近的一条日志
    git log -5  # 查看最近的5天日志

# git branch

`git branch` 列出当前本地的所有分支


# **Notes**

# 切换分支

每次切换分支最好保留一个清洁的工作区域，否则当前的修改会被带到切换的分支，通常的做法是切换之前`git commit`提交所有修改，或者`git stash`缓存修改，切换回来时用`git stash apply`将缓存的修改还原

其背后的原因是：一个本地的git repo只有一个工作区和暂存区，但是有多个分支的提交区，而我们的checkout只是将HEAD指针从一个分支切换到另一个分支

![img local][img-local]

# 参考资料

* [git 简易指南][git-guide]
* [git 切换分支问题][git-checkout]

[img-local]: /assets/images/git/local.png
[git-checkout]: http://segmentfault.com/q/1010000000156026
[git-guide]: http://www.bootcss.com/p/git-guide/