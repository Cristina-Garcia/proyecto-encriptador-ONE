const encriptButton = document.querySelector("#btn-encript");
const desencripButton = document.querySelector("#btn-desencript");

const buttonCopy = document.querySelector("#button-copy");

encriptButton.addEventListener("click", encript);
desencripButton.addEventListener("click", desencript);
buttonCopy.addEventListener("click", functionCopy);

function encript() {
  const contenedor = document.querySelector(".text-encriptado");
  const areaButtonCopy = document.querySelector("#button-area-encriptado");

  let input = document.querySelector("#input-area").value.toLowerCase();
  console.log(input);
  let matriz = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  for (let i = 0; i < matriz.length; i++) {
    if (input.includes(matriz[i][0])) {
      input = input.replaceAll(matriz[i][0], matriz[i][1]);
      // console.log(input);
    }
  }

  document.getElementById("encriptado-principal").style = "display:none";
  areaButtonCopy.style = "display:flex";
  contenedor.style = "display:flex";
  const encriptPhrase = document.createElement("p");
  encriptPhrase.classList.add("text-encrypt");
  encriptPhrase.innerHTML = input;
  contenedor.appendChild(encriptPhrase);
  let cleanInput = document.querySelector("#input-area");
  cleanInput.value = "";
}

function desencript() {
  const contenedor = document.querySelector(".text-encriptado");
  let input = document.querySelector("#input-area").value.toLowerCase();

  let matriz = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  for (let i = 0; i < matriz.length; i++) {
    if (input.includes(matriz[i][0])) {
      input = input.replaceAll(matriz[i][1], matriz[i][0]);
    }
  }

  const encriptPhrase = document.createElement("p");
  encriptPhrase.classList.add("text-encrypt");
  encriptPhrase.innerHTML = input;
  contenedor.appendChild(encriptPhrase);
  let cleanInput = document.querySelector("#input-area");
  cleanInput.value = "";
}

function functionCopy() {
  const textToDesencrypt = document.querySelector(".text-encrypt");

  navigator.clipboard.writeText(textToDesencrypt.textContent);
  textToDesencrypt.remove(".text-encrypt");
  let cleanInput = document.querySelector("#input-area");
  cleanInput.value = "";

  // console.log(contenedor);
}
