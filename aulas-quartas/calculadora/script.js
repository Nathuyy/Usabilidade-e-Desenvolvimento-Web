const teclas = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// const bloqueia a nova atribuição de valor, se tiver um
// const teclas = [1,2,3]
// eu posso adicionar mais uma tecla com o .push, pq so vai mudar o conteudo do Array, mas ela continua sendo array

const divTeclas = document.getElementById("divTeclas");
const display = document.getElementById("display2");

for (let i = 0; i < teclas.length; i++) {
  // divTeclas.innerHTML += `<button onclick="display2('${teclas[i]}')">${teclas[i]}</button>`; //usa += para nao ficar trocando e sobrescrevendo o conteudo da div
  const button = document.createElement("button");
  button.innerHTML = teclas[i];
  button.onclick = function () {
    display2(teclas[i]);
  };
  divTeclas.appendChild(button);
}
