
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

```js
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

## 2.类

### 2.1 继承

- 父类有构造函数，子类必须在构造函数中调用 `super()`
- 子类在构造函数里访问 `this` 的属性之前，一定要调用 `super()`
- 子类实例可以赋值给一个父类的引用，类型检查通过。`let sup:Super; sup = new Sub()`

### 2.2 修饰符

- `public`:默认值，实例可以自由访问的成员
- `private`:不能在声明它的类的外部访问
- `protected`:与 `private` 的行为很相似，不同点是，`protected` 成员在派生类中仍然可以访问。甚至可以用于构造函数，这意味着我们不能单独的实例化这个类，单可以在继承中调用 `super()` 来间接实例化。
- `readonly`:只读属性，必须在声明时或构造函数里被初始化。

### 2.3 参数属性

我们可以直接在构造函数中，使用修饰符 + 参数的形式，让我们方便的再一个地方定义并初始化一个成员。注意，这时 `public` 不能省略。

```
class Foo {
  prop1: string; // 省略 public
  private   prop2: string;
  protected prop3: string;
  readonly  prop4: string;
  readonly  prop5: string = "prop5";

  constructor(p1: string, p2: string, p3: string, p4: string) {
    this.prop1 = p1;
    this.prop2 = p2;
    this.prop3 = p3;
    this.prop4 = p4;
  }
}

class FooSimple {
  readonly prop5: string = "prop5";

  constructor(
    public    p1: string, // public 不可以省略
    private   p2: string,
    protected p3: string,
    readonly  p4: string
  ) {}
}
```

### 2.4 取值器

- 通过 `get`/`set` 来截取对对象成员的访问、设置。 它能帮助你有效的控制对对象成员的访问、设置权限。
- 只带有 `get` 不带有 `set` 的存取器自动被推断为 `readonly`。

### 2.5 静态属性

- 实例成员：仅当类被实例化的时候才会被初始化的成员。在类中访问时，需要使用 `this.prop` 来访问。
- 静态成员：存在于类本身上面而不是类的实例上，用 `static` 关键字来定义一个静态成员。在使用静态成员时，前面加上类名 `Foo.staticPorp`。
- 与实例成员一样，静态成员可以使用修饰符。

### 2.6 抽象类

- `abstract `关键字是用于定义抽象类和在抽象类内部定义抽象方法。
- 抽象类做为其它派生类的基类使用。 允许创建一个对抽象类型的引用，不允许实例化抽象类。
- 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。
- 不同于接口，抽象类可以包含成员的实现细节。

```
abstract class Department {
    constructor(public name: string) {
    }

    printName(): void {
        console.log('Department name: ' + this.name);
    }
    abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department {

    constructor() {
        super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
    }

    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }
    generateReports(): void {
        console.log('Generating accounting reports...');
    }
}

let department: Department; // 允许创建一个对抽象类型的引用
department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
department.generateReports(); // 错误: 方法在声明的抽象类中不存在
```

### 2.7 类可以做接口使用 TODO

## 3.函数

- 参数默认值
- 可选参数
- 剩余参数

```
function test(prop1: string, prop2: string = "prop2", prop3?: string): string {
  return prop1 + " " + prop2 + (prop3 ? " " + prop3 : "");
}

let testArrow = (prop: string, ...args: string[]): string => {
  return prop + " " + args.join(" ");
};
```

## 4.泛型

### 4.1 泛型语法

```js
function test<T>(prop: T): T {
  return prop;
}

let testArrow = <T>(prop: T): T => {
  return prop;
};
```

### 4.2 泛型接口

```js
interface GenericIdentityFn {
  <T>(arg: T): T;
}

function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFn = identity;
```

### 4.3 泛型类

泛型类使用 `<>` 括起泛型类型，跟在类名后面.泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型类型。

```js
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>(); // 可以通过 <number> 指定类型
myGenericNumber.zeroValue = 0;
myGenericNumber.add = (x, y) => {
  return x + y;
};
```

### 4.4 泛型约束

- 使用泛型继承接口，来使用泛型中确定的元素

```js
interface LengthInter {
  length: number;
}

function test<T extends LengthInter>(prop: T): T {
  console.log(prop.length);
  return prop;
}

