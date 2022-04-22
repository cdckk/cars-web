import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import app from "./modules/app";
import config from "./modules/config";
import common from "./modules/common";
import location from "./modules/location"
import walking from "./modules/walking"
import global from "./modules/global"
export default new Vuex.Store({
  modules: {
    app,
    config,
    common,
    location,
    walking,
    global
  }
});
