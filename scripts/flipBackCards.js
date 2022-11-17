import { state } from "./states";

export const flipBackCards = () => {
  document.querySelectorAll(".card:not(.matched)").forEach((card) => {
    card.classList.remove("flipped");
  });

  state.flippedCards = 0;
};
