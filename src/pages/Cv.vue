<template>
  <div class="ec-cv">
    <section class="ec-cv-category ec-cv-skills">
      <h3><i class="fa fa-lg fa-rocket" aria-hidden="true"></i>Compétences</h3>
      <div class="ec-cv-category-content">
        <div class="ec-cv-skills-group">
          <h4>Langages</h4>
          <div>
            <img src="/src/assets/img/html_logo.png" alt="">
            <img src="/src/assets/img/css_logo.png" alt="">
            <img src="/src/assets/img/javascript_logo.png" alt="">
            <img src="/src/assets/img/node_logo.png" alt="">
            <img src="/src/assets/img/php_logo.png" alt="">
            <img src="/src/assets/img/mysql_logo.png" alt="">
          </div>
        </div>
        <div class="ec-cv-skills-group">
          <h4>Framework & Libraries</h4>
        </div>
        <div class="ec-cv-skills-group">
          <h4>Outils</h4>
        </div>
      </div>
    </section>

    <section class="ec-cv-category ec-cv-experiences">
      <h3><i class="fa fa-lg fa-line-chart" aria-hidden="true"></i>Expériences</h3>
    </section>

    <section class="ec-cv-category ec-cv-school">
      <h3><i class="fa fa-lg fa-graduation-cap" aria-hidden="true"></i>Formation</h3>
    </section>
  </div>
  
</template>

<script>
  export default {
    name: 'Cv'
  }
</script>

<style lang="stylus">
  @import '../colors.styl'

  .ec-cv
    max-width 80vw
    margin 1em auto
    .ec-cv-category
      border solid $grey 1px
      border-top solid $orange 2px
      border-radius 0.5em
      padding 1em
      &:not(:last-of-type)
        margin-bottom 2em
      > h3
        font-size 1.5em
        i
          margin-right 0.5em
      .ec-cv-category-content
        display flex

</style>

