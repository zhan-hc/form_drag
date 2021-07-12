<template>
  <div class="form-wrap">
    <i class="iconfont icon-template_delete" @click="handleClick"></i>
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
  padding-right: 20px;
  .icon-template_delete {
    display: none;
  }
  &:hover{
    position: relative;
    border: 1px dashed #ff9600;
    cursor: move;
  }
  &.active:hover{
    position: relative;
    border: 1px dashed #ff9600;
    cursor: move;
    .icon-template_delete {
      background: #fff;
      padding: 3px;
      border-radius: 50%;
      display: inline-block;
      position: absolute;
      top: 5px;
      right: 5px;
      cursor: pointer;
      color: #ff0000;
      font-size: 14px;
    }
  }
}
</style>
