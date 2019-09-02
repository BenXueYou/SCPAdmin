<template>
	<el-dialog
		width="580px"
		:title="isAdd?`新增充电桩`:`修改充电桩`"
		class="dialog-pile-add"
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
						<el-form-item label="运营商：" prop="business">
							<el-select
								class="time-interal"
								v-model="formLabelAlign.business"
								size="small"
								clearable
								placeholder="请选择"
							>
								<el-option
									v-for="item in businessOptions"
									:key="item.operatorId"
									:label="item.operatorName"
									:value="item.operatorId"
								></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="充电站：" prop="chargeStation">
							<el-select
								class="time-interal"
								v-model="formLabelAlign.chargeStation"
								size="small"
								clearable
								placeholder="请选择"
							>
								<el-option
									v-for="item in chargeStationOptions"
									:key="item.csId"
									:label="item.csName"
									:value="item.csId"
								></el-option>
							</el-select>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row type="flex" justify="space-between">
					<el-col :span="12">
						<el-form-item label="桩名称：" prop="chargePileName">
							<el-input class="time-interal" v-model="formLabelAlign.chargePileName" size="small"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="桩厂商：" prop="chargePileFactory">
							<el-select
								class="time-interal"
								v-model="formLabelAlign.chargePileFactory"
								size="small"
								clearable
								placeholder="请选择"
							>
								<el-option
									v-for="item in chargePileFactoryOptions"
									:key="item.typeStr"
									:label="item.typeName"
									:value="item.typeStr"
								></el-option>
							</el-select>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row type="flex" justify="space-between">
					<el-col :span="12">
						<el-form-item label="桩型号：" prop="chargePileModel">
							<el-select
								class="time-interal"
								v-model="formLabelAlign.chargePileModel"
								size="small"
								clearable
								placeholder="请选择"
							>
								<el-option
									v-for="item in chargePileModelOptions"
									:key="item.typeStr"
									:label="item.typeName"
									:value="item.typeStr"
								></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="计费模板：" prop="chargePriceModel">
							<el-select
								class="time-interal"
								v-model="formLabelAlign.chargePriceModel"
								size="small"
								clearable
								placeholder="请选择"
							>
								<el-option
									v-for="item in chargePriceModelOptions"
									:key="item.typeStr"
									:label="item.typeName"
									:value="item.typeStr"
								></el-option>
							</el-select>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row type="flex" justify="space-between">
					<el-col :span="12">
						<el-form-item label="批量增加:">
							<el-switch v-model="formLabelAlign.bulk"></el-switch>
						</el-form-item>
					</el-col>
					<el-col :span="12" v-if="formLabelAlign.bulk">
						<el-form-item label="设置个数：" prop="roomsType">
							<el-input class="time-interal" v-model="formLabelAlign.bulkNumber" size="small"></el-input>
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
      chargePileFactoryOptions: [],
      chargePriceModelOptions: [],
      chargePileModelOptions: [],
      chargeStationOptions: [],
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
    this.businessOptions = this.$store.state.home.operatorArr;
    this.chargeStationOptions = this.$store.state.home.chargeStationArr;
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
.dialog-pile-add .el-dialog__header {
	border-bottom: 1px solid #eeeeee;
}
.dialog-pile-add .el-dialog--center .el-dialog__body {
	text-align: initial;
	padding: 25px 35px 5px 15px;
}
</style>
<style lang="scss" scoped>
.dialog-pile-add {
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
