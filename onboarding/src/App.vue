<template lang="pug">
  #app
    p {{ count }}
    ul
      li(v-for="tt in todos") {{ tt.id }}
    button(@click="decrement") menos
    button(@click="increment") mais
    ul
      li
        router-link(to="calendar") Agenda
      li
        router-link(to="clients") Clientes
    router-view
</template>

<script>
  import { mapState, mapGetters } from 'vuex'

  export default {
    name: 'app',
    computed: {
      ...mapState(['count']),
      ...mapGetters({
        todos: 'doneTodos'
      })
    },
    methods: {
      increment () {
        this.$store.commit('increment')
      },
      decrement () {
        this.$store.commit('decrement')
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
