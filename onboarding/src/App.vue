<template>
  <div id="app">
    <ul>
      <li>
        <a href="#/calendar">Agenda</a>
      </li>
      <li>
        <a href="#/clients">Clientes</a>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
