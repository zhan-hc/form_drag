<template>
  <div class="form-wrap">
    <i class="iconfont icon-delete" @click="handleClickDelete"></i>
    <i class="iconfont icon-copy2" @click="handleClickCopy"></i>
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
    handleClickDelete () {
      this.$emit('removeCom', this.index)
    },
    handleClickCopy () {
      this.$emit('copyCom', this.index)
    }
  }
}
</script>

<style scoped lang="scss">
.form-wrap{
  position: relative;
  margin-bottom: 10px;
  padding-right: 20px;
  .icon-delete,
  .icon-copy2 {
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
    .icon-delete{
      background: #fff;
      padding: 7px;
      border-radius: 50%;
      display: inline-block;
      position: absolute;
      top: 5px;
      right: 5px;
      cursor: pointer;
      color: #ff0000;
      font-size: 14px;
    }
    .icon-copy2 {
      background: #fff;
      padding: 7px;
      border-radius: 50%;
      display: inline-block;
      position: absolute;
      top: 5px;
      right: 45px;
      cursor: pointer;
      font-size: 14px;
      color: #808080;
    }
  }
}
</style>
