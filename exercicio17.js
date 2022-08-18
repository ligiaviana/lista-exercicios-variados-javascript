// 17) Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.

// FORMA 1
function somarNumeros(numeros) {
    let soma = 0
    numeros.forEach(numero => soma += numero)

    return soma
}
console.log(somarNumeros([10, 20, 30]))

// FORMA 2
function somarNumeros(numeros) {
    const soma = numeros.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0)

    return soma
}