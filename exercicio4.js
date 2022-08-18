// 4) Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. 
// Por exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.


// FORMA 1:
// function nomeDoMes(numero) {
//     switch (numero) {
//         case 1:
//             console.log("janeiro")
//             break
//         case 2:
//             console.log("fevereiro")
//             break
//         case 3:
//             console.log("março")
//             break
//         case 4:
//             console.log("abril")
//             break
//         case 5:
//             console.log("maio")
//             break
//         case 6:
//             console.log("junho")
//             break
//         case 7:
//             console.log("julho")
//             break
//         case 8:
//             console.log("agosto")
//             break
//         case 9:
//             console.log("setembro")
//             break
//         case 10:
//             console.log("outubro")
//             break
//         case 11:
//             console.log("novembro")
//             break
//         case 12:
//             console.log("dezembro")
//             break
//         default:
//             console.log("numero invalido")
//     }
// }
// nomeDoMes(1)
// nomeDoMes(2)
// nomeDoMes(3)
// nomeDoMes(4)
// nomeDoMes(5)
// nomeDoMes(6)
// nomeDoMes(7)
// nomeDoMes(8)
// nomeDoMes(9)
// nomeDoMes(10)
// nomeDoMes(11)
// nomeDoMes(12)
// nomeDoMes(13)

// FORMA 2:
function receberNomeDoMes(numero) {
    const mapeamento = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
    'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return mapeamento[--numero]; }

console.log(receberNomeDoMes(3))
