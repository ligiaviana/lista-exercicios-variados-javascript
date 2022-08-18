// 5) Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. 
// Deverá diferenciar números de strings.


function maiorOuIgual(primeiro, segundo) {
    if (typeof primeiro != typeof segundo) return false

    return primeiro >= segundo
}

console.log(maiorOuIgual(0, 0))
console.log(maiorOuIgual(0, "0"))
console.log(maiorOuIgual(5, 1))
console.log(maiorOuIgual(1, 5))