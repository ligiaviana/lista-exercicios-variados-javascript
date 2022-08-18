// 10) Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" 
// na quantidade especificada no parâmetro.

// FORMA 1 
function simboloMais(quantidade) {
    let resultado = ''

    for (let i = 0; i < quantidade; i++)
        resultado += '+'
    return resultado
}
console.log(simboloMais(7))

// FORMA 2 
function simboloMais(quantidade) {
    return Array(quantidade).fill('+').join('')
}

// FORMA 3
function simboloMais(quantidade) {
    return '+'.repeat(quantidade)
}