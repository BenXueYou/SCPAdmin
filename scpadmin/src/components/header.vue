<template>
	<el-row class="header">
		<div class="headLeft logo">
			<img src="@/assets/logo.png" alt="" srcset="">
		</div>
		<div class="headTop"></div>
	</el-row>
</template>
<script>
export default {};
</script>
<style scoped lang='scss'>
@import '@/style/variables.scss';
.header {
	height: 100%;
	padding: 0;
	.headLeft {
		width: 20%;
		max-width: 200px;
		background: $--color-left-menu;
	}
}
</style>
