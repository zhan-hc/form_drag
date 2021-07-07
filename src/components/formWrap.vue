<template>
  <div class="form-wrap">
    <img src="../assets/images/delete.png" alt="" @click="handleClick">
    <slot/>
  </div>
</template>

<script>
export default {
  props: ['index'],
  data () {
    return {

    }
  },
  components: {
  },
  methods: {
    handleClick () {
      this.$emit('removeCom', this.index)
    }
  }
}
</script>

<style scoped lang="scss">
.form-wrap{
  position: relative;
  img {
    display: none;
  }
  &:hover{
    position: relative;
    background: #ccc;
    img {
      display: inline-block;
      position: absolute;
      top: 0;
      right: 0;
      cursor: pointer;
    }
  }
}
</style>
