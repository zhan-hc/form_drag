<template>
  <div class="textarea-wrap">
    <span>{{data.label}}：</span>
    <textarea name="" id="" rows="5" :placeholder="data.placeholder" disabled></textarea>
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
.textarea-wrap{
  display: flex;
  padding:10px 20px;
  box-sizing: border-box;
  span{
    width: 100px;
    text-align: right;
  }
  textarea{
    flex: 1;
  }
}
</style>
