<template>
  <div class="ec-footer">
    <div class="ec-footer-social">
      <a href="https://github.com/Tactless7"><i class="fa fa-lg fa-github" aria-hidden="true"></i></a>
      <a href="https://fr.linkedin.com/in/juliane-blier-428b8b49"><i class="fa fa-lg fa-linkedin" aria-hidden="true"></i></a>
      <a href="https://twitter.com/Tactless7"><i class="fa fa-lg fa-twitter" aria-hidden="true"></i></a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style lang="stylus">
  @import '../colors.styl'

  .ec-footer
    display flex
    justify-content flex-end
    width 100%
    height 2em
    margin-top 2em
    background $darkBlue
    .ec-footer-social
      display flex
      margin-right 0.6em
      a
        display flex
        align-items space-around
        text-decoration none
        i
          color white
          margin auto 0.3em
</style>

