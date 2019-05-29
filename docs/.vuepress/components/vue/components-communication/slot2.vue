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
<style scoped lang="scss" rel="stylesheet/scss">
@import '../../src/style/variables.scss';

.child-box {
    border: solid 1px $green;
    padding: 10px;
}
</style>