import { defineStore } from "pinia";

export const useChessStore = defineStore("chess", {
  state: () => ({
    games: [],
    settings: {
      initialRating: 1000,
      kFactor: 20,
    }
  }),

  getters: {
    gameChanges(state) {
      const resultMap = {
        "1": 1,    
        "0": 0.5,  
        "-1": 0    
      };

      return state.games.map((game) => {
        const result = resultMap[game.result] ?? 0;
        const R_player = state.settings.initialRating;
        const R_opponent = Number(game.rating);

        const E = 1 / (1 + Math.pow(10, (R_opponent - R_player) / 400));
        const ratingChange = state.settings.kFactor * (result - E);

        return +ratingChange.toFixed(1);
      });
    },

    totalChange() {
      return this.gameChanges.reduce((sum, cur) => sum + cur, 0);
    },
  
    newRating(state) {
      return +(state.settings.initialRating + this.totalChange).toFixed(2);

    }

  },

  actions: {
    addGame() {
      this.games.push({
        id: Date.now(),
        rating: 1000,
        result: "1",  
      })
    },

    deleteGame() {
      if(this.games.length > 1) {
        this.games.pop();
      }
    },

    updateInitialRating(rating) {
      this.settings.initialRating = rating;
    },

    updateKFactor(factor) {
      this.settings.kFactor = factor;
    }
  },
});