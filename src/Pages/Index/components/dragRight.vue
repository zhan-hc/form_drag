<template>
  <div class="content-right">
    <h3 style="text-align: center">组件属性</h3>
    <div class="set-item" v-if="comInfo.label">
      <span>标题：</span>
      <input type="text" v-model="comInfo.label"/>
    </div>
    <div class="set-item" v-if="comInfo.placeholder">
      <span>提示语：</span>
      <input type="text" v-model="comInfo.placeholder"/>
    </div>
    <div class="set-item" v-if="comInfo.choices">
      <span>选项：</span>
      <div class="item-wrap" v-if="comInfo.component==='formRadio'">
        <div class="radio-item" v-for="(item,i) in comInfo.choices" :key="item._id">
          <input @change="handleChangeRadio(item._id)" type="radio" :checked="item.selected">
          <input v-model="item.value" type="text" name="">
          <i class="iconfont icon-add" @click="handleAdd(i)"></i>
          <i class="iconfont icon-reduce" @click="handleDelete(i)"></i>
        </div>
      </div>
      <div class="item-wrap" v-else>
        <div class="checkbox-item" v-for="(item, i) in comInfo.choices" :key="item._id">
          <input @change="handleChangeBox(item)" type="checkbox" :checked="item.selected">
          <input v-model="item.value" type="text" name="">
            <i class="iconfont icon-add" @click="handleAdd(i)"></i>
            <i class="iconfont icon-reduce" @click="handleDelete(i)"></i>
        </div>
      </div>
    </div>
    <p v-if="!comInfo.label">请选择一个字段设置属性</p>
  </div>
</template>

<script>
export default {
  props: {
    comInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {

    }
  },
  computed: {
    randomId () {
      return (Math.random() * 10000000).toString(16).substr(0, 4) + '-' + (new Date()).getTime() + '-' + Math.random().toString().substr(2, 5)
    }
  },
  methods: {
    handleChangeRadio (id) {
      this.comInfo.choices.forEach(item => {
        if (item._id === id) {
          item.selected = true
        } else {
          item.selected = false
        }
      })
    },
    handleChangeBox (item) {
      item.selected = !item.selected
    },
    handleAdd (i) {
      this.comInfo.choices.splice(i + 1, 0,
        {
          _id: this.randomId,
          value: '选项',
          selected: false
        })
    },
    handleDelete (i) {
      this.comInfo.choices.splice(i, 1)
    }
  }
}
</script>

<style scoped lang="scss">
.content-right{
  width: 300px;
  min-width: 300px;
  height: 900px;
  background: #fff;
  overflow-y: auto;
  margin-left: 20px;
  padding: 0 20px 0;
  box-sizing: border-box;
  .set-item{
    margin-bottom: 10px;
    span{
      display: inline-block;
      font-weight: bold;
    }
    input[type=text]{
      width: 160px;
      margin-right: 5px;
    }
    input[type=radio]{
      margin-left: 20px;
      margin-top: 10px;
    }
    input[type=checkbox]{
      margin-left: 20px;
      margin-top: 10px;
    }
    .iconfont{
      font-size: 14px;
      &:hover{
        cursor: pointer;
        color: #ff9600;
      }
    }
    .icon-add{
      margin-right: 5px;
    }
  }
  p{
    text-align: center;
  }
}
</style>
