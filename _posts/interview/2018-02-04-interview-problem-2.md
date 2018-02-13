---
layout: post
title: "我对前端面试的看法  （二） css"
date: 2018-02-04 09:00:00 +0800 
categories: 面试
tag: interview
---
* content
{:toc}


<!-- more -->


## 1、link 和 @import的区别

> * 页面被加载时，通过link引入的css文件也会同时被加载；而通过@import引入的css文件则需要等到整个页面加载完了才开始加载
> * @import有兼容性问题，而link标签全兼容，放心使用

## 2、说一说position

> 先介绍这个`css` 属性是什么，其下有什么属性值，每个属性值代表的含义是什么

> * `position`：用于设置元素的位置
> * 其下属性值有：
>   * `static`：元素保持原来的位置即可，也是`position`默认值
>   * `absolute`：绝对定位，其是相对于 `position` 非 `static` 的最近的父元素定位的
>   * `relative`：相对定位，其是相对于自身去定位
>   * `fixed`：固定定位，一般是相当于视窗定位

## 3、说一说有什么布局

> * `table` 布局
> * `grid` 布局
> * `flex` 布局
> * `position` 布局
> * `float` 布局

## 4、说一说盒模型

> 先介绍是什么、构成是怎么样、相关css属性

> * 我是这样理解盒模型的：每个元素其实都是一个矩形盒子，这些矩形盒子又会基于一定的规则来描述其占用的空间。
> * 盒模型主要是由4个部分组成：内容区域、`padding` 内边距、`border`边框、`margin` 外边距

> * 接下来说一说与盒模型有关的一个`css`属性，`box-sizing`
> * `box-sizing`：
>   * `content-box`：标准模式下的盒模型，`padding` 和 `border` 不包含在 `width` 和 `height` 之内，所以元素实际宽度 = 所设置的 `width` + `border` + `padding`
>   * `border-box`：怪异模式下的盒模型，`padding` 和 `border` 包含在 `width` 和 `height` 之内，所以元素的实际宽度 = 所设置的 `width`
>   * `inherit`：继承父元素的 `box-sizing` 属性的值

## 5、说一说display

> * `display`：规定元素生成的框的类型
> * 其下属性值有：
>   * `block`：块类型，默认宽度为父宽度，可设置宽高、换行显示
>   * `none`：缺省值
>   * `inline`：行内元素类型。默认宽度为内容宽度，不可设置宽高，同行显示
>   * `inline-block`：默认宽度为内容宽度，可设置宽高，同行显示
>   * `list-item`：像块类型元素一样显示，并添加样式列表标记
>   * `table`：此元素会作为块级表格来显示
>   * `inherit`：设置此值的元素会继承父元素的`display`值
>   * `flex`：`flex`布局

## 6、说一说行内元素和块级元素的区别？它们分别有什么元素

> * 一个元素究竟是行内元素还是块级元素不是由标签本身决定的，其实这是一个`css`特性，它是由`display`的值决定的。
>   * 如果`display`的值为`block|table|list-item...`等，那么它就是一个块级元素。
>   * 如果`display`的值为`inline|inline-block..` 等，那么它就是一个行内元素。 

> * 接下来说一说他们之间的区别：
>   * 首先，最明显的区别就是，他们的`display`值是不一样的
>   * 对于块级元素来说，它可以设置宽高、行高以及换行显示；但对于行内元素来说，它不可以设置宽高、行高，而且是同行显示

> * 最后再说一说他们分别有的元素：
>   * 块级元素：`div`,`p`,`header`,`ul`,`ol`,`li`,`table`,`hn`,`footer`,`aside`,`nav`...
>   * 行内元素：`i`,`span`,`strong`,`b`,`em`,`img`,`input`,`button`...

## 7、说一说line-height

> * 说到行高，其实我们可以联想到小时候学英语时使用的那个英语本，本子上每行都要4条线
> * 从上往下看分别是：顶线、中线、基线、底线
> * line-height，行高，指的是文本行基线间的距离
> * 行距指的是一行底线到下一行顶线的垂直距离
> * 半行间距 = （行高 - 字体大小）/ 2

> * line-height应用：
>   * 我一般会用其来时文本内容垂直居中或者让图片垂直居中

> * 需要注意的是：行内元素不支持行高



## 8、说一说如何清除浮动

> 先说明引起浮动的原因，再说解决方法(针对不同的原因分类说明解决方案)

> * 为什么要清除浮动？主要是因为浮动元素会脱离文档流，从而造成元素重叠或者父元素高度塌陷的问题，严重影响整个页面的布局。

