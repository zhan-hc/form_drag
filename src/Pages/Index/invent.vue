<template>
  <div id="invent-wrap" ref="wrap">
    <div class="invent-space" ref="space"></div>
    <ul class="invent-list" ref="list" v-if="list">
      <!-- 十条渲染 -->
      <!-- <li v-for="(item, i) in list" :key="i">我是第{{item.id}}个</li> -->
      <!-- 基本实现 -->
      <li v-for="item in list.slice(start,end)" :key="item.id">
        <img :src="item.image" alt="">
        我是第{{item.id}}个
        <span>{{item.name}}</span>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'invent',
  data () {
    return {
      num: 10,
      list: [],
      startIndex: -1,
      flag: false,
      start: 0,
      end: 10
    }
  },
  mounted () {
    this.getData()
    this.$refs.space.style.height = `${50000}px` // 撑开父元素高度
    this.$refs.wrap.addEventListener('scroll', () => {
      requestAnimationFrame(() => {
        let scrollTop = this.$refs.wrap.scrollTop
        // 基本实现
        if (scrollTop <= 49550) {
          let startIndex = Math.floor(scrollTop / 50)
          this.start = startIndex
          this.end = startIndex + 10
          this.$refs.list.style.transform = 'translateY(' + scrollTop + 'px)'
        }
      })
      // let scrollTop = this.$refs.wrap.scrollTop
      // // 基本实现
      // if (scrollTop <= 49550) {
      //   let startIndex = Math.floor(scrollTop / 50)
      //   this.start = startIndex
      //   this.end = startIndex + 10
      //   this.$refs.list.style.transform = 'translateY(' + scrollTop + 'px)'
      // }
    })
  },
  methods: {
    getData () {
      this.$axios({
        url: '/mock/getInventList',
        method: 'get'
      }).then(res => {
        this.list = res.data.list
        console.log(this.list)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#invent-wrap{
  height: 500px;
  width: 600px;
  border: 2px solid #000;
  // overflow-y: scroll;
  overflow: auto;
  margin: auto;
  .invent-space{
    float: left;
  }
  .invent-list{
    padding: 0;
    margin: 0;
    li{
      list-style-type: none;
      height: 50px;
      border: 1px solid #000;
      box-sizing: border-box;
      img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-top: 5px;
      }
    }
  }
}

</style>
