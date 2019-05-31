<template>
    <div class="wrap">
        <h3 :style="{ color: theme.color }">D 结点</h3>
        <button @click="handleClick">改变 color 为 green</button>
    </div>
</template>
<script>
export default {
    inject: {
        theme: {
            default: () => ({})
        }
    },
    methods: {
        handleClick() {
            if (this.theme.changeColor) {
                this.theme.changeColor("green");
            }
        }
    }
};
</script>