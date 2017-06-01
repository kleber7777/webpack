<template lang="pug">
  form
    input(v-model="client.name")
    button Enviar
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
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
