import { state } from "./states";
import { selectors } from "./selectors";
import { startGame } from "./startGame";
import { flipBackCards } from "./flipBackCards";

export const flipCard = (card) => {
  state.flippedCards++;
  state.totalFlips++;

  if (!state.gameStarted) {
    startGame();
  }

  if (state.flippedCards <= 2) {
    card.classList.add("flipped");
  }

  if (state.flippedCards === 2) {
    const flippedCards = document.querySelectorAll(".flipped:not(.matched)");
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      flippedCards[0].classList.add("matched");
      flippedCards[1].classList.add("matched");
    }

    setTimeout(() => {
      flipBackCards();
    }, 1000);
  }

  /** Si no quedan cartas que se puedan girar, se ha ganado el juego */
  if (!document.querySelectorAll(".card:not(.flipped)").length) {
    setTimeout(() => {
      selectors.boardContainer.classList.add("flipped");
      selectors.win.innerHTML = `
                <span class="win-text">
                    You won!<br />
                    with <span class="highlight">${
                      state.totalFlips
                    }</span> moves<br />
                    under <span class="highlight">${
                      state.totalTime + 1
                    }</span> seconds
                </span>
            `;

      clearInterval(state.loop);
    }, 1000);

    if (localStorage.getItem("moves") < state.totalFlips) {
      localStorage.setItem("moves", state.totalFlips);
      selectors.movesRecord.innerHTML = `your best: ${state.totalFlips} moves`;
    }

    if (localStorage.getItem("time") < state.totalTime) {
      localStorage.setItem("time", state.totalTime + 1);
      selectors.timerRecord.innerHTML = `your best time: ${
        state.totalTime + 1
      } sec`;
    }
  }
};
