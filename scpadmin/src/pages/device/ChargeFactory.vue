<template>
	<el-row
		class="chargeFactory"
		v-loading="mainScreenLoading"
		element-loading-background="rgba(0, 0, 0, 0.8)"
	>
		<div class="titleBox">
			位置：
			<span>设备管理／充电桩厂商</span>
		</div>
		<div class="bodyBox">
			<div class="topMenu flex-sbw">
				<div class="flex-sbw">
					<el-button type="primary" @click="addBtnAct" style="margin:0 10px;">新增</el-button>
					<el-button type="primary" @click="deleteBtnAct" style="margin:0 10px;">删除</el-button>
					<div class="flex-sbw-div topTitleTxt" style="margin:0 10px;">
						<span>运营商：</span>
						<el-input style="width:auto" v-model="operator"></el-input>
					</div>
					<div class="flex-sbw-div topTitleTxt" style="margin:0 10px;">
						<span>地址：</span>
						<el-input style="width:auto" v-model="address"></el-input>
					</div>
				</div>
				<el-button type="primary" @click="queryBtnAct" style="margin-bottom:10px;margin-right:5%">查询</el-button>
			</div>
			<el-table :data="tableData" stripe border style="width: 100%">
				<el-table-column type="selection" width="55"></el-table-column>
				<el-table-column type="index" width="55" label="序号"></el-table-column>
				<el-table-column prop="date" label="桩厂商"></el-table-column>
				<el-table-column prop="name" label="桩型号"></el-table-column>
				<el-table-column prop="province" label="桩类型"></el-table-column>
				<el-table-column prop="city" label="桩相数"></el-table-column>
				<el-table-column prop="province" label="桩枪数"></el-table-column>
				<el-table-column prop="zip" label="纬度"></el-table-column>
				<el-table-column label="操作" width="100">
					<template slot-scope="scope">
						<el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
					</template>
				</el-table-column>
			</el-table>
			<div class="footer">
				<el-pagination
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
					:current-page="currentPage"
					:page-sizes="pageSizeArr"
					:page-size="pageSize"
					layout="total, sizes, prev, pager, next, jumper"
					:total="total"
				></el-pagination>
			</div>
		</div>
		<charge-factory-add :isShow="isShowEidtDialog" @onCancel="close()" ref="houseTable" />
	</el-row>
</template>
<script>
import ChargeFactoryAdd from "@/components/ChargeFactoryAdd";
export default {
  components: {
    ChargeFactoryAdd
  },
  mounted: function() {},
  data: function() {
    return {
      isShowEidtDialog: false,
      pageSizeArr: window.config.pageSizeArr,
      pageSize: 15,
      currentPage: 1,
      total: 10,
      beginTime: null,
      endTime: null,
      operatorOptions: [],
      station: null,
      stationOptions: [],
      operator: null,
      mainScreenLoading: false,
      tableData: window.config.tableData
    };
  },
  methods: {
    close() {
      this.isShowEidtDialog = !this.isShowEidtDialog;
    },
    queryBtnAct() {},
    addBtnAct() {
      this.isShowEidtDialog = !this.isShowEidtDialog;
    },
    deleteBtnAct() {},
    exportBtnAct() {},
    handleClick(row) {
      this.isShowEidtDialog = !this.isShowEidtDialog;
    },
    handleCurrentChange(val) {
      console.log("页数发生变化：", val);
      this.currentPage = val;
    },
    handleSizeChange(val) {
      console.log("每页条数发生变化：", val);
      this.pageSize = val;
    }
  },
  watch: {}
};
</script>
<style lang='scss' scoped>
@import "@/style/variables.scss";
.chargeFactory {
	text-align: center;
	height: 100%;
	.titleBox {
		text-align: left;
		color: $--color-title-txt;
		padding: 3px 15px 13px;
	}
	.bodyBox {
		background-color: #ffffff;
		padding: 25px 32px;
		border-radius: 5px;
		.topMenu {
			text-align: left;
			.topTitleTxt {
				color: #999999;
			}
		}
		.flex-sbw {
			display: flex;
			justify-content: space-between;
			padding-bottom: 15px;
			.el-button {
				color: #ffffff;
				background-color: #5b9cf8;
				border-color: #5b9cf8;
			}
		}
		.footer {
			margin-top: 30px;
			text-align: right;
		}
	}
}
</style>
