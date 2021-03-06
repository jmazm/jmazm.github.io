---
layout: post
title: "javascript -  鼠标对象的相关位置"
data: 2017-10-03 10:27:00 +0800
categories: 原创
tag: javascript
---
* content
{:toc}

* 参考资料
    * 《JavaScript高级程序设计（第3版）》 13.4.3 鼠标与滚轮

<!-- more -->

## 一、客户区坐标位置

> * 鼠标事件都是在浏览器视口中的特定位置上发生的。
> * 这个位置信息保存在事件对象的 `clientX` 和 `clientY` 属性中。
> * 所有浏览器都支持这两个属性，它们的值表示事件发生时鼠标指针在视口中的水平和垂直坐标。
>    * 即：**通过客户区坐标能够知道鼠标是在视口中什么位置发生的**
    
> * 红色框框内就是客户区【可以看到，**不包含滚动条**】

![relationship-map]({{ '/styles/images/javascript/DOM/style/style-08.png' | prepend: site.baseurl }})

> * 点击打开[demo](/effects/demo/js/demo-size/mouse-position/eg1.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>页面坐标</title>
    <style>
        .box {
            width: 300px;
            height: 300px;
            background: blue;
        }
    </style>
</head>
<body>
<div id="myDiv" class="box"></div>
<p id="content"></p>
<script>
    var div = document.getElementById('myDiv');
    var content = document.getElementById('content');
    div.onclick = function (e) {
      var e = e || window.event;
      content.innerHTML = "Client coordinates: " + "clientX = " + e.clientX + ", clientY = " + e.clientY;
    }
</script>
</body>
</html>
```

## 二、页面坐标位置

> * 通过页面坐标 `pageX` 和 `pageY` 知道事件在页面中的什么位置发生。
>    * 即：这两个属性**表示鼠标光标在页面中的位置**，因此**坐标是从页面本身而非视口的左边和顶边计算的**。
> * 在页面没有滚动的情况下，`pageX` = `clientX` 和 `pageY` = `clientY` 。

> * 点击打开[demo](/effects/demo/js/demo-size/mouse-position/eg2.html)

> * 结果对比图

![image](/styles/images/javascript/DOM/style/style-14.png)

> * 操作过程

![image](/effects/images/javascript/size/size-01.gif)


## 三、屏幕坐标位置

> * 鼠标事件发生时，不仅会有相对于浏览器窗口的位置，还有一个相对于整个电脑屏幕的位置。
> * 而通过 `screenX` 和 `screenY` 属性就可以**确定鼠标事件发生时鼠标指针相对于整个屏幕的坐标信息**。

![relationship-map]({{ '/styles/images/javascript/DOM/style/style-09.png' | prepend: site.baseurl }})

> * 点击打开[demo](/effects/demo/js/demo-size/mouse-position/eg3.html)

> * 结果对比图

![image](/styles/images/javascript/DOM/style/style-15.png)

> * 操作过程

![image](/effects/images/javascript/size/size-02.gif)

