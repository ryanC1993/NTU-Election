<template lang="pug">
  transition(name="fade")
    .modal(:class="getClass" v-if="getClass")
      .modal-background(@click="endShow")
      .modal-card
        header.modal-card-head
          .content
            p.title.modal-card-title {{questionTitle}}
          button.delete.is-mobile(@click="endShow" aria-label="close")
        .modal-card-body
          .content
            article.media
              .media-content
                .content
                  p {{detailReply}}
          button.modal-close.is-large.is-not-mobile(@click="endShow")
</template>

<script>
export default {
  name: 'ReplyCube',
  data () {
    return {
    }
  },
  props: {
    detailReply: String,
    getClass: String,
    questionTitle: String
  },
  methods: {
    endShow () {
      this.$emit('endShow')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import "../../node_modules/bulma/bulma.sass"

@media screen and (max-width: 768px)
  .is-not-mobile
    display: none
  .is-mobile
    display: block

@media screen and (min-width: 769px)
  .is-not-mobile
    display: inherit
  .is-mobile
    display: none
    
.modal-card
  border-radius: 5px

.modal
  z-index: 999

.fade-enter-active
  animation: show .4s 1

.fade-leave-active
  animation: show .4s reverse

@keyframes show
  0%
    opacity: 0.3
    transform: translateY(-5px)
  100%
    opacity: 1
    transform: translateY(0px)

</style>
