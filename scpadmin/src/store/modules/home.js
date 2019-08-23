// import Cookies from 'js-cookie'
import { Storage } from "@/utils/Storage";

const home = {
  state: {
    // localTag: Cookies.get('localTag') || 'Home',
    operatorArr: Storage.readSession("operatorArr") || [],
    chargeStationArr: Storage.readSession("chargeStationArr") || [],
    localTag: Storage.readSession("localTag") || "Home",
    localEnums: Storage.read("localEnums") || {},
    Authorization: Storage.readSession("Authorization") || "",
    projectUuid: Storage.readSession("projectUuid") || "",
    account: Storage.read("account") || "",
    userUuid: Storage.read("userUuid") || "",
    projectList: Storage.read("projectList") || []
    // username: localStorage.getItem("username") || ""
  },
  mutations: {
    SET_OPERATOR_ARR: (state, operatorArr) => {
      state.operatorArr = operatorArr;
      Storage.saveSession("operatorArr", operatorArr);
    },
    SET_CHARGE_STATION_ARR: (state, chargeStationArr) => {
      state.chargeStationArr = chargeStationArr;
      Storage.saveSession("chargeStationArr", chargeStationArr);
    },
    ADD_OPERATOR_ITEM: (state, compomentItem) => {
      if (state.operatorArr.some(v => v.name === compomentItem.name)) return;
      state.operatorArr.push(compomentItem);
      console.log(state.operatorArr);
      Storage.saveSession("operatorArr", state.operatorArr);
    },
    DEL_OPERATOR_ITEM: (state, compomentItem) => {
      for (const [i, v] of state.operatorArr.entries()) {
        if (v.path === compomentItem.path || v.name === compomentItem.name) {
          state.operatorArr.splice(i, 1);
          break;
        }
      }
      Storage.saveSession("operatorArr", state.operatorArr);
    },
    SET_LOCAL_TAG: (state, localTag) => {
      state.localTag = localTag;
      Storage.saveSession("localTag", localTag);
    },
    SET_LOCAL_ENUMS: (state, localEnums) => {
      state.localEnums = localEnums;

      Storage.save("localEnums", localEnums);
    },
    SET_AUTHORIZATION: (state, Authorization) => {
      state.Authorization = Authorization;

      Storage.saveSession("Authorization", Authorization);
    },
    SET_OPERATOR_ID: (state, operatorId) => {
      state.operatorId = operatorId;
      Storage.saveSession("operatorId", operatorId);
    },
    SET_PROJECT_LIST: (state, projectList) => {
      state.projectList = projectList;
      Storage.save("projectList", projectList);
    },
    SET_ACCOUNT: (state, account) => {
      state.account = account;
      Storage.save("account", account);
    },
    SET_USERUUID: (state, userUuid) => {
      state.userUuid = userUuid;
      Storage.save("userUuid", userUuid);
    }
  },
  actions: {
    setOperatorArr({ commit }, operatorArr) {
      commit("SET_OPERATOR_ARR", operatorArr);
    },
    setChargeStationArr({ commit }, OperatorArr) {
      commit("SET_CHARGE_STATION_ARR", OperatorArr);
    },
    setLocalTag({ commit }, localTag) {
      commit("SET_LOCAL_TAG", localTag);
    },
    addOperatorItem({ commit }, compomentItem) {
      commit("ADD_OPERATOR_ITEM", compomentItem);
    },
    delOperatorItem({ commit }, compomentItem) {
      commit("DEL_OPERATOR_ITEM", compomentItem);
    },
    setLocalEnums({ commit }, localEnums) {
      commit("SET_LOCAL_ENUMS", localEnums);
    },
    setAuthorization({ commit }, Authorization) {
      commit("SET_AUTHORIZATION", Authorization);
    },
    // setUserName({ commit }, username) {
    //   commit("SET_UserName", username);
    // },
    setOperatorId({ commit }, projectUuid) {
      commit("SET_OPERATOR_ID", projectUuid);
    },
    setAccount({ commit }, account) {
      commit("SET_ACCOUNT", account);
    },
    SET_USERUUID({ commit }, userUuid) {
      commit("SET_USERUUID", userUuid);
    }
  }
};

export default home;
