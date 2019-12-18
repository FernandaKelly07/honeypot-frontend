function navigation(element) {
  console.log(element);
  window.location.href = "./" + element + ".html";
}

function sair() {
  localStorage.removeItem("userId");
  window.location.href = "./login.html";
}

function verificarLogado() {
  const id = localStorage.getItem("userId");
  const url = window.location.pathname;
  console.log(url);
  if (id || url === "/pages/login.html") {
  } else {
    alert("Nenhum usuario logado");
    window.location.href = "./login.html";
  }
}

verificarLogado();
