<template>
    <div class="game-list">
        <div class="game-list__container">
            <div class="game-list__header">
                <p class="game-list__number">#</p>
                <p class="game-list__rating">Рейтинг соперника</p>
                <p class="game-list__result">Результат</p>
                <p class="game-list__change">Изменение</p>
            </div>

            <div class="game-list__games">
                <GameItem 
                    v-for="(game,index) in store.games"
                    :key="game.id"
                    :number="index + 1"
                    :game="game"
                />
            </div>

            <div class="game-list__btns">
                <button 
                    class="game-list__btn game-list__btn--add"
                    @click="store.addGame"
                >
                    + Добавить игру
                </button>

                <button 
                    class="game-list__btn game-list__btn--del"
                    @click="store.deleteGame"
                >
                    - Удалить игру
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import GameItem from './GameItem.vue';
import { useChessStore } from '../stores/chessStore';

let store = useChessStore();
</script>

<style scoped lang="less">
.game-list__header {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 0 30px;
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 800;
    text-transform: uppercase;
    background-color: #BDC3C7;
    color: #2C3E50;
    border: 1px solid black;
    border-radius: 5px;
}

.game-list__games {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.game-list__btns {
    display: flex;
    gap: 20px;
    margin-top: 30px;
}

.game-list__btn {
    display: flex;
    padding: 15px 30px;
    font-size: 20px;
    color: white;
    border: none;
    border-radius: 4px;

    &--add {
        background-color: #27AE60;
        border: 1px solid #229954;
        transition: all 0.3s ease;

        &:hover {
            background-color: rgb(68, 191, 105);
        }
    }

    &--del {
        background-color: #C0392B;
        border: 1px solid #C0392B;
        transition: all 0.3s ease;

        &:hover {
            background-color: rgb(216, 56, 56);
        }
    }
}
</style>
