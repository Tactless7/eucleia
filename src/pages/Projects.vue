<template>
  <div class="ec-projects">
    <h3><i class="fa fa-flask" aria-hidden="true"></i>Projets</h3>
    <ec-project-details v-if="details"></ec-project-details>
    <div class="ec-projects-container">
      <div v-for="(project, index) in projects" class="ec-projects-card" @click="setSelected(index)">
        <div class="ec-projects-card-background" :class="{ selected: selected === index }" style="background-image: url(http://placekitten.com/g/500/500)"></div>
        <div class="ec-projects-card-content">
          <h4 class="ec-projects-card-title">{{project.name}}</h4>
          <p class="ec-projects-card-type">{{project.type}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ecProjectDetails from '../components/ProjectDetails'
  import projects from '../data/projects'

  export default {
    name: 'Projects',
    components: {
      ecProjectDetails
    },
    data () {
      return {
        selected: null,
        details: false,
        projects: projects
      }
    },
    methods: {
      setSelected (number) {
        this.displayDetails(true)
        this.selected = number
      },
      displayDetails (bool) {
        this.details = bool
      }
    }
  }
</script>

<style lang="stylus">
  @import '../colors.styl'

  .ec-projects
    max-width 80vw
    margin 1em auto
    > h3
      font-size 1.9em
      margin-bottom 1em
      i
        margin-right 0.5em
    .ec-projects-container
      display flex
      flex direction row
      flex-wrap wrap
      justify-content space-between
    .ec-projects-card
      position relative
      width 300px
      height 300px
      margin 1em 0
      border solid $grey 1px
      border-top solid $orange 2px
      border-radius 0.5em
      cursor pointer
      &:hover
        .ec-projects-card-background
          opacity 0.3
          transition 0.3s ease
      .ec-projects-card-background
        position absolute
        width 100%
        height 100%
        background no-repeat center
        border-radius 0.5em
        opacity 0.1
      .selected
        opacity 0.3
        transition 0.3s ease
      .ec-projects-card-content
        position absolute
        top 50%
        width 100%
        transform translateY(-50%)
        text-align center
        .ec-projects-card-title
          width auto
          font-size 1.5em
          line-height 2em
        .ec-projects-card-type
          font-size 1.3em
          line-height 2em

</style>
