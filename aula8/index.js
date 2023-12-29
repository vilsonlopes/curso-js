
// Tipos de dados primitivos em JS

const nome = 'Vilson'; // string
const num1 = 10; // number
const num2 = 10.52; //number
let nomeAluno; // undefined -> não aponta para local nenhum na memória
let sobrenomeAluno = null; // Nulo -> não aponta para local nenhum na memória
const aprovado = true; // boolean = true, false


console.log(typeof aprovado)

let a = [1, 2];
let b = a;

console.log(a, b)

b.push(3);
console.log(a, b);

console.log(a)

