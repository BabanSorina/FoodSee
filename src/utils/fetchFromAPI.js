

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
		'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};
const optionsYoutube = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4b1c9f3d1dmsh20430312291e433p1f6cf4jsn53f91060b733',
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
};
export const fetchFromApi = async (ingredients) => {
    const ing=ingredients.join("%2C");
    const data = await fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=${ing}&number=10&ignorePantry=true&ranking=1`, options)
        .then(response => response.json())
        .catch(err => console.error(err));
       
    return data;
}


export const fetchRecipeFromApi =  async (id) => {
    const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`;

    try {
      const response = await fetch(url, options);
      const data = await response.json();
     return data;
    } catch (error) {
      console.error(error);
    }
}

export const fetchRandomRecipeFromApi =  async () => {
    const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?&number=1';

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      const recipe = data.recipes[0];
      return recipe;
    } catch (error) {
      console.error(error);
    }
}

export const fetchVideos =  async (name) => {
    const url = `https://youtube-search-and-download.p.rapidapi.com/search?query=${name} recipe tutorial`;

    try {
      const response = await fetch(url, optionsYoutube);
      const data = await response.json();
      return data.contents;
    } catch (error) {
      console.error(error);
    }
}
