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

Vue 2.4 版本引入的新方式：  

- `$attrs`：包含了父作用域中不作为 `prop` 被识别 (且获取) 的特性绑定 (`class` 和 `style` 除外)。当一个组件没有声明任何 `prop` 时，这里会包含所有父作用域的绑定 (`class` 和 `style` 除外)，并且可以通过 `v-bind="$attrs"` 传入内部组件——在创建高级别的组件时非常有用。
- `$listeners`：包含了父作用域中的 (不含 `.native` 修饰器的) `v-on` 事件监听器。它可以通过 `v-on="$listeners"` 传入内部组件——在创建更高层次的组件时非常有用。
- `inheritAttrs`：默认情况下父作用域的不被认作 `props` 的特性绑定作为普通的 HTML 特性应用在子组件的根元素上。`inheritAttrs: false`时，可以去掉这些属性。
- 通过 `v-bind="$attrs"` 传递顶层组件所有 `v-bind`  的属性，其实是有传递衰减的，因为每次传递会去除 `props` 的属性。如果想保持每一层都等获取到顶层组件的所有 `v-bind`  的属性，可以通过 `v-bind="[$props, $attrs]"` 来传递，这样子组件中 `$props` + `$attrs` 就是顶层所有 `v-bind` 的属性。

<demo>
  <template slot="html">
    <vue-components-communication-parent></vue-components-communication-parent>
  </template>

```vue
// parent.vue
<template>
    <div class="parent-wrap">
        <h3>parent</h3>
        <p>我设置了 3 个 attr：a(A), b(B), c(C)</p>
        <p>从 grand-child 传递来的输入值: {{messageFromGrandChild}}</p>
        <child :a="a" :b="b" :c="c" @clickFromGrandChild="handleClickFromGrandChild" @inputFromGrandChild="handleInputFromGrandChild"></child>
    </div>
    </div>
</template>
<script>
import child from "./child.vue";
export default {
    components: { child },
    data() {
        return {
            a: "A",
            b: "B",
            c: "C",
            messageFromGrandChild: "",
        };
    },
    methods: {
        handleClickFromGrandChild() {
            console.log("我是【parent】，这是从【grand-child】组件中触发【click】事件。");
        },
        handleInputFromGrandChild(msg) {
            this.messageFromGrandChild = msg;
            console.log("我是【parent】，这是从【grand-child】组件中触发【input】事件。");
        },
    }
};
</script>
// child.vue
<template>
    <div class="child-wrap">
        <h3>child</h3>
        <p>props 是 a: {{a}}</p>
        <p>attrs 是: {{$attrs}}</p>
        <grand-child v-bind="[$attrs]" v-on="$listeners"></grand-child>
    </div>
</template>
<script>
import GrandChild from "./grand-child.vue";
export default {
    components: { GrandChild },
    props: ["a"],
    inheritAttrs: false,
    created() {
        console.log("【child】 $attrs: ", this.$attrs);
    },
    mounted() {
        console.log("【child】 $listeners: ", this.$listeners);
    },
};
</script>
// grand-child.vue
<template>
    <div class="grand-child-wrap">
        <h3>grand-child</h3>
        <p>props 是 b: {{b}}</p>
        <p>attrs 是: {{$attrs}}</p>
        <hr>
        <h4>1.click事件触发，传到顶级。</h4>
        <button @click="btnClick">按钮</button>
        <h4>2.input事件触发，传到顶级。</h4>
        <input type="text" @input="handleInput">&nbsp;&nbsp;&nbsp;<span>输入的内容是：{{message}}</span>
    </div>
</template>
<script>
export default {
    props: ["b"],
    inheritAttrs: false,
    data() {
        return { message: "" };
    },
    created() {
        console.log("【grand-child】 $attrs: ", this.$attrs);
    },
    mounted() {
        console.log("【grand-child】 $listeners: ", this.$listeners);
    },
    methods: {
        btnClick() {
            // this.$emit("clickFromGrandChild");
            this.$listeners.clickFromGrandChild();
        },
        handleInput(e) {
            this.message = e.target.value;
            this.$emit("inputFromGrandChild", this.message);
            // this.$listeners.inputFromGrandChild(this.message);
        }
    }
};
</script>
```

</demo>

## 6.`provide` 和 `inject`

多层组件间通讯（父子孙）,祖先组件向其所有后代注入一个依赖，始终生效。  

Vue 2.2 版本引入的新方式：  

<demo>
  <template slot="html">
    <vue-components-communication-p1></vue-components-communication-p1>
  </template>
</demo>

## 7.`$refs`, `$parent`, `$children`, `$root`

可以直接访问组件示例，然后直接调用组件的方法和访问数据。

- `$refs`：直接访问子组件实例，`<child ref="childCom"></child> this.$refs.childCom`。`$refs`  只会在组件渲染完成之后生效，并且它们不是响应式的，避免在模板或计算属性中访问 `$refs`。
- `$parent`：直接访问父组件实例。
- `$children`：当前实例的直接子组件数组。
- `$root`：当前组件树的根 Vue 实例。

## 8.作用域插槽

父组件的插槽中，通过作用域插槽和插槽 prop，可以访问子组件中的数据。

注：Vue 2.6 起 `v-slot` 引入，替代 `slot` 和 `slot-scope`。  
`<template slot="default" slot-scope="slotProps">` => `<template v-slot:default v-slot="slotProps">`

<demo>
  <template slot="html">
    <vue-components-communication-slot1></vue-components-communication-slot1>
  </template>

```vue
// parent.vue
<template>
    <child>
        <template v-slot="slotProps">
            <p>{{slotProps.childData.data1}}</p>
            <p>{{slotProps.childData.data2}}</p>
            <p>{{slotProps.childData.data3}}</p>
        </template>
    </child>
</template>
<script>
import child from './child.vue'
export default {
    components: {
        child
    }
};
</script>
// child.vue
<template>
    <div class="child-box">
        <p>-- Child 开始 --</p>
        <slot :childData="child"></slot>
        <p>-- Child 结束 --</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            child: {
                data1: '子组件数据1',
                data2: '子组件数据2',
                data3: '子组件数据3',
            }
        };
    }
};
</script>
```

</demo>

***

参考：  
[vue组件间通信六种方式（完整版）](https://juejin.im/post/5cde0b43f265da03867e78d3)  
[Vue中的$attrs及$listeners属性, Vue2.4组件间通信新姿势](https://blog.csdn.net/ForMyQianDuan/article/details/82784915)  
