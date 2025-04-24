const UsuarioModel = require("../models/usuarioModel")

class LoginController {
  loginView(req, res) {
    res.render("login/index.ejs", { layout: false })
  }

  async login(req, res) {
    let msg = ""
    if (req.body.cpf && req.body.password) {
      let usuario = new UsuarioModel()
      usuario = await usuario.validarUsuario(req.body.cpf, req.body.password)
      if (usuario) {
        res.cookie("usuarioLogado", usuario.usu_id)
        res.redirect("/")
      } else {
        res.render("login.ejs", {
          layout: false,
          msg: "PREENCHA OS CAMPOS NOVAMENTE!",
        })
      }
    } else {
      res.render("login.ejs", {
        layout: false,
        msg: "PREENCHA OS CAMPOS NOVAMENTE!",
      })
    }
  }

  async logout(req, res) {
    res.clearCookie("usuarioLogado")
    res.redirect("/login")
  }
}

module.exports = LoginController
