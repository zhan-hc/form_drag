<template>
  <div class="form-wrap">
    <i class="iconfont icon-x" @click="handleClick"></i>
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
  margin-bottom: 10px;
  .icon-x {
    display: none;
  }
  &:hover{
    position: relative;
    border: 1px dashed #ff9600;
    .icon-x {
      display: inline-block;
      position: absolute;
      top: 5px;
      right: 3px;
      cursor: pointer;
      color: #fff;
      font-size: 16px;
      &:hover{
        color: #000;
      }
    }
  }
}
</style>
