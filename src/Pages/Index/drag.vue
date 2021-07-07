<template>
  <div class="wrap">
    <div class="content-left" @dragstart="startDrag">
      <h3 style="text-align: center">组件</h3>
      <div class="text" draggable :data-index="1">单行文本</div>
      <div class="text" draggable :data-index="2">多行文本</div>
      <div class="text" draggable :data-index="3">单项选择</div>
      <div class="text" draggable :data-index="4">多项选择</div>
    </div>
    <div class="content" @drop="handleDrop" @dragover="overDrop($event)" @dragenter ="allowDrop($event)" @dragleave="removeVisCom">
      <div class="form-container">
        <h1 style="text-align: center">xxxx表单</h1>
        <from-wrap v-for="(item, i) in comList"  :key="i" :index='i' @removeCom="removeCom" @click.native="handleClick(i)">
          <component class="content-comlist" :is="item.component" :data="item"/>
        </from-wrap>
      </div>

    </div>
    <div class="content-right" v-if="comInfo">
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
import testNone from '../../components/testNone.vue'
import fromWrap from '../../components/fromWrap.vue'
import { comtemp } from '../../assets/js/common'
export default {
  data () {
    return {
      component: {
        '0': 'none',
        '1': 'input',
        '2': 'textArea',
        '3': 'select',
        '4': 'checkbox'
      },
      comtemp,
      comList: [],
      comInfo: {},
      insertIndex: 0
    }
  },
  components: {
    testInput,
    fromWrap,
    testNone,
    testSelect,
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
          sum += (list[i - 1].height + list[i].height) / 2
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
  .content-left{
    width: 300px;
    height: 500px;
    border: 1px solid #000;
    text-align: center;
    .text {
      display: inline-block;
      padding: 10px 20px;
      border: 1px solid #000;
      margin-bottom: 20px;
    }
  }
  .content{
    flex: 1;
    border: 1px solid #000;
    overflow: scroll;
    height: 99vh;
    min-width: 800px;
    .invent {
      display: none;
      border: 1px dashed red;
      height: 50px;
    }
  }
  .content-right{
    width: 300px;
    height: 500px;
    border: 1px solid #000;
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
