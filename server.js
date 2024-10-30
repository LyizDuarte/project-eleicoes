//importando os packages instalados
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const cookieParser = require("cookie-parser");
const homeRota = require("./routes/homeRoute");
const loginRota = require("./routes/loginRoute");
const urnaRota = require("./routes/urnaRoute");
const candidatoRota = require("./routes/candidatoRoute");
const partidoRota = require("./routes/partidoRoute");
const app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.set("layout", "./layout");
app.use(expressLayouts);

app.use("/", homeRota);
app.use("/login", loginRota);
app.use("/votacao", urnaRota);
app.use("/candidato", candidatoRota);
app.use("/partido", partidoRota);

const server = app.listen("2000", function () {
  console.log("Servidor web iniciado");
});
