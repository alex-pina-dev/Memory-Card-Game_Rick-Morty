export const state = {
    gameStarted: false,
    flippedCards: 0,
    totalFlips: 0,
    recordFlips: localStorage.getItem("moves"),
    totalTime: 0,
    recordTime: localStorage.getItem("time"),
    loop: null,
  };