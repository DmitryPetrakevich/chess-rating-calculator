<template>
    <div class="rating-calculator">
        <div class="rating-calculator__container">
            <RatingSettings />
        </div>
    </div>
  
</template>

<script setup>

import RatingSettings from './RatingSettings.vue';

</script>

<style scoped lang="less">
.rating-calculator {
    padding-top: 120px;
    

    &__container {
        display: flex;
        justify-content: center;
        max-width: 800px;
        height: 600px;
        padding: 20px;
        margin: 0 auto;
        border: 1px solid black;
    }
}
</style>