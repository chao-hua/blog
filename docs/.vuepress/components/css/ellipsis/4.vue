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
    width: 400px;
    border: solid 1px #3eaf7c;

    overflow: hidden;
    position: relative;
    line-height: 20px;
    max-height: 40px;
}

.line-camp:after {
    content: "...";
    position: absolute;
    bottom: 0;
    right: 0;
    padding-left: 20px;
    background: linear-gradient(to right, transparent, #fff 100%);
}
</style>