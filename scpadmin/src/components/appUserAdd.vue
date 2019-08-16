<template>
	<el-dialog
		width="520px"
		:title="isAdd?`修改用户信息`:`修改用户信息`"
		class="dialog-user-edit"
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
					<el-col :span="12">
						<el-form-item label="用户名：" prop="chargePriceModel">
							<el-input
								class="time-interal"
								style="width:96%;box-sizing: border-box;"
								v-model="formLabelAlign.bulkNumber"
								size="small"
							></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="电话：" prop="chargePriceModel">
							<el-input
								class="time-interal"
								style="width:96%;box-sizing: border-box;"
								v-model="formLabelAlign.bulkNumber"
								size="small"
							></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row type="flex" justify="space-between">
					<el-col :span="12">
						<el-form-item label="地址：" prop="chargePriceModel">
							<el-input
								class="time-interal"
								style="width:96%;box-sizing: border-box;"
								v-model="formLabelAlign.bulkNumber"
								size="small"
							></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="邮箱：" prop="chargePriceModel">
							<el-input
								class="time-interal"
								style="width:96%;box-sizing: border-box;"
								v-model="formLabelAlign.bulkNumber"
								size="small"
							></el-input>
						</el-form-item>
					</el-col>
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
    initTreeRootData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      endHoursOptions: [],
      chargePriceModelOptions: [],
      chargeStationModelOptions: [],
      chargeStationOptions: [],
      businessOptions: [],
      isCurrentShow: false,
      labelPosition: "right",
      formLabelAlign: {
        openingHours: "00:00:00",
        business: null,
        chargeStationName: null,
        endHours: "23:59:59",
        chargeStationModel: null,
        chargePriceModel: null,
        bulkNumber: null,
        version: null,
        bulk: false
      },
      rules: {
        chargeStationName: [
          { required: true, message: "名称不能为空", trigger: "blur" },
          { whitespace: true, message: "不允许输入空格", trigger: "blur" },
          { min: 1, max: 32, message: "长度在 1 到 32 个字符", trigger: "blur" }
        ],
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
    addHouseSuccessResponse(body) {}
  },
  watch: {
    isShow(val) {
      this.isCurrentShow = val;
    }
  },
  destroyed() {}
};
</script>
<style>
.dialog-user-edit .el-dialog__header {
	border-bottom: 1px solid #eeeeee;
}
.dialog-user-edit .el-dialog--center .el-dialog__body {
	text-align: initial;
	padding: 25px 35px 5px 5px;
}
.dialog-user-edit .timePickerClass {
	width: 100%;
	height: 32px;
	line-height: 32px;
}
.dialog-user-edit .el-input .el-input__inner{
	width: 100%;
}
.dialog-user-edit .timePickerClass .el-input__icon,
.dialog-user-edit .timePickerClass .el-input__inner {
	height: 32px;
	line-height: 32px;
	width: 100%;
}
</style>
<style lang="scss" scoped>
.dialog-user-edit {
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
