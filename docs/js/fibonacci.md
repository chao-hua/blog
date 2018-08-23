# 斐波那契数列计算

[[toc]]

斐波那契数列是：1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...。  
这个数列从第3项开始，每一项都等于前两项之和。  
在数学上，斐波那契数列以递推的方法定义：`F(1) = 1, F(2) = 1, F(n) = F(n-1) + F(n-2) (n >= 2)`。

## 1.普通递归

```js
function fibonacci(n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

console.time("计算耗时");
fibonacci(40); // 102334155
console.timeEnd("计算耗时");
// 计算耗时: 1530.710205078125ms
fibonacci(100) // 堆栈溢出
```

这是最基础的递归方法，我们分析一下 `fibonacci(5)` 具体的过程：  

- fibonacci(5) = fibonacci(4) + fibonacci(3);  
    + fibonacci(4) = fibonacci(3) + fibonacci(2);
        * fibonacci(3) = fibonacci(2) + fibonacci(1);
    + fibonacci(3) = fibonacci(2) + fibonacci(1);

可以看见有大量的重复计算，如果能将之前的计算结果缓存起来，应该会提高效率。

## 2.正向叠加

从 n = 1 开始计算，将计算过的值全部保存在数组中，这样在计算下一个值得时候，可以直接使用数组中存已存在的值进行计算。返回数组最后一个值就是我们要的结果。

```js
function fibonacci(n) {
    let fibArray = [];
    for (let i = 0; i < n; i++) {
        if (i < 2) {
            fibArray[i] = 1;
        } else {
            fibArray[i] = fibArray[i - 2] + fibArray[i - 1];
        }
    }
    return fibArray[n - 1];
}

console.time("计算耗时");
fibonacci(40); // 102334155
console.timeEnd("计算耗时");
// 计算耗时: 0.272216796875ms
console.time("计算耗时");
fibonacci(40); // 102334155
console.timeEnd("计算耗时");
// 计算耗时: 0.031005859375ms
fibonacci(100);// 354224848179262000000
```

## 3.动态规划

这种方式比正向叠加将所有过程值存入数组更简单，每次只保存前两次的计算结果，因为只需要斐波那契数列计算只基于前两个值，所以没必要保存所有的过程值。

```js
function fibonacci(n) {
    let n1 = 1,
        n2 = 1,
        sum = 1;
    for (let i = 3; i <= n; i++) {
        // n1,n2 向前移位
        sum = n1 + n2;
        n1 = n2;
        n2 = sum;
    }
    return sum;
}

console.time("计算耗时");
fibonacci(40); // 102334155
console.timeEnd("计算耗时");
// 计算耗时: 0.18603515625ms
console.time("计算耗时");
fibonacci(40); // 102334155
console.timeEnd("计算耗时");
// 计算耗时: 0.020263671875ms
fibonacci(100);// 354224848179262000000
```

## 4.Memoization

前面这两种方法，很好的提升了本次计算的效率问题。但是如果进行多次斐波那契数计算，就会发现，它们都是从 n = 1 开始计算的，并没有缓存起来以供下次计算。我们利用高阶函数和闭包可以缓存所以计算过的值，共多次斐波那契数计算使用。

```js
let fibonacci = (function() {
    // memo 是对象，比数组效率更高，
    // 因为 memo 是数组时，首次计算，会生成一个全部是 undefined 的 长度为 n 的数组，
    // 而 memo 是对象时，首次就是一个空对象。 
    let memo = {};
    return function(n) {
        // 如果尚未建立缓存
        if (!memo[n]) {
            memo[n] = n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
        }
        return memo[n];
    }
}());

console.time("计算耗时");
fibonacci(40); // 102334155
console.timeEnd("计算耗时");
// 计算耗时: 0.45703125ms
console.time("计算耗时");
fibonacci(40); // 102334155
console.timeEnd("计算耗时");
// 计算耗时: 0.01611328125ms
fibonacci(100);// 354224848179262000000
```

## 5.Memoization 封装

可以对 Memoization 这种方式进行封装，试用于更多的递归函数。

```js
let memoize = function(func) {
    let cache = {};
    return function(key) {
        if (!cache[key]) cache[key] = func.apply(this, arguments);
        return cache[key];
    }
}

let fibonacci = memoize(function(n) {
  return n < 2 ? n : fibonacci(n - 2) + fibonacci(n - 1);
});

console.time("计算耗时");
fibonacci(40); // 102334155
console.timeEnd("计算耗时");
// 计算耗时: 0.633056640625ms
console.time("计算耗时");
fibonacci(40); // 102334155
console.timeEnd("计算耗时");
// 计算耗时: 0.01806640625ms
fibonacci(100);// 354224848179262000000
```

## 6.underscore 中的 _.memoize

underscore 中也有缓存函数功能的实现：

```js
// 将函数（通常是递归函数）进行处理，返回带缓存的记忆函数，存储中间运算结果，提高效率。
_.memoize = function(func, hasher) {
  // hasher：自定义如何获得缓存的位置。
  var memoize = function(key) {
    // 获取缓存。
    var cache = memoize.cache;
    // 获得缓存地址，可以根据 hasher 来配置缓存的 key ,若没有配置，默认就是 key。
    var address = '' + (hasher ? hasher.apply(this, arguments) : key);
    // 如果没有该 address 对应的缓存，则调用函数进行计算。
    if (!has(cache, address)) cache[address] = func.apply(this, arguments);
    // 否则直接返回缓存。
    return cache[address];
  };
  // 初始化调用 _.memoize 缓存对象，不是清除 memoize 中的缓存。
  memoize.cache = {};
  return memoize;
};

var fibonacci = _.memoize(function(n) {
    return n < 2 ? n: fibonacci(n-1) + fibonacci(n-2);
});

console.time("计算耗时");
fibonacci(40); // 102334155
console.timeEnd("计算耗时");
// 计算耗时: 0.2412109375ms
console.time("计算耗时");
fibonacci(40); // 102334155
console.timeEnd("计算耗时");
// 计算耗时: 0.008056640625ms
fibonacci(100);// 354224848179262000000
```

## 7.尾递归

ES6 中有一个尾递归优化，递归非常耗费内存，因为需要同时保存成千上百个调用帧，很容易发生栈溢出错误。但对于尾递归来说，由于只存在一个调用帧，所以永远不会发生栈溢出错误。

```js
function fibonacci(n, ac1 = 1, ac2 = 1) {
    if (n <= 1) { return ac2 };
    return fibonacci(n - 1, ac2, ac1 + ac2);
}

console.time("计算耗时");
fibonacci(40); // 102334155
console.timeEnd("计算耗时");
// 计算耗时: 0.10888671875ms
console.time("计算耗时");
fibonacci(40); // 102334155
console.timeEnd("计算耗时");
// 计算耗时: 0.0283203125ms
fibonacci(100);// 354224848179262000000
```

## 8.通项公式

斐波那契数列有[通项公式](https://baike.baidu.com/item/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0%E5%88%97#2_2)，但通项公式中有开方运算，在js中会存在误差，而fib函数中的Math.round正式解决这一问题的。

```js
function fibonacci(n) {
    var sum = 0;
    for (let i = 1; i <= n; i += 1) {
        sum += fib(i);
    }
    return sum;
    function fib(n) {
        const SQRT_FIVE = Math.sqrt(5);
        return Math.round(1 / SQRT_FIVE * (Math.pow(0.5 + SQRT_FIVE / 2, n) - Math.pow(0.5 - SQRT_FIVE / 2, n)));
    }
}
```


