---
layout: post
title: "css - 动画性能优化"
data: 2018-02-21 10:27:00 +0800
categories: 学习笔记
tag: CSS
---
* content
{:toc}

<!-- more -->


## 一、60fps 与设备刷新率

> * 目前大多数设备的屏幕刷新率为 `60fps`（`Frame per Second`），即每秒60帧。
> * 因此，如果在页面中有一个动画或渐变效果，或者用户正在滚动页面，那么浏览器渲染动画或页面的每一帧的速率也需要跟设备屏幕的刷新率保持一致，即每一帧要在16毫秒（`1S/60 = 16.66ms`）之内完成。
> * 如果无法完成，由于帧率的下降会导致内容在屏幕上抖动。 
> * 此现象通常称为卡顿，会对用户体验产生负面影响。

## 二、浏览器渲染

### 2.1 CSS 图层

> * 浏览器在渲染一个页面时，会将页面分为很多个图层，图层有大有小，每个图层上有一个或多个节点。
> * 需要注意的是，如果图层中某个元素需要重绘，那么整个图层都需要重绘。

### 2.2 渲染过程

![animation](/styles/images/animation/animation-01.jpg)

> * `Javascript` 操作： 一般来说，我们会使用 `JavaScript` 来实现一些交互操作。
>   * 比如用往页面里添加一些元素，切换显示隐藏等
> * `style` 样式计算： 该过程根据 `CSS` 选择器，获取每个元素匹配的 `CSS` 样式并计算其最终应用样式
> * `Layout` 布局：该过程计算元素要占据的空间大小及其在屏幕的位置。
>   * 网页的布局模式意味着一个元素可能影响其他元素，例如 `<body>` 元素的宽度一般会影响其子元素的宽度以及树中各处的节点，因此对于浏览器来说，布局是经常发生的
> * `Paint` 绘制：本质上就是填充像素的过程。
>   * 包括绘制文字、颜色、图像、边框和阴影等。
>   * 也就是绘制元素所有的可视效果
> * `Composite` 渲染层合并：在每个层上完成绘制过程之后，浏览器会将所有层按照合理的顺序合并成一个图层，然后显示在屏幕上

---

> * 如果我们需要提高动画的性能，需要做的就是减少浏览器在动画运行时所需要做的工作。
> * 当 CSS 在进行动画时，其不同属性值引起的改变，重新渲染可能会有三种执行路径：
>   * `A：layout -> paint -> composite`
>   * `B：paint -> composite`
>   * `C：composite`

> * 很明显，最短路径的 C 动画性能是最高的，所以我们在使用动画的时候就得考虑使用什么属性，以尽量减少执行路径。

## 三、动画属性

> * `CSS` 的属性大致分为三类：布局类（`layout`），绘制类（`paint`），合成类（`composite`）。

### 3.1 重排（reflow）

> * 由元素的布局类属性改变所触发的行为过程，我们称为 `reflow`，也叫做 `relayout`（重新布局）。
> * 当某个节点 `reflow` 时会重新计算节点的尺寸和位置，还可能会引起其它节点的 `reflow`。

> * 该系列属性的改变，会执行路径 `A` 进行重新渲染，所以性能是最差的。（这充分说明，重排会引起重绘）

> * 盒子模型相关属性会触发重布局： 
>   * width
>   * height
>   * padding
>   * margin
>   * display
>   * border-width
>   * border
>   * min-height

> * 定位属性及浮动也会触发重布局：
>   * top
>   * bottom
>   * left
>   * right
>   * position
>   * float
>   * clear

> * 改变节点内部文字结构也会触发重布局：
>   * text-align
>   * overflow-y
>   * font-weight
>   * overflow
>   * font-family
>   * line-height
>   * vertival-align
>   * white-space
>   * font-size

## 四、重绘（repaint）

> * 由绘制类属性改变触发节点重新绘制其可视效果的过程，我们称为 repaint。
> * 该系列属性的改变，会执行路径 `B`，所以性能一般。

> * 修改时只触发重绘的属性有：
>   * color
>   * border-style
>   * border-radius
>   * visibility
>   * text-decoration
>   * background
>   * background-image
>   * background-position
>   * background-repeat
>   * background-size
>   * outline-color
>   * outline
>   * outline-style
>   * outline-width
>   * box-shadow

> * 上面的属性由于不会修改节点的大小和位置，因此不会触发重排，其只是改变了节点内部的渲染效果，所以只会进行重绘以下的步骤。

## 五、composite

> * 目前只有两个属性属于 `composite` 类：
>   * `transform`
>   * `opactiy`

> * 该系列属性的改变，会执行路径 C，所以性能最佳。

## 六、优化技巧

### 6.1 减少动画元素

> * 减少动画元素，是动画性能优化中首先需要完成的。
> * 通过审查页面动画 DOM 元素结构，去除不必要的动画元素，减少元素的数量，相应地会减少布页面局和绘制的时间。

### 6.2 尽量使用 fixed、absolute 定位

> * 对于动画元素，尽量使用用 `fixed`、`absolute` 定位方式，避免影响到其他节点重排。

### 6.3 尽量只改变transform和opacity

> * 能用 `transform`、`opacity` 优先使用，其属性的改变不会发生重排和重绘。
> * 如位移操作的，可以使用 `translate` 来实现，渐隐渐现效果可以使用 `opacity` 属性来实现。

### 6.4 恰当开启硬件加速效果

> * 对动画元素应用 `transform: translate3d(0, 0, 0)`、`will-change: transform` 等来开启硬件加速。
> * 通常开启硬件加速可以让动画变得更加流畅。
> * 但这里需注意，在不需要的时候需去掉避免过多的内存消耗。

```
transform: translate3d(0, 0, 0);

transform: translateZ(0);

will-change: transform;
```