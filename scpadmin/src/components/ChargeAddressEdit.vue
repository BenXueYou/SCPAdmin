<template>
	<el-dialog
		width="480px"
		:title="isAdd?`修改充电桩地址`:`修改充电桩地址`"
		class="dialog-address-edit"
		center
		:visible.sync="isCurrentShow"
		:before-close="onClickCancel"
		:close-on-click-modal="false"
	>
		<div class="dialog-content">
			<!--内容-->
			<el-form
				:rules="rules"
				ref="addHouseForm"
				:label-position="labelPosition"
				label-width="120px"
				:model="formLabelAlign"
				class="info-form"
			>
				<el-row type="flex" justify="space-between">
					<el-form-item label="省：" prop="province">
						<el-select
							class="time-interal"
							v-model="formLabelAlign.province"
							size="small"
							clearable
							placeholder="请选择省"
							@change="provinceChangeAct"
						>
							<el-option
								v-for="item in provinceOptions"
								:key="item.province"
								:label="item.province"
								:value="item.provinceId"
							></el-option>
						</el-select>
					</el-form-item>
				</el-row>
				<el-row type="flex" justify="space-between">
					<el-form-item label="市：" prop="city">
						<el-select
							class="time-interal"
							v-model="formLabelAlign.cityName"
							size="small"
							clearable
							placeholder="请选择市"
							@change="cityChangeAct"
						>
							<el-option
								v-for="item in cityOptions"
								:key="item.cityId"
								:label="item.cityName"
								:value="item.cityId"
							></el-option>
						</el-select>
					</el-form-item>
				</el-row>
				<el-row type="flex" justify="space-between">
					<el-form-item label="区：" prop="area">
						<el-select
							class="time-interal"
							v-model="formLabelAlign.areaId"
							size="small"
							clearable
							placeholder="请选择区"
						>
							<el-option
								v-for="item in areaOptions"
								:key="item.areaId"
								:label="item.areaName"
								:value="item.areaId"
							></el-option>
						</el-select>
					</el-form-item>
				</el-row>
				<el-row type="flex" justify="space-between">
					<el-form-item label="地址：" prop="address">
						<el-input style="width:auto" v-model="formLabelAlign.addressName"></el-input>
					</el-form-item>
				</el-row>
			</el-form>
		</div>
		<div slot="footer" class="dialog-footer">
			<el-button type="primary" @click="onClickConfirm" size="small">确定</el-button>
			<el-button type="primary" @click="onClickCancel" size="small">取消</el-button>
		</div>
	</el-dialog>
</template>

<script>
// import PopoverTreeForBottom from "@/pages/buildingsHouse/components/PopoverTreeForBottom";

export default {
  components: {
    // PopoverTreeForBottom,
  },
  props: {
    isAdd: {
      type: Boolean,
      default: true
    },
    isShow: {
      type: Boolean,
      default: false
    },
    rowData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      provinceOptions: [],
      cityOptions: [],
      areaOptions: [],
      isCurrentShow: false,
      labelPosition: "right",
      formLabelAlign: {
        province: null,
        city: null,
        area: null,
        address: null,
        bulk: false
      },
      rules: {
        openingHours: [
          { required: true, message: "充电站不能为空", trigger: "change" }
        ],
        chargePriceModel: [
          { required: true, message: "计费模板不能为空", trigger: "change" }
        ],
        endHours: [
          { required: true, message: "充电桩厂商不能为空", trigger: "change" }
        ],
        chargeStationModel: [
          { required: true, message: "充电桩型号不能为空", trigger: "change" }
        ],
        business: [
          { required: true, message: "运营商不能为空", trigger: "change" }
        ]
      }
    };
  },
  created() {},
  mounted() {
    this.provinceOptions = this.$store.state.home.provinceArr;
    this.initData();
  },
  methods: {
    initData() {
      this.houseTypeOptions = [];
      this.houseUseOptions = [];
    },
    setUseData() {},
    onClickCancel() {
      this.$emit("onCancel");
    },
    onClickConfirm() {
      this.$refs.addHouseForm.validate(valid => {
        if (valid) {
          this.addHouse();
        } else {
          this.$cToast.error("请正确填写内容");
        }
      });
    },
    addHouse() {},
    addHouseSuccessResponse(body) {},
    provinceChangeAct() {
      this.$deviceAjax
        .getCityByProvinceId({ provinceId: this.province })
        .then(res => {
          if (res.data.success) {
            this.cityOptions = res.data.model;
          } else {
            this.$message({ type: "warning", message: res.data.errMsg });
          }
        })
        .catch(() => {});
    },
    cityChangeAct() {
      this.$deviceAjax
        .getAreaListByCityId({ cityId: this.city })
        .then(res => {
          if (res.data.success) {
            this.areaOptions = res.data.model;
          } else {
            this.$message({ type: "warning", message: res.data.errMsg });
          }
        })
        .catch(() => {});
    }
  },
  watch: {
    isShow(val) {
      this.isCurrentShow = val;
    },
    rowData(val) {
      this.formLabelAlign = JSON.parse(JSON.stringify(val));
      this.cityOptions = val.cityList;
      this.areaOptions = val.areaList;
    }
  },
  destroyed() {}
};
</script>
<style>
.dialog-address-edit .el-dialog__header {
	border-bottom: 1px solid #eeeeee;
}
.dialog-address-edit .el-dialog--center .el-dialog__body {
	text-align: initial;
	padding: 25px 35px 5px 35px;
}
.dialog-address-edit .timePickerClass {
	width: 100%;
	height: 32px;
	line-height: 32px;
}
.dialog-address-edit .el-input .el-input__inner {
	width: 100%;
}
.dialog-address-edit .timePickerClass .el-input__icon,
.dialog-address-edit .timePickerClass .el-input__inner {
	height: 32px;
	line-height: 32px;
	width: 100%;
}
</style>
<style lang="scss" scoped>
.dialog-address-edit {
	.dialog-content {
		box-sizing: border-box;
	}
	.dialog-footer {
		padding: 0 0 4% 0;
		box-sizing: border-box;
	}
	.topTitleTxt {
		font-family: "PingFangSC-Regular";
		font-size: 14px;
		color: #cccccc;
	}
	.time-interal {
		width: 90%;
	}
	.info-form {
		// width: 85%;
		margin: 0 auto;
	}
	.el-form-item {
		margin-bottom: 15px;
	}
}
.el-dialog__header {
	background-color: red;
}
</style>
