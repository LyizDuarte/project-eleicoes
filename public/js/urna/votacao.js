document.addEventListener("DOMContentLoaded", function () {});
document.getElementById("botaoConfirma").addEventListener("click", votar);

//função chamada via html
let caixaativa = 1;
let numeroVotar = 0;
function atribuirvalor(num) {
  if (caixaativa == 1) {
    posicao1.value = num;
    caixaativa = 2;
  } else {
    posicao2.value = num;
    caixaativa = 1;
  }

  if (posicao1.value != "" && posicao2.value != "") {
    let numero = posicao1.value + posicao2.value;
    numeroVotar = numero;
    fetch("/candidato/" + numero)
      .then((r) => {
        return r.json();
      })
      .then((r) => {
        if (r.candidato) {
          nome.innerText = `Nome: ${r.candidato.can_nome}`;
          partido.innerText = `Partido: ${r.candidato.par_descricao} (${r.candidato.par_sigla})`;
          img.style.display = "block";
        } else {
          nome.innerText = `Nome:`;
          partido.innerText = `Partido:`;
          img.style.display = "none";
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }
}

function limpar() {
  nome.innerText = `Nome:`;
  partido.innerText = `Partido:`;
  img.style.display = "none";

  posicao1.value = "";
  posicao2.value = "";
}

function votar() {
  console.log("Fui chamado para votar");
  fetch(`/votacao/votar/${numeroVotar}`, {
    //aqui fica a rota definida como post nas routes
    method: "POST",
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
}
