<template>
  <div class="calendar">
    <h1>Agenda: {{ msg }}</h1>
    <input type="text" v-model="msg">
    <ul>
      <li v-for="serv in services">{{ serv.name }}</li>
    </ul>
    <button v-if="available" type="button" @click="checkout()">click</button>
  </div>
</template>

<script>
export default {
  name: 'calendar',
  data() {
    return {
      msg: 'Hello World',
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
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
