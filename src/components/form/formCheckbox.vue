<template>
  <div class="checkbox-wrap">
    <span>{{data.label}}：</span>
    <input disabled type="checkbox" name="choose" value="choose">选项1&nbsp;&nbsp;
    <input disabled type="checkbox" name="choose" value="choose">选项2&nbsp;&nbsp;
    <input disabled type="checkbox" name="choose" value="choose">选项3&nbsp;&nbsp;
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
  display: flex;
  height: 50px;
  align-items: center;
  padding:0 20px;
  span{
    width: 100px;
    text-align: right;
  }
}
</style>
