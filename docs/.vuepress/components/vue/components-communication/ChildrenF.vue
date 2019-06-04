<template functional>
    <div class="wrap">
        <h3 :style="{ color: injections.theme.color }">F 结点</h3>
    </div>
</template>
<script>
export default {
    inject: {
        theme: {
            // 函数式组件取值不一样，注意 template 上的标识 functional
            default: () => ({})
        }
    }
};
</script>