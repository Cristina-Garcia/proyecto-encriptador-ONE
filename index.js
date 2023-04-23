const encriptButton = document.querySelector("#btn-encript");
const desencripButton = document.querySelector("#btn-desencript");

const buttonCopy = document.querySelector("#button-copy");
encriptButton.addEventListener("click", encript);
desencripButton.addEventListener("click", desencript);

function encript() {
  const contenedor = document.querySelector(".text-encriptado");
  const areaButtonCopy = document.querySelector("#button-area-encriptado");

  const input = document.querySelector("#input-area").value.toLowerCase();
  const replaceWords = input
    .replace(/a/g, "ai")
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufault");

  console.log(input);
  console.log(replaceWords);
  document.getElementById("encriptado-principal").style = "display:none";

  areaButtonCopy.style = "display:flex";
  contenedor.style = "display:flex";
  const encriptPhrase = document.createElement("p");
  encriptPhrase.innerHTML = replaceWords;
  contenedor.appendChild(encriptPhrase);
  input.value = "";
  console.log(contenedor);
}

function desencript() {
  const input = document.querySelector("#input-area").value.toLowerCase();

  const message = input
    .replace(/ai/g, "a")
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ober/g, "o")
    .replace(/ufault/g, "u");
  console.log(message);
}
//   const wordsEncript = ["ai", "enter", "imes", "ober", "ufalt"];
