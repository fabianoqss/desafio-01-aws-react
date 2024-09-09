const name = localStorage.getItem("name");
const email = localStorage.getItem("email");
const senha = localStorage.getItem("senha");

document.getElementById("nameField").textContent = name;
document.getElementById("emailField").textContent = email;
document.getElementById("passwordField").textContent = senha;
