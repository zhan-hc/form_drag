<template>
<div class="input-wrap">
  <span>{{data.label}}</span>
  <input type="text" :placeholder="data.placeholder" disabled>
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
.input-wrap{
  padding:20px;
  span{
    display: block;
    margin-left: 20px;
    margin-bottom: 10px;
  }
  input{
    margin-left: 20px;
    width: 96%;
    height: 30px;
    padding-left: 10px;
  }
}

</style>
