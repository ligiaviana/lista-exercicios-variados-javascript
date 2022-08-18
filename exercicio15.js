// 15) Elabore uma função que receba um array de números e retorne um array que tenha todos os números 
// que são pares e que também tenham índices pares.

// FORMA 1
function receberSomenteParesDeIndicesPares(numeros) {
    const resultado = []

    for (let i = 0; i < numeros.length; i += 2) {
        const numeroPar = numeros[i] % 2 === 0

        if (numeroPar)
            resultado.push(numeros[i])
    }

    return resultado
}
console.log(receberSomenteParesDeIndicesPares([1, 2, 3, 4]))
console.log(receberSomenteParesDeIndicesPares([10, 70, 22, 43]))

// FORMA 2
function receberSomenteParesDeIndicesPares(numeros) {
    return numeros.filter((numero, indice) => {
        const numeroPar = numero % 2 === 0
        const indicePar = indice % 2 === 0

        return numeroPar && indicePar
    })
}