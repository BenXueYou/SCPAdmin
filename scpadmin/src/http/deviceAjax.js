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
      data: xhr
    });
  },
  deletePile(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.deviceAjax.deletePile}`;
    return axios({
      method: "post",
      url,
      data: xhr
    });
  },
  addPile(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.deviceAjax.addPile}`;
    return axios({
      method: "post",
      url,
      data: xhr
    });
  },
  getPileList(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.deviceAjax.getPileList}`;
    return axios({
      method: "post",
      url,
      data: xhr
    });
  },
  getEditOptions(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.deviceAjax.getEditOptions}`;
    return axios({
      method: "post",
      url,
      data: xhr
    });
  },
  updatePile(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.deviceAjax.updatePile}`;
    return axios({
      method: "post",
      url,
      data: xhr
    });
  },
  deleteChargeStation(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.deviceAjax.deleteChargeStation}`;
    return axios({
      method: "post",
      url,
      data: xhr
    });
  },
  getChargeStationList(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.deviceAjax.getChargeStationList}`;
    return axios({
      method: "post",
      url,
      data: xhr
    });
  },
  addChargeStation(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.deviceAjax.addChargeStation}`;
    return axios({
      method: "post",
      url,
      data: xhr
    });
  },
  editChargeStationOptions(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.deviceAjax.editChargeStationOptions}`;
    return axios({
      method: "post",
      url,
      data: xhr
    });
  },
  updateChargeStation(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.deviceAjax.updateChargeStation}`;
    return axios({
      method: "post",
      url,
      data: xhr
    });
  },
  deletePileFactory(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.deviceAjax.deletePileFactory}`;
    return axios({
      method: "post",
      url,
      data: xhr
    });
  },
  getPileFactoryList(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.deviceAjax.getPileFactoryList}`;
    return axios({
      method: "post",
      url,
      data: xhr
    });
  },
  addPileFactory(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.deviceAjax.addPileFactory}`;
    return axios({
      method: "post",
      url,
      data: xhr
    });
  },
  editPileFactoryOptions(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.deviceAjax.editPileFactoryOptions}`;
    return axios({
      method: "post",
      url,
      data: xhr
    });
  },
  updatePileFactory(xhr) {
    let url = `${protocolHeader}${ip}${RestApi.api.deviceAjax.updatePileFactory}`;
    return axios({
      method: "post",
      url,
      data: xhr
    });
  },
};

function install(Vue) {
  Vue.prototype.$deviceAjax = deviceAjax;
}

export default install;
