# 跨域

## 跨域概念

同源策略（same origin policy）：是浏览器核心的安全功能，所谓同源是指：域名、协议、端口三者全部相同。  
非同源，有 3 种行为受到限制：    

- Cookie、LocalStorage、SessionStorage 和 IndexDB 无法读取
- DOM 无法获得
- AJAX 请求不能发送

https://zhuanlan.zhihu.com/p/60019674  
http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html

对于完全不同源的网站，目前有三种方法，可以解决跨域窗口的通信问题：

- 片段识别符（fragment identifier）hash
- window.name 
- 跨文档通信API（Cross-document messaging）postMessage

AJAX 跨域：

- JSONP `<script>`
- WebSocket
- CORS
  + 后端
  + 代理

nginx反向代理接口跨域：同源策略是浏览器的安全策略，不是HTTP协议的一部分。服务器端调用HTTP接口只是使用HTTP协议，不会执行JS脚本，不需要同源策略，也就不存在跨越问题


190

- 跨域通讯几种方式
    + JSONP
        * 利用 `<script>` 标签允许跨域请求实现的。
    + 通过 Hash
        * 当前页面 A 通过 iframe 或 frame 嵌入跨域的页面 B，B 中通过 `window.onhashchange`来处理。
    + postMessage H5中新增
        * 窗口 A 向跨域的窗口 B 发送信息：`Bwindow.postMessage(data,url)`，在 B 窗口中监听 `window.addEventListener('message',function(e){})`。
    + Webscoket
        * `new WebSocket('ws://')` send onopen onmessage onclose。
    + CORS
        * fetch Promise 直接配置就可以支持跨域。

115

- 跨域
    + 浏览器有同源策略，不允许 `ajax` 访问其他域接口。
    + 跨域条件：协议、域名、端口中有一个不同就算跨域。
    + 3 个标签允许跨域加载资源（浏览器允许）
        * `<img src="">`
        * `<script src="">`
        * `<link href="">`
    + 3 个标签允许跨域的应用
        * `<img>` 用于打点统计，统计网站可以是其他域。
        * `<script>`、`<link>` 可以使用 CDN。
        * `<script>` 可以用于 `JSONP` 请求。
    + `JSONP` 实现原理：
        * 加载 `<script src="http://test/api.js">` 时，服务器不一定真正有一个 api.js 文件，服务器可以根据请求，动态生成一个文件返回。
        * `<script> window.callback = function(data) { console.log(data) } </script>`
        * `<script src="http://test/api.js"></script>` 服务器返回 `callback({x:1, y:2})`
    + 解决跨域
        * `JSONP`
        * 服务器端设置 http header  
          <img src="./img/imooc02.png" alt="服务器卡与设置" style="width:500px;">

