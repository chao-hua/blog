<template>
    <ul class="justify-list">
        <li></li>&nbsp;
        <li></li>&nbsp;
        <li></li>&nbsp;
        <li></li>&nbsp;
        <li></li>&nbsp;
        <li></li>&nbsp;
        <li class="justify-fix"></li>&nbsp;
        <li class="justify-fix"></li>&nbsp;
    </ul>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
@import '../../src/style/variables.scss';

.justify-list {
    list-style: none;
    text-align: justify;
    text-align-last: justify;
    text-justify: inter-ideograph;
    font-size: 0;
    border: solid 1px $green;
    padding: 0 10px;
}

.justify-list:after {
    width: 100%;
    height: 0;
    display: inline-block;
    overflow: hidden;
    content: '';
}

.justify-list li {
    display: inline-block;
    height: 50px;
    width: 200px;
    background-color: $green;
    margin: 10px 0;
}

.justify-list .justify-fix {
    display: inline-block;
    width: 200px;
    height: 0;
    overflow: hidden;
}
</style>