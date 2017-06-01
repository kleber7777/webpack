<template lang="pug">
  div
    router-view
    h1 Clientes:

    ul
      li(v-for="c in clients") {{ c.name }}

    ul
      li(v-for="sc in serviceCategories") {{ sc.name }}

    router-link(to="clients/modal") Modal
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'clients',
    computed: {
      ...mapGetters({
        clients: 'getClients',
        serviceCategories: 'getServiceCategories'
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  h1, h2 {
    font-size: 45px;
  }
</style>
