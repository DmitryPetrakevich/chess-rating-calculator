<template>
    <div class="page-header">
        <div class="page-header__container">
            <a href="#" class="page-header__logo">
                <img lass="page-header__logo-img">
                </img>
            </a>
            <h1>Калькулятор рейтинга</h1>
        </div>
        
    </div>
</template>

<script setup>

</script>

<style scoped lang="less">
.page-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    z-index: 100;
    background-color: rgb(144, 195, 192);
     border-bottom: 2px solid black;

    &__container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>

