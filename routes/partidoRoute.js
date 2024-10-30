const express = require("express");
const PartidoController = require("../controllers/partidoController");
const AuthMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();
const auth = new AuthMiddleware();

let ctrl = new PartidoController();
router.get("/partidos", auth.validar, ctrl.partidosView);

module.exports = router;
