<template>
  <div class="select-wrap">
    <span>{{data.label}}：</span>
    <select disabled>
      <option value="">{{data.placeholder}}</option>
      <!-- <option v-for="item in opList" :value ="item.value" :key="item.id">{{item.label}}</option> -->
    </select>
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
.select-wrap{
  display: flex;
  height: 50px;
  align-items: center;
  padding:0 20px;
  span{
    width: 100px;
    text-align: right;
  }
  select{
    width: 300px;
  }
}
</style>
