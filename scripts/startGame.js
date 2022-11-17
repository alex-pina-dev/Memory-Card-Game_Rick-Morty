import { state } from "./states";
import { selectors } from "./selectors";

export const startGame = () => {
    state.gameStarted = true;
    selectors.start.classList.add("disabled");
  
    state.loop = setInterval(() => {
      state.totalTime++;
  
      selectors.moves.innerText = `${state.totalFlips} moves`;
      selectors.timer.innerText = `time: ${state.totalTime} sec`;
    }, 1000);
  };