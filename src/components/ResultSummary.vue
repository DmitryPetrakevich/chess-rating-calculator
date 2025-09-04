<template>
  <div class="summary">
    <div class="summary__container">
      <div class="summary__table">
        <h3 class="summary__title">Результаты турнира</h3>

        <div class="summary__main">
          <div class="summary__rating">
            <p class="summary__rating-text">Новый рейтинг:</p>
            <div class="summary__rating-number">
              <p class="summary__new">{{ newRating }}</p>
              <p v-if="totalChange > 0" class="summary__change" :class="totalChangeColor">+{{ totalChange }}</p>
              <p v-else class="summary__change" :class="totalChangeColor">{{ totalChange }}</p>
            </div>
          </div>
          <hr class="divider" />

          <div class="summary__performance">
            <p class="summary__performance-text">Ваш перформанс:</p>
            <div class="summary__performance-number">
              {{ performance }}
            </div>
          </div>
          <hr class="divider" />

          <div class="summary__average">
            <p class="summary__average-text">Средний рейтинг соперников:</p>
            <div class="summary__average-number">
              {{ average }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useChessStore } from "../stores/chessStore";
import { computed } from "vue";

const store = useChessStore();

let average = computed(() => {
  if (!store.games || store.games.length === 0) return 0;
  let sum = store.games.reduce((a, c) => a + c.rating, 0);
  return Math.floor(sum / store.games.length);
});

let performance = computed(() => {
  if (!store.games || store.games.length === 0) return 0;

  let wins = store.games.filter((game) => game.result == 1).length;
  let draws = store.games.filter((game) => game.result == 0).length;
  let totalGames = store.games.length;
  const totalPoints = wins + draws * 0.5;

  return Math.round(
    average.value + (400 * (2 * totalPoints - totalGames)) / totalGames
  );
});

const totalChange = computed(() => store.totalChange);

const newRating = computed(() => store.newRating >= 1000 ? store.newRating : 1000 );

const totalChangeColor = computed(() => {
  if (totalChange.value >= 0) return "summary__change--plus";
  else return "summary__change--minus";
});
</script>

<style scoped lang="less">
.summary {
  margin-top: 10px;

  &__container {
  }

  &__table {
    display: flex;
    flex-direction: column;
    border: 1px solid #707070;
    border-radius: 5px;
  }

  &__title {
    display: flex;
    justify-content: center;
    font-size: 25px;
    text-transform: uppercase;
    color: #2C3E50;

    @media(max-width: 700px) {
      font-size: 20px;
    }

    @media(max-width: 500px) {
      font-size: 16px;
    }
  }

  &__main {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  &__rating {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &-text {
      font-size: 23px;
      color: #2C3E50;

      @media(max-width: 700px) {
        font-size: 20px;
    }

      @media(max-width: 500px) {
        font-size: 16px;
    }
  }

    &-number {
      display: flex;
      flex-direction: row;
      gap: 10px;
      color: rgb(6, 6, 100);
    }
  }

  &__new {
    font-size: 36px;
    margin: 0;
    padding: 0;

    @media(max-width: 700px) {
      font-size: 25px;
    }

    @media(max-width: 500px) {
      font-size: 20px;
    }
  }

  &__change {
    font-size: 28px;
    margin: 0;
    padding: 0;

    @media(max-width: 700px) {
      font-size: 20px;
    }

    @media(max-width: 500px) {
      font-size: 15px;
    }

    &--plus {
      color: green;
    }

    &--minus {
      color: red;
    }
  }

  &__performance {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &-text {
      font-size: 23px;
      color: #2C3E50;

      @media(max-width: 700px) {
        font-size: 20px;
    }

      @media(max-width: 500px) {
        font-size: 16px;
    }
    }

    &-number {
      font-size: 36px;
      color: rgb(6, 6, 100);

      @media(max-width: 700px) {
        font-size: 25px;
    }

    @media(max-width: 500px) {
      font-size: 20px;
    }
    }
  }

  &__average {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;

    &-text {
      font-size: 23px;
      color: #2C3E50;

      @media(max-width: 700px) {
        font-size: 20px;
    }

      @media(max-width: 500px) {
        font-size: 16px;
    }
    }

    &-number {
      font-size: 36px;
      color: rgb(6, 6, 100);

      @media(max-width: 700px) {
        font-size: 25px;
    }

      @media(max-width: 500px) {
        font-size: 20px;
      }
    }
  }
}

.divider {
  width: 100%;
  height: 1px;
  background-color: #e0e0e0;
}
</style>
