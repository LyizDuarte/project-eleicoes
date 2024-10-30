document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("btnFazerCadastro")
    .addEventListener("click", cadastrar);

  function limparValidacao() {
    document.getElementById("inputNome").style["border-color"] = "#ced4da";
    document.getElementById("inputIdade").style["border-color"] = "#ced4da";
    document.getElementById("inputNumero").style["border-color"] = "#ced4da";
    document.getElementById("selPartido").style["border-color"] = "#ced4da";
  }

  function cadastrar() {
    console.log("Fui chamado para realizar o cadastro");
    limparValidacao();
    let nome = document.querySelector("#inputNome").value;
    let idade = document.querySelector("#inputIdade").value;
    let numero = document.querySelector("#inputNumero").value;
    let partido = document.querySelector("#selPartido").value;

    let listaErros = [];
    if (nome == "") {
      listaErros.push("inputNome");
    }
    if (idade == "") {
      listaErros.push("inputIdade");
    }
    if (numero == "") {
      listaErros.push("inputNumero");
    }
    if (partido == "") {
      listaErros.push("selPartido");
    }

    if (listaErros.length == 0) {
      //enviar ao backend com fetch

      let obj = {
        nome: nome,
        idade: idade,
        numero: numero,
        partido: partido,
      };

      fetch("/candidato/cadastrar", {
        //aqui fica a rota definida como post nas routes
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((r) => {
          return r.json();
        })
        .then((r) => {
          if (r.ok) {
            alert(r.msg);
            window.location.href = "/candidato";
          } else {
            alert(r.msg);
          }
        });
    } else {
      //avisar sobre o preenchimento incorreto
      for (let i = 0; i < listaErros.length; i++) {
        let campos = document.getElementById(listaErros[i]);
        campos.style["border-color"] = "red";
      }
      alert("Preencha corretamente os campos indicados!");
    }
  }
});
