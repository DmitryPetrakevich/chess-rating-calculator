import { defineStore } from "pinia";

export const useChessStore = defineStore("chess", {
  state: () => ({
    games: [],
  }),
  actions: {
    addGame() {
      this.games.push({
        id: Date.now(),
        rating: 1000,
        result: 1,
        change: 0,
      })
    },

    deleteGame() {
      if(this.games.length > 1) {
        this.games.pop();
      }
    }
  },
});