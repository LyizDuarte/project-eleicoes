const express = require("express");
const HomeController = require("../controllers/homeController");
const AuthMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();
const auth = new AuthMiddleware();

let ctrl = new HomeController();
router.get("/", auth.validar, ctrl.homeView);

module.exports = router;
