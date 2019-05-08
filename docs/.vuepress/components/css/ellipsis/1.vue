<template>
    <section>
        <div class="ellipsis">
            <span>短的文字</span>
        </div>
        <br>
        <div class="ellipsis">
            <span>英国王室的拥趸正在伦敦圣玛丽医院林都院区外扎营，等待凯特王妃产子。</span>
        </div>
    </section>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
@import '../../src/style/variables.scss';

.ellipsis {
    border: solid 1px $green;
    width: 200px;

    white-space: nowrap;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    overflow: hidden;
}
</style>