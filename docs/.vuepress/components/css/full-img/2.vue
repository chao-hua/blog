<template>
    <!-- <div class="box"> -->
    <section>
        <p class="title">container：300*100</p>
        <div class="container w300h100">
            <img :src="imgUrl" alt="">
        </div>
        <p class="title">container：400*100</p>
        <div class="container w400h100">
            <img :src="imgUrl" alt="">
        </div>
        <p class="title">container：400*250</p>
        <div class="container w400h250">
            <img :src="imgUrl" alt="">
        </div>
        <p class="title">container：800*200</p>
        <div class="container w500h200">
            <img :src="imgUrl" alt="">
        </div>
    </section>
    <!-- </div> -->
</template>
<script>
export default {
    data() {
        return {
            imgUrl: require('./css01.png')
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../src/style/variables.scss';

.title {
    font-size: 16px;
    color: $green;
}

.container {
    overflow: hidden;

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    &.w400h100 {
        height: 100px;
        width: 400px;
    }

    &.w400h250 {
        height: 250px;
        width: 400px;
    }

    &.w500h200 {
        height: 200px;
        width: 500px;
    }

    &.w300h100 {
        height: 100px;
        width: 300px;
    }
}
</style>