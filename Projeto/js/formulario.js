const elemento = document.querySelector("conteudo-form");
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const senha = document.getElementById("senha").value;

function submitForm() {
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("senha", senha);
  window.location.href = "/Projeto/success-page.html";
}

elemento.addEventListener("submit", submitForm);
