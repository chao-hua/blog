<template>
    <section>
        <div class="line-camp">
            <span>英国王室的拥趸正在伦敦圣玛丽医院林都院区外扎营，等待凯特王妃产子。英国王室的拥趸正在伦敦圣玛丽医院林都院区外扎营等待凯特王妃产子。</span>
        </div>
    </section>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
@import '../../src/style/variables.scss';

.line-camp {
    text-overflow: -o-ellipsis-lastline; /* 兼容 opera */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box; /* 将对象作为弹性伸缩盒子模型显示 */
    -webkit-line-clamp: 2; /* webkit 专属属性，firefox 不支持 */
    /*! autoprefixer: off */
    -webkit-box-orient: vertical; /* 规定框的子元素应该被水平或垂直排列 */
    /* autoprefixer: on */

    width: 400px;
    border: solid 1px #3eaf7c;
}
</style>