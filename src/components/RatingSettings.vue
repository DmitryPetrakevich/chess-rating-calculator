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
                v-model.number="rating" 
                class="rating-settings-start-input">
                </input>
            </div>

            <div class="rating-settings-coefficient">
                <label class="rating-settings-coefficient-label"
                >Коэффициент развития (K)
                </label>
                <input 
                :placeholder="infoText"
                class="rating-settings-coefficient-input"
                disabled
                >
                
                </input>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

let rating = ref(0)

let infoText = computed(() => {
    const num = Number(rating.value)

    if (num < 1200) return '60 (1000-1199)'
    if (num < 1400) return '50 (1200-1399)'
    if (num < 1600) return '40 (1400-1599)'
    if (num < 1800) return '35 (1600-1799)'
    if (num < 2000) return '30 (1800-1999)'
    if (num < 2200) return '25 (2000-2199)'
    if (num < 2400) return '20 (2200-2399)'
    if (num >= 2400) return '10 (>2400)'
})

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
}

.rating-settings-start-input {
    width: 100%;
    height: 30px;
}

.rating-settings-coefficient {
    display: flex;
    flex: 1;
    flex-direction: column;
}

.rating-settings-coefficient-label {
    padding-bottom: 10px;
}
.rating-settings-coefficient-input {
    width: 100%;
    height: 30px;


}

</style>