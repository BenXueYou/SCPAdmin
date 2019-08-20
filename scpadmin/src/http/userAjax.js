import axios from "@/utils/Request";
import RestApi from "@/utils/RestApi";
let ip = window.config.ip;
let protocolHeader = window.config.protocolHeader;
export var userAjax = {
  deleteOperator(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.UserAjax.deleteOperator}`;
    return axios({
      method: "post",
      url,
      params: xhr
    });
  },
  getOperatorList(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.UserAjax.getOperatorList}`;
    return axios({
      method: "post",
      url,
      params: xhr
    });
  },
  addOperator(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.UserAjax.addOperator}`;
    return axios({
      method: "post",
      url,
      params: xhr
    });
  },
  editOperatorOptions(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.UserAjax.editOperatorOptions}`;
    return axios({
      method: "post",
      url,
      params: xhr
    });
  },
  updateOperator(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.UserAjax.updateOperator}`;
    return axios({
      method: "post",
      url,
      params: xhr
    });
  },
};

function install(Vue) {
  Vue.prototype.$userAjax = userAjax;
}

export default install;
