const BASE_URL = "http://localhost:3000/usuarios";

function pegarCampus() {
  let usuario = document.getElementById("userCampo");
  let email = document.getElementById("email");
  let senha = document.getElementById("senha");
  let confirmarsenha = document.getElementById("confirmarsenha");
  let user = {};
  if (
    usuario.value === "" ||
    senha.value === "" ||
    confirmarsenha.value === "" ||
    email.value === ""
  ) {
    alert("Todos os campus são obrigatorios");
  } else if (senha.value !== confirmarsenha.value) {
    alert("Senhas diferentes");
  } else {
    user = {
      usuario: usuario.value,
      senha: senha.value,
      email: email.value
    };
  }

  return user;
}

function cadastrarUsuario() {
  const usuario = pegarCampus();
  if (usuario) {
    let configParaCadastro = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(usuario)
    };
    fetch(BASE_URL, configParaCadastro)
      .then(value => {
        if (value.status === 201) {
          value.json().then(res => {
            localStorage.setItem("userId", res.userId);
            alert(res.msg);
            window.location.href = "../pages/home.html";
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
