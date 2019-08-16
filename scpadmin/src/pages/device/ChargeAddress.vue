<template>
	<el-row
		class="chargeAddress"
		v-loading="mainScreenLoading"
		element-loading-background="rgba(0, 0, 0, 0.8)"
	>
		<div class="titleBox">
			位置：
			<span>设备管理／充电桩地址</span>
		</div>
		<div class="bodyBox">
			<div class="topMenu flex-sbw">
				<div class="flex-sbw">
					<div class="flex-sbw-div">
						<span class="topTitleTxt">省：</span>
						<el-select
							class="left-space time-interal"
							v-model="operator"
							clearable
							placeholder="报警类型"
							size="small"
						>
							<el-option
								v-for="item in operatorOptions"
								:key="item.typeStr"
								:label="item.typeName"
								:value="item.typeStr"
							></el-option>
						</el-select>
					</div>
					<div class="flex-sbw-div">
						<span class="topTitleTxt">市：</span>
						<el-select
							class="left-space time-interal"
							v-model="station"
							clearable
							placeholder="处理状态"
							size="small"
						>
							<el-option
								v-for="item in stationOptions"
								:key="item.typeStr"
								:label="item.typeName"
								:value="item.typeStr"
							></el-option>
						</el-select>
					</div>
					<div class="flex-sbw-div">
						<span class="topTitleTxt">区：</span>
						<el-select
							class="left-space time-interal"
							v-model="station"
							clearable
							placeholder="处理状态"
							size="small"
						>
							<el-option
								v-for="item in stationOptions"
								:key="item.typeStr"
								:label="item.typeName"
								:value="item.typeStr"
							></el-option>
						</el-select>
					</div>
					<div class="flex-sbw-div topTitleTxt">
						<span>地址：</span>
						<el-input style="width:auto" v-model="station"></el-input>
					</div>
				</div>
				<el-button type="primary" @click="queryBtnAct" style="margin-bottom:10px;">查询</el-button>
			</div>
			<el-table :data="tableData" stripe border style="width: 100%">
				<el-table-column type="selection" width="55"></el-table-column>
				<el-table-column type="index" width="55" label="序号"></el-table-column>
				<el-table-column prop="date" label="省"></el-table-column>
				<el-table-column prop="name" label="市"></el-table-column>
				<el-table-column prop="province" label="区"></el-table-column>
				<el-table-column prop="city" label="地址" show-overflow-tooltip></el-table-column>
				<el-table-column prop="province" label="经度"></el-table-column>
				<el-table-column prop="zip" label="纬度"></el-table-column>
				<el-table-column label="操作">
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
		<charge-address-edit :isShow="isShowEidtDialog" @onCancel="close()" ref="houseTable" />
	</el-row>
</template>
<script>
import ChargeAddressEdit from "@/components/ChargeAddressEdit";
export default {
  components: {
    ChargeAddressEdit
  },
  mounted: function() {},
  data: function() {
    return {
      isShowEidtDialog: false,
      pageSize: 15,
      pageSizeArr: window.config.pageSizeArr,
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
      console.log(row);
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
<style>
.chargeAddress .el-input__inner {
	width: 120px;
	height: 32px;
}
</style>
<style lang='scss' scoped>
@import "@/style/variables.scss";
.chargeAddress {
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
			.flex-sbw-div {
				margin: 0 25px 0 15px;
				.el-input {
					.el-input__inner {
						width: 120px;
					}
				}
			}
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
