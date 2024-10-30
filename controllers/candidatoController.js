const CandidatoModel = require("../models/candidatoModel")
const PartidoModel = require("../models/partidoModel")

class CandidatoController {
  async listaView(req, res) {
    let c = new CandidatoModel()
    let lista = await c.listar()
    res.render("candidatos/listar.ejs", { candidatos: lista })
  }

  async obter(req, res) {
    let c = new CandidatoModel()
    let candidato = await c.obter(req.params.numero)
    res.send({ candidato: candidato })
  }

  async cadastroView(req, res) {
    let p = new PartidoModel()
    let listaPartidos = await p.listar()
    res.render("candidatos/cadastrar.ejs", { partidos: listaPartidos })
  }

  async cadastrar(req, res) {
    if (
      req.body.nome != "" &&
      req.body.idade != "" &&
      req.body.idade > 0 &&
      req.body.numero != "" &&
      req.body.numero > 0 &&
      req.body.partido > 0
    ) {
      let candidatoModel = new CandidatoModel()
      if ((await candidatoModel.obter(req.body.numero)) == null) {
        candidatoModel.can_nome = req.body.nome
        candidatoModel.can_numero = req.body.numero
        candidatoModel.can_idade = req.body.idade
        candidatoModel.par_id = req.body.partido
        const resultado = await candidatoModel.cadastrar()
        if (resultado) {
          res.send({ ok: true, msg: "Candidato cadastrado!!!" })
        } else {
          res.send({ ok: false, msg: "Erro ao inserir no banco de dados!" })
        }
      } else {
        res.send({ ok: false, msg: "Número inválido, escolha outro!!!" })
      }
    } else {
      res.send({ ok: false, msg: "Parâmetros inválidos!" })
    }
  }

  async excluir(req, res) {
    let id = req.params.id
    let candidato = new CandidatoModel()
    let result = await candidato.excluir(id)
    if (result) {
      res.send({
        ok: true,
        msg: "O candidato foi excluído com sucesso!",
      })
    } else {
      res.send({
        ok: false,
        msg: "Erro ao excluir o candidato!",
      })
    }
  }
}

module.exports = CandidatoController
