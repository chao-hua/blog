# 跨域

[[toc]]

## 1.跨域概念

同源策略（same origin policy）：是浏览器核心的安全功能，所谓同源是指：域名、协议、端口三者全部相同。  

### 1.1 浏览器对非同源的 JS 脚本有 3 种行为受到限制：    

- Cookie、LocalStorage、SessionStorage 和 IndexDB 无法读取
- DOM 无法获得
- AJAX 请求不能发送

### 1.2 浏览器允许跨域加载 3 种资源

- `<img src="">`
- `<script src="">`
- `<link href="">`

### 1.3 允许跨域加载 3 种资源的应用

- `<img>` 用于打点统计，统计网站可以是其他域。
- `<script>`、`<link>` 可以使用 CDN。
- `<script>` 可以用于 `JSONP` 请求。

## 2.通信跨域的解决方案对比

所谓的通信的跨域，主要指受同源限制的前两点。对于完全不同源的网站，目前有三种方法，可以解决跨域窗口的通信问题：

### 2.1 通过 `hash`（`#`）

片段识别符（fragment identifier），当前页面 A 通过 iframe 或 frame 嵌入跨域的页面 B，B 中通过 `window.onhashchange`来处理。

### 2.2 `window.name`

览器窗口有 `window.name` 属性。这个属性的最大特点是，无论是否同源，只要在同一个窗口里，前一个网页设置了这个属性，后一个网页可以读取它。

### 2.3 `postMessage`

上面两种方法都属于破解，HTML5 为了解决这个问题，引入了一个全新的 API：跨文档通信 API（Cross-document messaging）。窗口 A 向跨域的窗口 B 发送信息：`Bwindow.postMessage(data,url)`，在 B 窗口中监听 `window.addEventListener('message',function(e){})`。

## 3.AJAX 跨域的解决方案对比

### 3.1 JSONP

- 优点：
    + 兼容性好，老浏览器全部支持
    + 服务器改动较小
- 缺点：
    + 只能发送 get 请求
    + 没有浏览器的请求状态
- 原理：
    + 利用 `<script>` 元素不受同源策略的限制。网页通过动态添加一个 `<script>` 元素，向服务器请求 JSON 数据，服务器收到请求后，将数据放在一个指定名字的回调函数里传回来。
    + 加载 `<script src="http://test/api.js">` 时，服务器不一定真正有一个 api.js 文件，服务器可以根据请求，动态生成一个文件返回。
    + `<script> window.callback = function(data) { console.log(data) } </script>`
    + `<script src="http://test/api.js"></script>` 服务器返回 `callback({x:1, y:2})`

### 3.2 WebSocket

- 优点：双向通讯
- 缺点：使用全新通讯协议，前后端改动巨大
- 原理：
    + WebSocket 是一种通信协议，使用 `ws://`（非加密）和 `wss://`（加密）作为协议前缀。该协议不实行同源政策，只要服务器支持，就可以通过它进行跨源通信。
    + `new WebSocket('ws://')` `send` `onopen` `onmessage` `onclose`

### 3.3 CORS

- CORS是跨源资源分享（Cross-Origin Resource Sharing）的缩写。它是W3C标准，是跨源AJAX请求的根本解决方法。
- 优点
    + 不限制请求类型
    + 与同源的 AJAX 通信没有差别，代码完全一样
- 缺点
    + CORS 需要浏览器支持。目前，所有浏览器都支持该功能，IE 浏览器 ≥IE10。
    + CORS 需要服务器同时配置。
- 原理
    + 浏览器将 CORS 请求分成两类：简单请求（simple request）和非简单请求（not-so-simple request）。
    + 对于简单请求，浏览器直接发出 CORS 请求，自动在头信息之中，添加一个 `Origin` 字段，用来说明请求的来源（协议 + 域名 + 端口），服务器根据这个值，做出处理。浏览器再根据服务器返回头信息处理：
        * `Access-Control-Allow-Origin` 关键字段 没有这个值，浏览器就报错，说明服务制不支持本次跨域请求。有这个值（请求时 `Origin` 或者 `*）。
        * `Access-Control-Allow-Credentials` 可选 布尔值,是否允许浏览器发送 Cookie，默认不发送。发送请求时，需要设置 `withCredentials` 为 `true`。
        * `Access-Control-Expose-Headers` 可选 指定额外的 ResponseHeader 字段。
    + 非简单请求的 CORS 请求，浏览器会增加一次 HTTP 查询请求（OPTIONS），称为"预检"请求（preflight）。OPTIONS 中几个关键字段：
        * `Origin`
        * `Access-Control-Request-Method` 必须 原请求类型
        * `Access-Control-Request-Headers` 可选 额外发送的头信息字段
    + 服务器收到 OPTIONS 后，根据这几个关键字段，做出回应。浏览器再根据服务器返回头信息处理：
        * `Access-Control-Allow-Origin` 关键字段 同上
        * `Access-Control-Allow-Methods` 必须 服务器支持的所有跨域请求的方法
        * `Access-Control-Allow-Headers` 如果请求时有 `Access-Control-Request-Headers` 则时必须的，服务器支持的所有头信息字段
        * `Access-Control-Allow-Credentials` 可选 同上
        * `Access-Control-Max-Age` 可选 指定本次预检请求的有效期，单位为秒，在此期间不用再发 OPTIONS。
    + 一旦服务器通过了 OPTIONS 请求，以后每次浏览器正常的 CORS 请求，就都跟简单请求一样进行处理。

### 3.4 反向代理

- 优点：纯前端解决方案
- 原理：同源策略是浏览器的安全策略，不是 HTTP 协议的一部分。服务器端调用 HTTP 接口只是使用 HTTP 协议，也就不存在跨越问题。请求过程：向代理（同源）服务器发起请求，再由代理（同源）服务器请求外部服务器。
- 应用：
    + 开发：设置 webpack devServer proxy（webpack 的 proxy 基于 `http-proxy-middleware`）
    + 生产：nginx 服务器配置反向代理接口

***

参考：  
[浏览器同源政策及其规避方法](http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html)  
[跨域资源共享 CORS 详解](http://www.ruanyifeng.com/blog/2016/04/cors.html)  
[CORS 服务器相关配置](https://zhuanlan.zhihu.com/p/60019674)