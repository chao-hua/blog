# Vue源码分析-源码入口

## 1.寻找入口

我们分析源码是基于 Runtime + Compiler 类型来学习。

- Vue 由 Rollup 构建，我们从 package.json 的 scripts 中可以找到 Rollup 配置文件位置：  
    `"dev": "rollup -w -c scripts/config.js --environment TARGET:web-full-dev"`
- 在 scripts/config.js 文件中，我们可以找到 Runtime+compiler 类型的配置文件：  
    `entry: resolve('web/entry-runtime-with-compiler.js')`
- 在 src/platforms/web/entry-runtime-with-compiler.js 文件中，我们可以找到 Vue 引入：  
    `import Vue from './runtime/index'`
- 在 src/platforms/web/runtime/index.js 文件中，我们可以找到 Vue 引入：  
    `import Vue from 'core/index'`
- 在 src/core/index.js 文件中，我们可以找到 Vue 引入：  
    `import Vue from './instance/index' initGlobalAPI(Vue)`
- 在 src/core/instance/index.js 文件中，我们就找到了 Vue 的定义，它是通过一个构造函数实现的类，只能通过 `new` 来实例化：

```js
import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
```

## 2.分析

Vue 的类实现是通过一个构造函数实现，不是通过 ES6 的 Class 实现，这种形式的好处是，将 Vue 按照功能分散到各个模块中去实现，这样能方便代码的维护和管理。
