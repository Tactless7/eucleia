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
      <div class="ec-cv-category-content flex-column">
        <div class="ec-cv-experiences-item">
          <div class="ec-cv-experiences-left">
            <h4>Développeuse Fullstack JS</h4>
            <p>Depuis Juin 2017</p>
            <img src="/src/assets/img/experiences/logo_schoolmouv_couleur.svg" alt="Logo Schoolmouv">
          </div>
          <div class="ec-cv-experiences-right">
            <ul>
              <li><i class="fa fa-caret-right" aria-hidden="true"></i>Développement de nouvelles fonctionnalités pour le Site Web <a href="https://www.schoolmouv.fr" >Schoolmouv</a>.</li>
              <li><i class="fa fa-caret-right" aria-hidden="true"></i>Amélioration de l'API.</li>
              <li><i class="fa fa-caret-right" aria-hidden="true"></i>Conception et développement de l'Application Mobile Schoolmouv.</li>
            </ul>
          </div>
        </div>
        <div class="ec-cv-experiences-item">
          <div class="ec-cv-experiences-left">
            <h4>Développeuse Javascript</h4>
            <p>Avril 2017 - Mai 2017</p>
            <img src="/src/assets/img/experiences/cityliv_logo.png" alt="Logo CityLiv">
          </div>
          <div class="ec-cv-experiences-right">
            <ul>
              <li><i class="fa fa-caret-right" aria-hidden="true"></i>Mise en place d'un outil de reporting du nombre de commandes et de livreurs.</li>
              <li><i class="fa fa-caret-right" aria-hidden="true"></i>Automatisation de l'envoi à l'ensemble des collaborateurs de la société.</li>
              <li><i class="fa fa-caret-right" aria-hidden="true"></i>Gestion du projet depuis le cahier des charges jusqu'à la mise en production.</li>
            </ul>
          </div>
        </div>
      </div>
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
        > .ec-cv-experiences-item
          display flex
          justify-content space-between
          width 100%
          &:not(:last-of-type)
            margin-bottom 2.5em
          .ec-cv-experiences-left
            display flex
            flex-direction column
            align-items center
            width 30%
            h4
              font-size 1.1em
              text-align center
            img
              max-width 50%
              margin 5% 0
            p
              line-height 2em
          .ec-cv-experiences-right
            display flex
            width 70%
            margin auto 4%
            ul
              display flex
              flex-direction column
              justify-content center
              height auto;
              list-style-type none
              li
                line-height 2em
                i 
                  margin-right 0.5em
            &:before
              content ""
              display block
              width 1px
              height 120px
              margin-right 30px
              background-color $grey
  
  .flex-column
    flex-direction column
</style>