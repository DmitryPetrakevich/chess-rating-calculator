<template>
    <div class="rating-calculator">
        <div class="rating-calculator__container">
            <RatingSettings />
            <GameItem />
        </div>
    </div>
  
</template>

<script setup>

import RatingSettings from './RatingSettings.vue';
import GameItem from './GameItem.vue';

</script>

<style scoped lang="less">
.rating-calculator {
    padding-top: 120px;
    

    &__container {
        display: flex;
        flex-direction: column;
        // align-items: center;
        gap: 30px;
        max-width: 800px;
        height: 600px;
        padding: 20px;
        margin: 0 auto;
        border: 1px solid black;
    }
}
</style>