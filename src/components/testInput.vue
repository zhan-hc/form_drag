<template>
<div class="input-wrap">
  <span>{{data.label}}：</span>
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
  display: flex;
  height: 50px;
  align-items: center;
  padding:0 20px;
  span{
    width: 100px;
    text-align: right;
  }
  input{
    flex: 1;
  }
}

</style>
