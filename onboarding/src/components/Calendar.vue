<template>
  <div class="calendar">
    <h1>Agenda</h1>
    <ul>
      <li v-for="serv in services">{{ serv.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'calendar',
  data() {
    return {
      msg: 'Hello World',
      services: [
        {
          name: 'cabelo',
        },
        {
          name: 'unha',
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
