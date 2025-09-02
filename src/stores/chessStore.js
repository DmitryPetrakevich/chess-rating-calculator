import { defineStore } from "pinia";

const STORAGE_KEY = "chess-store";

export const useChessStore = defineStore("chess", {
  state: () => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      return JSON.parse(saved);
    }
    return {
    games: [],
    settings: {
      initialRating: 1000,
      kFactor: 20,
    },
  };
},
  getters: {
    gameChanges(state) {
      const resultMap = {
        "1": 1,
        "0": 0.5,
        "-1": 0
      };

      return state.games.map((game) => {
        const result = resultMap[String(game.result)] ?? 0;
        const R_player = Number(state.settings.initialRating); 
        const R_opponent = Number(game.rating); 

        if (isNaN(R_opponent)) return 0; 

        const E = 1 / (1 + Math.pow(10, (R_opponent - R_player) / 400));
        const ratingChange = state.settings.kFactor * (result - E);

        return +ratingChange.toFixed(1);
      });
    },
    totalChange() {
      return +(this.gameChanges.reduce((sum, cur) => sum + cur, 0)).toFixed(2);
    },
    newRating(state) {
      return +(state.settings.initialRating + this.totalChange).toFixed(2);
    }
  },
  actions: {
    saveToLocalStorage() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.$state))
    },

    addGame() {
      this.games.push({
        id: Date.now(),
        rating: 1000,
        result: "1",
      });
      this.saveToLocalStorage();
    },
    deleteGame() {
      if (this.games.length > 1) {
        this.games.pop();
        this.saveToLocalStorage();
      }
    },
    updateInitialRating(rating) {
      this.settings.initialRating = Number(rating); 
      this.saveToLocalStorage();
    },
    updateKFactor(factor) {
      this.settings.kFactor = Number(factor); 
      this.saveToLocalStorage();
    }
  },
});
