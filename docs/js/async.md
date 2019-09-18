# async 

## 1.几点认知

### 1.1 概念

- `async` 就是 Generator / Promise 函数的语法糖。
- `async` 函数始终返回的是一个 Promise 对象。
- `await` 等待的是一个表达式，这个表达式的计算结果是 Promise 对象或者其它值。如果它等到的是一个 Promise 对象，它会阻塞后面的代码（**代码串行化**），等着 Promise 对象 `resolve`，然后得到 `resolve` 的值，作为 `await` 表达式的运算结果。
- `await` 必须用在 `async` 函数中。`async` 函数调用不会造成阻塞，它内部所有的阻塞都被封装在一个 Promise 对象中异步执行。

### 1.2 优点

- 同步的编程风格
- `async` 声明的方法，返回 Promise 对象，以为着安全的使用 `.then(...)` 或者 `await`

## 2.错误处理

### 2.1 `try...catch`

标准写法，将 `await` 命令放在 `try...catch` 代码块中。

- 可以将多个 `await` 语句放在 `try...catch` 代码块中，统一处理。
- `try` 快中的所有异常都将捕获，不仅仅是异步的错误。

```javascript
async function asyncFunction() {
    try {
        const { status, data } = await fetchSomething();
    } catch (error) {
        console.log(error);
    }
}
```

### 2.2 改造异步函数，使 `await` 同时返回错误和结果

Dima Grossman 提出 [How to write async await without try-catch blocks in Javascript](https://blog.grossman.io/how-to-write-async-await-without-try-catch-blocks-in-javascript/)

## 串行与并行




***

[如何正确合理使用 JavaScript async/await](https://segmentfault.com/a/1190000017718513#articleHeader2)  
[node.js async/await 继发执行与并发执行](https://www.cnblogs.com/xbblogs/p/8946912.html)  
[从不用 try-catch 实现的 async/await 语法说错误处理](https://segmentfault.com/a/1190000011802045)  
