<template>
  <div class="ec-header">
    <ul class="ec-header-navbar">
      <li>Home</li>
      <li>A propos</li>
      <li>CV</li>
      <li>Projets</li>
      <li>Contact</li>
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

<style lang="stylus" scoped>
  @import '../colors.styl'
  
  .ec-header
    &:after
      display block
      content ""
      width 80%
      height 0.05em
      margin 2em auto
      background $darkBlue
    .ec-header-navbar
      display flex
      justify-content flex-end
      list-style-type none
      > li
        margin 1em
      :last-of-type
        margin-right 3em
    
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
