const BASE_URL_COLMEIA = "http://localhost:3000/colmeias/";
const BASE_URL_COLETA = "http://localhost:3000/lotes/";

function carregarTabelaColmeia() {
  const id = localStorage.getItem("userId");
  fetch(BASE_URL_COLMEIA + `/${id}`).then(value => {
    value.json().then(res => {
      criarTabelaColmeia(res);
    });
  });
}

function carregarTabelaColeta() {
  const id = localStorage.getItem("userId");
  fetch(BASE_URL_COLETA + `/${id}`).then(value => {
    value.json().then(res => {
      criarTabelaColeta(res);
    });
  });
}

function criarTabelaColmeia(colmeias) {
  const table = document.getElementById("colmeiasTable");

  colmeias.forEach(value => {
    const dataPrevista = new Date(value.previsaoExtracao);
    const row = document.createElement("tr");
    row.insertCell(0).innerHTML = value.numerodaColmeia;
    row.insertCell(1).innerHTML = dataPrevista.toLocaleDateString();
    row.insertCell(2).innerHTML = value.posturaDosOvos;
    table.appendChild(row);
  });
}

function criarTabelaColeta(coletas) {
  console.log(coletas);
  const table = document.getElementById("coletaTable");
  coletas.forEach(value => {
    const dataColeta = new Date(value.dataColeta);
    const row = document.createElement("tr");
    row.insertCell(0).innerHTML = dataColeta.toLocaleDateString();
    row.insertCell(1).innerHTML = value.quantidadeExtraida + "L";
    row.insertCell(2).innerHTML = value.corAparente;
    table.appendChild(row);
  });
}
carregarTabelaColmeia();
carregarTabelaColeta();
