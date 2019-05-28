<template>
    <div>
        <!-- <slot name="header" :test="child"></slot> -->
        <slot :test="child">defalut</slot>
        <!-- <slot name="footer" :test="child"></slot> -->
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
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
};
</script>
<style scoped lang="scss" rel="stylesheet/scss">
@import '../../src/style/variables.scss';
</style>