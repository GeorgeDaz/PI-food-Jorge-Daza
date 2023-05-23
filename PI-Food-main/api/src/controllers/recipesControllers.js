const axios = require("axios");
const { Recipe } = require("../db");
const { API_KEY } = process.env;

const getRecipesApi = async () => {
  return await axios
    .get(`https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5`)
    //   https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5   // mocky para practicar
    // https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true&number=100 // API
    .then((recipes) => {
      const recipesFilter = recipes.data.results.map((recipe) => {
        return {
          id: recipe.id,
          name: recipe.title,
          summary: recipe.summary,
          image: recipe.image,
          healthScore: recipe.healthScore,
          dietss: recipe.diets,
          steps: recipe.analyzedInstructions[0]?.steps.map((step) => {
            return {
              step: step.step,
              number: step.number,
            };
          }),
        };
      });
      return recipesFilter;
    })
    .catch((error) => {
      return error.message;
    });
};

const getRecipesDb = async () => {
  try {
    const recipesDb = await Recipe.findAll();
    if (!recipesDb)
      throw new Error("There are no registered users at the moment");
    return recipesDb;
  } catch (error) {
    return error;
  }
};

const postRecipe = async (obj) => {
  try {
    if (!obj.name || !obj.summary)
      throw new Error("Mandatory data is missing (name or summary)");
    const created = await Recipe.create(obj);
    return created;
  } catch (error) {
    return error;
  }
};

const getAllRecipes = async () => {
  try {
    const recipesApi = await getRecipesApi();
    const recipesDb = await getRecipesDb();
    const allRecipes = [...recipesDb, ...recipesApi];
    return allRecipes;
  } catch (error) {
    return error;
  }
};

const getRecipeByName = async (name) => {
  if (!name) throw new Error("Missing name, can't search");
  name = name.toLowerCase();
  try {
    const allRecipes = await getAllRecipes();
    const recipe = allRecipes.filter((recip) =>
      recip.name.toLowerCase().includes(name)
    );
    return recipe;
  } catch (error) {
    return error;
  }
};

const getRecipeById = async (id) => {
  try {
    if (!id) throw new Error("Missing data to complete (id)");
    const allRecipes = await getAllRecipes();
    const recipe = allRecipes.filter((recipe) => recipe.id == id);
    return recipe;
  } catch (error) {
    return error;
  }
};

module.exports = {
  postRecipe,
  getAllRecipes,
  getRecipeById,
  getRecipeByName,
  getRecipesApi,
  getRecipesDb,
};
