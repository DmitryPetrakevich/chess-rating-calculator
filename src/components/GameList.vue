<template>
    <div class="game-list">
        <div  class="game-list__container">
            <div class="game-list-header">
                <p class="game-list-header-number">
                    #
                </p>

                <p class="game-list-header-rating">
                    Рейтинг соперника
                </p>

                <p class="game-list-header-result">
                    Результат
                </p>

                <p class="game-list-header-change">
                    Изменение
                </p>
            </div>

            <div class="game-list-games">
                <GameItem 
                v-for="(game,index) in store.games"
                :key="game.id"
                :number="index + 1"
                :game="game"
                />
            </div>

            <div class="game-list-games-btns">
                <button 
                class="game-list-games-btn-add"
                @click="store.addGame"
                >
                    + Добавить игру
                </button>

                <button 
                class="game-list-games-btn-del"
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
.game-list-header {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 0 30px;
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 800;
    text-transform: uppercase;
    border: 1px solid black;
    border-radius: 5px;
}

.game-list-header-number {
}

.game-list-header-rating {
}

.game-list-header-result {
}

.game-list-games {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.game-list-games-btns {
    display: flex;
    gap: 20px;
    margin-top: 30px;
}

.game-list-games-btn-add {
    display: flex;
    padding: 15px 30px;
    background-color: rgb(38, 154, 38);
    color: white;
    border: 1px solid grey;
    font-size: 20px;
}

.game-list-games-btn-del {
    display: flex;
    padding: 15px 30px;
    background-color: rgb(220, 33, 33);
    color: white;
    border: 1px solid grey;
    font-size: 20px;
}

</style>