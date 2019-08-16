<template>
	<el-row
		class="ChargeRecord"
		v-loading="mainScreenLoading"
		element-loading-background="rgba(0, 0, 0, 0.8)"
	>
		<div class="titleBox">
			位置：
			<span>运营管理／充电记录</span>
		</div>
		<div class="bodyBox">
			<div class="topMenu flex-sbw" style="padding-bottom:10px">
				<div class="flex-sbw-div">
					<div class="flex-sbw">
						<div class="flex-sbw-div topTitleTxt flex-sbw-item">
							<span>用户名：</span>
							<el-input v-model="station"></el-input>
						</div>
						<div class="flex-sbw-div topTitleTxt flex-sbw-item">
							<span>充电桩ID：</span>
							<el-input v-model="station"></el-input>
						</div>
						<div class="flex-sbw-div topTitleTxt flex-sbw-item">
							<span>手机号：</span>
							<el-input v-model="station"></el-input>
						</div>
						<div class="dateBox">
							<span class="topTitleTxt">充电时间：</span>
							<el-date-picker
								v-model="beginTime"
								type="datetime"
								class="time-interal-date"
								size="small"
								placeholder="选择日期"
								value-format="yyyy-MM-dd HH:mm:ss"
							></el-date-picker>
							<span class="time-line">—</span>
							<el-date-picker
								v-model="endTime"
								type="datetime"
								class="time-interal-date"
								placeholder="选择日期"
								size="small"
								value-format="yyyy-MM-dd HH:mm:ss"
							></el-date-picker>
						</div>
					</div>
				</div>
			</div>
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
					<span class="topTitleTxt">充电方式：</span>
					<el-select
						class="left-space time-interal"
						v-model="operator"
						clearable
						placeholder="充电方式"
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
			</div>
			<div class="topMenu flex-st" style="margin-bottom: 5px;">
				<el-button type="primary" @click="deleteBtnAct" style="margin:-5px 10px 0">批量导出</el-button>
				<el-button type="primary" @click="queryBtnAct" style="margin:-5px 10px 0">查询</el-button>
			</div>
			<el-table :data="tableData" stripe border style="width: 100%">
				<el-table-column type="selection" width="55"></el-table-column>
				<el-table-column type="index" width="55" label="序号"></el-table-column>
				<el-table-column prop="date" label="运营商"></el-table-column>
				<el-table-column prop="name" label="充电站"></el-table-column>
				<el-table-column prop="name" label="充电桩序列号"></el-table-column>
				<el-table-column prop="province" label="充电类型"></el-table-column>
				<el-table-column prop="city" label="充电模式"></el-table-column>
				<el-table-column prop="city" label="停机原因"></el-table-column>
				<el-table-column prop="zip" label="交易状态"></el-table-column>
				<el-table-column prop="zip" label="充电开始时间"></el-table-column>
				<el-table-column prop="zip" label="充电结束时间"></el-table-column>
				<el-table-column prop="zip" label="大占比段"></el-table-column>
				<el-table-column prop="zip" label="充电卡号/用户ID"></el-table-column>
				<el-table-column prop="zip" label="订单编号"></el-table-column>
				<el-table-column prop="zip" label="用户姓名"></el-table-column>
				<el-table-column prop="zip" label="手机号"></el-table-column>
				<el-table-column prop="zip" label="充电电量"></el-table-column>
				<el-table-column prop="zip" label="充电站编号"></el-table-column>
				<el-table-column prop="zip" label="充电总金额"></el-table-column>
				<el-table-column prop="zip" label="服务费"></el-table-column>
				<el-table-column prop="zip" label="基础电费"></el-table-column>
				<el-table-column prop="zip" label="充电时长"></el-table-column>
				<el-table-column prop="zip" label="充电前金额"></el-table-column>
				<el-table-column prop="zip" label="充电后金额"></el-table-column>
				<el-table-column prop="zip" label="电表总电量"></el-table-column>
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
	</el-row>
</template>
<script>
export default {
  components: {
    // ChargeRecordAdd
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
.ChargeRecord .flex-sbw-item {
	margin: 0 10px;
}
.ChargeRecord .dateBox {
	margin-left: 30px;
}
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
	.ChargeRecord .dateBox {
		margin-left: 30px !important;
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
