import bda from '../../api/bda'

// initial state
const state = {
  clients: bda.getClients()
}

// getters
const getters = {
  getClients: state => state.clients
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
