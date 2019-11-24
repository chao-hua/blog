<template>
    <div class="container">
        <div id="cube">
            <div class="front">1</div>
            <div class="back">2</div>
            <div class="right">3</div>
            <div class="left">4</div>
            <div class="top">5</div>
            <div class="bottom">6</div>
        </div>
    </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.container {
    margin: 50px;
    padding: 10px;
    border: 1px solid #666;
    width: 200px;
    height: 200px;
    position: relative;
    perspective: 500px;
}

#cube {
    width: 200px;
    height: 200px;
    transform-style: preserve-3d;
    transform: translateZ(-100px);
    transition: transform .4s;
}

#cube div {
    width: 200px;
    height: 200px;
    position: absolute;
    line-height: 200px;
    font-size: 50px;
    text-align: center;
}

#cube:hover {
    // transform: translateZ(-100px) rotateX(270deg);
    transform: translateZ(-100px) rotateX(90deg) rotateY(90deg);
}

.front {
    transform: translateZ(100px);
    /* transform: translateX(100px); */
    /* transform: translateX(100px) translateY(10px) rotate(25deg); */
    /* transform: rotate(25deg) translateX(100px) translateY(10px); */
    background: rgba(255, 0, 0, .1);
}

.back {
    /* transform: translateZ(-100px); */
    transform: translateZ(-100px) rotateY(180deg);
    background: rgba(0, 255, 0, .3);
}

.left {
    transform: translateX(-100px) rotateY(-90deg);
    background: rgba(0, 0, 255, .3);
}

.right {
    transform: translateX(100px) rotateY(90deg);
    background: rgba(255, 255, 0, .3);
}

.top {
    transform: translateY(-100px) rotateX(-90deg);
    background: rgba(255, 0, 255, .3);
}

.bottom {
    transform: translateY(100px) rotateX(90deg);
    background: rgba(0, 255, 255, .3);
}
</style>