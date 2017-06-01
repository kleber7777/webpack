import Vue from 'vue'
import Vuex from 'vuex'
import clients from './modules/clients'
import services from './modules/services'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    clients,
    services
  },
  strict: debug
})
