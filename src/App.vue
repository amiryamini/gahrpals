<template>
  <div id="app">
    <!--For header/navbar-->
    <!--<page-header />-->
    <Register/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld'
//import PageHeader from '@/components/Header.vue'
import Register from './components/Register.vue'

export default {
  name: 'App',
  components: {
    Register
//    PageHeader
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
