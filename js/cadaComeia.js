const BASE_URL = "http://localhost:3000/colmeias/";

function pegarCampos() {
  const radius = document.getElementsByName("gender");
  let postura = "";
  radius.forEach(input => {
    if (input.checked) {
      postura = input.value;
    }
  });
  const numeroColmeia = document.getElementById("nColmeia").value;
  const previsao = document.getElementById("previsao").value;
  const volume = document.getElementById("volumeTotal").value;

  const userId = localStorage.getItem("userId");
  const colmeia = {
    user: userId,
    numerodaColmeia: numeroColmeia,
    previsaoExtracao: previsao,
    volumetotal: volume,
    posturaDosOvos: postura
  };

  return colmeia;
}

function cadastrarColmeia() {
  let colmeia = pegarCampos();
  if (colmeia) {
    let configParaCadastro = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(colmeia)
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
}
