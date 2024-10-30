const express = require("express");
const UrnaController = require("../controllers/urnaController");

const router = express.Router();

let ctrl = new UrnaController();
router.get("/", ctrl.urnaView);
router.post("/votar/:numero", ctrl.votar);

module.exports = router;
