<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <My/> -->
    <Student/>
  </div>
</template>

<script>

// import My from './components/Myvue'
import Student from './components/Student.vue'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    Student
  }
}
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
