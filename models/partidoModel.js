const Database = require("../db/database");

const banco = new Database();


class PartidoModel {
  #par_id;
  #par_descricao;
  #par_sigla;

  constructor(par_id, par_descricao, par_sigla) {
    this.#par_id = par_id;
    this.#par_descricao = par_descricao;
    this.#par_sigla = par_sigla;
  }

  get par_id() {
    return this.#par_id;
  }

  get par_descricao() {
    return this.#par_descricao;
  }

  get par_sigla() {
    return this.#par_sigla;
  }

  set par_id(id) {
    this.#par_id = id;
  }
  set par_descricao(descricao) {
    this.#par_descricao = descricao;
  }

  set par_sigla(sigla) {
    this.#par_sigla = sigla;
  }

  async listar() {
    let sql = "select * from tb_partido";

    let rows = await banco.ExecutaComando(sql);

    let lista = [];

    for (let row of rows) {
      let partido = new PartidoModel(
        row["par_id"],
        row["par_descricao"],
        row["par_sigla"]
      );

      lista.push(partido);
    }

    return lista;
  }
}

module.exports = PartidoModel;
