import axios from "@/utils/Request";
import RestApi from "@/utils/RestApi";
let ip = window.config.ip;
let protocolHeader = window.config.protocolHeader;
export var businessAjax = {
  getChargeRecordTotal(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.BusinessAjax.getChargeRecordTotal}`;
    return axios({
      method: "post",
      url,
      params: xhr
    });
  },
  exportChargeRecord(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.BusinessAjax.exportChargeRecord}`;
    return axios({
      method: "post",
      url,
      params: xhr
    });
  },
  getChargeRecordList(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.BusinessAjax.getChargeRecordList}`;
    return axios({
      method: "post",
      url,
      params: xhr
    });
  },
  deductRecordList(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.BusinessAjax.deductRecordList}`;
    return axios({
      method: "post",
      url,
      params: xhr
    });
  },
};

function install(Vue) {
  Vue.prototype.$businessAjax = businessAjax;
}

export default install;
