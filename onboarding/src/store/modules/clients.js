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
  updateClient (state, client) {
    state.clients.filter(function (c) {
      if (c.id === client.id) {
        c.name = client.name
      }
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
