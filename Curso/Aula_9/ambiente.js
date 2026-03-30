let num = [5, 3, 6, 1, 2, 4]
/*
num[6] = 7

num.push(8)

console.log(num)

console.log(`Nosso vetor é ${num}`)

console.log(`O vetor tem ${num.length} posições`)

console.log(`A primeira posição do vetor tem ${num[0]}`)

console.log(num.sort())

console.log(`A primeira posição do vetor agora tem ${num[0]}`)

for(let i = 0; i<num.length; i++) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

*/

num.sort()

for(let pos in num) {
    console.log(`O valor na ${pos} é ${num[pos]}`)
}

let pos = num.indexOf(4)

console.log(`O valor está na posição ${pos}`)