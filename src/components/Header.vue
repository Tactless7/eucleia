<template>
  <div class="ec-header">
    <ul class="ec-header-navbar">
      <li><a href="/">Home</a></li>
      <!-- <li><a href="/about">A propos</a></li> -->
      <li><a href="/cv">CV</a></li>
      <li><a href="/projets">Projets</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>

    <div class="ec-header-title">
      <h1>Juliane Blier</h1>
      <h2>Développeuse Web</h2>
      <p class="ec-header-subtitle">Web maker, Passionnée de code et Saltimbanque du travail en équipe.</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style lang="stylus">
  @import '../colors.styl'
  
  .ec-header
    margin-bottom 2em
    &:after
      display block
      content ""
      width 80%
      height 0.1em
      margin 2em auto
      background $darkBlue
    .ec-header-navbar
      display flex
      justify-content flex-end
      list-style-type none
      > li
        margin 1em
        padding-bottom 0.2em
        border-bottom 0.2em solid transparent
        &:last-of-type
          margin-right 3em
        &:hover
          border-bottom 0.2em solid $orange
        a
          color $darkBlue
          text-decoration none
    
    .ec-header-title
      margin-top 1.5em
      text-align center
      h1
        font-size 2.3em
      h2
        font-size 1.8em
        margin-bottom 0.5em
      .ec-header-subtitle
        font-style italic
        font-size 1.2em
</style>
