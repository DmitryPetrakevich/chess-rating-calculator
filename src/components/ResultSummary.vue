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
                            1000
                        </div>
                    </div>
                    <hr class="divider"/> 

                    <div class="result-summary-main-performance">
                        <p class="result-summary-main-performance-text">
                            Ваш перформанс:
                        </p>
                        <div class="result-summary-main-performance-number">
                            1000
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
    let sum = store.games.reduce((a,c) => a + c.rating,0)
    return Math.floor(sum / store.games.length)
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
    background-color: rgb(94, 126, 213);
    border: 1px solid grey;
    border-radius: 5px;
    text-transform: uppercase;
    color: white;
    font-size: 25px;
}

.result-summary-table {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
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
        font-size: 20px;
    }

    &-number {
        font-size: 25px;
    }
}

.result-summary-main-performance {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &-text {
        font-size: 20px;
    }

    &-number {
        font-size: 25px;
    }
}

.result-summary-main-average {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 30px;

    &-text {
        font-size: 20px;
    }

    &-number {
        font-size: 25px;
    }
}

.divider {
    width: 100%;
    height: 1px;
    background-color: #e0e0e0;
}


</style>