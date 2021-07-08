<template>
  <div class="wrap">
    <div class="content-left" @dragstart="startDrag">
      <h3 style="text-align: center">组件</h3>
      <div class="drag-item"
        draggable
        :key="item.id"
        :data-index="i+1"
        v-for="(item, i) in comtempList"
      >
        <i class="iconfont" :class="item.icon"></i>
        <div class="text">{{item.label}}</div>
      </div>
    </div>
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
    <div class="content-right" ref="wrap">
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
import formInput from '../../components/form/formInput.vue'
import formTextarea from '../../components/form/formTextarea.vue'
import formCheckbox from '../../components/form/formCheckbox.vue'
import formSelect from '../../components/form/formSelect.vue'
import formRadio from '../../components/form/formRadio.vue'
import formNone from '../../components/form/formNone.vue'
import formWrap from '../../components/form/formWrap.vue'
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
      clickIndex: null,
      insertIndex: 0,
      changestatus: 0, // 0:左边拖拽;1:中间拖拽
      dragObjEq: null
    }
  },
  components: {
    formInput,
    formWrap,
    formNone,
    formSelect,
    formRadio,
    formCheckbox,
    formTextarea
  },
  methods: {
    startDrag (e) {
      e.dataTransfer.setData('index', e.target.dataset.index)
      this.changestatus = 0
    },
    startDragCom (e) {
      let eq = e.target.attributes.getNamedItem('name').textContent
      this.dragObjEq = this.isNull(eq) ? null : parseInt(eq.slice(-1))
      this.changestatus = 1
    },
    handleDrop (e) {
      this.comList = this.comList.filter(item => item.component !== 'formNone')
      if (this.changestatus === 0) {
        this.comList.splice(this.insertIndex, 0, JSON.parse(JSON.stringify(this.comtemp[this.component[e.dataTransfer.getData('index')]])))
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
          this.comList.splice(this.insertIndex, 0, this.comtemp[this.component[0]])
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
      cursor: pointer;
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
        border: 1px dashed #ff9600;
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
