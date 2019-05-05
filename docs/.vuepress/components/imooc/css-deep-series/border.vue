<template>
    <div>
        <dt-button>默认按钮</dt-button>
        <dt-button type="primary">主要按钮</dt-button>
        <dt-button type="success">成功按钮</dt-button>
        <dt-button type="info">信息按钮</dt-button>
        <dt-button type="warning">警告按钮</dt-button>
        <dt-button type="danger">危险按钮</dt-button>
    </div>
</template>
<script>
import DtButton from '../../src/button.vue'
export default {
    components: {
        DtButton
    }
}
</script>
<style lang="scss" scoped>
</style>