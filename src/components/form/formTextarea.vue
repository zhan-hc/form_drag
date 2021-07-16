<template>
  <div class="textarea-wrap">
    <span>{{data.label}}</span>
    <textarea name="" id="" rows="5" :placeholder="data.placeholder" :disabled="data.disabled"></textarea>
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
  padding:20px;
  span{
    display: block;
    margin-left: 20px;
    margin-bottom: 10px;
  }
  textarea{
    margin-left: 20px;
    width: 96%;
    padding-left: 10px;
    padding-top: 10px;
  }
}
</style>
