<template>
	<el-row
		class="chargeStation"
		v-loading="mainScreenLoading"
		element-loading-background="rgba(0, 0, 0, 0.8)"
	>
		<div class="titleBox">
			位置：
			<span>设备管理／充电站</span>
		</div>
		<div class="bodyBox">
			<div class="topMenu flex-sbw">
				<div class="flex-sbw-div">
					<span class="topTitleTxt">运营商：</span>
					<el-select
						class="left-space time-interal"
						v-model="queryModel.operatorId"
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
						v-model="queryModel.csId"
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
						v-model="startTime"
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
			<el-table :data="tableData" stripe border style="width: 100%">
				<el-table-column type="selection" width="55"></el-table-column>
				<el-table-column type="index" width="55" label="序号"></el-table-column>
				<el-table-column prop="csName" label="充电站"></el-table-column>
				<el-table-column prop="name" label="地址"></el-table-column>
				<el-table-column prop="province" label="运营商"></el-table-column>
				<el-table-column prop="openTime" label="开放时间"></el-table-column>
				<el-table-column prop="gmtCreate" label="建站日期"></el-table-column>
				<el-table-column label="操作">
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
		<charge-station-add :isShow="isShowAddDialog" @onCancel="close()" ref="houseTable" />
	</el-row>
</template>
<script>
import ChargeStationAdd from "@/components/ChargeStationAdd";
export default {
  components: {
    ChargeStationAdd
  },
  mounted: function() {},
  data: function() {
    return {
      queryModel: {
        addressId: 0,
        area: "string",
        areaId: 0,
        city: "string",
        cityId: 0,
        csId: 0,
        csName: "string",
        endTime: "string",
        location: "string",
        openTime: "string",
        operatorId: 0,
        parkFee: 0,
        property: 0,
        province: "string",
        provinceId: 0,
        startTime: "string",
        validFlag: 0
      },
      isShowAddDialog: false,
      pageSizeArr: window.config.pageSizeArr,
      pageSize: 15,
      currentPage: 1,
      total: 10,
      startTime: null,
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
    initData() {
      this.queryModel.startTime = this.startTime;
      this.queryModel.endTime = this.endTime;
      var data = {
        model: this.queryModel,
        pageIndex: this.currentPage,
        pageSize: this.pageSize,
        queryCount: true,
        start: 0
      };
      this.$deviceAjax
        .getChargeStationList(data)
        .then(res => {
          if (res.data.succcess) {
            this.tableData = res.data.model;
            this.total = res.data.totalCount;
          }
        })
        .catch(() => {});
    },
    addData(data) {
      this.$deviceAjax
        .addChargeStation(data)
        .then(res => {
          if (res.data && res.data.succcess) {
            this.$message({ type: "success", message: "添加成功！" });
            this.initData();
          } else {
            this.$message({ type: "error", message: "添加失败" });
          }
        })
        .catch(() => {});
    },
    updateData(data) {
      this.$deviceAjax
        .updateChargeStation(data)
        .then(res => {
          if (res.data && res.data.succcess) {
            this.$message({ type: "success", message: "修改成功！" });
            this.initData();
          } else {
            this.$message({ type: "error", message: "添加失败" });
          }
        })
        .catch(() => {});
    },
    deleteBtnAct(data) {
      this.$confirm("是否从该标签中移出?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.deleteData(data);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    deleteData(data) {
      this.$deviceAjax
        .deletePileFactory(data)
        .then(res => {
          if (res.data && res.data.succcess) {
            this.$message({ type: "success", message: "删除成功！" });
            this.initData();
          } else {
            this.$message({ type: "error", message: "删除失败" });
          }
        })
        .catch(() => {});
    },
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
.chargeStation {
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
