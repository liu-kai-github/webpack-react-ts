# TsLint规则修改

## 1. arrow-parens (赵海鹏 改)

* 状态 **待讨论**

* 规则修改

```
"arrow-parens": true ==> "arrow-parens": [true, "ban-single-arg-parens"]
```

* 原因

```
es6 官方指出，箭头函数，如果只有一个参数，推荐不使用括号
```
* 参考链接

1. [ESMAScript 6 入门 / 函数的扩展](http://es6.ruanyifeng.com/#docs/function#%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0)
	
## 2. member-ordering (谭春燕 改)

* 状态 **待讨论**

* 规则修改

```
"member-ordering": true ==> "member-ordering": false
```

* 原因

```
以首字母排序,需要额外再背一遍26个字母顺序
```
	
## 3. no-empty-interface (谭春燕 改)

* 状态 **待讨论**

* 规则修改

```
"no-empty-interface": true ==> "no-empty-interface": false
```

* 原因

```
应允许有空的接口定义 , interface IA{} 为了代码的扩展
```

## 4. ordered-imports (谭春燕 && 吴健 改)

* 状态 **待讨论**

* 规则修改

```
"no-empty-interface": true ==> "no-empty-interface": false
```

* 原因

```
谭春燕:
	排序神马的容易打断思路
吴健:
	影响编码效率，引入时，写字面对象时还得中断个人思维
```
 
## 5. prefer-for-of (谭春燕 改)

* 状态 **待讨论**

* 规则修改

```
"prefer-for-of": true ==> "prefer-for-of": false
```

* 原因

```
循环没必要限定死,有些循环是需要取index的,forof 满足不了
注意下效率上for > forEach > map >for in的排序就行
```

## 6. triple-equals (谭春燕 改)

* 状态 **待讨论**

* 规则修改

```
"triple-equals": true ==> "triple-equals": false
```

* 原因

```
用 === and !== in place of == and != , 
javascript用弱类型比较 let a=1 ; let b="1",是可以相等的,但用===是不相等的
实际运用过程中 antd的select组件用自动将number转成string,若强制用===满足不了
```

## 7. trailing-comma (吴健 改)

* 状态 **待讨论**

* 规则修改

```
"trailing-comma": [
  true,
  {
    "multiline": {
      "objects": "never",
      "arrays": "never",
      "functions": "never",
      "typeLiterals": "ignore"
    },
    "esSpecCompliant": false
  }
] ==> "trailing-comma": false
```

* 原因

```
1，js里在不同的宿主对象里有bug
2，最后的逗号，只是为了在规避新增时，才规避了错误，但是在编译的时候就会出错
3，按正常人的习惯也是不要逗号的
```

## 8. one-variable-per-declaration (吴健 改)

* 状态 **待讨论**

* 规则修改

```
 "one-variable-per-declaration": {
        options: ["ignore-for-loop"],
  } ==> "one-variable-per-declaration": false
```

* 原因

```
流行库比如：jquery, jquery-ui等，都沿用了一行可以声明多个变量
```

## 9. object-literal-sort-keys (吴健 改)

* 状态 **待讨论**

* 规则修改

```
"object-literal-sort-keys": true ==> "object-literal-sort-keys": false
```

* 原因

```
影响编码效率，引入时，写字面对象时还得中断个人思维
```

## 10. no-reference (谭春燕 改)

* 状态 **待讨论**

* 规则修改

```
"no-reference": true ==> "no-reference": false
```

* 原因

```
如果禁用 no-reference ,三斜线指令将无法使用
```



	
