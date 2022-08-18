// 25) A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para identificar 
// palavras semelhantes.
// Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array de strings. 
// A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.

function buscarPalavrasSemelhantes(inicio, palavras) {
    const resultado = []

    for (let palavra of palavras)
        if (palavra.includes(inicio))
            resultado.push(palavra)

    return resultado
}
console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]))
