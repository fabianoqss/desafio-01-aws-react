const form = document.querySelector("#conteudo-form");
const dados = {};

function handleChange(event) {
  dados[event.target.name] = event.target.value;
}

form.addEventListener("change", handleChange);
