const CandidatoModel = require("../models/candidatoModel");

class UrnaController {
  urnaView(req, res) {
    res.render("urna/index.ejs", { layout: false });
  }

  async votar(req, res) {
    let c = new CandidatoModel();
    let numero = req.params.numero;
    let result = await c.votar(numero);
    if (result) {
      res.send({
        ok: true,
        msg: "Voto computado com sucesso!",
      });
    } else {
      res.send({
        ok: false,
        msg: "Erro ao votar!",
      });
    }
  }
}

module.exports = UrnaController;
