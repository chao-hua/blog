<template>
    <div class="parent-wrap">
        <h3>parent</h3>
        <p>我设置了 3 个 attr：a(A), b(B), c(C)</p>
        <p>从 grand-child 传递来的输入值: {{messageFromGrandChild}}</p>
        <child :a="a" :b="b" :c="c" @grandChildEvent="handleGrandChildEvent" @clickFromGrandChild="handleClickFromGrandChild" @inputFromGrandChild="handleInputFromGrandChild"></child>
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
        handleGrandChildEvent() {
            console.log("我是【parent】，这是从【grand-child】组件中触发的事件。");
        },
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
<style scoped lang="scss">
@import '../../src/style/variables.scss';

.parent-wrap {
    border: solid 1px $green;
    padding: 10px;

    h3 {
        margin: 10px 0;
    }
}
</style>