# StyleLint 规则修改

## 1. arrow-parens (赵海鹏 改)

* 状态 **待讨论**

* 规则修改

```
"selector-pseudo-class-no-unknown": true ==>
"selector-pseudo-class-no-unknown": [
            true,
            {
                "ignorePseudoClasses": ["/local/"]
            }
        ]
```

* 原因

```
es6 官方指出，箭头函数，如果只有一个参数，推荐不使用括号
```
* 参考链接

1. [ESMAScript 6 入门 / 函数的扩展](http://es6.ruanyifeng.com/#docs/function#%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0)


	
