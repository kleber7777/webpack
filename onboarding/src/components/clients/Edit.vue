<template lang="pug">
  form
    input(v-model="client.name")
    button(@click="updateClient") Enviar
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Edit',
    computed: {
      ...mapGetters({
        clients: 'getClients'
      }),
      client () {
        let id = parseInt(this.$route.params.id)
        let cCopy = this.clients.find((c) => c.id === id) || {}
        return {...cCopy}
      }
    },
    methods: {
      updateClient (e) {
        e.preventDefault()
        this.$store.commit('updateClient', this.client)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
