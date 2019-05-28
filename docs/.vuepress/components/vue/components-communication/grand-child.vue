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
        // this.$emit("grandChildEvent");
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
<style scoped lang="scss" rel="stylesheet/scss">
@import '../../src/style/variables.scss';

.grand-child-wrap {
    border: solid 1px $green;
    padding: 10px;

    h3 {
        margin: 10px 0;
    }
}
</style>