<template>
	<el-row
		class="ChargeRecord"
		v-loading="mainScreenLoading"
		element-loading-background="rgba(0, 0, 0, 0.8)"
	>
		<div class="titleBox">
			位置：
			<span>设备监控／充电监控</span>
		</div>
		<div class="bodyBox">
			<div class="topMenu flex-st" style="margin-bottom: 15px;">
				<div class="flex-sbw-div">
					<span class="topTitleTxt">运营商：</span>
					<el-select
						class="left-space time-interal"
						v-model="operator"
						clearable
						placeholder="运营商"
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
					<span class="topTitleTxt">充电站：</span>
					<el-select
						class="left-space time-interal"
						v-model="operator"
						clearable
						placeholder="充电站"
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
					<span class="topTitleTxt">充电桩类型：</span>
					<el-select
						class="left-space time-interal"
						v-model="operator"
						clearable
						placeholder="充电桩类型"
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
					<span class="topTitleTxt">充电桩状态：</span>
					<el-select
						class="left-space time-interal"
						v-model="operator"
						clearable
						placeholder="充电桩状态"
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
				<el-button type="primary" @click="queryBtnAct" style="margin:-5px 10px 0">查询</el-button>
			</div>
			<el-table :data="tableData" stripe border style="width: 100%">
				<el-table-column type="selection" width="55"></el-table-column>
				<el-table-column type="index" width="55" label="序号"></el-table-column>
				<el-table-column prop="id" label="充电桩序列号" width="180"></el-table-column>
				<el-table-column prop="date" label="运营商" width="120"></el-table-column>
				<el-table-column prop="name" label="充电站" width="150"></el-table-column>
				<el-table-column prop="index" label="枪号" width="60"></el-table-column>
				<el-table-column prop="province" label="枪状态" width="100"></el-table-column>
				<el-table-column prop="city" label="SOC" width="100"></el-table-column>
				<el-table-column prop="zip" label="充电电量(kWh)" width="100"></el-table-column>
				<el-table-column prop="zip" label="充电金额(元)" width="100"></el-table-column>
				<el-table-column prop="zip" label="已充时间(分)" width="100"></el-table-column>
				<el-table-column prop="zip" label="功率(kw)"></el-table-column>
				<el-table-column prop="zip" label="电压(V)"></el-table-column>
				<el-table-column prop="zip" label="电流(A)" ></el-table-column>
				<el-table-column prop="zip" label="电池组最高温度(°C)" width="120"></el-table-column>
				<el-table-column prop="zip" label="电池组最低温度" width="100"></el-table-column>
				<el-table-column prop="zip" label="单体电池最高温度(°C)" width="120"></el-table-column>
				<el-table-column prop="zip" label="单体组最低温度" width="100"></el-table-column>
				<el-table-column prop="zip" label="充电机温度(°C)" width="120"></el-table-column>
				<el-table-column prop="zip" label="充电导引电压(V)" width="100"></el-table-column>
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
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
		<charge-record-detail :visible.sync="isShowAddDialog" @onCancel="close()" ref="houseTable" />
	</el-row>
</template>
<script>
import ChargeRecordDetail from "@/components/ChargeRecordDetail";
export default {
  components: {
    ChargeRecordDetail
  },
  mounted: function() {},
  data: function() {
    return {
      isShowAddDialog: false,
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
      this.isShowAddDialog = !this.isShowAddDialog;
    },
    queryBtnAct() {},
    addBtnAct() {
      this.isShowAddDialog = !this.isShowAddDialog;
    },
    deleteBtnAct() {},
    exportBtnAct() {},
    handleClick(row) {
      console.log(row);
      this.isShowAddDialog = !this.isShowAddDialog;
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
.ChargeRecord .flex-sbw-item .el-input,
.ChargeRecord .flex-sbw-item .el-input__inner {
	width: 160px;
	height: 32px;
}
.ChargeRecord .el-date-editor.el-input,
.ChargeRecord .el-date-editor.el-input__inner {
	width: 190px;
}
.ChargeRecord .el-input--suffix .el-input__inner {
	padding-right: 10px;
}

@media screen and (max-width: 1540px) {
	.ChargeRecord .flex-sbw-item {
		margin-right: 5px !important;
	}
	.ChargeRecord .flex-sbw-item .el-input,
	.ChargeRecord .flex-sbw-item .el-input__inner {
		width: 120px;
		height: 32px;
	}
	.ChargeRecord .el-date-editor.el-input,
	.ChargeRecord .el-date-editor.el-input__inner {
		width: 180px;
	}
	.ChargeRecord .el-input--suffix .el-input__inner {
		padding-right: 10px !important;
	}
}
</style>

<style lang='scss' scoped>
@import "@/style/variables.scss";
.ChargeRecord {
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
		.flex-st {
			display: flex;
			justify-content: flex-start;
			padding-bottom: 15px;
			.flex-sbw-div {
				margin: 0 10px;
			}
			.el-button {
				color: #ffffff;
				background-color: #5b9cf8;
				border-color: #5b9cf8;
				// height: 32px;
				// line-height: 32px;
			}
		}
		.footer {
			margin-top: 30px;
			text-align: right;
		}
	}
}
</style>
