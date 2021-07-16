<template>
  <div class="radio-wrap">
    <span>{{data.label}}</span>
    <div class="radio-item" v-for="item in data.choices" :key="item._id">
      <input :disabled="data.disabled" type="radio" :checked="item.selected">{{item.value}}
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
.radio-wrap{
  align-items: center;
  padding:10px 20px;
  span{
    display: inline-block;
    margin-left: 20px;
    margin-bottom: 10px;
  }
  .radio-item{
    margin-left: 40px;
    input{
      margin-right: 10px;
    }
  }
}
</style>
