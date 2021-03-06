---
layout: post
title: "React - 第一个小实例"
data: 2017-09-21 12:27:00 +0800
categories: 原创
tag: React
---
* content
{:toc}

<!-- more -->

## 一、 实例开始前的准备

### 1.1 node.Js

展示的实例基于`Node.Js`环境，所以需要先安装`node.js`

### 1.2 使用npm

安装了`Node.Js`后，就会包含`npm`，我们需要使用`npm`下载一些**辅助工具**。

> 包括：
>   * **webpack**： `npm install --save-dev webpack webpack-dev-server html-webpack-plugin style-loader css-loader`
>   * **babel**： `npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react`
>   * **react**：`npm install react react-dom`

### 1.3 文件目录

![relationship-map]({{ '/styles/images/react/react-01.png' | prepend: site.baseurl }})

### 1.4 npm run dev

在`package.json`文件里的`scripts`增加这一行代码，以后只要直接在命令行输入`npm run dev` 就会在浏览器打开页面，只要你修改了内容，那么页面就会自动更新

```json
{
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "dev": "webpack-dev-server --open --port 3000"
      }
}
```

### 1.5 webpack.config.js

```js
var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 入口文件
    entry: './src/index.jsx',
    // 出口文件
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    resolve: {
        extensions: [' ', '.jsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.jsx$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react']
                    }
                }
            }
        ]
    },
    plugins: [
        // 加入 html 模板任务
        new HtmlWebpackPlugin({
            // 模板文件
            template: 'src/index.html',
            // 打包后文件名称，会自动放到 output 指定的 dist 目录
            filename: 'index.html'
        })
    ]
};
```


## 二、index.html

代码十分简单，如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>react-demo</title>
</head>
<body>
<div id="root"></div>
</body>
</html>
```

## 三、 index.jsx(重点)

### 3.1 完整代码

```js
import React, {Component} from 'react';

import ReactDom from "react-dom";

import './style.css';

class App extends Component {
    render () {
        // 如何访问变量 -- 利用字符串模板
        // const hello = 'hello';
        // <h1>{hello}</h1>
        return (
            // 只能有一个容器，其他内容都放在这个容器里面
            <div className="app">
                <h1>Find my fruit</h1>
            </div>
        );
    }
}

ReactDom.render(
    <App/>,
    document.getElementById('root')
);

```

### 3.2 `React`组件基本结构

```js
import React, {Component} from 'react';

import ReactDom from "react-dom";

class App extends Component {
    render () {
        //...
    }
}

ReactDom.render(
  //...
);
```

> `import`其实是`es6`的语法，具体可以参考【[ES6 - Module 的语法]({{ '/2017/09/19/ES6-Module' | prepend: site.baseurl }})】。

### 3.3 访问js里的变量以及className

> * 访问`js`里的变量：使用模板就`ok`了，其实就是一个`{}`。
>   * `{}`里可容纳变量、逻辑表达式
> * `className`：
>    * 在`.html`文件里，如果要在元素上添加类是用`class`，如：`<div class="app"></div>`。但是在`jsx`语法中，需要使用`className`替代`class`，如上述代码所示。
>* 补充：模板只能有一个父容器。
    
```jsx
class App extends Component {
    const name = "jm";
    const.flag = true;
    render () {
        return {
            <div className="app">
                <p>{name}</p>  // 这里就使用了模板
                <p>{flag ? '1': '2'}</p> // 逻辑表达式
            </div> 
            <div className="app2"></div> // 由于规定只能有一个父容器，所以app2是不能存在的
        };
    }
}
```

### 3.4 render()函数

> * `render()`函数里容纳的就是`jsx`语法 
> * 所有的`jsx`组件和`react`组件必定会有一个`render`函数
> * `render`函数是入口函数，即：当我们读别人的代码的时候，第一时间找的就是`render`函数，里面基本就是整个组件的逻辑了!!!

### 3.5 简述 jsx、js、dom的转换

> * `jsx`代码是通过`Babel`编译成原生的`js`代码的。
> * `js`代码通过`ReactDom.render`，生成`dom`，插入到页面里。
> * 具体可看下图

![relationship-map]({{ '/styles/images/react/react-02.png' | prepend: site.baseurl }})

