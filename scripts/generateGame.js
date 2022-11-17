import { getCharacters } from "./getCharacters";
import { shuffle } from "./shuffle";
import { pickRandom } from "./pickRandom";
import { selectors } from "./selectors";


export const generateGame = async () => {
  if (localStorage.getItem("moves")) {
    selectors.movesRecord.innerText = `your best: ${localStorage.getItem(
      "moves"
    )} moves`;
  } else {
    localStorage.setItem("moves", 0);
    selectors.movesRecord.innerText = `your best: 0 moves`;
  }

  if (localStorage.getItem("time")) {
    selectors.timerRecord.innerText = `your best time: ${localStorage.getItem(
      "time"
    )} sec`;
  } else {
    localStorage.setItem("time", 0);
    selectors.timerRecord.innerText = `your best time: 0 sec`;
  }

  const dimensions = selectors.board.getAttribute("data-dimension");

  if (dimensions % 2 !== 0) {
    throw new Error("The dimension of the board must be an even number.");
  }

  const emojis = await getCharacters();
  const picks = pickRandom(emojis, (dimensions * dimensions) / 2);
  const items = shuffle([...picks, ...picks]);
  const cards = `
        <div class="board" style="grid-template-columns: repeat(${dimensions}, auto)">
            ${items
              .map(
                (item) => `
                <div class="card" name="${item}">
                    <div class="card-front"></div>
                    <div class="card-back"><img src="${item}"></div>
                </div>
            `
              )
              .join("")}
       </div>
    `;

  const parser = new DOMParser().parseFromString(cards, "text/html");

  selectors.board.replaceWith(parser.querySelector(".board"));
};
