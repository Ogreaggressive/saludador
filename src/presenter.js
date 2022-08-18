//import sumar from "./sumador";

const nombreusuario = document.querySelector("#nombre-usuario");
const form = document.querySelector("#saludador");
const saludo = document.querySelector("#Saludo")

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombreusuario.value;

  saludo.innerHTML = `buenos dias ${nombre}`;
});

