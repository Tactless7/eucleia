<template>
  <div class="ec-blog">
    <div class="ec-blog-work-in-progress">
      <img src="../assets/work.jpg" alt="Work in Progress">
      <p>Work in progress...</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Blog'
  }
</script>

<style lang="stylus">
  @import '../colors.styl'

  .ec-blog
    .ec-blog-work-in-progress
      position relative
      display flex
      flex-direction column
      height auto
      width auto
      margin auto
      img
        margin auto
        opacity 0.15
        border-radius 3em
      p
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        color $darkBlue
        font-size 2.5em
        font-style italic
</style>

