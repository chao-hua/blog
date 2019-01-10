- 自我介绍
	+ 描述哪些项目
	+ 展示哪些优势
- 业务能力
	+ 做过哪些业务
	+ 有什么业绩
	+ 用了什么技术方案
	+ 突破什么技术难点
	+ 最大收获
- 职业竞争力
	+ 业务能力
	+ 思考能力，找到最优解
	+ 学习能力，不断学习新知识
	+ 无上限付出，为解决问题可以加班
- 职业规划
	+ 目标
	+ 近期目标
	+ 远期目标
	+ 方式方法，先完成业务上问题，做到极致，然后向目标努力
- 四大 Web 组件标准
	+ HTML Template
	+ Shadow DOM
		* 也是 DOM 的一种，是一种特殊的子树，它能创建一个相对独立（可以从父节点继承属性）的空间。
		* 利用这点就可以创建原生的组件。
		* 浏览器中已有通过 Shadow DOM 实现的组件：`<input>`、`<select>`、`<video>` 等。
		* Shadow Root 是 Shadow DOM 的跟节点，可以在普通 DOM 上使用 `attachShadow(mode:'open')`  来创建一个 Shadow Root。
	+ Custom Elements
	+ HTML Imports
	+ 利用前 3 点实现的组件封装是就是 Web Components
		* Atag 淘宝前端团队
		* Omit 腾讯前端团队
- Vue 实例初始化
	+ init
		* vm 生命周期的相关变量初始化
		* vm 事件相关初始化
		* 模板开始解析
		* `beforeCreate` 钩子函数
		* vm 状态初始化
			- `props`
			- `methods`
			- `data`
			- `computed`
			- `watch`
		* `created` 钩子函数
			- 实例创建完成
			- 但为挂载到 DOM 中，`$el`、`$ref`不能访问
		* `beforeMount` 钩子函数
			- 在挂载开始之前被调用
			- 找到对应的 `template`，并编译成 `render` 函数
		* `mounted` 钩子函数
			- 实例挂载到 DOM 上，`$ref` 属性可以访问
		* `beforeUpdate`
			- 响应式数据更新时调用，发生在虚拟 DOM 打补丁之前
		* `updated`
			- 虚拟 DOM 重新渲染和打补丁之后调用，组件 DOM 已经更新，可执行依赖于 DOM 的操作
		* `beforeDestroy`
			- 实例销毁之前调用。这一步，实例仍然完全可用
		* `destroyed`
			- 实例销毁后调用，调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁
- Vue 原理
	+ 双向数据绑定
		* `Object.defineProperty` IE9+ 提供给属性 `getter` 和 setter 方法。
		* 不足：
			- 数组的 push/pop 等操作
			- 不能监测数组 length 长度的变化
			- 数组的 arr[xxx] = yyy 无法感知
			- 对象属性的添加和删除无法感知
		* 改进
			- 对数组方法进行变异
			- 增加 `$set` 、`$delete` 进行属性的添加、删除
	+ 观察者模式
		* 观察者订阅了可观察对象，当可观察对象发布事件，则就直接调度观察者的行为，所以这里观察者和可观察对象其实就产生了一个依赖的关系。与发布订阅模式略有不同，发布订阅有一个事件分发调度中心。
		* 3个关键的类
			- Observer：主要用于给 Vue 的数据 `defineProperty` 增加 `getter/setter` 方法，并且在 `getter/setter`中收集依赖或者通知更新
			- Watcher：观察数据（或者表达式）变化然后执行回调函数
			- Dep：就是一个可观察对象，可以有不同指令订阅它
- 面试问题
	+ jsonp 缺点
		* 安全性（存在注入漏洞，如CSRF,XSS）
		* 如果出现错误，不会像http请求那样有状态码
		* 只能使用get请求
	+ Vue 父子组件通信的实现
	+ Webpack 与 gulp 区别
	+ 前端工程化理解  
	+ Vue 选型的确定  
