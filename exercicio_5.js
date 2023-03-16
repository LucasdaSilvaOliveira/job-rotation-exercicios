// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:

// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

// b) Evite usar funções prontas, como, por exemplo, reverse

let str = 'string';

let arrayChar =  str.split('')

let newStr = '';

for(let c = arrayChar.length; c > 0; c = c - 1) {
    newStr += arrayChar[c - 1]
}

console.log(`${str} invertido fica ${newStr}`);