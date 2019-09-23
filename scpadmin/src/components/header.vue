<template>
	<el-row class="header">
		<div class="headLeft logo">
			<img src="@/assets/sk_logo.png" alt="" srcset="">
		</div>
		<div class="headTop"></div>
	</el-row>
</template>
<script>
export default {};
</script>
<style scoped lang='scss'>
@import "@/style/variables.scss";
.header {
	height: 100%;
	padding: 0;
	.headLeft {
		width: 20%;
		height: 100%;
		max-width: 200px;
		background: $--color-left-menu;
		img{
			width: 100%;
			height: 100%;
		}
	}
}
</style>
