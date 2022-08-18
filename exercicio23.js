// 23) Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.

function contarPalavras(frase){
    const palavras = frase.split(" ")
    return palavras.length
}
console.log(contarPalavras("Me divirto aprendendo a programar"))
