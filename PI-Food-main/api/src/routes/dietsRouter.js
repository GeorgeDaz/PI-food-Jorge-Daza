const { Router } = require("express");
const { getDietsHandler, postDietsHandler } = require("../handlers/handlers");

const dietsRouter = Router();

dietsRouter.get("/", getDietsHandler);

dietsRouter.post("/", postDietsHandler);

module.exports = dietsRouter;
