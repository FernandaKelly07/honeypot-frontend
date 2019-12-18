const BASE_URL = "http://localhost:3000/usuarios/";

function pegarCampus() {
  const user = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  let usuario = {};
  if (user === "" || senha === "") {
    alert("Campos obrigatorios");
  } else {
    usuario = {
      usuario: user,
      senha: senha
    };
  }

  return usuario;
}

function logar() {
  const usuario = pegarCampus();
  if (usuario) {
    let configParaLogar = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(usuario)
    };
    fetch(BASE_URL + "logar", configParaLogar)
      .then(value => {
        if (value.status === 200) {
          value.json().then(res => {
            if (res.sucess) {
              alert("logado com sucesso");
              localStorage.setItem("userId", res.idUser);
              window.location.href = "../pages/home.html";
            } else {
              alert(res.msg);
            }
          });
        } else if (value.status === 400) {
          value.json().then(res => {
            alert(res.msg);
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  } else {
    alert("erro");
  }
}
