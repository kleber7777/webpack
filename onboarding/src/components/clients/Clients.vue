<template lang="pug">
  div
    router-view
    h1 Clientes: {{ msg }}
    input(id="selector" type="text" v-model="msg")
    ul
      li(v-for="serv in services") {{ serv.name }}
    button(v-if="available" type="button" @click="checkout()") Click
    router-link(to="clients/modal") Modal
</template>

<script>
  import Moment from 'moment';
  import Inputmask from 'inputmask';

  export default {
    name: 'clients',
    data() {
      return {
        msg: Moment().format(),
        available: true,
        services: [
          {
            name: 'servico 1',
          },
          {
            name: 'servico 2',
          },
        ],
      };
    },
    methods: {
      checkout() {
        this.msg = 'trocou!!!';
        this.services.push({ name: 'servico 3' });

        const selector = document.getElementById('selector');

        const im = new Inputmask('99-9999999');
        im.mask(selector);
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  h1, h2 {
    font-size: 45px;
  }
</style>
