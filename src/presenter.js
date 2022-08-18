//import sumar from "./sumador";

const nombreusuario = document.querySelector("#nombre-usuario");
const form = document.querySelector("#saludador");
const saludo = document.querySelector("#Saludo")
const date = new Date();
let saludoFecha = new String;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombreusuario.value;
  const hour = date.getHours();
  console.log(hour);
  if(hour<12)
  {
    saludoFecha = "buenos Dias"
  }
  else if(hour>=12 && date<=18)
  {
    saludoFecha = "buenas Tardes"
  }
  else if(hour>18)
  {
    saludoFecha = "buenas Noches"
  }

  saludo.innerHTML = `${saludoFecha} ${nombre}`;
});
