<template>
  <div class="ec-homepage">
    <div class="ec-homepage-left">
      <ec-presentation></ec-presentation>
      <ec-status></ec-status>
    </div>
    <ec-twitter></ec-twitter>
  </div>
</template>

<script>
  import ecPresentation from './Presentation'
  import ecStatus from './Status'
  import ecTwitter from './Twitter'
  
  export default {
    name: 'Home',
    components: {
      ecPresentation,
      ecStatus,
      ecTwitter
    }
  }
</script>

<style lang="stylus">
  @import '../colors.styl'

  .ec-homepage
    width 100%
    height auto
    display flex
    flex-direction row
    justify-content space-around
    .ec-homepage-left
      display flex
      flex-direction column
      justify-content space-around
      max-width 60vw

</style>
