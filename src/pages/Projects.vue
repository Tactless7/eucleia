<template>
  <div class="ec-projects" id="project">
    <h3 ><i class="fa fa-flask" aria-hidden="true"></i>Projets</h3>
    <ec-project-details v-if="details" :project="this.projects[selected]"></ec-project-details>
    <div class="ec-projects-container">
      <div v-for="(project, index) in projects" :key="project.slug" class="ec-projects-card" @click="setSelected(index)">
        <div class="ec-projects-card-background" :class="{ selected: selected === index }" :style="`background-image: url(${project.pictures[0]})`"></div>
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
    metaInfo: {
      title: 'Portfolio',
      titleTemplate: '%s | Juliane Blier - Développeuse Web',
      meta: [
        { vmid: 'description', name: 'description', content: 'Retrouvez les projets de Juliane Blier, développeuse web, dans ce portfolio. Vous y découvrirez différents projets sur lesquels j\'ai pu travailler.' }
      ]
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
        this.$router.push({
          name: 'Projet',
          params: { project: this.projects[number].slug }
        })
        this.selected = number
        this.displayDetails(true)
        this.scrollToDetails()
      },
      displayDetails (bool) {
        this.details = bool
      },
      scrollToDetails () {
        let bodyRect = document.body.getBoundingClientRect()
        let elementRect = document.getElementById('project').getBoundingClientRect()
        /* Enlève 5px pour créer un décallage entre le haut de la page et le border top de l'élement */
        let offset = elementRect.top - bodyRect.top - 5
        this.smoothScroll(offset)
      },
      smoothScroll (end) {
        let start = window.scrollY
        let duration = 700
        let clock = Date.now()

        let easing = (t) => {
          // return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 // easeInOutCubic
          return 1 - (--t) * t * t * t // easeOutQuart
        }
        let position = (start, end, elapsed, duration) => {
          if (elapsed > duration) {
            return end
          }
          return start + (end - start) * easing(elapsed / 1000)
        }
        let step = () => {
          let elapsed = Date.now() - clock
          let positionY = position(start, end, elapsed, duration)
          window.scroll(0, positionY)
          if (elapsed <= duration) {
            window.requestAnimationFrame(step)
          }
        }

        step()
      }
    },
    created () {
      let slug = this.$route.params.project
      this.projects.map((project, index) => {
        if (project.slug === slug) {
          this.selected = index
          this.displayDetails(true)
        }
      })
    }
  }
</script>

<style lang="stylus">
  @import '../colors.styl'

  .ec-projects
    max-width 80vw
    margin 0 auto
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
        background-size cover
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
