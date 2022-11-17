export const shuffle = (array) => {
    const clonedArray = [...array];
  
    for (let index = clonedArray.length - 1; index > 0; index--) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      const original = clonedArray[index];
  
      clonedArray[index] = clonedArray[randomIndex];
      clonedArray[randomIndex] = original;
    }
  
    return clonedArray;
  };