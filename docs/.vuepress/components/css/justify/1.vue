<template>
    <div>
        <section class="single" lang="zh-CN">
            <div>姓 名</div>
            <div>手 机 号 码</div>
            <div>账 号</div>
            <div>身 份 证</div>
        </section>
        <section class="multiple" lang="zh-CN">
            <div>英国王室的拥趸正在伦敦圣玛丽医院林都院区外扎营，等待凯特王妃产子。
                报道称，这些粉丝们身穿英国国旗式样的衣服，举着威廉王子夫妇的照片，在医院外表达着自己对于王妃即将产子的快乐心情。</div>
            <div>Some of the important features about Dark Mode addon are listed below.
                This is followed by an overview about this addon.
                This summary contains few words about the addon, its function and features.
                Next is FAQ, this section is useful to get information about how this addon works in your browser.</div>
        </section>
    </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
@import '../../src/style/variables.scss';

.single {
    div {
        margin: 10px 0;
        border: 1px solid $green;

        width: 100px;
        text-align: justify;
        text-align-last: justify;
        text-justify: inter-ideograph;
        height: 22px;
        line-height: 22px;
    }

    div:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
}

.multiple {
    div {
        margin: 10px 0;
        border: 1px solid $green;

        width: 500px;
        text-align: justify;
        text-align-last: justify;
        text-justify: inter-ideograph;
    }
}
</style>