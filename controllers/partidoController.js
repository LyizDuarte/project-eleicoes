const PartidoModel = require("../models/partidoModel");

class PartidoController {

    async partidosView(req, res) {

        let p = new PartidoModel();
        let lista = await p.listar();
        res.render('partidos/listar.ejs', {partido: lista});
    }

    async obter(req, res) {

        let c = new CandidatoModel();
        let candidato = await c.obter(req.params.numero);
        res.send({candidato: candidato});
    }
}


module.exports = PartidoController;