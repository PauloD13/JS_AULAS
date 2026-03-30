
let res = document.querySelector('div#res')
let btn = document.querySelector('input#btncom')


function testar() {
    let n1Txt = document.querySelector('input#numinicio')
    numI = Number(n1Txt.value)
    let n2Txt = document.querySelector('input#numpace')
    numP = Number(n2Txt.value)
    let n3Txt = document.querySelector('input#numfim')
    numF = Number(n3Txt.value)
    

    numI >= numF || !n1Txt.value || !n2Txt.value || !n3Txt.value ? res.innerHTML = 'Impossível contar' : contar()


}


function contar() {
    if(numP === 0) {
        numP = 1
        alert('Impossível calcular passo = 0, considerano passo = 1')
    }
    res.innerHTML = ''

    for(let i = numI; i <= numF; i += numP) {
        res.innerHTML += `${i} 👉`
    }
    res.innerHTML += '🏁'
}

btn.addEventListener('click', testar)