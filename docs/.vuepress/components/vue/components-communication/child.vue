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
    methods: {
        handleGrandChildEvent() {
            console.log("我是【child】，这是从【grand-child】组件中触发的事件，且继续$emit到【parent】");
            this.$emit("grandChildEvent");
        }
    }
};
</script>
<style scoped lang="scss" rel="stylesheet/scss">
@import '../../src/style/variables.scss';

.child-wrap {
    border: solid 1px $green;
    padding: 10px;

    h3 {
        margin: 10px 0;
    }
}
</style>