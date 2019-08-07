<template>
	<div class="box">
		<el-container>
			<el-header>
				<sk-header></sk-header>
			</el-header>
			<el-container class="container">
				<left-menu class="left-menu"></left-menu>
				<el-main>
					<keep-alive>
						<router-view></router-view>
					</keep-alive>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
import leftMenu from "@/components/leftMenu.vue";
import skHeader from "@/components/header.vue";
export default {
  components: { leftMenu, skHeader },
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {
    // this.$router.push({ name: "AccessGroupConfig" });
  },
  methods: {},
  watch: {},
  destroyed() {}
};
</script>
<style>
.box .el-table {
	overflow: auto !important;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/style/variables.scss";
.box {
	display: flex;
	justify-content: space-between;
	height: 100%;
	color: #cccccc;
	.editFontClass {
		font-family: "PingFangSC-Regular";
		font-size: 13px;
		color: #26d39d;
		margin: 0 10px;
	}
	.deleteBtnClass {
		font-family: "PingFangSC-Regular";
		font-size: 13px;
		color: #ff5f5f;
	}
	.el-container,
	.container {
		width: 100%;
		.el-header{
			padding: 0;
		}
		.left-menu {
			width: 20%;
			max-width: 200px;
			background: $--color-left-menu;
		}
		.el-main{
			background-color: #efefef;
		}
	}
}
</style>
