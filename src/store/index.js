import Vue from 'vue';
import Vuex from 'vuex';
import windowWidth from 'Store/modules/windowWidth';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    'windowWidth': windowWidth
  }
})
