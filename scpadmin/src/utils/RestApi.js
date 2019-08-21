import store from '@/store/store.js';

// let httpUrlHeader = window.config.httpUrlHeader;
let httpUrlHeader = '/apis';
export default {
  api: {
    /**
     * 图片下载地址
     */
    imageUrl: `${httpUrlHeader}/fileforward-server-v1/project/${store.state.home.projectUuid}/fileforward/fileByUrl?fileUrl=`,
    /**
     * 全部翻译获取接口
     */
    queryBaseTypeByGroup: process.env.LOCAL_ENUMS,
    /**
     * 登录模块
     */
    login: {
      login: `${httpUrlHeader}/login/login`,
      logout: `${httpUrlHeader}/login/logout`,
      modifyPassword: `${httpUrlHeader}/login/modify/password`,
    },

    /**
     * 1、首页
     */
    HomeAjax: {
      trend: `${httpUrlHeader}/index/statistical/trend`,
      summary: `${httpUrlHeader}/index/statistical/summary`,
    },
    /**
     * 1、监控
     */
    RealAjax: {
      realPileData: `${httpUrlHeader}/chargePile/real/time/data`,
      realAlarmData: `${httpUrlHeader}/webAlarm/list-by-page`
    },

    /**
     * 设备管理
     */
    DeviceAjax: {
      getAddOptions: `${httpUrlHeader}/chargePile/before/add`,
      deletePile: `${httpUrlHeader}/chargePile/delete`,
      addPile: `${httpUrlHeader}/chargePile/save`,
      getPileList: `${httpUrlHeader}/chargePile/list-by-page`,
      getEditOptions: `${httpUrlHeader}/chargePile/toEdit`,
      updatePile: `${httpUrlHeader}/chargePile/update `,

      deleteChargeStation: `${httpUrlHeader}/charge/record/list-by-page`,
      getChargeStationList: `${httpUrlHeader}/charge/station/list-by-page`,
      addChargeStation: `${httpUrlHeader}/charge/station/save`,
      editChargeStationOptions: `${httpUrlHeader}/charge/station/toEdit`,
      updateChargeStation: `${httpUrlHeader}/charge/station/update`,

      deletePileFactory: `${httpUrlHeader}/manufacturer/delete`,
      getPileFactoryList: `${httpUrlHeader}/manufacturer/list-by-page`,
      addPileFactory: `${httpUrlHeader}/manufacturer/save`,
      editPileFactoryOptions: `${httpUrlHeader}/manufacturer/toEdit`,
      updatePileFactory: `${httpUrlHeader}/manufacturer/update`,
    },

    /**
     * 运营管理
     */
    BusinessAjax: {
      getChargeRecordTotal: `${httpUrlHeader}/charge/record/count`,
      exportChargeRecord: `${httpUrlHeader}/charge/record/export`,
      getChargeRecordList: `${httpUrlHeader}/charge/record/list-by-page`,
      deductRecordList: `${httpUrlHeader}/deduct/record/list`,
    },

    /**
     * 用户管理
     */
    UserAjax: {
      deleteOperator: `${httpUrlHeader}/operator/delete`,
      getOperatorList: `${httpUrlHeader}/operator/list-by-page`,
      addOperator: `${httpUrlHeader}/operator/save`,
      editOperatorOptions: `${httpUrlHeader}/operator/toEdit`,
      updateOperator: `${httpUrlHeader}/operator/update`,
    },
    /**
       * 运营统计
       */
    StaticsAjax: {

    },
    // 人脸图片质量检测
    faceQualityDetection: `/sppc-iacapp-service-v1/image/isQualified`
  }
};
