<template>
    <div class="wrap">
        <h3>A 结点</h3>
        <button @click="() => changeColor()" style="margin-bottom:10px;">改变 color</button>
        <ChildrenB />
        <ChildrenC />
    </div>
</template>
<script>
import Vue from "vue";
import ChildrenB from "./ChildrenB";
import ChildrenC from "./ChildrenC";
export default {
    components: {
        ChildrenB,
        ChildrenC
    },
    data() {
        return {
            color: "blue"
        };
    },
    //绑定并不是可响应的
    // provide() {
    //   return {
    //     theme: {
    //       color: this.color
    //     }
    //   };
    // },
    // 双向响应
    provide() {
        return {
            theme: this
        };
    },
    // 使用2.6最新API Vue.observable 优化响应式 provide ，单项响应：祖先=》子孙
    /*provide() {
        this.theme = Vue.observable({
            color: "blue"
        });
        return {
            theme: this.theme
        };
    },*/
    methods: {
        changeColor(color) {
            if (color) {
                this.color = color;
            } else {
                this.color = this.color === "blue" ? "red" : "blue";
            }
        }
    }
};
</script>
<style scoped lang="scss">
</style>