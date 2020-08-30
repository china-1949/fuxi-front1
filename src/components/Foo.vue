<template>
  <div id="foo">
    Foo
    =========={{username}}
  </div>
</template>

<script>
export default {
  name: 'foo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
    username:function () {
      return this.$store.getters.getUsername
    }
  },
}
</script>

<style lang="scss">

</style>
