<template>
    <div class="wrap">
        <h3 :style="{ color: theme1.color }">E 结点</h3>
    </div>
</template>
<script>
export default {
    inject: {
        theme1: {
            from: "theme",
            default: () => ({})
        }
    }
};
</script>