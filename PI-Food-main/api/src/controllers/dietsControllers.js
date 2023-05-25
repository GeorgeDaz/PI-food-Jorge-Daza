const { Diet } = require("../db");
const { getAllRecipes } = require("../controllers/recipesControllers");
const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;

const getDiets = async () => {
  let diets = await Diet.findAll();
  if (!diets.length) {
    await axios(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true&number=100`
    ).then(async ({ data }) => {
      const aux = data.results.flatMap((e) => e.diets);
      const array = new Set(aux);
      const apiDiets = [...array, "vegetarian"];
      for (let diet of apiDiets) {
        await Diet.create({ name: diet });
      }
    });
  }
  return await Diet.findAll();
};

const postDiet = async (name) => {
  const newDiet = await Diet.create(name);
  return newDiet;
};

module.exports = {
  getDiets,
  postDiet,
};
