<template>
    <!-- <div class="box"> -->
    <section>
    	<p class="title">container：300*100</p>
    	<div class="container w300h100">
    	</div>
        <p class="title">container：400*100</p>
        <div class="container w400h100">
        </div>
        <p class="title">container：400*250</p>
        <div class="container w400h250">
        </div>
        <p class="title">container：800*200</p>
        <div class="container w500h200">
        </div>
    </section>
    <!-- </div> -->
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
@import '../../src/style/variables.scss';

.title {
    font-size: 16px;
    color: $green;
}

.container {
    background-repeat: no-repeat;
    background-image: url(./css01.png);
    background-size: cover;
    background-position: 50% 50%;

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