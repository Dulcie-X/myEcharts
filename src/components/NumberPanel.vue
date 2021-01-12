<template>
  <div class="number">
    <div class="num-hd">
      <ul>
        <li>132947</li>
        <li>1234596</li>
      </ul>
    </div>
    <div class="num-bd">
      <ul>
        <li>前端需求人数</li>
        <li>市场供应人数</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NumberPanel",
};
</script>

<style scoped>
.number {
  background-color: rgba(101, 132, 226, 0.1);
  padding: 0.1875rem;
}
.num-hd {
  position: relative;
  border: 1px solid rgba(25, 186, 139, 0.17);
}
.num-hd ul {
  display: flex;
}
.num-hd ul li {
  position: relative;
  flex: 1;
  height: 1rem;
  font-size: 0.875rem;
  color: #ffeb7b;
  text-align: center;
  font-family: electronicFont;
}
.num-hd::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 30px;
  height: 10px;
  border-left: 2px solid #02a6b5;
  border-top: 2px solid #02a6b5;
}
.num-hd::after {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  width: 30px;
  height: 10px;
  border-right: 2px solid #02a6b5;
  border-bottom: 2px solid #02a6b5;
}
.num-hd ul li:first-child::after{
  content: '';
  position: absolute;
  width: 1px;
  background-color: rgba(255, 255, 255, 0.2);
  height: 50%;
  top: 25%;
  right: 0;
}
.num-bd ul {
  display: flex;
}
.num-bd ul li{
  flex: 1;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: .225rem;
  height: .5rem;
  line-height: .5rem;
  padding-top: .125rem;
}
</style>