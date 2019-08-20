import axios from "@/utils/Request";
import RestApi from "@/utils/RestApi";
let ip = window.config.ip;
let protocolHeader = window.config.protocolHeader;
export var staticsAjax = {
  realPileData(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.RealAjax.realPileData}`;
    return axios({
      method: "post",
      url,
      params: xhr
    });
  },
  realAlarmData(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.RealAjax.realAlarmData}`;
    return axios({
      method: "post",
      url,
      params: xhr
    });
  },
};

function install(Vue) {
  Vue.prototype.$staticsAjax = staticsAjax;
}

export default install;
