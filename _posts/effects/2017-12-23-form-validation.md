---
layout: post
title: "表单校验插件"
date: 2017-12-23 22:00:00 +0800 
categories: 插件
tag: effects
---
* content
{:toc}

> * 最近在做的课程作业都有大量的表单验证，不可能没遇到一个表单验证就重写一次验证，因此，就写下了一个表单验证的插件。
> * 这个插件使用了策略模式。

<!-- more -->

## 一、表单校验插件

### 1.1 表单校验策略对象

```js
// 表单校验的策略对象
    let strategies = {
      /**
       * 判断是否为空
       * @param value
       * @param errorMsg
       * @returns {*}
       */
      isEmpty (value, errorMsg) {
        let len = value.trim().length
        if (len === 0) {
            return errorMsg
        }
      },
      /**
       * 邮箱校验
       * @param value
       * @param errorMsg
       */
      isEmail (value, errorMsg) {
        const reg = /^[a-zA-Z\d][\w\.-]{3,17}@[a-zA-Z\d][\w\.-]+\.[a-z]{2,4}$/g
        if (!reg.test(value)) {
          return errorMsg
        }
      },
      /**
       * 手机号码校验
       * @param value
       * @param errorMsg
       */
      isPhone (value, errorMsg) {
        const reg = /^1[3|5|7|8]\d{9}$/g
        if (!reg.test(value)) {
          return errorMsg
        }
      },
      /**
       * 最大长度校验
       * @param value
       * @param length
       * @param errorMsg
       */
      isMaxLength (value, length, errorMsg) {
        let len = value.length
        if (len > length) {
          return errorMsg
        }
      },
      /**
       * 最小长度校验
       * @param value
       * @param length
       * @param errorMsg
       */
      isMinLength (value, length, errorMsg) {
        let len = value.length
        if (len < length) {
          return errorMsg
        }
      },
      /**
       * 数字校验
       * @param value
       * @param errorMsg
       */
      isNumber (value, errorMsg) {
        const reg = /^\d+$/g
        if (!reg.test(value)) {
          return errorMsg
        }
      }
    }
```

### 1.2 表单校验对外接口对象

```js
/**
     * 表单校验类
     */
    class Validator {
      constructor () {
        this.cache = []
      }

      /**
       * 添加校验规则
       * @param formEle 表单元素
       * @param {Array} rules 校验规则数组
       */
      add (formEle, rules) {
        for (let rule of rules) {
          // strategyArray ==》 ["isEmpty"] or ["isMaxLength", 10]
          let strategyArray = rule.strategy.split(':')
          let errorMsg = rule.errorMsg

          this.cache.push(() => {
            // 获取验证的类型，例：strategy = "isMaxLength"，此时，strategyArray ===》[10]
            let strategy = strategyArray.shift()
            // strategyArray ===》[value, 10]
            strategyArray.unshift(formEle.value)
            // strategyArray ===》[value, 10, errorMsg]
            strategyArray.push(errorMsg)

            // 返回错误信息 || undefined
            return strategies[strategy].apply(formEle, strategyArray)
          })
        }
      }

      /**
       * 启动校验
       * @returns {*}
       */
      start () {
        // this.cache里存储的是一个个校验规则
        for (let validatorFunc of this.cache) {
          const errorMsg = validatorFunc()
          if (errorMsg) {
            return errorMsg
          }
        }
      }
    }
```

### 1.3 测试表单校验

> * `html` 结构

```html
<form id="form">
    <label>姓名：<input type="text" name="userName"></label>
    <label>学号：<input type="text" name="number"></label>
    <label>邮箱：<input type="text" name="email"></label>
    <label>手机号码：<input type="text" name="phone"></label>
    <button type="button" id="js-validate">校验</button>
</form>
```

> * `js` 代码

```js
/**
     * 测试表单校验的函数
     * @param form
     * @returns {*}
     */
    function validatorFunc (form) {
      const validator = new Validator()

      validator.add( form.userName, [{
        strategy: 'isEmpty',
        errorMsg: '用户名不能为空'
      }, {
        strategy: 'isMinLength:6',
        errorMsg: '用户名长度不能小于 6 位'
      }]);

      validator.add( form.number, [{
        strategy: 'isEmpty',
        errorMsg: '学号不能为空'
      }, {
        strategy: 'isMaxLength: 10',
        errorMsg: ' 学号长度为10位'
      }, {
        strategy: 'isMinLength:10',
        errorMsg: '学号长度为10位'
      }]);

      validator.add( form.email, [{
        strategy: 'isEmpty',
        errorMsg: '邮箱不能为空'
      }, {
        strategy: 'isEmail',
        errorMsg: '邮箱格式不正确'
      }]);

      validator.add( form.phone, [{
        strategy: 'isEmpty',
        errorMsg: '手机号码不能为空'
      },{
        strategy: 'isPhone',
        errorMsg: '手机号码格式不正确'
      }]);

      // 开启校验
      let errMsg = validator.start()
      if (errMsg) {
        return errMsg
      }
    }

    const validateBtn = document.getElementById('js-validate')
    
    validateBtn. onclick = function () {
      const form = document.getElementById('form')
      let errMsg = validatorFunc(form)
      if (errMsg) {
        alert(errMsg)
      } else {
        alert('校验成功')
      }
    }
```

### 1.4 demo

> * 点击打开[demo](/effects/demo/plugins/formValidation/index.html)