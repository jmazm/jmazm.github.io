---
layout: post
title: "css - Flex - 基础"
date: 2017-09-03 10:00:00 +0800 
categories: 学习笔记
tag: CSS
---
* content
{:toc}

其他链接：

+ [css - Flex - 实例]({{ '/2017/09/03/Flex-Example' | prepend: site.baseurl }})

> 以下内容都摘自博客：[http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)  

<!-- more -->

## 一、Flex 布局是什么

> * `Flex` 是 `Flexible Box` 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。
> * 任何一个容器都可以指定为 `Flex` 布局。

```css
.box {
    display: flex;
}
```

> * 行内元素也可以使用 `Flex` 布局。

```css
.box {
    display: inline-flex;
}
```

> * `Webkit` 内核的浏览器，必须加上`-webkit`前缀。

```css
.box {
     display: -webkit-flex; /* Safari */
     display: flex
}
```

> * 注意，设为 `Flex` 布局以后，子元素的`float`、`clear`和`vertical-align`属性将失效。

## 二、基本概念



> * 采用 `Flex` 布局的元素，称为 `Flex` 容器（`flex container`），简称"容器"。
>    * 它的所有子元素自动成为容器成员，称为 `Flex` 项目（`flex item`），简称"项目"。

![relationship-map]({{ '/styles/images/css/flex/flex-01.png' | prepend: site.baseurl }})

> * 容器默认存在两根轴：
>    * 水平的主轴（`main axis`）和垂直的交叉轴（`cross axis`）。
>        * 主轴的开始位置（与边框的交叉点）叫做`main start`，结束位置叫做`main end`。
>        * 交叉轴的开始位置叫做`cross start`，结束位置叫做`cross end`。
> * 项目默认沿主轴排列。
> * 单个项目占据的主轴空间叫做`main size`，占据的交叉轴空间叫做`cross size`。

## 三、容器的属性

### 3.1 flex-direction属性

> * `flex-direction`属性决定主轴的方向（即项目的排列方向）。

