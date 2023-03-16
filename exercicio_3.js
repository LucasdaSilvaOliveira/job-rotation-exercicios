// 3) Descubra a lógica e complete o próximo elemento:

// a) 1, 3, 5, 7, ___

let array_A = [];

function questão_A(num) {
    if (array_A.length == 0) {
        array_A.push(num)
    }
    if (array_A.length > 0) {
        for (let c = 0; c < 4; c++) {
            array_A.push(array_A[c] + 2)
        }
    }
    return console.log(array_A)
}

questão_A(1);
console.log('O próximo elemento é 9.')

// b) 2, 4, 8, 16, 32, 64, ____

let array_B = [];

function questão_B(num) {
    if (array_B.length == 0) {
        array_B.push(num)
    }
    if (array_B.length > 0) {
        for (let c = 0; c < 6; c++) {
            array_B.push(array_B[c] * 2)
        }
    }
    return console.log(array_B)
}

questão_B(2);
console.log('O próximo elemento é 128.')


// c) 0, 1, 4, 9, 16, 25, 36, ____

let array_C = [];
let numImpar = 1;

function questão_C(num) {
    if (array_C.length == 0) {
        array_C.push(num)
    }
    if (array_C.length > 0) {
        for (let c = 0; c < 7; c++) {
            array_C.push(array_C[c] + (numImpar))
            numImpar = numImpar + 2
        }
    }
    return console.log(array_C)
}

questão_C(0)
console.log('O próximo elemento é 49.')

// d) 4, 16, 36, 64, ____



// e) 1, 1, 2, 3, 5, 8, ____

let array_E = [0, 1];

function questão_E(num) {
    for (let c = 0; c <= 5; c++) {
        array_E.push((array_E[c] + array_E[c + 1]))
    }
    return console.log(array_E)
}

questão_E()
console.log('O próximo elemento é 13.')

// f) 2, 10, 12, 16, 17, 18, 19, ____


