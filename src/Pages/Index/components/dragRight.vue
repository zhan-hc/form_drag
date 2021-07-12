<template>
  <div class="content-right">
    <h3 style="text-align: center">组件属性</h3>
    <div class="set-item">
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
        <div class="radio-item" v-for="item in comInfo.choices" :key="item._id">
          <input @change="handleChangeRadio(item._id)" type="radio" :checked="item.selected">
          <input v-model="item.value" type="text" name="">
        </div>
      </div>
      <div class="item-wrap" v-else>
        <div class="checkbox-item" v-for="item in comInfo.choices" :key="item._id">
          <input @change="handleChangeBox(item)" type="checkbox" :checked="item.selected">
          <input v-model="item.value" type="text" name="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comInfo: {
      type: Object,
      default () {
        return null
      }
    }
  },
  data () {
    return {

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
    }
  }
}
</script>

<style scoped lang="scss">
.content-right{
  width: 300px;
  min-width: 300px;
  height: 500px;
  background: #fff;
  margin-left: 20px;
  padding: 20px;
  box-sizing: border-box;
  .set-item{
    margin-bottom: 10px;
    span{
      display: inline-block;
      width: 80px;
      text-align: right;
      font-weight: bold;
    }
    input[type=text]{
      width: 160px;
    }
    input[type=radio]{
      margin-left: 40px;
      margin-top: 10px;
    }
  }
}
</style>
