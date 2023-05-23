const { Router } = require("express");
const {
  getRecipesHandler,
  getRecipesByIdHandler,
  postRecipesHandler,
  getRecipesFromApiHandler,
  getRecipesFromDbHandler,
} = require("../handlers/handlers");

const recipesRouter = Router();

recipesRouter.get("/", getRecipesHandler);
recipesRouter.get("/api", getRecipesFromApiHandler);
recipesRouter.get("/db", getRecipesFromDbHandler);
recipesRouter.get("/:id", getRecipesByIdHandler);
recipesRouter.post("/", postRecipesHandler);

module.exports = recipesRouter;
