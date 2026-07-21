const { Router } = require("express");
const dbController = require("../controllers/dbController");
const indexRouter = Router();

indexRouter.get("/", dbController.getUsernames);

indexRouter.get("/delete", dbController.deleteAllUsernames);

module.exports = indexRouter;