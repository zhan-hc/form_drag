<template>
  <div class="content-left" @dragstart="startDrag">
    <h3 style="text-align: center">组件</h3>
    <div class="drag-item"
      draggable
      :key="item.id"
      :data-type="item.type"
      v-for="item in comtempList"
      @click="handleClick(item.type)"
    >
      <i class="iconfont" :class="item.icon"></i>
      <div class="text">{{item.label}}</div>
    </div>
    <div class="create-form" @click="showDialog">
      生成表单
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comtempList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    startDrag (e) {
      e.dataTransfer.setData('type', e.target.dataset.type)
      this.$emit('handleChange', 0)
    },
    handleClick (type) {
      this.$emit('handleClick', type)
    },
    showDialog () {
      this.$emit('showDialog', true)
    }
  }
}
</script>

<style scoped lang="scss">
.content-left{
  position: relative;
  width: 360px;
  min-width: 360px;
  height: 900px;
  overflow-y: auto;
  margin-right: 20px;
  background: #fff;
  .drag-item {
    display: inline-block;
    padding: 10px 20px;
    background: #DCDCDC;
    margin-bottom: 20px;
    margin-right: 20px;
    width: 130px;
    box-sizing: border-box;
    cursor: pointer;
    border:1px solid transparent;
    &:hover{
      border: 1px dashed #ff9600;
    }
    &:nth-child(odd){
      margin-right: 0;
    }
    &:nth-child(even){
      margin-left: 30px;
    }
    .iconfont{
      font-size: 16px;
    }
    .text {
      display: inline-block;
    }
  }
  .create-form{
    position: absolute;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    padding: 10px 20px;
    background: #DCDCDC;
    text-align: center;
    font-weight: bold;
    cursor: pointer;

  }
}
</style>
