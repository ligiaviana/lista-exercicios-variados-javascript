// 3) Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário
// num mês, e o quanto ele recebe por hora. A função deverá calcular o salário do funcionário, que é
// da quantidade de horas trabalhadas no mês multiplicada pelo valor da sua hora. 

function salarioFuncionario(horasTrabalhadas, valorHora){
    let resultado = horasTrabalhadas * valorHora
    return (`Salário igual a ${resultado}`)
}
console.log(salarioFuncionario(40, 110))