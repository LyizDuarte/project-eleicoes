document.addEventListener("DOMContentLoaded", () => {
  let btns = document.querySelectorAll(".btnExclusao");

  for (let btn of btns) {
    btn.addEventListener("click", excluir);
  }
  function excluir() {
    if (confirm("Deseja realmente excluir o candidato?")) {
      let id = this.dataset.id; //pega o valor do id no data-id
      console.log(id);
      let that = this;

      if (id) {
        fetch(`/candidato/excluir/${id}`)
          .then((res) => {
            return res.json();
          })
          .then((body) => {
            alert(body.msg);
            if (body.ok) {
              that.parentElement.parentElement.remove();
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        alert("Id nao encontrado");
      }
    }
  }
});
