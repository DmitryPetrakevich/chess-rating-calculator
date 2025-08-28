<template>
    <div class="game-item">
        <div class="game-item__container">
            <p class="game-item-number" :class="circleClass">
                {{ number }}
            </p>

            <input 
            class="game-item-rating"
            type="number"
            v-model="game.rating"
            />

            <select class="game-item-result" v-model="game.result">
                <option value="1" class="game-item-result-option" >Победа</option>
                <option value="-1" class="game-item-result-option">Поражение</option>
                <option value="0" class="game-item-result-option">Ничья</option>
            </select>

            <p class="game-item-change">
                {{ game.change }}
            </p>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
    number: Number,
    game: Object,
});

let circleClass = computed(() => {
    switch(props.game.result) {
        case "1": return "win";
        case "-1": return 'lose';
        case "0": return 'draw';
        default: return "";
    }
})


</script>

<style scoped lang="less">
.game-item__container {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
}

.game-item-number{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0;
    margin-bottom: 0;
    margin-right: 40px;
    width: 40px;
    height: 40px;
    font-size: 23px;
    border-radius: 50%;
    background-color: lightgreen;
    flex-shrink: 0;

    &.win {
        background-color: lightgreen;
    }

    &.lose {
        background-color: red;
    }
    
    &.draw {
        background-color: yellow;
    }
}

.game-item-rating {
    margin-right: 30px;
    width: 100%;
    max-width: 100%;
    min-width: 100px;
    height: 30px;
}

.game-item-result {
    // margin-right: 100px;
    width: 100%;
    max-width: 100%;
    min-width: 100px;
    height: 30px;

    &-option {
        font-size: 18px;
    }
}

.game-item-change {
    font-size: 23px;
    margin-right: 60px;
    margin-left: 60px;
}

</style>