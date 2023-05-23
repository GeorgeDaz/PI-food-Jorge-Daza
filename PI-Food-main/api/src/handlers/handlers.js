const { Diet } = require("../db");
const { getDiets, postDiet } = require("../controllers/dietsControllers");
const {
  postRecipe,
  getAllRecipes,
  getRecipeById,
  getRecipeByName,
  getRecipesApi,
  getRecipesDb,
} = require("../controllers/recipesControllers");

const getRecipesHandler = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const response = await getRecipeByName(name);
      res.status(200).json(response);
    } else {
      const response = await getAllRecipes();
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getRecipesFromApiHandler = async (req, res) => {
  try {
    const response = await getRecipesApi();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getRecipesFromDbHandler = async (req, res) => {
  try {
    const response = await getRecipesDb();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getRecipesByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) throw new Error("Faltan datos necesarios para buscar (id)");
    const response = await getRecipeById(id);
    if (!response.length) {
      res.status(400).json("No existe la receta con ese id");
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postRecipesHandler = async (req, res) => {
  try {
    const { name, summary, healthScore, image, steps, dietss } = req.body;
    const nameCapitalized = name[0].toUpperCase() + name.substring(1);
    const response = await postRecipe({
      name: nameCapitalized,
      summary,
      healthScore,
      image,
      steps,
      dietss,
    });
    let getFilterDiet = await Diet.findAll({
      where: { name: dietss },
    });
    response.addDiet(getFilterDiet);
    return res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getDietsHandler = async (req, res) => {
  try {
    const response = await getDiets();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postDietsHandler = async (req, res) => {
  const { name } = req.body;
  try {
    const response = await postDiet({ name });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getRecipesHandler,
  getRecipesByIdHandler,
  postRecipesHandler,
  getDietsHandler,
  postDietsHandler,
  getRecipesFromApiHandler,
  getRecipesFromDbHandler,
};
