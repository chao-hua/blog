<template>
    <child>
        <template v-slot="slotProps">
            <p>{{slotProps.test.data1}}</p>
        </template>
        <!-- <p slot="footer">footer1</p> -->

    </child>
</template>
<script>
import child from './2.vue'
export default {
    components: {
        child
    },
    data() {
        return {};
    },
    created() {
        console.log(this)
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