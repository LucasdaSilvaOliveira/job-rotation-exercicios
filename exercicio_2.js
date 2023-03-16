// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE:

// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

let fibonacci = [0, 1];

function acharFibonacci(num) {
    for (let c = 0; c <= num; c++) {
        fibonacci.push((fibonacci[c] + fibonacci[c + 1]))
    }

    if(fibonacci.includes(num) == true) {
        return console.log(`O número ${num} pertence a sequência de Fibonacci!`)
    } else {
        return console.log(`O número ${num} NÃO pertence a sequência de Fibonacci!`)
    }
}

acharFibonacci(34)

