import bda from '../../api/bda'

// initial state
const state = {
  serviceCategories: bda.getserviceCategories()
}

// getters
const getters = {
  getServiceCategories: state => state.serviceCategories
}

// actions
const actions = {

}

// mutations
const mutations = {

}

export default {
  state,
  getters,
  actions,
  mutations
}
