// Mais sobre strings

let umaString = "Um \"texto\"";
let outraString = "O rato roeu a roupa do rei de roma.";

console.log(umaString.charAt(6));
console.log(umaString.indexOf('texto'));
console.log(umaString.match(/[a-z]/g));

console.log(outraString.length);
console.log(outraString.slice(-5, - 1));
console.log(outraString.split(' '));
console.log(outraString.split('r'));

console.log(outraString.toUpperCase());
