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
import GameList from './GameList.vue';
import ResultSummary from './ResultSummary.vue';

</script>

<style scoped lang="less">
.rating-calculator {
    padding-top: 120px;
    padding-bottom: 100px;
    

    &__container {
        display: flex;
        flex-direction: column;
        gap: 30px;
        max-width: 800px;
        min-height: 600px;
        height: auto;
        padding: 20px;
        margin: 0 auto;
        border: 2px solid rgb(69, 97, 125);
        border-radius: 5px;
        background-color: #e9e9e9;
    }
}
</style>