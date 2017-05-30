<template lang="pug">
  p {{ msg }}
</template>

<script>
  export default {
    name: 'modalNew',
    data () {
      return {
        msg: 'aqui'
      }
    },
    methods: {
      openModal () {
        this.msg = 'testeteste'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
