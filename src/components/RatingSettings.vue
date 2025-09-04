<template>
    <div class="rating-settings">
        <select v-model="federation" class="rating-settings__choice">
            <option class="rating-settings__choice-option" value="fshr">ФШР</option>
            <option class="rating-settings__choice-option" value="fide">FIDE</option>
        </select>

        <div class="rating-settings__inputs">
            <div class="rating-settings__start">
                <label class="rating-settings__label">
                    Ваш рейтинг на начало турнира
                </label>
                <input
                    type="number"
                    class="rating-settings__input"
                    :value="store.settings.initialRating" 
                    @input="store.updateInitialRating($event.target.value)"
                />
            </div>

            <div class="rating-settings__coefficient">
                <label class="rating-settings__label">
                    Коэффициент развития (K)
                </label>
                <input 
                    v-if="federation === 'fshr'"
                    :placeholder="infoText"
                    class="rating-settings__input rating-settings__input--disabled"
                    disabled
                />
                <select 
                v-model="fideKFactor"
                class="rating-settings__select"
                v-else
                >
                    <option class="rating-settings__select-option" value="10">10 (для игроков >2400)</option>
                    <option class="rating-settings__select-option" value="20">20 (для игроков &lt;2400)</option>
                    <option class="rating-settings__select-option" value="40">40 (для новых игроков)</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, watch, ref } from 'vue';
import { useChessStore } from '../stores/chessStore';

let store = useChessStore()

let federation = ref('fshr');
let fideKFactor = ref("20");

watch(fideKFactor, (newValue) => {
    if(federation.value == 'fide') {
        store.updateKFactor(Number(newValue))
    }
});

watch(federation, (newFederation) => {
    if(newFederation == "fide") {
        store.updateKFactor(Number(fideKFactor.value))
    } else if(newFederation == "fshr") {
        updateKFactorBasedOnRating(store.settings.initialRating)

    }
})

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

    // updateKFactorBasedOnRating(num); // Избыточно???
});

function updateKFactorBasedOnRating(rating) {
    rating = Number(rating);
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

    &__choice {
        width: 100%;
        box-sizing: border-box;
        padding: 8px 12px;
        margin-bottom: 20px;
        font-size: 18px;

        @media(max-width: 700px) {
            font-size: 15px;
    }

        &-option {
            font-size: 15px;
        }
    }

    &__inputs {
        display: flex;
        flex-direction: row;
        gap: 50px;

        @media(max-width: 500px) {
            flex-direction: column;
            gap: 20px;
            
        }
    }

    &__start,
    &__coefficient {
        display: flex;
        flex: 1;
        flex-direction: column;
    }

    &__label {
        font-size: 15px;
        padding-bottom: 10px;
        color: #525252;
        text-transform: uppercase;
        white-space: nowrap;

        @media(max-width: 700px) {
            font-size: 12px;
        }
    }

    &__input {
        width: 100%;
        height: 30px;
        color: #2C3E50;
        border: 1px solid #707070;
        font-size: 16px;

        &--disabled {
            background-color: #F8F9F9;
            color: #95A5A6;
        }
    }

    &__select {
        width: 100%;
        box-sizing: border-box;
        padding: 8px 12px;

        &-option {
            font-size: 15px;
        }
        
        
    }
}
</style>
