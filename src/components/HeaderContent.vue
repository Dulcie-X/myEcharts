<template>
  <div class="header">
      <h1>数据可视化-Echarts</h1>
      <div class="show-time">{{currentTime}}</div>
  </div>
</template>

<script>
export default {
  name: "HeaderContent",
  data() {
    return {
      // 定时器
      timer: null,
      currentTime: '',
    }
  },
  computed: {

  },
  mounted() {
    this.timer = setTimeout(this.getTime, 1000);
  },
  methods: {
    getTime() {
      clearTimeout(this.timer);
      var dt = new Date();
      var y = dt.getFullYear();
      var mt = dt.getMonth() + 1;
      var day = dt.getDate();
      var h = dt.getHours();
      var m = dt.getMinutes();
      var s = dt.getSeconds();
      this.currentTime = '当前时间：' + y + '年' + mt + '月' + day + '日-' + h + '时' + m + '分' + s + '秒';
      this.timer = setTimeout(this.getTime, 1000);
    },
  },
}
</script>

<style scoped>
  .header{
  height: 1.25rem;
  background: url(../assets/image/headerBackground.png) no-repeat;
  background-size: 100% 100%;
  position: relative;
  }
  h1{
    font-size: .475rem;
    color: #fff;
    line-height: 1rem;
    text-align: center;
  }
  .show-time{
    position: absolute;
    right: .375rem;
    top: 0;
    line-height: .9375rem;
    color: rgba(255, 255, 255, 0.7);
    font-size: .25rem;
  }
</style>