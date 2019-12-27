# 创建对象的多种方法总结

[[toc]]

## 1.工厂模式

```js{7,10}
function createPerson(name) {
    var o = new Object();
    o.name = name;
    o.getName = function() {
        console.log(this.name);
    };
    return o;
}

var p1 = createPerson('hc');
```

缺点：对象无法识别。

## 2.构造函数

```js{8}
function Person(name) {
    this.name = name;
    this.getName = function() {
        console.log(this.name);
    }
}

var p1 = new Person('hc');
p1.constructor === Person // true
p1 instanceof Person // true
```

优点：将实例标识为一种特定类型。  
缺点：方法属性会在每个实例中重新创建一个，浪费资源。

### 2.1 构造函数的优化

```js{7}
function getName() {
    console.log(this.name);
}

function Person(name) {
    this.name = name;
    this.getName = getName;
}

var p1 = new Person('hc');
```

优点：解决了方法属性在每个实例中重新创建的问题。   
缺点：方法属性在全局中，无封装性可言。

## 3.原型模式

```js{3}
function Person() {}

Person.prototype = {
    constructor: Person,
    name: 'hc',
    getName: function() {
        console.log(this.name);
    }
}

var p1 = new Person('hc');
```

函数的原型对象，默认有一个 `constructor` 属性，该属性指向该函数本身，但是我们通过 `Person.prototype` 重新指向一个新的对象，切断了原型的动态链，`constructor` 属性会丢失，所以必须显示的添加这个属性。

优点：让所有的对象实例共享它所有的属性（函数、基本值、引用类型值）和方法。  
缺点：缺少传参方式；引用类型的属性被所有实例共享，是有问题的；重设 `constructor` 属性会导致它的 `[[Enumerable]]` 属性为 `true`，默认情况下原生的 `constructor` 属性是不可以枚举的。

### 3.1 原型模式的优化

```js{11}
function Person() {}

Person.prototype = {
    name: 'hc',
    friends: ['a', 'b'],
    getName: function() {
        console.log(this.name);
    }
}

Object.defineProperty(Person.prototype, 'constructor', {
    enumerable: false,
    value: Person
});

var p1 = new Person('hc');
var p2 = new Person('xx');
p1.friends === p2.friends // true
```

优点：解决了 `constructor` 属性是可枚举的问题。  
缺点：其他的问题依然存在。

## 4.组合模式（最常见方式）

```js{1,6}
function Person(name) {
    this.name = name;
    this.friends = ['a', 'b'];
}

Person.prototype = {
    constructor: Person,
    getName: function() {
        console.log(this.name);
    }
}

var p1 = new Person('hc');
var p2 = new Person('xx');

p1.friends === p2.friends // false
```

组合使用构造函数模式和原型模式，构造函数模式用于定义实例属性，而原型模式用于定义方法和共享的属性。

优点：是一种使用最广泛、认同度最高的一种创建自定义类型的方法。  
缺点：封装性看起来比较困惑，分散在构造函数与原型两部分。

## 5.动态原型

```js{5}
function Person(name) {
    this.name = name;
    this.friends = ['a', 'b'];

    if (typeof this.getName != 'function') {
        Person.prototype.getName = function() {
            console.log(this.name);
        }
    }
}

var p1 = new Person('hc');
```

`if` 判断保证只有在初次调用构造函数时才执行。

优点：是一种比较完美的创建自定义类型的方法。 

## 6.两种特殊方式

### 6.1 寄生(parasitic)构造函数

```js{8,11}
function Person(name) {
    var o = new Object();
    o.name = name;
    o.friends = ['a', 'b'];
    o.getName = function() {
        console.log(this.name);
    }
    return o;
}

var p1 = new Person('hc');
p1 instanceof Person // false
```

这种模式除了使用 `new` 操作符来新建对象实例外，其他和工厂模式一模一样。构造函数在没有返回的情况下，默认返回新对象实例；在构造函数末尾添加 `return` 语句，可以重写调用构造函数时返回的值。因此这种模式返回的对象与构造函数或者构造函数的原型属性之间没有关系（无法通过 `instanceof` 来确定对象类型）。所以在可以使用其他方式的情况下，不推荐使用这种方式。  

这种模式可以在特殊情况下使用。例如想创建一个具有额外方法的特殊数组（修改原生、既有对象），但是又不想直接修改 `Array` 构造函数。在构造函数中使用 `var arr = new Array(); ...; return arr;`

### 6.2 稳妥(durable)构造函数

```js{5,10}
function Person(name) {
    var o = new Object();
    o.name = name;
    o.getName = function() {
        console.log(name);
    }
    return o;
}

var p1 = Person('hc');
p1.getName(); // "hc"
```

稳妥对象指的是：没有公共属性，而且其方法也不引用 `this` 的对象。稳妥对象最适合在一些安全的环境中，或者防止数据被其他应用程序改动时使用。  

与寄生模式类型，有两点不同：构造函数中不用 `this`；不用 `new` 调用构造函数。稳妥构造函数模式也跟工厂模式一样，无法识别对象所属类型。

## 7.class（最推荐方式）

```js{1,14}
class Person {
    constructor(name) {
        this.name = name;
        this.friends = ['a', 'b'];
    }
    getName() {
        console.log(this.name);
    }
}

typeof Person // "function"
Person === Person.prototype.constructor // true

var p1 = new Person('hc');
```

`class` 是 ES6 中对象模板，是一个语法糖（类的数据类型就是函数）。与 ES5 中创建对象区别有以下几点：  

- 类内部定义的方法，都是不枚举的。
- 类必须用 `new`，否则报错。
- 类的内部，默认就是严格模式。

优点：让对象原型更清晰，更像面向对象编程语法。

注：ES6 并没有真正实现类的概念。我们看下 Babel 对上面程序的编译结果，当中我们能看到如下语句：

```js
Object.defineProperty(target, descriptor.key, descriptor);
Object.create();
```

***
参考：  
《JavaScript高级程序设计》(第3版)  
[Class 的基本语法](https://github.com/ruanyf/es6tutorial/blob/gh-pages/docs/class.md)


    


