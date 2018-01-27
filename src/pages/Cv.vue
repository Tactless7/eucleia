<template>
  <div class="ec-cv">
    <section class="ec-cv-category ec-cv-skills">
      <h3><i class="fa fa-lg fa-rocket" aria-hidden="true"></i>Compétences</h3>
      <div class="ec-cv-category-content">
        <div class="ec-cv-skills-group">
          <h4>Langages</h4>
          <div class="ec-cv-skills-imgs">
            <img src="/src/assets/img/languages/html_logo.png" alt="Html">
            <img src="/src/assets/img/languages/css_logo.png" alt="Css">
            <img src="/src/assets/img/languages/javascript_logo.png" alt="Javascript ES6">
            <img src="/src/assets/img/languages/node_logo.png" alt="Node.js">
            <img src="/src/assets/img/languages/php_logo.png" alt="PHP">
            <img src="/src/assets/img/languages/mysql_logo.png" alt="mySQL">
          </div>
        </div>
        <div class="ec-cv-skills-group">
          <h4>Framework &amp; Libraries</h4>
          <div class="ec-cv-skills-imgs">
            <img src="/src/assets/img/frameworks/vuejs_logo.svg" alt="Vue.js">
            <img src="/src/assets/img/frameworks/mongo_logo.svg" alt="MongoDB">
            <img src="/src/assets/img/frameworks/expressjs_logo.png" alt="Express.js">
            <img src="/src/assets/img/frameworks/angular_logo.svg" alt="Angular 4">
            <img src="/src/assets/img/frameworks/laravel_logo.png" alt="Laravel">
            <img src="/src/assets/img/frameworks/sass_logo.png" alt="SASS">
          </div>
        </div>
        <div class="ec-cv-skills-group">
          <h4>Outils</h4>
          <div class="ec-cv-skills-imgs">
            <img src="/src/assets/img/tools/git_logo.png" alt="Git">
            <img src="/src/assets/img/tools/rancher_logo.svg" alt="Rancher">
            <img src="/src/assets/img/tools/docker_logo.png" alt="Docker">
            <img src="/src/assets/img/tools/ionic_logo.svg" alt="Ionic">
            <img src="/src/assets/img/tools/firebase_logo.png" alt="Firebase">
            <img src="/src/assets/img/tools/postman_logo.png" alt="Postman">
          </div>
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
        font-size 1.9em
        margin-bottom 1em
        i
          margin-right 0.5em

      .ec-cv-category-content
        display flex
        justify-content space-between
        > .ec-cv-skills-group
          width 30%
          padding 1em;
          border solid black
          h4
            text-align center
            font-size 1.4em
            margin-bottom 1em
          .ec-cv-skills-imgs
            width 100%
            padding 5%
            img
              max-width 30%
              max-height 200px
              margin 1%
</style>