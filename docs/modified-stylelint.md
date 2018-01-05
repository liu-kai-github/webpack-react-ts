# StyleLint 规则修改

## 1. selector-pseudo-class-no-unknown

* 状态 **待讨论**

* 规则修改

```
"selector-pseudo-class-no-unknown": true ==> 
"selector-pseudo-class-no-unknown": [
    true,
    {
        "ignorePseudoClasses": ["/^local/"]
    }
]
```

* 原因

```
由于要在webpack打包时，使用局部样式(样式模块化)，所以需要以 ":local" 伪类开头
```
* 参考链接

1. [Webpack 中文网 / css-loader / modules ](https://doc.webpack-china.org/loaders/css-loader/#modules)


	
