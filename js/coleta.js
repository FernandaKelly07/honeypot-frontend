const BASE_URL = "http://localhost:3000/lotes/";
const BASE_URL_COLMEIA = "http://localhost:3000/colmeias";
const id = localStorage.getItem("userId");

function carregarColmeias() {
  const select = document.getElementById("colmeia");
  const id = localStorage.getItem("userId");
  fetch(BASE_URL_COLMEIA + `/${id}`).then(value => {
    value.json().then(res => {
      res.forEach(colm => {
        const op = document.createElement("option");
        op.value = colm._id;
        op.innerHTML = colm.numerodaColmeia;
        select.appendChild(op);
      });
    });
  });
}

function pegarRecepienteSelectionado(recipientes) {
  let recipiente = "";
  recipientes.forEach(value => {
    if (value.checked) {
      recipiente = value.value;
    }
  });

  return recipiente;
}

function pegarCampos() {
  const colmeia = document.getElementById("colmeia").value;
  const data = document.getElementById("data").value;
  const qtdExtraida = document.getElementById("qtdExtraida").value;
  const corAparente = document.getElementById("cor").value;
  const recipiente = pegarRecepienteSelectionado(
    document.getElementsByName("gender")
  );

  const coleta = {
    user: id,
    colmeiaExtraida: colmeia,
    dataColeta: data,
    quantidadeExtraida: qtdExtraida,
    corAparente: corAparente,
    recipienteEvasado: recipiente
  };

  return coleta;
}

function efetuarColeta() {
  const coleta = pegarCampos();

  let configParaCadastro = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(coleta)
  };
  fetch(BASE_URL, configParaCadastro)
    .then(value => {
      if (value.status === 201) {
        value.json().then(res => {
          alert(res.msg);
        });
      } else if (value.status === 401) {
        value.json().then(res => {
          alert(res.msg);
        });
      }
    })
    .catch(err => {
      console.log(err);
    });
}

carregarColmeias();
