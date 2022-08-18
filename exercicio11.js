// 11) Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array:
// FORMA 1
function receberPrimeiroEUltimoElemento(elementos) {
    const indiceDoPrimeiroElemento = 0
    const indiceDoUltimoElemento = elementos.length - 1
    const primeiroElemento = elementos[indiceDoPrimeiroElemento]
    const ultimoElemento = elementos[indiceDoUltimoElemento]

    return [primeiroElemento, ultimoElemento]
}

console.log(receberPrimeiroEUltimoElemento([7, 14, 'Olá']))

// FORMA 2
function receberPrimeiroEUltimoElemento(elementos) {
    const primeiroElemento = elementos.shift()
    const ultimoElemento = elementos.pop()

    return [primeiroElemento, ultimoElemento]
}

// FORMA 3
function receberPrimeiroEUltimoElemento([primeiroElemento, ...elementosRestantes]) {
    const ultimoElemento = elemento.pop()

    return [primeiroElemento, ultimoElemento]
}



