<template>
  <div id="app">
    <header-content></header-content>
    <section-content></section-content>
  </div>
</template>

<script>
import flexible from 'common/flexible.js';
import HeaderContent from 'components/HeaderContent.vue';
import SectionContent from 'components/SectionContent.vue'

export default {
  name: 'App',
  components: {
    HeaderContent,
    SectionContent,
  }
}
</script>

<style>
@import "assets/css/index.css";
</style>
