<template lang="pug">
  p {{ client.name }}
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
        return this.clients.find((c) => c.id === id) || {}
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