test('3');
```

- 在泛型里使用类类型，用于在创建工厂函数 TODO

```js
class BeeKeeper {
  hasMask: boolean;
}

class ZooKeeper {
  nametag: string;
}

class Animal {
  numLegs: number;
}

class Bee extends Animal {
  keeper: BeeKeeper;
}

class Lion extends Animal {
  keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}

createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;
```

## 5.枚举

### 5.1 数字枚举

- 数字枚举，在不指定初始其实位置时，默认从 0 开始，其余成员基于初始位置自增。
- 某一个指定默认值（任意位置都可以指定），其后成员在此基础上自增，其前不变。
- 如果指定的值重复，两者共存，但是以索引来确认值时，后者覆盖前者。

```js
enum Color {
  Green,
  Red = 0,
  Yellow,
  White
}
console.log(Color);

/* { '0': 'Red',
     '1': 'Yellow',
     '2': 'White',
     Green: 0,
     Red: 0,
     Yellow: 1,
     White: 2 }
*/
```

### 5.2 字符串枚举

- 每一个成员必须必须进行初始化
- 枚举可以混合字符串和数字成员，称为异构枚举(Heterogeneous enums)，这样容易引起问题(没有完全初始化时)，不建议使用

```js
enum Color {
  Green = "green",
  Red = "red",
  Yellow = "yellow",
  White = "white"
}
console.log(Color);

// { Green: 'green', Red: 'red', Yellow: 'yellow', White: 'white' }
```

### 5.3 枚举的修饰符

- `const` 常量枚举：常量枚举不允许包含计算成员
- `declare` 外部枚举：用来描述已经存在的枚举类型的形状，外部枚举和非外部枚举之间有一个重要的区别，在正常的枚举里，没有初始化方法的成员被当成常数成员。 对于非常数的外部枚举而言，没有初始化方法时被当做需要经过计算的。 TODO

## 6.类型兼容性

- TypeScript 里的类型兼容性是基于结构子类型的。也就是说只要元素类型一致，即使不是继承、实现关系，也可以认定为类型一致。
- TypeScript 的类型系统允许某些在编译阶段无法确认其安全性的操作。当一个类型系统具此属性时，被当做是“不可靠”的。TypeScript 允许这种不可靠行为的发生是经过仔细考虑的。 TODO

```js
interface Named {
    name: string;
}

class Person {
    name: string;
}

let p: Named;
p = new Person(); // OK, because of structural typing
```

具体规则：

- TypeScript 结构化类型系统的基本规则是，如果 x 要兼容 y，那么  y至少具有与 x 相同的属性。
- y 有额外的属性，不会引发错误，比较过程是递归进行的，检查每个成员及子成员。
- 比较两个函数，首先看它们的参数列表，x 的每个参数必须能在 y 里找到对应类型的参数（参数名称不需要一致，只保证类型一致），y 可以有额外参数。
- 类的比较，比较两个类类型的对象时，只有实例的成员会被比较。 静态成员和构造函数不在比较的范围内。
- 类的私有成员和受保护成员会影响兼容性。 当检查类实例的兼容时，如果目标类型包含一个私有成员，那么源类型必须包含来自同一个类的这个私有成员。即使类型一致，来源不是同一类，也不兼容。

## 7.高级类型

### 7.1 交叉类型（Intersection Types）=》 &

```
function extend<T, U>(first: T, second: U): T & U {
  let result = <T & U>{};
  for (let id in first) {
    (<any>result)[id] = (<any>first)[id];
  }
  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      (<any>result)[id] = (<any>second)[id];
    }
  }
  return result;
}

class Person {
  constructor(public name: string) {}
}
interface Loggable {
  log(): void;
}
class ConsoleLogger implements Loggable {
  log() {
    console.log("do log");
  }
}
let jim = extend(new Person("Jim"), new ConsoleLogger());
console.log(jim); // { name: 'Jim', log: [Function] }
jim.log(); // do log
```

### 7.2 联合类型（Union Types）=》 |

联合类型表示一个值可以是几种类型之一, 我们用竖线 `|` 分隔每个类型

```
function test(a: string, b: string | number): string | number {
  return b;
}
```