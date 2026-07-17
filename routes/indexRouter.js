const { Router } = require("express");
const dbController = require("../controllers/dbController");
const indexRouter = Router();

indexRouter.get("/", dbController.getUsernames);

module.exports = indexRouter;