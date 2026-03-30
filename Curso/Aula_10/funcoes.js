
function parimp(n) {
    i = ''
    n%2==0 ? i = 'par' : i = 'impar'
    return i
}

function soma(n1=0, n2=0) {
    return n1 + n2
}

let v = function(x) {
    return x*2
}

/*
function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}
*/


//função recursiva, chama ela mesma.
function fatorial(n) {
    n == 1 ? i = 1 : i = n * fatorial(n-1)
    return i
}

console.log(soma(3))

console.log(v(3))

console.log(parimp(7))

console.log(fatorial(10))