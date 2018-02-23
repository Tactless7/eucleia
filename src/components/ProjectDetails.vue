<template>
  <div class="ec-project-details">
    <div class="ec-project-details-pictures">

    </div>
    <div class="ec-project-details-content">
      <h3>{{project.name}}</h3>
      <p class="ec-project-details-type">{{project.type}} - <span class="ec-project-details-year">{{project.year}}</span></p>
      <!-- TODO Plusieurs paragraphes pour la description -->
      <p class="ec-project-details-description">{{project.description}}</p>
      <p v-if="project.tools" class="ec-project-details-tools"><span>Technos utilisées : </span>{{project.tools}}</p>
      <a :href="project.link"><p class="ec-project-details-link"><i :class="project.picto"></i> Lien</p></a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProjectDetails',
    props: ['project']
  }
</script>

<style lang="stylus">
  @import '../colors.styl'

  .ec-project-details
    display flex
    flex-direction row
    border solid #cfcfcf 1px
    border-top solid #f2711c 2px
    border-radius 0.5em
    padding 1em
    margin-bottom 1em
    box-shadow 0 3px 6px rgba(0,0,0,0.06)
    .ec-project-details-pictures
      min-width 50%
    .ec-project-details-content
      padding 1em
      h3
        font-size 1.6em
      p
        margin 1em 0
      a
        color $darkBlue
        text-decoration none
        &:hover
          font-style italic
      .ec-project-details-type
        margin-top 0
        font-size 1.2em
        .ec-project-details-year
          font-size 0.8em
          font-style italic
      .ec-project-details-description
        font-size 1.1em
        text-align justify
      .ec-project-details-tools
        font-size 1em
        font-style italic
        span
          font-weight bold
      .ec-project-details-link
        width auto
</style>
