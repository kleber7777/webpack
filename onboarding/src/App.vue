<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <p>Lista:</p>
    <ul>
      <li v-for="book in books">{{book.author}}</li>
    </ul>
  </div>
</template>

<script>
import Firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBDqgyYadQ4NOXo_gJssggq6ZTRAUn3Uuw',
  authDomain: 'onboarding-f1aaf.firebaseapp.com',
  databaseURL: 'https://onboarding-f1aaf.firebaseio.com',
  projectId: 'onboarding-f1aaf',
  storageBucket: 'onboarding-f1aaf.appspot.com',
  messagingSenderId: '894435447125',
};

const app = Firebase.initializeApp(config);
const db = app.database();

const booksRef = db.ref('books');

export default {
  name: 'app',
  firebase: {
    books: booksRef,
  },
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
