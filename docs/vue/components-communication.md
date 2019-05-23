# vue 组件间通信几种方式

[[toc]]

## 1.`props`

父组件向子组件传递值（数组、对象、方法）  

父组件中：`<child v-bind:a="a" :b="b">`  
子组件中：`props: ['a', 'b']`

## 2.`$emit`

子组件向父组件传值（通过事件形式）

父组件中：`<child v-on:test1="handleTest1" @test2="handleTest2">`  
子组件中：`this.$emit("test1","传递的值，可以是对象");`

## 3.eventBus（`$emit` 和 `$on`）

任意组件间通讯（父子、兄弟、跨级） 

通过一个空的 Vue 实例作为中央事件总线，用它来触发事件和监听事件，可以实现任意组件间通讯（父子、兄弟、跨级）  
缺点：太多的事件会造成混乱，因为触发和监听分散在各种组件中。

```js
// eventBus.js 中央事件总线
import Vue from 'vue'
export default new Vue();

// a.vue 触发事件
import vueEventBus from '@/utils/vueEventBus.js'
vueEventBus.$on('event1', '参数');

// b.vue 监听事件
import vueEventBus from '@/utils/vueEventBus.js'
vueEventBus.$on('event1', (prop) => {});
```

## 4.Vuex

任意组件间通讯（父子、兄弟、跨级）  

Vuex 是一个状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。  
Vuex 实现了一个单向数据流，在全局拥有一个 State 存放数据，当组件要更改 State 中的数据时，必须通过 Mutation 进行，Mutation 同时提供了订阅者模式供外部插件调用获取 State 数据的更新。而当所有异步操作或批量的同步操作需要走 Action，但 Action 无法直接修改 State，需要通过 Mutation 来修改 State 的数据。最后，根据 State 的变化，渲染到视图上。  

## 5.`$attrs` 和 `$listeners`

多层组件间通讯（父子孙）  

Vue2.4 版本引入的新方式：  

- `$attrs`：包含了父作用域中不作为 `prop` 被识别 (且获取) 的特性绑定 (`class` 和 `style` 除外)。当一个组件没有声明任何 `prop` 时，这里会包含所有父作用域的绑定 (`class` 和 `style` 除外)，并且可以通过 `v-bind="$attrs"` 传入内部组件——在创建高级别的组件时非常有用。
- `$listeners`：包含了父作用域中的 (不含 `.native` 修饰器的) `v-on` 事件监听器。它可以通过 `v-on="$listeners"` 传入内部组件——在创建更高层次的组件时非常有用。
- `inheritAttrs`：默认情况下父作用域的不被认作 `props` 的特性绑定作为普通的 HTML 特性应用在子组件的根元素上。`inheritAttrs: false`时，可以去掉这些属性。
- 通过 `v-bind="$attrs"` 传递顶层组件所有 `v-bind`  的属性，其实是有传递衰减的，因为每次传递会去除 `props` 的属性。如果想保持每一层都等获取到顶层组件的所有 `v-bind`  的属性，可以通过 `v-bind="[$props, $attrs]"` 来传递，这样子组件中 `$props` + `$attrs` 就是顶层所有 `v-bind` 的属性。

<demo>
  <template slot="html">
    <vue-components-communication-parent></vue-components-communication-parent>
  </template>
</demo>

`v-bind="[$props, $attrs]"`
## 6.`provide` 和 `inject`
## 7.`$refs`, `$parent`, `$children`
## 8.在slot中 通过插槽作用域v-slot: child="childsay"  获取子组件传值

***

参考：  
[Vue中的$attrs及$listeners属性, Vue2.4组件间通信新姿势](https://blog.csdn.net/ForMyQianDuan/article/details/82784915)  
[vue组件间通信六种方式（完整版）](https://juejin.im/post/5cde0b43f265da03867e78d3)  
[vue2.x 组件通信的 6 种方式](https://github.com/dirkhe1051931999/hjBlog/blob/master/blog-vue/lessons/06.md)  
[vue组件间通信](https://github.com/ljianshu/Blog/tree/master/vue2.0%E5%AD%A6%E4%B9%A0/vue%E7%BB%84%E4%BB%B6%E9%97%B4%E9%80%9A%E4%BF%A1)