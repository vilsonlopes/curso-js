/**
 * Operadores Aritméticos
 * + Adição / Concatenação
 * - Subtração
 * * Multiplicação
 * / Divisão
 * ** Pontenciação
 * % Resto da divisão
 * 
 * 
 * PRESCEDÊNCIA
 * 1 - ()
 * 2 - **
 * 3 - * / %
 * 4 - + -
 * 
 * Incremento = ++
 * Decremento = --
 */

const num1 = '5';
const num2 = 10;
console.log(num1 + num2);

const num3 = 10;
const num4 = Number('5');
console.log(num3 % num4);

let contador = 10;
contador++; //2
contador++; //3

console.log(contador);

const passo = 5;
let contador2 = 0;
contador2 += passo;
contador2 += passo;
contador2 += passo;
console.log(contador2)

