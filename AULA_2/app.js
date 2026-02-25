
//let numSorteado = 5

//while(numSorteado !== 5){
//    numSorteado = Math.floor(Math.random() * 10) + 1
//   console.log('Número sorteado: ' + numSorteado)
//}

//console.log('Finalmente o número 5 foi sorteado!')

//FUNCAO

function soma(a, b) {
    return a + b
}

function subtracao(a, b) {
    return a - b
}

//console.log(soma(10, 5))
//console.log(subtracao(10, 5))

const multiplica = (a, b) => {
    return a +b
}

//console.log('Escolha uma operação 1-Soma, 2-Subtração, 3-Multiplicação')

let operacao = 1

switch(operacao) {
    case 1:
        console.log(soma(10, 5))
        break
    case 2:
        console.log(subtracao(10, 5))
        break
    case 3:
        console.log(multiplica(10, 2))
        break
    default:
        console.log('Operação Inválida')
}
