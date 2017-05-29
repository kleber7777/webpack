<template>
  <div class="calendar">
    <h1>Agenda: {{ msg }}</h1>
    <input id="selector" type="text" v-model="msg">
    <ul>
      <li v-for="serv in services">{{ serv.name }}</li>
    </ul>
    <button v-if="available" type="button" @click="checkout()">click</button>
  </div>
</template>

<script>
import Moment from 'moment';
import Inputmask from 'inputmask';

export default {
  name: 'calendar',
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
<style scoped>

</style>
