# 继承的多种方法总结

[[toc]]

## 1.原型链继承

```js
function Super() {
    this.property = 'super';
    this.arr = ['a', 'b']
}

Super.prototype.getSuperValue = function() {
    return this.property;
}

function Sub(property) {
    this.subProperty = property;
}

Sub.prototype = new Super();

// 自定义函数在继承之后，不能使用字面量添加方法（破坏继承关系）
Sub.prototype.getSubValue = function() {
    return this.subProperty;
}

var sub1 = new Sub('sub1');
sub1.getSuperValue(); // "super"
sub1.arr.push('c');
sub1.arr; // ["a", "b", "c"]

var sub2 = new Sub('sub2');
sub2.arr; // ["a", "b", "c"]
```

缺点：

- 引用类型被所有实例共享（原型模式的共有问题）。
- 创建子类实例时，不能向父类的构造函数传参（可以在继承时传参，但会影响所有子类实例）。

## 2.借用构造函数/经典继承

```js
function Super(property) {
    this.property = property;
    this.arr = ['a', 'b'];
    this.getSuperValue = function() {
        return this.property;
    }
}

Super.prototype.getSuperValue1 = function() {
    return this.property;
}

function Sub(subProperty, superProperty) {
    Super.call(this, superProperty);
    this.subProperty = subProperty;
    this.getSubValue = function() {
        return this.subProperty;
    }
}

var sub1 = new Sub('sub1', 'super1');
sub1.property; // "super1"
sub1.arr.push('c');
sub1.arr; // ["a", "b", "c"]

var sub2 = new Sub('sub2', 'super2');
sub2.property; // "super2"
sub2.arr; // ["a", "b"]

sub1.getSuperValue(); // 'super1'
sub1.getSuperValue1(); // error
```

优点：

- 解决了引用类型被所有实例共享的问题。
- 创建子类实例时，可以向父类的构造函数传参。

缺点：

- 仅仅借用构造函数，那么方法都在构造函数中定义，方法属性会在每个实例中重新创建一个，浪费资源（构造函数模式的共有问题）。
- 在父类原型中定义的方法，对子类是不可见的。

## 3.组合继承/伪经典继承（最常见方式）

```js
function Super(property) {
    this.property = property;
    this.arr = ['a', 'b'];
}

Super.prototype.getSuperValue = function() {
    return this.property;
}

function Sub(subProperty, superProperty) {
    // 继承属性
    Super.call(this, superProperty); // 第 2 次调用 Super()
    this.subProperty = subProperty;
}

// 继承方法
Sub.prototype = new Super(); // 第 1 次调用 Super()
Sub.prototype.constructor = Sub;
Sub.prototype.getSubValue = function() {
    return this.subProperty;
}

var sub1 = new Sub('sub1', 'super1');
sub1.property; // "super1"
sub1.getSuperValue(); // 'super1'
sub1.arr.push('c');
sub1.arr; // ["a", "b", "c"]
sub1.getSubValue(); // 'sub1'

var sub2 = new Sub('sub2', 'super2');
sub2.getSuperValue(); // "super2"
sub2.arr; // ["a", "b"]

sub1 instanceof Sub // true
sub1 instanceof Super // true

Sub.prototype.isPrototypeOf(sub1) // true
Super.prototype.isPrototypeOf(sub1) // true
```

组合继承避免了原型链和构造函数的缺点，融合了它们的优点，是 JavaScript 中最常用的继承方式。可以用 `instanceof` 或 `isPrototypeOf` 来识别继承关系。

## 4.原型式继承

```js
function createObj(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

var person = {
    name: 'hc',
    firends: ['a', 'b']
}

var p1 = createObj(person);
p1.name; // 'hc'
p1.name = 'p1';
p1.firends.push('c');

var p2 = createObj(person);
p2.name = 'p2';
p2.firends; // ["a", "b", "c"]

// ES5 create 写法
var p3 = Object.create(person);
p3.name = 'p3';

var p4 = Object.create(person, {
    name: {
        value: 'p4'
    }
});
p4.name;
```

