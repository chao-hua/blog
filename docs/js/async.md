# async 

## 1.几点认知

### 1.1 概念

- `async` 就是 Generator / Promise 函数的语法糖。
- `async` 函数始终返回的是一个 Promise 对象。
- `await` 等待的是一个表达式，这个表达式的计算结果是 Promise 对象或者其它值。如果它等到的是一个 Promise 对象，它会阻塞后面的代码（**代码串行化**），等着 Promise 对象 `resolve`，然后得到 `resolve` 的值，作为 `await` 表达式的运算结果。
- `await` 必须用在 `async` 函数中。`async` 函数调用不会造成阻塞，它内部所有的阻塞都被封装在一个 Promise 对象中异步执行。

### 1.2 优点

- 同步的编程风格。
- `async` 声明的方法，返回 Promise 对象，以为着安全的使用 `.then(...)` 或者 `await`。

## 2.错误处理

### 2.1 `try...catch`

标准写法，将 `await` 命令放在 `try...catch` 代码块中。

- 可以将多个 `await` 语句放在 `try...catch` 代码块中，统一处理。
- `try` 快中的所有异常都将捕获，不仅仅是异步的错误。

```javascript
async function asyncFunction() {
    try {
        const { status, data } = await fetchSomething();
    } catch (err) {
        // deal with error
    }
}
```

### 2.2 改造 Promise 使其同时返回错误和结果

由 Dima Grossman 提出的非 `try-catch`的方式 [How to write async await without try-catch blocks in Javascript](https://blog.grossman.io/how-to-write-async-await-without-try-catch-blocks-in-javascript/)，简单来说就是用一个方法，将 Promise 进行封装，结合解构，实现同时返回错误和结果，方便处理。

- 类似 Node 错误处理方式。

```javascript
// to.js
export default function to(promise) {
    return promise
        .then(data => {
            return [null, data];
        })
        .catch(err => [err]);
}

// main.js
import to from "./to.js";
async function asyncFunction() {
    const [err, data] = await to(fetchSomething());
    if (data) {
        // deal with data
    } else {
        // deal with error
    }
}
```

### 2.3 `.catch()`

在 Promise 后继续使用 `.catch()` 来处理错误。

- 是 `promise` 和 `async` 的混合体。
- 错误优先政策处理，不直观。

```javascript
async function asyncFunction() {
    const { status, data } = await fetchSomething().catch(err => {
        // deal with error
    })
}
```

## 3.串行与并行

由于 `await` 的特性，使得在不特殊处理时代码串行化。这一特性解决了普通异步回调函数依赖调用时的部分问题，但也引入了在情况需要的时候如何并发发送异步请求的问题。

- 模拟 2 个异步请求

```javascript
function foo() {
    console.log('foo start:' + new Date().toLocaleString())
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('foo end:' + new Date().toLocaleString())
            resolve('foo')
        }, 2000)
    })
}

function bar() {
    console.log('bar start:' + new Date().toLocaleString())
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('bar end:' + new Date().toLocaleString())
            resolve('bar')
        }, 2000)
    })
}
```

### 3.1 串行

```javascript
// 方式 1，直接执行
async function main() {
    console.log('beginTime:' + new Date().toLocaleString())
    var foostr = await foo();
    console.log(foostr);
    var barstr = await bar();
    console.log(barstr);
    console.log('endTime:' + new Date().toLocaleString())
}

// 方式 2，循环调用，其实和方式 1 一致
async function main2() {
    let docs = [foo, bar];
    console.log('beginTime:' + new Date().toLocaleString())
    for (let doc of docs) {
        var str = await doc();
        console.log(str);
    }
    console.log('endTime:' + new Date().toLocaleString())
}
```

### 3.2 并行

```javascript
// 方式 1，Promise.all
async function async_main() {
    console.log('beginTime:' + new Date().toLocaleString())
    let [get_foo, get_bar] = await Promise.all([foo(), bar()]);
    console.log(get_foo);
    console.log(get_bar);
    console.log('endTime:' + new Date().toLocaleString())
}

// 方式 2，引用执行
async function async_main2() {
    console.log('beginTime:' + new Date().toLocaleString())
    let fooPromise = foo();
    let barPromise = bar();
    let get_foo = await fooPromise;
    console.log(get_foo);
    let get_bar = await barPromise;
    console.log(get_bar);
    console.log('endTime:' + new Date().toLocaleString())
}

// 方式 3，循环调用，其实和方式 2 一致
async function async_main3() {
    let docs = [foo(), bar()];
    console.log('beginTime:' + new Date().toLocaleString())
    for (let doc of docs) {
        var str = await doc;
        console.log(str);
    }
    console.log('endTime:' + new Date().toLocaleString())
}

//方式 4，对应 串行的方式 2，这里有一个钩子函数处理，但是 会先执行 endTime
async function async_main4() {
    let docs = [foo, bar];
    console.log('beginTime:' + new Date().toLocaleString())
    docs.forEach(async (val) => {
        var str = await val();
        console.log(str);
    })
    console.log('endTime:' + new Date().toLocaleString())
}
```

***

[如何正确合理使用 JavaScript async/await](https://segmentfault.com/a/1190000017718513#articleHeader2)  
[node.js async/await 继发执行与并发执行](https://www.cnblogs.com/xbblogs/p/8946912.html)  
[从不用 try-catch 实现的 async/await 语法说错误处理](https://segmentfault.com/a/1190000011802045)  
