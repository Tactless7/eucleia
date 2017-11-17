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

<style lang="stylus">
  @import 'colors.styl'
  *
    margin 0
    padding 0

  *, *:before, *:after
    box-sizing border-box

  html, body, #app
    width 100%
    height 100%
    border 0
    font-size 100%

  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    color $darkBlue

</style>