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
  import ecPresentation from '../components/Presentation'
  import ecStatus from '../components/Status'
  import ecTwitter from '../components/Twitter'
  
  export default {
    name: 'Home',
    components: {
      ecPresentation,
      ecStatus,
      ecTwitter
    },
    metaInfo: {
      title: 'Juliane Blier - Développeuse Web',
      meta: [
        { vmid: 'description', name: 'description', content: 'Bienvenue sur le site personnel de Juliane Blier, développeuse web chez Schoolmouv. Vous y trouverez mon CV et les projets sur lesquels j\'ai eu l\'occasion de travailler.' }
      ]
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
      justify-content center
      max-width 60vw

</style>
