<template>
  <div class="select-wrap">
    <span>{{data.label}}</span>
    <select :disabled="data.disabled" v-model="data.propValue">
      <option value="">{{data.placeholder}}</option>
      <option  :value ="item._id" v-for="item in data.choices" :key="item._id">{{item.value}}</option>
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
  padding:20px;
  span{
    display: block;
    margin-left: 20px;
    margin-bottom: 10px;
  }
  select{
    margin-left: 20px;
    width: 300px;
    height: 30px;
    padding-left: 10px;
  }
}
</style>
