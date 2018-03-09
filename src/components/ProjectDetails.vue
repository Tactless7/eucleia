<template>
  <div class="ec-project-details">
    <div class="ec-project-details-pictures-viewer">
      <div class="ec-project-details-picture-selected">
        <img :src="selected" alt="">
      </div>
      <div class="ec-project-details-pictures">
        <div v-for="(picture, index) of project.pictures" :class="{ 'selected' : picture === selected}" class="ec-project-details-pictures-thumbnail" :key="'picture' + index">
          <img alt="Screenshot du projet" :src="picture" @click="setSelected(index)">
        </div>
      </div>
    </div>
    <div class="ec-project-details-content">
      <h3>{{project.name}}</h3>
      <p class="ec-project-details-type">{{project.type}} - <span class="ec-project-details-year">{{project.year}}</span></p>
      <!-- TODO Plusieurs paragraphes pour la description -->
      <p class="ec-project-details-description">{{project.description}}</p>
      <p v-if="project.tools" class="ec-project-details-tools"><span>Technos utilisées : </span>{{project.tools}}</p>
      <a :href="project.link" target="_blank"><p class="ec-project-details-link"><i :class="project.picto"></i>Voir</p></a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProjectDetails',
    props: ['project'],
    data () {
      return {
        selected: this.project.pictures[0]
      }
    },
    methods: {
      setSelected (index) {
        this.selected = this.project.pictures[index]
      }
    }
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
    .ec-project-details-pictures-viewer
      display flex
      flex-direction column
      min-width 50%
      .ec-project-details-picture-selected
        display flex
        justify-content center
        align-items center
        width 100%
        height 20em
        margin-bottom 0.5em
        img
          max-height 100%
          max-width 100%
      .ec-project-details-pictures
        display flex
        justify-content space-around
        max-width 100%
        padding 1em
        > div
          display flex
          justify-content center
          align-items center
          height 5em
          width 7em
          padding 0.5em
          border 1px solid $grey
          cursor pointer
          &:hover, &.selected
            box-shadow 0 5px 7px rgba(0,0,0,0.06)
          img
            max-height 100%
            max-width 100%

    .ec-project-details-content
      padding 1em
      margin-left 2em
      h3
        font-size 1.6em
      p
        margin 1em 0
      a
        color $darkBlue
        text-decoration none
        &:hover:not(:last-of-type)
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
        display inline
        padding 0.3em 0.9em
        border-radius 50px
        background-color $darkBlue
        color #fff
        &:hover
          background-color #3A5066
        i
          margin-right 0.5em
</style>
