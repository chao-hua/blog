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
import child from './slot2.vue'
export default {
    components: {
        child
    }
};
</script>
<style scoped lang="scss" rel="stylesheet/scss">
@import '../../src/style/variables.scss';
</style>