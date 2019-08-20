import axios from "@/utils/Request";
import RestApi from "@/utils/RestApi";
let ip = window.config.ip;
let protocolHeader = window.config.protocolHeader;
export var loginAjax = {
  login(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.login.login}`;
    return axios({
      method: "post",
      url,
      params: xhr
    });
  },
  logout(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.login.logout}`;
    return axios({
      method: "post",
      url,
      params: xhr
    });
  },
  modifyPassword(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.login.modifyPassword}`;
    return axios({
      method: "post",
      url,
      params: xhr
    });
  },
};

function install(Vue) {
  Vue.prototype.$loginAjax = loginAjax;
}

export default install;
