import axios from "@/utils/Request";
import RestApi from "@/utils/RestApi";
let ip = window.config.ip;
let protocolHeader = window.config.protocolHeader;
export var deviceAjax = {
  getAddOptions(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.deviceAjax.getAddOptions}`;
    return axios({
      method: "post",
      url,
      params: xhr
    });
  },
  deletePile(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.deviceAjax.deletePile}`;
    return axios({
      method: "post",
      url,
      params: xhr
    });
  },
  addPile(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.deviceAjax.addPile}`;
    return axios({
      method: "post",
      url,
      params: xhr
    });
  },
  getPileList(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.deviceAjax.getPileList}`;
    return axios({
      method: "post",
      url,
      params: xhr
    });
  },
  getEditOptions(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.deviceAjax.getEditOptions}`;
    return axios({
      method: "post",
      url,
      params: xhr
    });
  },
  updatePile(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.deviceAjax.updatePile}`;
    return axios({
      method: "post",
      url,
      params: xhr
    });
  },
  deleteChargeStation(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.deviceAjax.deleteChargeStation}`;
    return axios({
      method: "post",
      url,
      params: xhr
    });
  },
  getChargeStationList(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.deviceAjax.getChargeStationList}`;
    return axios({
      method: "post",
      url,
      params: xhr
    });
  },
  addChargeStation(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.deviceAjax.addChargeStation}`;
    return axios({
      method: "post",
      url,
      params: xhr
    });
  },
  editChargeStationOptions(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.deviceAjax.editChargeStationOptions}`;
    return axios({
      method: "post",
      url,
      params: xhr
    });
  },
  updateChargeStation(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.deviceAjax.updateChargeStation}`;
    return axios({
      method: "post",
      url,
      params: xhr
    });
  },
  deletePileFactory(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.deviceAjax.deletePileFactory}`;
    return axios({
      method: "post",
      url,
      params: xhr
    });
  },
  getPileFactoryList(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.deviceAjax.getPileFactoryList}`;
    return axios({
      method: "post",
      url,
      params: xhr
    });
  },
  addPileFactory(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.deviceAjax.addPileFactory}`;
    return axios({
      method: "post",
      url,
      params: xhr
    });
  },
  editPileFactoryOptions(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.deviceAjax.editPileFactoryOptions}`;
    return axios({
      method: "post",
      url,
      params: xhr
    });
  },
  updatePileFactory(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.deviceAjax.updatePileFactory}`;
    return axios({
      method: "post",
      url,
      params: xhr
    });
  },
};

function install(Vue) {
  Vue.prototype.$deviceAjax = deviceAjax;
}

export default install;
