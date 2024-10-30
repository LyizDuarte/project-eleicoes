const Database = require("../db/database");

const banco = new Database();

class UsuarioModel {
  #usu_id;
  #usu_nome;
  #usu_cpf;
  #usu_ativo;
  #usu_senha;
  #per_id;

  constructor(usu_id, usu_nome, usu_cpf, usu_ativo, usu_senha, per_id) {
    this.#usu_id = usu_id;
    this.#usu_nome = usu_nome;
    this.#usu_cpf = usu_cpf;
    this.#usu_ativo = usu_ativo;
    this.#usu_senha = usu_senha;
    this.#per_id = per_id;
  }

  get usu_id() {
    return this.#usu_id;
  }

  get usu_nome() {
    return this.#usu_nome;
  }

  get usu_cpf() {
    return this.#usu_cpf;
  }

  get usu_ativo() {
    return this.#usu_ativo;
  }

  get usu_senha() {
    return this.#usu_senha;
  }

  get per_id() {
    return this.#per_id;
  }

  set usu_id(id) {
    this.#usu_id = id;
  }

  set usu_nome(nome) {
    this.#usu_nome = nome;
  }

  set usu_cpf(cpf) {
    this.#usu_cpf = cpf;
  }

  set usu_ativo(ativo) {
    this.#usu_ativo = ativo;
  }

  set usu_senha(senha) {
    this.#usu_senha = senha;
  }

  set per_id(per_id) {
    this.#per_id = per_id;
  }

  async obter(id) {
    let sql = `select * from tb_usuarioeleicao where usu_id = ?`;
    let valores = [id];
    let resultado = await banco.ExecutaComando(sql, valores);
    if (resultado.length > 0) {
      return new UsuarioModel(
        resultado[0]["usu_id"],
        resultado[0]["usu_nome"],
        resultado[0]["usu_cpf"],
        resultado[0]["usu_ativo"],
        resultado[0]["usu_senha"],
        resultado[0]["per_id"]
      );
    }
  }

  async validarUsuario(cpf, senha) {
    let sql = `select * from tb_usuarioeleicao where usu_cpf = ? and usu_senha = ?`;
    let valores = [cpf, senha];
    let resultado = await banco.ExecutaComando(sql, valores);
    if (resultado.length > 0) {
      return new UsuarioModel(
        resultado[0]["usu_id"],
        resultado[0]["usu_nome"],
        resultado[0]["usu_cpf"],
        resultado[0]["usu_ativo"],
        resultado[0]["usu_senha"],
        resultado[0]["per_id"]
      );
    }
  }
}

module.exports = UsuarioModel;
