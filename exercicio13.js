// 13) Crie uma função que receba um array de elementos e retorne um array somente com os números 
// presentes no array recebido como parâmetro.

// FORMA 1
function filtrarNumeros(array) {
    const resultado = []
    for (let item of array)
        if (typeof item === "number")
            resultado.push(item)

    return resultado
}
console.log(filtrarNumeros([5, 4, 3, "Olá", true, 'a', 'b']))

//FORMA 2
function filtrarNumeros(array) {
    return array.filter(item => typeof item === "number")
}