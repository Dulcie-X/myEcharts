<template>
  <div :id="idName"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "ECharts",
  data() {
    return {
      myChart: {},
    };
  },
  props: {
    options: {
      type: Object,
      default() {
        return {};
      },
    },
    idName: {
      type: String,
    },
  },
  mounted() {
    this.loadEchart();
    window.addEventListener("resize", this.handleWindowResize);
  },
  methods: {
    loadEchart() {
      this.myChart = echarts.init(document.getElementById(this.idName));
      this.myChart.setOption(this.options);
    },
    handleWindowResize() {
      if (!this.myChart) return;
      this.myChart.resize();
    },
  },
};
</script>

<style scoped>
</style>