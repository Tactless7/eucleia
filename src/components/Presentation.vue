<template>
  <div class="ec-presentation">
    <p class="ec-presentation-item">Développeuse Web passionnée par mon métier, j'ai un parcours un peu atypique. Comme beaucoup je suis tombée amoureuse des ordinateurs et d'internet dès l'enfance. Je ne compte plus les heures passées à monter/démonter mon PC, bidouiller des solutions trouvées sur le net, formater ou encore réparer les ordis de mes proches.</p>
    <p class="ec-presentation-item">Après l'obtention d'un Master en Marketing, j'ai abandonné le Webmarketing pour opérer une reconversion dans le développement Web. Six mois très intenses plus tard, je terminais la formation de Simplon après près de 800 heures à coder en HTML, CSS, Javascript et PHP.</p>
    <p class="ec-presentation-item">C'était le début d'une nouvelle aventure, qui m'a menée tout droit vers Schoolmouv où je suis Développeuse Web Javascript.</p>
    <p class="ec-presentation-item">To be continued...</p>
  </div>
</template>

<script>
  export default {
    name: 'Presentation'
  }
</script>

<style lang="stylus">
  @import '../colors.styl'

  .ec-presentation
    width 50vw
    margin 1em
    p
      color $darkBlue
      text-align justify
      &:not(last-of-type)
        margin-bottom 0.5em
      &:last-of-type
        margin-top 1em
        font-size 1.2em
        text-align center

</style>
