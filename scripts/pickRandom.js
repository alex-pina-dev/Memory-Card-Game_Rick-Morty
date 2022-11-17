export const pickRandom = (array, items) => {
    const clonedArray = [...array];
    const randomPicks = [];
  
    for (let index = 0; index < items; index++) {
      const randomIndex = Math.floor(Math.random() * clonedArray.length);
  
      randomPicks.push(clonedArray[randomIndex]);
      clonedArray.splice(randomIndex, 1);
    }
  
    return randomPicks;
  };