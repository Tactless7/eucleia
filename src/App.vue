<template>
  <div id="app">
    <router-view name="header"></router-view>
    <div class="main-content">
      <router-view name="content"></router-view>
    </div>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
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
    border 0
    font-size 100%

  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    color $darkBlue
    display flex
    flex-direction column
    justify-content space-between

  html, #app
    min-height 100vh

  body
    min-height 100%

  // .main-content
  //   min-height 100%

</style>
