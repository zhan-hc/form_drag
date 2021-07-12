<template>
  <div class="wrap">
    <drag-left
    :comtempList="comtempList"
    @handleClick="handleClickAdd"
    @handleChange="handleChange"/>
    <div class="content"
      @drop="handleDrop"
      @dragover="overDrop($event)"
      @dragenter ="allowDrop($event)"
      @dragleave="removeVisCom"
    >
      <h1 style="text-align: center">xxxx表单</h1>
      <div
        ref="container"
        class="form-container"
        @dragstart="startDragCom"
        >
        <form-wrap
          draggable
          :key="i"
          :index='i'
          :name="`wrap${i}`"
          v-for="(item, i) in comList"
          :class="{'active': clickIndex === i}"
          @removeCom="removeCom"
          @click.native="handleClick(i)"
          @drop="handleDrop"
        >
          <component
            :data="item"
            :name="`wrap${i}`"
            class="content-comlist"
            :is="item.component"
          />
        </form-wrap>
      </div>
    </div>
    <drag-right :comInfo.sync="comInfo"/>
  </div>
</template>

<script>
import formList from '../../components/form/formList.js'
import formWrap from '../../components/form/formWrap.vue'
import dragLeft from './components/dragLeft.vue'
import dragRight from './components/dragRight.vue'
import { comtemp, comtempList } from '../../assets/js/common'
export default {
  data () {
    return {
      comtemp,
      comtempList,
      comList: [],
      comInfo: {},
      clickIndex: null,
      insertIndex: 0,
      changestatus: 0, // 0:左边拖拽;1:中间拖拽
      dragObjEq: null,
      radioVal: null
    }
  },
  components: {
    formWrap,
    dragLeft,
    dragRight,
    ...formList
  },
  methods: {
    handleChange (status) {
      this.changestatus = status
    },
    startDragCom (e) {
      let eq = e.target.attributes.getNamedItem('name').textContent
      this.dragObjEq = this.isNull(eq) ? null : parseInt(eq.slice(-1))
      this.changestatus = 1
    },
    handleDrop (e) {
      this.comList = this.comList.filter(item => item.component !== 'formNone')
      if (this.changestatus === 0) {
        this.comList.splice(this.insertIndex, 0, JSON.parse(JSON.stringify(this.comtemp[e.dataTransfer.getData('type')])))
        this.handleClick(this.insertIndex)
      }
    },
    removeCom (i) {
      this.comList.splice(i, 1)
    },
    removeVisCom (e) {
      // console.log('3', this.insertIndex)
    },
    handleClick (i) {
      this.clickIndex = i
      this.comInfo = this.comList[i]
    },
    handleClickAdd (type) {
      this.comList.push(JSON.parse(JSON.stringify(this.comtemp[type])))
      this.handleClick(this.comList.length - 1)
    },
    allowDrop (event) { // 拖拽悬浮
      if (this.changestatus === 1) {
        if (event.target.attributes.getNamedItem('name')) {
          // 获取拖拽到的对象对应的索引
          let eq = event.target.attributes.getNamedItem('name').textContent
          const end = this.isNull(eq) ? null : parseInt(eq.slice(-1))
          if (!this.isNull(this.dragObjEq) && !this.isNull(end) && this.dragObjEq !== end) { // 非空判断
            this.comList = this.elChangeExForArray(this.dragObjEq, end, this.comList)
            this.dragObjEq = end
            this.clickIndex = this.dragObjEq
          }
        }
      } else {
        this.comList = this.comList.filter(item => item.component !== 'formNone')
        if (this.comList.length > 0) {
          this.insertIndex = this.getBoundary(this.comList, event.screenY)
          this.comList.splice(this.insertIndex, 0, this.comtemp.none)
        }
      }
    },
    overDrop (event) {
      event.preventDefault()
    },
    getBoundary (list, scY) { // 获取临界值
      if (list.length > 0) {
        let arr = []
        let sum = 185 // 默认值（表单开始的top距离）
        var q = 0
        sum += list[0].height / 2 + 10 // 10指的margin-bottom
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
    },
    elChangeExForArray (index1, index2, array) { // 交换数组对象位置
      let temp = array[index1]
      array[index1] = array[index2]
      array[index2] = temp
      return array
    },
    isNull (exp) {
      if (!exp && typeof (exp) !== 'undefined' && exp !== 0) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped lang="scss">
.wrap{
  display: flex;
  background: rgb(247, 248, 250);
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
      font-size: 16px;
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
      .active{
        background: #f5f5f5;
        // border: 1px dashed #ff9600;
      }
    }
  }
}
</style>
