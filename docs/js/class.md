# 创建对象的方法总结

[[toc]]

## 1.工厂模式

```js{2,7,10}
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

```js{2,8}
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

```js{1,7}
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

```js{3,4}
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

> 函数的原型对象，默认有一个 `constructor` 属性，该属性指向该函数本身，但是我们通过 `Person.prototype` 重新指向一个新的对象，切断了原型的动态链，`constructor` 属性会丢失，所以必须显示的添加这个属性。

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

> 组合使用构造函数模式和原型模式，构造函数模式用于定义实例属性，而原型模式用于定义方法和共享的属性

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

> `if` 判断保证只有在初次调用构造函数时才执行

优点：是一种比较完美的创建自定义类型的方法。 

## 6.两种特殊方式

### 6.1 寄生构造函数

### 6.2 稳妥构造函数

## 7.`class` 

***
参考：  
《JavaScript高级程序设计》(第3版)


    


