<template>
    <div class="game">
        <div class="game__container">
            <p class="game__number" :class="circleClass">
                {{ number }}
            </p>

            <input 
            class="game__rating"
            type="number"
            v-model="game.rating"
            />

            <select class="game__result" v-model="game.result">
                <option value="1" class="game__option">Победа</option>
                <option value="-1" class="game__option">Поражение</option>
                <option value="0" class="game__option">Ничья</option>
            </select>

            <p class="game__change" :class="colorChange">
                {{ change }}
            </p>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useChessStore } from '../stores/chessStore';

let store = useChessStore();

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
});

const change = computed(() => {
    return store.gameChanges[props.number - 1]; 
});

const colorChange = computed(() => {
    if(change.value > 0) return "plus"
    else if (change.value < 0) return "minus" 
})
</script>

<style scoped lang="less">
.game__container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5px 20px;
    border: 1px solid #707070;
    background-color: #ECF0F1;
    border-radius: 5px;

    @media(max-width: 500px) {
        padding: 10px;
    }
}

.game__number {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0;
    margin-bottom: 0;
    margin-right: 40px;
    margin-left: 10px;
    width: 40px;
    height: 40px;
    font-size: 23px;
    border-radius: 50%;
    background-color: lightgreen;
    flex-shrink: 0;

    @media(max-width: 500px) {
        width: 30px;
        height: 30px;
        font-size: 15px;
    }

    @media(max-width: 500px) {
        margin-right: 20px;
        margin-left: 0;
    }

    &.win {
        background-color: #27AE60;
    }

    &.lose {
        background-color: #E74C3C;
    }
    
    &.draw {
        background-color: #FFD93D;
    }
}

.game__rating {
    margin-right: 30px;
    width: 100%;
    max-width: 100%;
    min-width: 50px;
    height: 30px;
    font-size: 16px;
    color: #525252;

    @media(max-width: 500px) {
        margin-right: 10px;
    }

    @media(max-width: 400px) {
        font-size: 12px;
    }
}

.game__result {
    width: 100%;
    max-width: 100%;
    min-width: 50px;
    height: 30px;
    color: #525252;

    @media(max-width: 400px) {
        font-size: 12px;
    }
}

.game__option {
    font-size: 20px;
}

.game__change {
    font-size: 23px;
    font-weight: 800;
    margin: 0 30px;

    @media(max-width: 500px) {
        font-size: 20px;
        margin: 0 10px;
    }
    @media(max-width: 400px) {
        font-size: 18px;
    }

    &.plus {
        color: green;
    }

    &.minus {
        color: red;
    }
}
</style>
