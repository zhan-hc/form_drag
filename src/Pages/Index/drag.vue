<template>
  <div class="wrap">
    <div class="content-left" @dragstart="startDrag">
      <h3 style="text-align: center">组件</h3>
      <div class="drag-item" v-for="(item, i) in comtempList" :key="item.id">
        <i class="iconfont" :class="item.icon"></i>
        <div class="text" draggable :data-index="i+1">{{item.label}}</div>
      </div>
    </div>
    <div class="content" @drop="handleDrop" @dragover="overDrop($event)" @dragenter ="allowDrop($event)" @dragleave="removeVisCom">
      <div class="form-container">
        <h1 style="text-align: center">xxxx表单</h1>
        <form-wrap v-for="(item, i) in comList"  :key="i" :index='i' @removeCom="removeCom" @click.native="handleClick(i)">
          <component class="content-comlist" :is="item.component" :data="item"/>
        </form-wrap>
      </div>

    </div>
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
    </div>
  </div>
</template>

<script>
import testInput from '../../components/testInput.vue'
import testTextarea from '../../components/testTextarea.vue'
import testCheckbox from '../../components/testCheckbox.vue'
import testSelect from '../../components/testSelect.vue'
import testRadio from '../../components/testRadio.vue'
import testNone from '../../components/testNone.vue'
import formWrap from '../../components/formWrap.vue'
import { comtemp, comtempList } from '../../assets/js/common'
export default {
  data () {
    return {
      component: {
        '0': 'none',
        '1': 'input',
        '2': 'textArea',
        '3': 'radio',
        '4': 'checkbox',
        '5': 'select'
      },
      comtemp,
      comtempList,
      comList: [],
      comInfo: {},
      insertIndex: 0
    }
  },
  components: {
    testInput,
    formWrap,
    testNone,
    testSelect,
    testRadio,
    testCheckbox,
    testTextarea
  },
  methods: {
    startDrag (e) {
      e.dataTransfer.setData('index', e.target.dataset.index)
    },
    handleDrop (e) {
      this.comList = this.comList.filter(item => item.component !== 'testNone')
      this.comList.splice(this.insertIndex, 0, JSON.parse(JSON.stringify(this.comtemp[this.component[e.dataTransfer.getData('index')]])))
      this.handleClick(this.insertIndex)
    },

    removeCom (i) {
      this.comList.splice(i, 1)
    },
    removeVisCom (e) {
      console.log('3', e, this.insertIndex)
      // this.comList = this.comList.filter(item => item.component !== 'testNone')
    },
    handleClick (i) {
      this.comInfo = this.comList[i]
    },
    allowDrop (event) { // 拖拽悬浮
      this.comList = this.comList.filter(item => item.component !== 'testNone')
      if (this.comList.length > 0) {
        this.insertIndex = this.getBoundary(this.comList, event.screenY)
        this.comList.splice(this.insertIndex, 0, this.comtemp[this.component[0]])
      }
    },
    overDrop (event) {
      event.preventDefault()
    },
    getBoundary (list, scY) { // 获取
      if (list.length > 0) {
        let arr = []
        let sum = 185 // 默认值（表单开始的top距离）
        var q = 0
        sum += list[0].height / 2
        arr.push(sum)
        for (let i = 1; i < list.length; i++) {
          sum += (list[i - 1].height + list[i].height) / 2 // 以每个组件的中间作为临界值
          arr.push(sum)
        }
        for (let i = 0; i < arr.length; i++) { // 根据边界数组返回插入的index
          if (scY < arr[i]) {
            q = i === 0 ? 0 : i
            return q
          }
        }
        return arr.length
      }
    }
  }
}
</script>

<style scoped lang="scss">
.wrap{
  display: flex;
  background: rgb(247, 248, 250);
  // min-width: 1400px;
  .content-left{
    width: 360px;
    min-width: 360px;
    height: 500px;
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
  }
  .content{
    flex: 1;
    overflow: hidden;
    height: 99vh;
    min-width: 800px;
    background: #fff;
    box-shadow:#ccc 0 0 10px;
    .invent {
      display: none;
      border: 1px dashed red;
      height: 50px;
    }
    .form-container{
      overflow-x: hidden;
      overflow-y: auto;
      color: #000;
      font-size: .7rem;
      font-family: "\5FAE\8F6F\96C5\9ED1",Helvetica,"黑体",Arial,Tahoma;
      height: 100%;
      &::-webkit-scrollbar {
        width: 4px;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        background: rgba(0,0,0,0.2);
      }
      &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        border-radius: 0;
        background: rgba(0,0,0,0.1);
      }
    }
  }
  .content-right{
    width: 300px;
    min-width: 300px;
    height: 500px;
    background: #fff;
    margin-left: 20px;
    .set-item{
      margin-bottom: 10px;
      span{
        display: inline-block;
        width: 80px;
        text-align: right;
      }
    }
  }
}
</style>
