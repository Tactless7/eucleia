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
        <div class="ec-cv-school-experiences-item">
          <div class="left-side">
            <div>
              <h4>Développeuse Fullstack JS</h4>
              <p>Depuis Juin 2017</p>
              <a href="https://www.schoolmouv.fr"><img src="/src/assets/img/experiences/logo_schoolmouv_couleur.svg" alt="Logo Schoolmouv"></a>
            </div>
          </div>
          <div class="right-side">
            <ul>
              <li><i class="fa fa-caret-right" aria-hidden="true"></i>Développement de nouvelles fonctionnalités pour le Site Web <a href="https://www.schoolmouv.fr" >Schoolmouv</a>.</li>
              <li><i class="fa fa-caret-right" aria-hidden="true"></i>Amélioration de l'API.</li>
              <li><i class="fa fa-caret-right" aria-hidden="true"></i>Conception et développement de l'Application Mobile Schoolmouv.</li>
            </ul>
            <!-- TODO Ajouter les technos -->
          </div>
        </div>
        <div class="ec-cv-school-experiences-item">
          <div class="left-side">
            <div>
              <h4>Développeuse Javascript</h4>
              <p>Avril 2017 - Mai 2017</p>
              <img src="/src/assets/img/experiences/cityliv_logo.png" alt="Logo CityLiv">
            </div>
          </div>
          <div class="right-side">
            <ul>
              <li><i class="fa fa-caret-right" aria-hidden="true"></i>Mise en place d'un outil de reporting du nombre de commandes et de livreurs.</li>
              <li><i class="fa fa-caret-right" aria-hidden="true"></i>Automatisation de l'envoi à l'ensemble des collaborateurs de la société.</li>
              <li><i class="fa fa-caret-right" aria-hidden="true"></i>Gestion du projet depuis le cahier des charges jusqu'à la mise en production.</li>
            </ul>
            <!-- TODO Ajouter les technos -->
          </div>
        </div>
      </div>
    </section>

    <section class="ec-cv-category ec-cv-school">
      <h3><i class="fa fa-lg fa-graduation-cap" aria-hidden="true"></i>Formation</h3>
      <div class="ec-cv-category-content flex-column">
        <div class="ec-cv-school-experiences-item">
          <div class="left-side">
            <div>
              <h4>Formation Développement web</h4>
              <p>Septembre 2016 - Mars 2017</p>
              <a href="https://simplon.co"><img src="/src/assets/img/experiences/simplon_logo.png" alt="Logo Simplon"></a>
            </div>
          </div>
          <div class="right-side">
            <ul>
              <li><i class="fa fa-caret-right"></i>Front-End : HTML/CSS, Javascript ES6, React.js, Sass, Moment.js, Express.</li>
              <li><i class="fa fa-caret-right"></i>Back-End : Node.js, PHP, mySQL, Express.js, Laravel.</li>
              <li><i class="fa fa-caret-right"></i>Git, Brunch.</li>
              <li><i class="fa fa-caret-right"></i>POO &#38; MVC.</li>
              <li><i class="fa fa-caret-right"></i>Méthodes Agiles: Scrum, Kanban/Trello, XP.</li>
              <li><i class="fa fa-caret-right"></i>Pair-programming.</li>
              <li><i class="fa fa-caret-right"></i>Sensibilisation à l' UX/UI.</li>
              <li><i class="fa fa-caret-right"></i>Animation d'ateliers de programmation pour enfants en collaboration avec la Compagnie du Code.</li>
            </ul>
          </div>
        </div>
      </div>
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
          border 2px solid $darkBlue
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
              &:hover
                transform scale(1.3)
    .ec-cv-school-experiences-item
      display flex
      justify-content space-between
      width 100%
      &:not(:last-of-type)
        margin-bottom 2.5em
      .left-side
        display flex
        flex-direction row
        width 30%
        > div
          display flex
          flex-direction column
          justify-content center
          align-items center
          width 100%
          h4
            font-size 1.1em
            text-align center
          a
            max-width 50%
            img
              width 100%
              margin 5% auto
          > img
            width 50%
          p
            line-height 2em
        &:after
          content ""
          width 1px
          margin 1.5em 0 1.5em 2em
          background-color $grey
      .right-side
        display flex
        align-items stretch
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
  
  .flex-column
    flex-direction column
</style>