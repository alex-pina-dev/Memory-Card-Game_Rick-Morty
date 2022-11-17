export const getCharacters = async () => {
    const baseUrl = "https://rickandmortyapi.com/api/character/";
  
    const myCharacters = [];
  
    const limitCharacters = 826;
  
    for (let index = 1; index <= limitCharacters; index++) {
      let randomID = Math.floor(Math.random() * limitCharacters) + 1;
  
      const data = await fetch(`${baseUrl}${randomID}`);
      const dataJSON = await data.json();
  
      const { image } = dataJSON;
  
      myCharacters.push(image);
    }
    return myCharacters;
  };