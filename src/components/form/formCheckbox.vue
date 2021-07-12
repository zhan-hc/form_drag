<template>
  <div class="checkbox-wrap">
    <!-- <span>{{data.label}}：</span>
    <input disabled type="checkbox" name="choose" value="choose">选项1&nbsp;&nbsp;
    <input disabled type="checkbox" name="choose" value="choose">选项2&nbsp;&nbsp;
    <input disabled type="checkbox" name="choose" value="choose">选项3&nbsp;&nbsp; -->
    <span>{{data.label}}</span>
    <div class="checkbox-item" v-for="item in data.choices" :key="item._id">
      <input disabled type="checkbox" :checked="item.selected">{{item.value}}
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data () {
    return {
    }
  },
  components: {
  }
}
</script>

<style scoped lang="scss">
.checkbox-wrap{
  align-items: center;
  padding:10px 20px;
  span{
    display: inline-block;
    width: 100px;
    text-align: right;
    margin-bottom: 10px;
  }
  .checkbox-item{
    margin-left: 40px;
    input{
      margin-right: 10px;
    }
  }
}
</style>
