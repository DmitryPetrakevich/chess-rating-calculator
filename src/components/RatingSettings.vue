<template>
    <div class="rating-settings">
        <select class="rating-settings-choice">
            <option>ФШР</option>
            <option>FIDE</option>
        </select>

        <div class="rating-settings-inputs">
            <div class="rating-settings-start">
                <label class="rating-settings-start-label">
                    Ваш рейтинг на начало турнира
                </label>
                <input
                type="number"
                class="rating-settings-start-input"
                :value="store.settings.initialRating" 
                @input="store.updateInitialRating($event.target.value)"
                />
            </div>

            <div class="rating-settings-coefficient">
                <label class="rating-settings-coefficient-label"
                >Коэффициент развития (K)
                </label>
                <input 
                :placeholder="infoText"
                class="rating-settings-coefficient-input"
                disabled
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, watch } from 'vue';
import { useChessStore } from '../stores/chessStore';

let store = useChessStore()

watch(() => store.settings.initialRating, (newRating) => {
    updateKFactorBasedOnRating(Number(newRating));
})

let infoText = computed(() => {
    const num = Number(store.settings.initialRating)

    if (num == 0) return "Введите начальный рейтинг"
    if (num < 1200) return '60 (1000-1199)'
    if (num < 1400) return '50 (1200-1399)'
    if (num < 1600) return '40 (1400-1599)'
    if (num < 1800) return '35 (1600-1799)'
    if (num < 2000) return '30 (1800-1999)'
    if (num < 2200) return '25 (2000-2199)'
    if (num < 2400) return '20 (2200-2399)'
    if (num >= 2400) return '10 (>2400)'

    updateKFactorBasedOnRating(num);
});

function updateKFactorBasedOnRating(rating) {
    let kFactor;
    if(rating === 0) kFactor = 20;
    else if (rating < 1200) kFactor = 60;
    else if (rating < 1400) kFactor = 50;
    else if (rating < 1600) kFactor = 40;
    else if (rating < 1800) kFactor = 35;
    else if (rating < 2000) kFactor = 30;
    else if (rating < 2200) kFactor = 25;
    else if (rating < 2400) kFactor = 20;
    else kFactor = 10;
    
    store.updateKFactor(kFactor);
}

// Инициализируем при загрузке
updateKFactorBasedOnRating(Number(store.settings.initialRating));
</script>

<style scoped lang="less">
.rating-settings {
    width: 100%;
}

.rating-settings-choice {
    width: 100%;
    box-sizing: border-box;
    padding: 8px 12px;
    margin-bottom: 20px;
    font-size: 18px;
}

.rating-settings-inputs {
    display: flex;
    gap: 50px;
}

.rating-settings-start {
    display: flex;
    flex: 1;
    flex-direction: column;
}

.rating-settings-start-label {
    padding-bottom: 10px;
    color: #7F8C8D;
}

.rating-settings-start-input {
    width: 100%;
    height: 30px;
    color: #2C3E50;
    border: 1px solid #BDC3C7;
}

.rating-settings-coefficient {
    display: flex;
    flex: 1;
    flex-direction: column;
}

.rating-settings-coefficient-label {
    padding-bottom: 10px;
    color: #7F8C8D;
}
.rating-settings-coefficient-input {
    width: 100%;
    height: 30px;
    background-color: #F8F9F9;
    color: #95A5A6;
    border: 1px solid #BDC3C7;
}
</style>