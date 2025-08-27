<template>
    <div class="game-item">
        <div class="game-item__container">
            <p class="game-item-number">
                0
            </p>

            <input class="game-item-rating">
            
            </input>

            <select class="game-item-result">
                <option class="game-item-result-option">Победа</option>
                <option class="game-item-result-option">Поражение</option>
                <option class="game-item-result-option">Ничья</option>
            </select>

            <p class="game-item-change">
                0
            </p>
        </div>
    </div>
</template>

<script setup>

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
    width: 50px;
    height: 50px;
    font-size: 23px;
    border-radius: 50%;
    background-color: lightgreen;
    flex-shrink: 0;
}

.game-item-rating {
    margin-right: 30px;
    width: 100%;
    max-width: 100%;
    min-width: 100px;
    height: 30px;
}

.game-item-result {
    margin-right: 10px;
    width: 100%;
    max-width: 100%;
    min-width: 100px;
    height: 30px;

    &-option {
        font-size: 15px;
    }
}

.game-item-change {
    font-size: 23px;
    margin: 0 20px;
}

</style>