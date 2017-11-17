<template>
  <div id="app">
    <ec-header></ec-header>
  </div>
</template>

<script>
  import ecHeader from './components/Header'

  export default {
    name: 'app',
    components: {
      ecHeader
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
  }
</style>
