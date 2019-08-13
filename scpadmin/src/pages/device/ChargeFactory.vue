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
				<div class="flex-sbw-div">
					<span class="topTitleTxt">运营商：</span>
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
					<span class="topTitleTxt">充电站：</span>
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
					<span class="topTitleTxt">时间：</span>
					<el-date-picker
						v-model="beginTime"
						type="datetime"
						class="time-interal-date"
						size="small"
						placeholder="选择日期"
						value-format="yyyy-MM-dd HH:mm:ss"
					></el-date-picker>
					<span class="time-line"></span>
					<el-date-picker
						v-model="endTime"
						type="datetime"
						class="time-interal-date"
						placeholder="选择日期"
						size="small"
						value-format="yyyy-MM-dd HH:mm:ss"
					></el-date-picker>
				</div>
				<el-button type="mini" @click="queryBtnAct">查询</el-button>
			</div>
			<div class="topMenu">
				<el-button type="primary" @click="addBtnAct" style="margin-bottom:10px;">新增</el-button>
				<el-button type="primary" @click="deleteBtnAct">删除</el-button>
				<el-button type="primary" @click="exportBtnAct">导出</el-button>
			</div>
			<el-table :data="tableData" border style="width: 100%">
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
						<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
						<el-button type="text" size="small">编辑</el-button>
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
  mounted: function() {},
  data: function() {
    return {
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
    queryBtnAct() {},
    addBtnAct() {},
    deleteBtnAct() {},
    exportBtnAct() {},
    handleClick(row) {
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
