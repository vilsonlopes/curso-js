
const num = prompt('Digite um número qualquer: ');

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = num;

texto.innerHTML += `<p>Raiz quadrada: ${num / 1/2} </p><br>`;
// document.body.innerHTML += `${num} é inteiro: ${Number.isInteger()} <br>`;
// document.body.innerHTML += `É NaN: ${num} <br>`;
// document.body.innerHTML += `Arredondando para baixo: ${Math.floor(num)} <br>`;
// document.body.innerHTML += `Arredondando para cima: ${Math.ceil(num)} <br>`;
// document.body.innerHTML += `Com duas casas decimais: ${Math.round(2)} <br>`;

