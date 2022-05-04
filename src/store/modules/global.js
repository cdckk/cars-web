const state = {
  // 是否点击车辆列表，没点击就隐藏
  isClickCarsList: false,
  // 是否请求停车场
  isRequestCars: false
}
const mutations = {
  SET_CARS_LIST_STATUS(state,payLoad) {
    state.isClickCarsList = payLoad
  },
  SET_REQUEST_CARS(state, payLoad) {
    state.isRequestCars = payLoad
  }
}

export default {
  namespaced: true,
  state,
  mutations
}