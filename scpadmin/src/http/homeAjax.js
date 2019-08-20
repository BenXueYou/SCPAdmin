import axios from "@/utils/Request";
import RestApi from "@/utils/RestApi";
let ip = window.config.ip;
let protocolHeader = window.config.protocolHeader;
export var homeAjax = {
  trend(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.HomeAjax.trend}`;
    return axios({
      method: "post",
      url,
      params: xhr
    });
  },
  summary(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.HomeAjax.summary}`;
    return axios({
      method: "post",
      url,
      params: xhr
    });
  },
};

function install(Vue) {
  Vue.prototype.$homeAjax = homeAjax;
}

export default install;
