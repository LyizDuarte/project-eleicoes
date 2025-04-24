const UsuarioModel = require("../models/usuarioModel");
class AuthMiddleware {
  async validar(req, res, next) {
    if (req.cookies.usuarioLogado) {
      let idUsuario = req.cookies.usuarioLogado;
      let usuario = new UsuarioModel();
      usuario = await usuario.obter(idUsuario);
      if (usuario) {
        res.locals.usuarioLogado = usuario
        next();
      } else {
        res.redirect("/login");
      }
    } else {
      res.redirect("/login");
    }
  }
}

module.exports = AuthMiddleware;
