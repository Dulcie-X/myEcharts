<template>
  <div class="panel">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="chart">
      <slot name="chart"></slot>
    </div>
    <div class="panel-footer"></div>
  </div>
</template>

<script>
export default {
  name: "DetailPanel",
};
</script>

<style scoped>
.panel {
  position: relative;
  height: 3.875rem;
  border: 1px solid rgba(25, 186, 139, 0.17);
  background: url(../assets/image/line.png) rgba(225, 225, 225, 0.04);
  padding: 0 0.1875rem 0.5rem;
  margin-bottom: 0.1875rem;
}
.panel::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 10px;
  height: 10px;
  border-left: 2px solid #02a6b5;
  border-top: 2px solid #02a6b5;
}
.panel::after {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  width: 10px;
  height: 10px;
  border-right: 2px solid #02a6b5;
  border-top: 2px solid #02a6b5;
}
.panel-footer::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 10px;
  height: 10px;
  border-left: 2px solid #02a6b5;
  border-bottom: 2px solid #02a6b5;
}
.panel-footer::after {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  width: 10px;
  height: 10px;
  border-right: 2px solid #02a6b5;
  border-bottom: 2px solid #02a6b5;
}
.title {
  color: #fff;
  height: 0.6rem;
  font-size: 0.25rem;
  line-height: .6rem;
  text-align: center;
  font-weight: 400;
}
.chart {
  height: 3rem;
}
</style>