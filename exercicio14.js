// 14) Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, 
// em que cada elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. 

// FORMA 1
function objetoParaArray(objeto) {
    const resultado = []

    for (let chave in objeto)
        resultado.push([chave, objeto[chave]])

    return resultado
}
console.log(objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
}))

// FORMA 2
function objetoParaArray(objeto) {
    const chaves = Object.keys(objeto)
    const resultado = chaves.map(chave => [chave, objeto[chave]])

    return resultado
}

// FORMA 3
function objetoParaArray(objeto){
    return Object.entries(objeto)
}