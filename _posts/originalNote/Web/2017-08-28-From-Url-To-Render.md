---
layout: post
title: "从输入地址到页面渲染"
date: 2017-08-28 20:00:00 +0800 
categories: 原创
tag: 深入理解Web前端
---
* content
{:toc}


<!-- more -->


## 从输入地址到页面渲染过程

> * 先 `show`一张图

![relationship-map]({{ '/styles/images/web/web-01.png' | prepend: site.baseurl }})

> * 由`HTML`为起点

> * 在地址栏输入网址 `www.jmazm.com`

> * 首先会在缓存里面看看有没有对应的资源，如果有，就直接返回此资源，如果没有，就向服务器发送请求，获取资源。

> * 浏览器器在真正向服务器端发送请求前，会先进行`DNS`查询其对应的`IP`地址，找到对应的`IP`地址了，才发送`HTTP`请求给服务器

> * 接着，`HTTP`发送请求成功后，就会进行 `TCP` 连接，然后通过 `TCP` 传输数据，数据传输完，TCP 关闭连接   

> * 当`HTML` 拿回来后，开始进行解析。

> * `HTML` 会被解析成 `DOM` 树，而`CSS`则会被解析成一定的样式规则

> * `DOM` 树和样式规则会结合起来，形成渲染树，然后开始布局

> * 布局完后，就开始绘制页面，最终将页面呈现给用户



