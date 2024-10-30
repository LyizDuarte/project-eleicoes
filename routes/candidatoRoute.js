const express = require("express");
const CandidatoController = require("../controllers/candidatoController");
const AuthMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();
const auth = new AuthMiddleware();

let ctrl = new CandidatoController();
router.get("/", auth.validar, ctrl.listaView);
router.get("/cadastrar", auth.validar, ctrl.cadastroView);
router.post("/cadastrar", auth.validar, ctrl.cadastrar);
router.get("/excluir/:id", auth.validar, ctrl.excluir);
router.get("/:numero", auth.validar, ctrl.obter);

module.exports = router;
