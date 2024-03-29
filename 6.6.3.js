let userInput = prompt("Введите число:  "); 
let num = Number(userInput);

function createArray() { 
return Array.from({ length: Number(userInput) + 1 }, 
(v, i) => i); }

let result = createArray();

console.log(result);