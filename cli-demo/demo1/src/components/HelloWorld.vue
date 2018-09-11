<template>
  <li @click="remove" class="redColor blueBg">
    {{ todoValue }}
  </li>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },
  props: ['todoValue', 'index'],
  methods: {
    remove() {
      this.$emit('remove', this.index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

  .blueBg {
    background-color: cornflowerblue;
  }


</style>
<style scoped>

  .redColor {
    color: red;
  }


</style>