> * 对于元素重叠这种情况，其解决方案是清除前面兄弟元素的浮动
>   * 假设`div1`是浮动元素，`div2`不是浮动元素，但它紧跟随`div1`，如果想`div2`不受 `div1` 的影响，那么就直接在`div2`上添加`clear:both`即可。
>   * 总结一句：只需要在不想受到浮动元素影响的元素上使用 `clear:both` 即可

> * 对于父元素高度塌陷这种情况，其解决方案是闭合子元素浮动
>   * 一般有两种方法闭合子元素浮动
>       * 第一种方法是：给最后一个元素设置`clear:both`
>       * 第二种方法是：给父元素新建一个`BFC`

> * 给最后一个元素设置`clear:both`，又有两种方法：
>   1. 新增一个空元素，并为这个空元素设置`clear:both`。【不过这个方法并不优雅，它浪费标签，导致代码冗余，而且后期不易维护】
>   2. 通过父元素的伪元素（`::after`）实现 `clearfix` 方法，即：将 `clearfix` 这个类直接添加到浮动元素的父元素上即可；`.clearfix`的内容是：

```css
.clearfix::after {
    content: '';
    display: block;
    clear: both;
}
```
> * 给父元素新增一个`BFC`，其原理是：父元素在新建一个 `BFC` 时，其高度计算时会把浮动子元素的包进来。以下情况都可以新建一个`BFC`
>   * 浮动元素（`float` 不等于 `none`）
>   * 定位元素（`position = absolute | fixed`）
>   * `display: inline-block` 的元素
>   * 表格单元格 (元素具有 `display: table-cell`，`HTML`表格单元格默认属性)
>   * 表格标题 (元素具有 `display: table-caption`, `HTML`表格标题默认属性)
>   * 块元素具有`overflow`，且值不是 `visible`
>   * `display: flow-root`

## 9、对于一个未知宽高的盒子，如何让它水平垂直居中于父元素？

> * `display: table` + `dispaly: table-cell`
> * `flex` 布局 
> * `position` + `transform`
> * 使用一个空标签 或者 使用伪元素 `::before`
> * 用 `js` 计算

## 10、简单说下 flexbox 布局

> 先说一说`flex`布局是什么

> 再说一说flexbox 布局解决的问题（未出现之前，布局的缺陷），flexbox 的兼容性，flexbox 的局限

> * `Flex` 是 `Flexible Box` 的缩写，其意思为`弹性布局`，主要思想是让容器有能力让其子项目能够改变其宽度、高度，甚至是顺序，以最佳的
>   方式填充空间（其实就是为了适应所有类型的显示设备和屏幕大小）
> * 任何一个容器都可以指定为 `Flex` 布局

> * 兼容性： `IE11+`, `FF22+`, `Chrome 21+`, `Opera12.1+`, `Safari 10.1+`
>   * `-webkit`


> * `Flex` 布局的出现，为我们解决了许多问题，例如：
>   * 解决元素垂直居中的问题。
>   * 可以实现流体布局、网格布局、百分比布局、悬挂式布局
>   * 有时候，我们在写页面的时候，会出现主体内容过少，导致底栏会抬高到页面中间，而`flex`布局则可以为我们解决这个问题

## 11、说下你对 CSS3 动画的理解？

> 先说一说与css3动画有关的css属性，每个属性分别有什么值，其含义又是什么，说一说动画性能

> 说一说`transition` 和 `animation` 的异同

> 说一说动画的性能

> * 与`css3`动画有关的`css`属性有：`transition`, `animation`

> * `transition`：主要是用来让`css`属性值在一定的时间区间内平滑地过渡。主要有4个值
>   * `transition-property`：过渡的`CSS`属性，`none|all|指定样式`
>       * 可以指定的`css`属性有：颜色属性、具有百分比、长度值得属性、
>   * `transition-duration`：完成过渡所需要的时间
>   * `transition-timing-function`：过渡函数
>       * `ease`：由快到慢
>       * `linear`：线性，恒速
>       * `ease-in`：加速，渐显效果
>       * `ease-out`：减速，渐隐效果
>       * `ease-in-out`：先加速后减速，渐显渐隐效果
>       * 三次贝塞尔曲线
>   * `transition-delay`：过渡开始出现的延迟时间

