<template>
    <div class="result-summary">
        <div class="result-summary__container">
            <button class="result-summary-btn">
                Рассчитать рейтинг
            </button>

            <div class="result-summary-table">
                <h3 class="result-summary-title">
                Результаты турнира
                </h3>

                <div class="result-summary-main">
                    <div class="result-summary-main-rating">
                        <p class="result-summary-main-rating-text">
                            Новый рейтинг:
                        </p>
                        <div class="result-summary-main-rating-number">
                            <p class="newRating">{{newRating}}</p>
                            <p class="totalChange">{{ totalChange }}</p>
                        </div>
                    </div>
                    <hr class="divider"/> 

                    <div class="result-summary-main-performance">
                        <p class="result-summary-main-performance-text">
                            Ваш перформанс:
                        </p>
                        <div class="result-summary-main-performance-number">
                            {{performance}}
                        </div>
                    </div>
                    <hr class="divider"/> 

                    <div class="result-summary-main-average">
                        <p class="result-summary-main-average-text">
                            Средний рейтинг соперников:
                        </p>
                        <div class="result-summary-main-average-number">
                            {{ average }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useChessStore } from '../stores/chessStore';
import { ref, computed } from 'vue';

const store = useChessStore();

let average = computed(() => {
    if (!store.games || store.games.length === 0) return 0;
    let sum = store.games.reduce((a,c) => a + c.rating,0)
    return Math.floor(sum / store.games.length)
})

let performance = computed(() => {
    if(!store.games || store.games.length === 0) return 0;

    let wins = store.games.filter(game => game.result == 1).length;
    let draws = store.games.filter(game => game.result == 0).length;
    let totalGames = store.games.length;
    const totalPoints = wins + draws * 0.5;

    return Math.round(average.value + 400 * (2 * totalPoints - totalGames) / totalGames);
})

const totalChange = computed(() => {
    return store.totalChange;
})

const newRating = computed(() => {
    return store.newRating

})
</script>

<style scoped lang="less">
.result-summary {
    margin-top: 10px;

    &__container {
        // display: flex;
        // flex-direction: column;
    }
}

.result-summary-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 30px;
    margin-bottom: 20px;
    width: 100%;
    background-color: #2C3E50;
    border: 1px solid #1A2530;
    border-radius: 5px;
    text-transform: uppercase;
    color: white;
    font-size: 25px;
}

.result-summary-table {
    display: flex;
    flex-direction: column;
    border: 1px solid rgb(33, 3, 114);
    border-radius: 5px;
    
}

.result-summary-title {
    display: flex;
    justify-content: center;
    font-size: 25px;
    text-transform: uppercase;
}

.result-summary-main {
    display: flex;
    flex-direction: column;
    padding: 20px;
}

.result-summary-main-rating {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &-text {
        font-size: 23px;
        color: rgb(6, 6, 100);
    }

    &-number {
        display: flex;
        flex-direction: row;
        gap: 10px;
        color: rgb(6, 6, 100);
    }
}

.newRating {
    font-size: 36px;
}

.totalChange {
    font-size: 28px;
}

.result-summary-main-performance {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &-text {
        font-size: 23px;
        color: rgb(6, 6, 100);
    }

    &-number {
        font-size: 23px;
        color: rgb(6, 6, 100);
    }
}

.result-summary-main-average {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 30px;

    &-text {
        font-size: 23px;
        color: rgb(6, 6, 100);
    }

    &-number {
        font-size: 23px;
        color: rgb(6, 6, 100);
    }
}

.divider {
    width: 100%;
    height: 1px;
    background-color: #e0e0e0;
}


</style>