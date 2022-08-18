// 1) Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a função) 
// e com ponto de exclamação "!" no final.

// FORMA 1
function greeting(nome){
    return (`Olá ${nome}!`)
}
console.log(greeting("Leonardo")) 

// FORMA 2
function cumprimentar(nome) {
    const saudacao = "Olá"
    return [saudacao, nome].join(', ').concat("!")
    }
console.log(cumprimentar("Leonardo"))

//FORMA 3 
function cumprimentar(nome) { 
    return "Olá, " + nome + "!"
}
console.log(cumprimentar("Leonardo"))