> * `animation`：主通过类似`Flash`中的关键帧来声明一个动画，然后在`animation`属性中调用关键帧所声明的动画，从而实现一个更为复杂的动画效果
> * 属性值：
>   * `animation-name`：指定一个关键帧动画的名字，这个动画名对应着一个`@keyframes`的名称 || `none`(没有任何动画效果)
>   * `animation-duration`：播放动画所需时间，一般秒做单位
>   * `animation-timing-function`：动画播放方式
>   * `animation-delay`：动画延迟多少秒后播放
>   * `animation-iteration-count`：动画播放的循环次数，默认值为1，如果是`infinite`,就是无限循环播放
>   * `animation-direction`：动画播放方向
>       * `normal`：默认，动画向前播放
>       * `alternate`：播放次数为偶数，则向前播放；播放次数为奇数，就向反方向播放
>   * `animation-play-state`：控制动画播放状态
>       * `running`：默认，播放
>       * `paused`：暂停
>   * `animation-fill-mode`：设置动画的时间外属性
>       * `none`：默认，表示动画按预期进行和结束，在完成最后一帧时，动画 会反转到初始帧处
>       * `forwards`：动画结束后继续应用最后关键帧的位置
>       * `backwards`：会向元素应用动画样式时迅速应用到动画的初始帧
>       * `both`：同时具有`forwards` 和 `backwards` 的效果

> * 关键帧的声明：`@keyframes` + `{` + `from..to`  +`}`，或者利用百分比

```css
@keyframes 动画名称 {

}
```

> * 浏览器兼容：`@-o-keyframes` 或者 `@-webkit-keyframes` 或者 `@-moz-keyframes`

---

> * 相同点：他们都是通过改变元素的属性值来实现动画效果
> * 不同点：
>   * `transition` 属性只能通过指定属性的初始状态和结束状态，然后在两个状态之间进行平滑的过渡来实现动画的效果，
>   * 由于关键帧的存在，所以`animation`的状态不止初始和结束两个状态，所以能实现更为复杂的动画效果 

---

> * 接下来说一说`css3`动画的性能

> * 比如说我要使几个球左右运动起来，在还没有学习 `css3` 动画之前，你肯定会用`js`去解决，定个位，然后处理每个小球的`left`值，但是你会发现，球动起来好像有点卡卡的样子
> * 但其实我们可以使用`css3`的属性 `transform` 中的 `translate` 去使小球动起来，你会发现，用了这个方法后，小球动得比较流畅，没有卡顿的感觉。
> * 这深层的原因是：因为 `transform` 属性不会引起浏览器的 `repaint`，就是重绘

## 12、简单说下你对一些小图标的处理

> 先说一说为什么要处理小图标，然后再说处理小图标的方法，每个方法的优势

> * 其实我们很多情况下都会用到小图标，比如说增删查改、一些小logo之类的，因为小图标比单纯的文字要生动形象得多。
> * 既然要用到那么多图标，在我们未进行处理的情况下，就是一张张图片，你会发现，打开一个页面要加载那么多张图片，其加载速率是什么慢的，尽管这些图片并不是很大
> * 因此，为了有更好的用户体验，所以我们要对这些小图标进行处理，有以下三种比较常用的方法：

> * 方法一：雪碧图
>   * 将多个图片集合在一张图片内，那就相当于多张图片合成一张图片，加载页面也只需加载那么一张图标合成图片，所以加载速率会快得多
>   * 雪碧图的话，主要是依靠 `background-position` 这个`css` 属性去实现的

---

> * 方法二：iconfont，字体图标
>   * 你可以在`iconfont`的官网，选择你想要的图标，然后可以将其download下来
>   * 其中主要是通过 `@font-face` 嵌入 `web` 字体

> * `@font-face` 的规则如下：
>   * `ource`：自定义字体的存放路径
>   * `Format`：自定义的字体格式，保住浏览器识别，主要有 `truetype, opentype, truetype-aat, embedded-opentype,avg`

```css
@font-face {
    font-family: 自定义字体名;
    src: <source> [<format>],
    [font-weight: <weight>,]
    [font-style: <font-style>]
    [font-variant: <font-variant>]
    [font-size: <font-size>]
    [font-strench: <font-strench>]
}
```

> * 字体图标的优势：
>   * 一个字体图标要比一张图片要小，一旦字体图标加载完，图标就会马上渲染出来，不需要下载
>   * 可扩展性强：假如在不同的屏幕其图标的大小或者颜色不一样，对于图片来说，如果不是按照其真实大小去设置其宽高，这回造成极大的浪费！
>     但是字体图标可以通过 `font-size` 改变图标的大小，`color`改变图标的颜色
>   * 兼容性更强：现代浏览器都支持网页字体

