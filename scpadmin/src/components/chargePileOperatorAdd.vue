<template>
	<el-dialog
		width="580px"
		:title="isAdd?`新增运营商`:`修改运营商`"
		class="dialog-factory-add"
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
						<el-form-item label="运营商：" prop="chargePileName">
							<el-input class="time-interal" v-model="formLabelAlign.chargePileName" size="small"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="联系人：" prop="chargePileName">
							<el-input class="time-interal" v-model="formLabelAlign.chargePileName" size="small"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row type="flex" justify="space-between">
					<el-col :span="12">
						<el-form-item label="电话：" prop="chargePileName">
							<el-input class="time-interal" v-model="formLabelAlign.chargePileName" size="small"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="邮箱：" prop="chargePileName">
							<el-input class="time-interal" v-model="formLabelAlign.chargePileName" size="small"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row type="flex" justify="space-between">
					<el-col :span="24">
						<el-form-item label="地址：" prop="chargeStationModel">
							<el-input style="width:96.5%" class="time-interal" v-model="formLabelAlign.chargePileName" size="small"></el-input>
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
export default {
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
      chargePileFactoryOptions: [],
      chargePriceModelOptions: [],
      chargePileModelOptions: [],
      chargeStationModelOptions: [],
      businessOptions: [],
      isCurrentShow: false,
      labelPosition: "right",
      formLabelAlign: {
        chargeStation: null,
        business: null,
        chargePileName: null,
        chargePileFactory: null,
        chargePileModel: null,
        chargePriceModel: null,
        bulkNumber: null,
        version: null,
        bulk: false
      },
      rules: {
        chargePileName: [
          { required: true, message: "名称不能为空", trigger: "blur" },
          { whitespace: true, message: "不允许输入空格", trigger: "blur" },
          { min: 1, max: 32, message: "长度在 1 到 32 个字符", trigger: "blur" }
        ],
        chargeStation: [
          { required: true, message: "充电站不能为空", trigger: "change" }
        ],
        chargePriceModel: [
          { required: true, message: "计费模板不能为空", trigger: "change" }
        ],
        chargePileFactory: [
          { required: true, message: "充电桩厂商不能为空", trigger: "change" }
        ],
        chargePileModel: [
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
.dialog-factory-add .el-dialog__header {
	border-bottom: 1px solid #eeeeee;
}
.dialog-factory-add .el-dialog--center .el-dialog__body {
	text-align: initial;
	padding: 25px 35px 20px 5px;
}
</style>
<style lang="scss" scoped>
.dialog-factory-add {
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
		margin-bottom: 12px;
	}
}
.el-dialog__header {
	background-color: red;
}
</style>
