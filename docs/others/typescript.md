
## 1.interface

### 1.1 对象类型：描述普通对象

```js
interface Foo {
  x: number;
  readonly y: number;
  z?: string;
  [propName: string]: any;
}
let foo: Foo = { x: 1, y: 2, text: "text" };
```

- `?` 可选属性
- `readony` 与 `const`
    + 做为变量使用的话用 `const`，若做为属性则使用 `readonly`
    + 只能在对象刚刚创建的时候修改其值
- 添加额外属性：`[propName: string]: any;`

### 1.2 函数类型：描述函数

```js
interface FooFun {
  (source: string, substr: string): boolean;
}

let fooFunction: FooFun = (src, sub) => {
  return src.indexOf(sub) > -1;
};
```

### 1.3 类类型

在接口中描述，在类中实现

```js
interface FooInterface {
  props: string;
  doSomethings(): void;
}

class Foo implements FooInterface {
  props: string;
  constructor(prop: string) {
    this.props = prop;
  }
  doSomethings() {
    console.log("do somethings");
  }
}

let foo = new Foo("foo");
foo.props;
foo.doSomethings();
```

对 constructor(静态部分) 进行类型检查：TODO

```
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick():void;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
```

### 1.4 继承接口

一个接口可以继承多个接口，创建出多个接口的合成接口

```js
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
```

### 1.5 混合类型 TODO

一个对象可以同时做为函数和对象使用，并带有额外的属性,在使用JavaScript第三方库的时候，你可能需要像上面那样去完整地定义类型:

```
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
```

### 1.6 接口继承类 TODO

当接口继承了一个类类型时，它会继承类的成员但不包括其实现。就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。 接口同样会继承到类的private和protected成员。 这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现（implement）。

```
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}

// 错误：“Image”类型缺少“state”属性。
class Image implements SelectableControl {
    select() { }
}
```
