// 21) Criar uma função que receba um array de números e retorne o menor número desse array.
// FORMA 1
function menorNumero(numeros) {
    let menor = numeros[0]

    for (let i in numeros)
        if (numeros[i] < menor)
            menor = numeros[i]

    return menor
}

// FORMA 2
function menorNumero(numeros) {
    return numeros.reduce((anterior, atual) => anterior < atual ? anterior : atual)
}

// FORMA 3
function menorNumero(numeros) {
    return Math.min(... numeros);
}
console.log(menorNumero([10, 5, 35, 65]))
console.log(menorNumero([5, -15, 50, 3]))