```css
.box {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

![relationship-map]({{ '/styles/images/css/flex/flex-02.png' | prepend: site.baseurl }})

> * 它可能有4个值。
>    * `row`（默认值）：主轴为水平方向，起点在左端。
>    * `row-reverse`：主轴为水平方向，起点在右端。
>    * `column`：主轴为垂直方向，起点在上沿。
>    * `column-reverse`：主轴为垂直方向，起点在下沿。

### 3.2 flex-wrap属性

> * 默认情况下，项目都排在一条线（又称"轴线"）上。
> * `flex-wrap`属性定义，如果一条轴线排不下，如何换行。

![relationship-map]({{ '/styles/images/css/flex/flex-03.png' | prepend: site.baseurl }})

```css
.box {
    flex-wrap: nowrap | wrap | wrap-reverse;
}
```

> * 它可能取3个值：

> * `nowrap`（默认）：不换行。

![relationship-map]({{ '/styles/images/css/flex/flex-04.png' | prepend: site.baseurl }})

> * `wrap`：换行，第一行在上方。

![relationship-map]({{ '/styles/images/css/flex/flex-05.png' | prepend: site.baseurl }})

> * `wrap-reverse`：换行，第一行在下方。

![relationship-map]({{ '/styles/images/css/flex/flex-06.png' | prepend: site.baseurl }})


### 3.3 flex-flow

> * `flex-flow`属性是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`row nowrap`。

```css
.box {
     flex-flow: <flex-direction> || <flex-wrap>;
}
```

### 3.4 justify-content属性

> * `justify-content`属性定义了项目在主轴上的对齐方式。

```css
.box {
    justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

![relationship-map]({{ '/styles/images/css/flex/flex-07.png' | prepend: site.baseurl }})

> * 它可能取5个值，具体对齐方式与轴的方向有关。下面假设主轴为从左到右。
>    * `flex-start`（默认值）：左对齐
>    * `flex-end`：右对齐
>    * `center`： 居中
>    * `space-between`：两端对齐，项目之间的间隔都相等。
>    * `space-around`：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

### 3.5 align-items属性

> * `align-items`属性定义项目在交叉轴上如何对齐。

```css
.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

![relationship-map]({{ '/styles/images/css/flex/flex-08.png' | prepend: site.baseurl }})

> * 它可能取5个值。具体的对齐方式与交叉轴的方向有关，下面假设交叉轴从上到下。
>    * `flex-start`：交叉轴的起点对齐。
>    * `flex-end`：交叉轴的终点对齐。
>    * `center`：交叉轴的中点对齐。
>    * `baseline`: 项目的第一行文字的基线对齐。
>    * `stretch`（默认值）：如果项目未设置高度或设为`auto`，将占满整个容器的高度。

### 3.6 align-content属性

> * `align-content`属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

```css
.box {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

![relationship-map]({{ '/styles/images/css/flex/flex-09.png' | prepend: site.baseurl }})

> * 该属性可能取6个值。
>    * `flex-start`：与交叉轴的起点对齐。
>    * `flex-end`：与交叉轴的终点对齐。
>    * `center`：与交叉轴的中点对齐。
>    * `space-between`：与交叉轴两端对齐，轴线之间的间隔平均分布。
>    * `space-around`：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
>    * `stretch`（默认值）：轴线占满整个交叉轴。

## 四、项目的属性

### 4.1 order属性

> * `order`属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。

```css
.item {
  order: <integer>;
}
```

![relationship-map]({{ '/styles/images/css/flex/flex-10.png' | prepend: site.baseurl }})

### 4.2 flex-grow属性

> * `flex-grow`属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。

```css
.item {
  flex-grow: <number>; /* default 0 */
}
```

![relationship-map]({{ '/styles/images/css/flex/flex-11.png' | prepend: site.baseurl }})

---

> *  `flex-grow` 即定义如何去分配父容器的剩余空间
>   * 如果所有项目的`flex-grow`属性都为1，则它们将等分剩余空间（如果有的话）。
>   * 如果一个项目的`flex-grow`属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

> * [demo](/effects/demo/css/flex/flexGrow/v1.html)

![flex](/styles/images/css/flex/flex-44.png)

> * 这里要补充：
>   * 当子元素的宽度总和超过父容器的宽度时，剩余空间不可以分配，例如上例：`500 - 600 = -100`，则定义了 `flex-grow` 的子元素能分配到的空间为0，故不生效
>   * `flexbox` 环境的父容器的宽度 `500px` 并不会因为子元素的总宽而改变，即子元素的宽度总和最多等于父容器的宽度
>   * 所以为了让子元素完整显示在父容器内，只有两个办法：
>       * 通过设置 `flex-wrap` 来使子元素换行
>       * 通过压缩子元素来使其能容纳在父容器内

### 4.3 flex-shrink属性

> * `flex-shrink`属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。如果一个 `flexbox` 项目的 `flex-shrink` 属性为0，则该元素不会被压缩。

```css
.item {
  flex-shrink: <number>; /* default 1 */
}
```

![relationship-map]({{ '/styles/images/css/flex/flex-12.jpg' | prepend: site.baseurl }})

---

> * 为什么需要 `flex-shrink` 来定义缩小比例呢？
>   * 当子元素的宽度总和大于 `flexbox` 父容器的宽度时，其剩余空间将为负数，如果没有设置换行的情况下，其将会通过压缩子元素来使其能够容纳在父容器内。
>   * 所以，我们可以通过 `flex-shrink` 定义缩小比例
> * 如果所有项目的`flex-shrink`属性都为1，当空间不足时，都将等比例缩小。
> * 如果一个项目的`flex-shrink`属性为0，其他项目都为1，则空间不足时，前者不缩小。
> * 负值对该属性无效。

> * [demo](/effects/demo/css/flex/flexShrink/v1.html)

![flex](/styles/images/css/flex/flex-45.png)

### 4.4 flex-basis属性

> * `flex-basis` 属性定义了在分配多余空间之前，项目占据的主轴空间（`main size`）。
>   * 即：`flex-basis` 用来定义子元素的默认宽或高
>   * 如果父容器 `flex-direction` 属性的方向为水平方向则为宽度，如为垂直方向则为高度。
>   * 相当于给子元素设置宽或高。
>   * **如果同时设置了该属性与宽或高，则该属性权重大于宽或高的值**。
> * 浏览器根据这个属性，计算主轴是否有多余空间。
> * 它的默认值为 `auto` ，即项目的本来大小。

```css
.item {
  flex-basis: <length> | auto; /* default auto */
}
```

> * 它可以设为跟`width`或`height`属性一样的值（比如350px），则项目将占据固定空间。

### 4.5 flex属性

> * `flex`属性是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为`0 1 auto`。后两个属性可选。

```css
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```

> * 该属性有两个快捷值：`auto (1 1 auto)` 和 `none (0 0 auto)`。
> * 建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

> * 当 `flex` 取值为一个非负数字，则该数字为 `flex-grow` 值，`flex-shrink` 取 1，`flex-basis` 取 0%，如下是等同的：

```css
.item {flex: 1;}
.item {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
}
```

> * 当 `flex` 取值为一个长度或百分比，则视为 `flex-basis` 值，`flex-grow` 取 1，`flex-shrink` 取 1，有如下等同情况（注意 0% 是一个百分比而不是一个非负数字）：

```css
.item-1 {flex: 0%;}
.item-1 {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
}
.item-2 {flex: 24px;}
.item-1 {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 24px;
}
```

> * 当 `flex` 取值为两个非负数字，则分别视为 `flex-grow` 和 `flex-shrink` 的值，`flex-basis` 取 `0%`，如下是等同的：

```css
.item {flex: 2 3;}
.item {
    flex-grow: 2;
    flex-shrink: 3;
    flex-basis: 0%;
}
```

> * 当 `flex` 取值为一个非负数字和一个长度或百分比，则分别视为 `flex-grow` 和 `flex-basis` 的值，`flex-shrink` 取 1，如下是等同的：

```css
.item {flex: 2333 3222px;}
.item {
    flex-grow: 2333;
    flex-shrink: 1;
    flex-basis: 3222px;
}
```

### 4.6 align-self属性

> * `align-self`属性允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性。
> * 默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`。

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

![relationship-map]({{ '/styles/images/css/flex/flex-13.png' | prepend: site.baseurl }})

> * 该属性可能取6个值，除了`auto`，其他都与 `align-items` 属性完全一致。