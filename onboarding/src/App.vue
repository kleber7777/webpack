<template lang="pug">
  #app
    ul
      li
        router-link(to="calendar") Agenda
      li
        router-link(to="clients") Clientes
    router-view
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
</style>