---

> * 方法三：`svg sprites`

## 13、说一说css单位

> * `css` 单位分为绝对单位和相对单位
> * 绝对单位指自己本身是多少就是多少，而相对单位都会有一个参考点，比如一个太阳约等于33个地球，那么这个地球就是参考点

> * 绝对单位有：`px`, `cm`, `in`, `pt`, `mm`
> * 相对单位有：`%`, `em`, `rem`, `vw`, `vh`, `vmin`, `vmax`

> * `px`：传统上，一个像素对应于计算机屏幕上的一个点，而对于高清屏来说就会更多。任何现代显示屏都是由成千上万的像素组成，所以我们可以用像素来定义长度
> * `%`：如果对 `html` 元素设置 `font-size` 为百分比值，则是以浏览器默认的字体大小 `16px` 为参照计算的（所有浏览器的默认字体大小都为 16px）
> * `em`：参照物不固定
>   * 对于字体大小来说，`em`是相对于父元素的字体大小计算的；如果父元素没有，就再往上一层找，直到找到参照点为止
>   * 对于像`width`，`border`，`height`，`padding`等，`em` 是相对于元素本身的字体大小去计算的。如果元素本身没有，就再往上一层找，直到找到参照点为止
> * `rem`：参照物固定
>   * `rem` 是相对于根元素 `html` 的 `font-size` 来计算
> * `vw`, `vh`, `vmin`, `vmax`：是基于视窗大小（浏览器用来显示内容的区域大小）来计算的
>   * `vw`：基于视窗的宽度计算，1vw 等于视窗宽度的百分之一
>   * `vh`：基于视窗的高度计算，1vh 等于视窗高度的百分之一
>   * `vmin`：基于`vw`和`vh`中的最小值来计算，`1vmin` 等于最小值的百分之一
>   * `vmax`：基于`vw`和`vh`中的最大值来计算，`1vmax` 等于最大值的百分之一

---

> * 还有一个单位运算：`calc()`，这个可厉害了，加减乘除样样行！

## 14、说说如何使元素显示和隐藏

> * 主要有5种方法
>   * `display: none`
>   * `visibility: hidden`
>   * `opacity: 0`
>   * `overflow: auto/hidden`
>   * `position: absolute`

---
> * 对于`display: none` 来说：其所有后代元素都会隐藏，元素本身的占位空间也会没有了
> * 对于`visibility: hidden` 来说：其后代元素设置`visibility: visible` 依然还可以显示，并且元素原来的占位空间也会被保留

## 15、说一说背景

> * `background-color`：背景颜色
> * `background-image`：背景图片
> * `background-repeat`：背景图片平铺方式；值：repeat, no-repeat, repeat-x, repeat-y
> * `background-position`：背景图片定位；x：left center right；y: top center bottom；或者百分比像素
> * `background-size`：背景图片大小；100% 铺满整个容器

> * 简写：`backgound: #eee url(a.png) no-repeat center center/100px 100px

## 16、说一说层叠上下文 或者 z-index

> 先说说是什么，什么情况下会形成层叠上下文；说到层叠上下文肯定与z-index有关 或者 说到z-index肯定与层叠上下文有关

> * 我是这样理解层叠上下文的：
>   * 层叠上下文是`HTML`元素的三维概念，打破了我们平常以为的元素都是在基于屏幕平面按顺序排列的常规。
>   * 它带给我们一种新的权力，除了 `x` 轴、`y` 轴外，我们还有 `z` 轴，我们现在有权利控制元素在`z` 轴，即垂直于屏幕方向的排列顺序了！ 

> * 说到层叠上下文，不得不提一下 `z-index`。

> * `z-index` ：这个属性是控制定位元素（非 `static`）垂直于页面上的排列顺序，即刚刚所说的 `z` 轴，其值可为auto，这是默认值，或者整数
> * `z-index` 一般比较规则是值大在上，值相同则排后面的在上。
> * 元素在设置了某些属性的时候会创建层叠上下文，`z-index` 值比较大小只有在同一个层叠上下文才有效。

> * 下面再说一说创建层叠上下文的方法：
>   * 根元素
>   * `z-index` 不为`auto`的绝对或者相对定位
>   * `opacity` 小于1的元素
>   * `transform` 不为 `none` 的元素
>   * `z-index` 不为 `auto`，且`display: flex/inline-flex` 的元素
>   * `position: fixed` 的元素

