import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, done: true },
      { id: 2, done: false },
      { id: 3, done: true }
    ]
  },
  mutations: {
    increment: state => (state.count += 1),
    decrement: state => (state.count -= 1)
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  }
})
