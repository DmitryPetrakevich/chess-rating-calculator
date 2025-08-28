<template>
    <div class="rating-calculator">
        <div class="rating-calculator__container">
            <RatingSettings />
            <GameList />
            <ResultSummary />

        </div>
    </div>
  
</template>

<script setup>

import RatingSettings from './RatingSettings.vue';
import GameItem from './GameItem.vue';
import GameList from './GameList.vue';
import ResultSummary from './ResultSummary.vue';

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
        min-height: 600px;
        height: auto;
        padding: 20px;
        margin: 0 auto;
        border: 1px solid black;
    }
}
</style>