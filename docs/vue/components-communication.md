# vue 组件间通信几种方式

[[toc]]

## 1.`props`
## 2.`$emit`
## 3.eventBus
## 4.Vuex
## 5.`$attrs` 和 `$listeners`
## 6.`provide` 和 `inject`
## 7.`$refs`, `$parent`, `$children`
## 8.在slot中 通过插槽作用域v-slot: child="childsay"  获取子组件传值

<demo column>
  <template slot="html">
    <vue-parent></vue-parent>
  </template>
</demo>

***

参考：  
[Vue中的$attrs及$listeners属性, Vue2.4组件间通信新姿势](https://blog.csdn.net/ForMyQianDuan/article/details/82784915)  
[vue组件间通信六种方式（完整版）](https://juejin.im/post/5cde0b43f265da03867e78d3)  
[vue2.x 组件通信的 6 种方式](https://github.com/dirkhe1051931999/hjBlog/blob/master/blog-vue/lessons/06.md)