const elemento = document.querySelector("#conteudo-form");

function submitForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const senha2 = document.getElementById("senha2").value;

  if (senha !== senha2) {
    alert("As senhas não coincidem!");
    return;
  }

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("senha", senha);
  localStorage.setItem("senha2", senha2);
  window.location.href = "/Projeto/success-page.html";
}

elemento.addEventListener("submit", submitForm);
