---
layout: post
title: "javasript - 闭包"
data: 2017-09-30 12:27:00 +0800
categories: 原创
tag: js
---
* content
{:toc}



<!-- more -->

## 一、闭包

### 1.1 闭包概念

* 闭包：指有权访问另一个函数作用域中的变量的函数。
    * 创建闭包的常见方式，就是在一个函数内部创建另一个函数。

### 1.2 闭包用途

* 最大用处有两个：
    * 可以读取函数内部的变量
    * 让这些变量的值始终保持在内存中。