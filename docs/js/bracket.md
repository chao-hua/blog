# 关于函数后括号省略的探究

[[toc]]

目前遇到的几种函数后面省略括号的情况：

## 构造函数

```js
function Person() {
    this.name = 'name';
}

var p1 = new Person();
var p2 = new Person;

p1.name;// "name"
p2.name;// "name"

new Person().name;// "name"
new Person.name;// 报错
```

分析：

- new 命令本身就可以执行构造函数，所以后面的构造函数带不带括号都可以是等价的，但是为了表示这里是函数调用，推荐使用括号。
- 在生成实例时没有区别，但是在属性连用的需要小心，因为运算符优先级的问题，new < . 所以会出现问题。

## setTimeout/setInterval

```js
function foo() {
    console.log('It is outer foo function.');
}

function test() {
    function foo() {
        console.log('It is inner foo function.');
    }
    setTimeout(foo, 1000);// 1s 后，输出 "It is inner foo function."
    setTimeout('foo()', 1000);// 1s 后，输出 "It is outer foo function."
    setTimeout(foo(), 1000);// 立即输出 "It is inner foo function."
}

test();
```

分析：

- foo：传递的是 foo 函数名，其实是标准写法：`setTimeout(function() {}, 1000);`。这种方式，会首先在局域变量中寻找 foo 函数。
- 'foo()'：传递的是用引号引起的一段代码，是 `setTimeout` 函数的另一种写法。这种方式，会在调用函数 `test()` 的作用域中执行代码。
- foo()：是一种错误的写法，相当于把 foo 函数执行的结果作为参数。因为函数执行了所以会立即输出，但对于 `setTimeout` 函数传入的是 foo 函数执行的结果，无任何操作。
