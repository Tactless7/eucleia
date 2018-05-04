<template>
  <div class="ec-about">

    <div class="ec-about-left">
      <div class="ec-about-contact-info">
        <h3>Me contacter</h3>
        <p><i class="fa fa-map-o"></i> Toulouse</p>
        <p><a href="tel:+33695024495"><i class="fa fa-phone"></i>+33 (0)6 95 02 44 95</a></p>
        <p><a href="mailto:blier.juliane@gmail.com"><i class="fa fa-envelope"></i>blier.juliane@gmail.com</a></p>
        
        <div class="ec-about-social">
          <a href="https://fr.linkedin.com/in/juliane-blier-428b8b49"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
          <a href="https://github.com/Tactless7"><i class="fa fa-github" aria-hidden="true"></i></a>
          <a href="https://twitter.com/Tactless7"><i class="fa fa-twitter" aria-hidden="true"></i></a>
        </div>

        <div class="ec-about-languages">
          <h3>Langues</h3>
          <ul>
            <li><img src="/src/assets/img/flags/fr_flag.png" alt="Drapeau Français">Français maternel</li>
            <li><img src="/src/assets/img/flags/en_flag.png" alt="Drapeau Anglais">Anglais courant</li>
            <li><img src="/src/assets/img/flags/es_flag.png" alt="Drapeau Espagnol">Espagnol courant</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="ec-about-right">
      <h3>Centres d'intérêt</h3>
      <ul>
        <li><i class="fa fa-meetup"></i>Meetup (Toulouse JS, Toulouse Data Science, Google User Group, ...)</li>
        <li><i class="fa fa-graduation-cap"></i>MOOCs (Securité, Gamification, ...)</li>
        <li><i class="fa fa-code"></i>Coding Goûters et Hour of Code</li>
        <li><i class="fa fa-futbol-o"></i>Sports (Football, Volleyball...)</li>
        <li><i class="fa fa-user-secret"></i>Théâtre (7 ans)</li>
        <li><i class="fa fa-book"></i>Lecture</li>
        <li><i class="fa fa-plane"></i>Voyages (Pays anglophones et hispanophones)</li>
        <li><i class="fa fa-film"></i>Cinéma</li>
        <li><i class="fa fa-gamepad"></i>Jeux Vidéo</li>
        <li><i class="fa fa-puzzle-piece"></i>Jeux de Société &#38; Poker</li>
      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Apropos',
    metaInfo: {
      title: 'A propos',
      titleTemplate: '%s | Juliane Blier - Développeuse Web',
      meta: [
        { vmid: 'description', name: 'description', content: 'En savoir plus et contacter Juliane Blier, développeuse web. Vous y trouverez une liste de mes hobbies ainsi que divers moyens de me contacter.' }
      ]
    }
  }
</script>

<style lang="stylus">
  @import '../colors.styl'

  .ec-about
    display flex
    flex-direction row
    max-width 70vw
    margin 1em auto
    padding 2em 3em
    border solid 1px #ddd
    border-top solid 2px $orange
    border-radius 0.5em
    .ec-about-left
      width 50%
      display flex
      flex-direction row
      justify-content space-between
      padding-right 3em
      h3
        margin-bottom 0.5em
      .ec-about-contact-info
        width auto
        margin 0 auto
        p
          margin-bottom 0.5em
          i
            margin-right 0.5em
            color black
        a
          text-decoration none
          color $darkBlue          
        .ec-about-social
          display flex
          justify-content space-around
          margin 2em 0
          a:hover
            transform scale(1.2)
          i
            font-size 2.5em
          .fa-linkedin-square
            color #1178B3
          .fa-github
            color black
          .fa-twitter
            color #2AA3EF
        .ec-about-languages
          li
            list-style-type none
            &:not(last-of-type)
              margin-bottom 0.5em
            img
              max-height 1em
              margin-right 0.5em

        
    .ec-about-right
      width 50%
      padding-left 3em
      border-left solid 1px #ddd
      h3
        margin-bottom 0.5em
      li
        list-style-type none
        font-size 1.05em
        &:not(last-of-type)
          margin-bottom 0.5em
        i
          margin-right 0.5em
          color black
</style>