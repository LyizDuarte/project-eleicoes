const Database = require("../db/database");

const banco = new Database();

class CandidatoModel {
  #can_id;
  #can_nome;
  #can_idade;
  #can_numero;
  #can_votos;
  #par_id;
  #par_descricao;
  #par_sigla;

  constructor(
    can_id,
    can_nome,
    can_idade,
    can_numero,
    can_votos,
    par_id,
    par_descricao,
    par_sigla
  ) {
    this.#can_id = can_id;
    this.#can_nome = can_nome;
    this.#can_idade = can_idade;
    this.#can_numero = can_numero;
    this.#can_votos = can_votos;
    this.#par_id = par_id;
    this.#par_descricao = par_descricao;
    this.#par_sigla = par_sigla;
  }

  get can_id() {
    return this.#can_id;
  }

  get can_nome() {
    return this.#can_nome;
  }

  get can_idade() {
    return this.#can_idade;
  }

  get can_numero() {
    return this.#can_numero;
  }

  get can_votos() {
    return this.#can_votos;
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

  set can_id(id) {
    this.#can_id = id;
  }

  set can_nome(nome) {
    this.#can_nome = nome;
  }

  set can_idade(idade) {
    this.#can_idade = idade;
  }

  set can_numero(numero) {
    this.#can_numero = numero;
  }

  set can_votos(votos) {
    this.#can_votos = votos;
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
    let sql =
      "select * from tb_candidato c inner join tb_partido p on c.par_id = p.par_id";

    let rows = await banco.ExecutaComando(sql);

    let lista = [];

    for (let row of rows) {
      let candidato = new CandidatoModel(
        row["can_id"],
        row["can_nome"],
        row["can_idade"],
        row["can_numero"],
        row["can_votos"],
        row["par_id"],
        row["par_descricao"],
        row["par_sigla"]
      );

      lista.push(candidato);
    }

    return lista;
  }

  async obter(numero) {
    let sql =
      "select * from tb_candidato c inner join tb_partido p on c.par_id = p.par_id where c.can_numero = ?";
    let valores = [numero];

    let rows = await banco.ExecutaComando(sql, valores);

    let candidato = null;

    for (let row of rows) {
      candidato = new CandidatoModel(
        row["can_id"],
        row["can_nome"],
        row["can_idade"],
        row["can_numero"],
        row["can_votos"],
        row["par_id"],
        row["par_descricao"],
        row["par_sigla"]
      );
    }

    return candidato;
  }

  toJSON() {
    return {
      can_id: this.#can_id,
      can_nome: this.#can_nome,
      can_idade: this.#can_idade,
      can_numero: this.#can_numero,
      can_votos: this.#can_votos,
      par_id: this.#par_id,
      par_descricao: this.#par_descricao,
      par_sigla: this.#par_sigla,
    };
  }

  async cadastrar() {
    let sql =
      "insert into tb_candidato (can_nome, can_idade, can_numero, can_votos, par_id) values (?,?,?,?,?)";

    let valores = [
      this.#can_nome,
      this.#can_idade,
      this.#can_numero,
      0,
      this.#par_id,
    ];
    let resultado = await banco.ExecutaComando(sql, valores);
    return resultado;
  }

  async excluir(id) {
    let sql = "delete from tb_candidato where can_id = ?";
    let valores = [id];
    let resultado = await banco.ExecutaComando(sql, valores);
    return resultado;
  }

  async votar(numero) {
    let sql =
      "update tb_candidato set can_votos = can_votos + 1 where can_numero = ?";
    let valores = [numero];

    let result = await banco.ExecutaComandoNonQuery(sql, valores);
    return result;
  }
}

module.exports = CandidatoModel;
