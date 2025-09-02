<template>
  <div class="app">
    <PageHeader />
  
   <RatingCalculator />
  </div>
</template>

<script setup>
import PageHeader from './components/PageHeader.vue';
import RatingCalculator from './components/RatingCalculator.vue';

</script>

<style lang="less">
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  background-color: #ECF0F1
}

.app {
  min-height: 100vh;
  background-color: #ECF0F1
}
</style>