import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import app from "./modules/app";
import config from "./modules/config";
import common from "./modules/common";
import location from "./modules/location"
export default new Vuex.Store({
  modules: {
    app,
    config,
    common,
    location
  }
});
