<template lang="pug">
  TemplateTN
    .test 投票倒數
</template>

<script>

import TemplateTN from '@/templates/TemplateTN'

export default {
  name: 'Landing',
  components: {
    TemplateTN
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "../../node_modules/bulma/bulma.sass"
</style>