在没有必要创建构造函数（没有父类构造函数、无法创建子类构造函数），只想让一个对象与另一个对象保持相似的情况下，原型式继承很好用。ES5 中 `Object.create` 规范了原型式继承。

缺点：引用类型属性共享问题。

## 5.寄生模式

```js
function createObj(o) {
    var clone = Object.create(o);
    clone.sayHi = function() {
        console.log('hi');
    }
    return clone;
}
```

创建一个仅用于封装继承过程的函数，该函数在内部以某种形式来增强对象，最后返回对象。在主要考虑对象而不是自定义构造函数的情况下，是一种有用的模式。

缺点：跟借用构造函数模式一样，每次创建对象都会创建一遍方法，浪费资源。

## 6.寄生组合式继承（最理想方式）

```js
function inheritPrototype(subType, superType) {
    var prototype = Object.create(superType.prototype); // 创建对象
    prototype.constructor = subType; // 增强对象
    subType.prototype = prototype; // 指定对象
}

function Super(property) {
    this.property = property;
    this.arr = ['a', 'b'];
}

Super.prototype.getSuperValue = function() {
    return this.property;
}

function Sub(subProperty, superProperty) {
    // 继承属性
    Super.call(this, superProperty);
    this.subProperty = subProperty;
}

// 继承方法
inheritPrototype(Sub, Super);

Sub.prototype.getSubValue = function() {
    return this.subProperty;
}
```

组合继承中两次调用父构造函数，造成了子类原型和子类的实例都有相同的属性，实例上的属性会屏蔽原型上的属性（也就解决了引用类型被所有实例共享的问题），形成一种浪费。寄生组合继承主要就是解决这个问题的。

所谓的寄生组合继承，就是：

- 通过借用构造函数来继承属性。
- 通过原型链的混合形式来继承方法（对比组合继承中改造的点，去掉第 1 次调用父构造函数）。

原型链的混合形式来继承方法的思路是：不必为了指定子类型的原型而调用父类型的构造函数，我们需要的只是父类型原型的一个副本而已。因此，我们拿到一个父类型原型的一个副本，将类型的原型指向该副本就可以了。`inheritPrototype` 函数就是具体实现。

《JavaScript高级程序设计》作者认为这是一种最理想的继承范式。

## 7.extends（最推荐方式）

```js
class Super {
    constructor(property) {
        this.property = property;
        this.friends = ['a', 'b'];
    }
    getSuperValue() {
        return this.property;
    }
}

class Sub extends Super {
    constructor(subProperty, superProperty) {
        super(superProperty); // 调用父类的constructor()
        this.subProperty = subProperty;
    }

    getSubValue() {
        return this.subProperty; // 调用父类的toString()
    }

    getAllValue() {
        return 'SubValue:' + this.subProperty + ' ' + 'SuperValue:' + super.getSuperValue(); // 调用父类的toString()
    }
}

let sub1 = new Sub('sub1','super1');
sub1.getAllValue(); // "SubValue:sub1 SuperValue:super1"
```

`class` 可以通过 `extends` 关键字实现继承。

ES5 的继承，实质是先创造子类的实例对象 `this`，然后再将父类的方法添加到 `this` 上面（`Parent.apply(this)`）。ES6 的继承机制完全不同，实质是先有父类实例对象的属性和方法，加到 `this` 上面（所以必须先调用 `super` 方法），然后再用子类的构造函数修改 `this`。也就是说：在子类的构造函数中，只有调用 `super` 之后，才可以使用 `this` 关键字，否则会报错。

优点：更清晰，更方便。

***
参考：  
《JavaScript高级程序设计》(第3版)  
[Class 的继承](https://github.com/ruanyf/es6tutorial/blob/gh-pages/docs/class-extends.md)

