<template>
	<section>
		<div class="ellipsis-box">
		    <div class="ellipsis-con">短的文字</div>
		    <div class="ellipsis-icon">…</div>
		</div>
		<br>	
		<div class="ellipsis-box">
		    <div class="ellipsis-con">英国王室的拥趸正在伦敦圣玛丽医院林都院区外扎营，等待凯特王妃产子。</div>
		    <div class="ellipsis-icon">…</div>
		</div>
	</section>
    
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
@import '../../src/style/variables.scss';

.ellipsis-box {
    border: solid 1px $green;
    width: 200px;
    line-height: 1.3em;
    overflow: hidden;
    zoom: 1;
}

.ellipsis-box .ellipsis-con {
    float: left;
    height: 1.3em;
    margin-right: 1.5em;
    overflow: hidden;
}

.ellipsis-box .ellipsis-icon {
    width: 1.5em;
    float: right;
    margin-top: -1.3em;
}
</style>