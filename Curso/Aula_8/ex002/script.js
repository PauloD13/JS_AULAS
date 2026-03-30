let btn = document.querySelector('input#btn')
let res = document.querySelector('div#res')

function ativar() {
    let ntxt = document.querySelector('input#num')
    num = Number(ntxt.value)

    ntxt.value ? gerar() : alert('Digite um número')
}

function gerar() {
    res.innerHTML = 'Digite um número acima<br/>'
    for(let i = 1; i<=10; i++)
        res.innerHTML += `${num} x ${i} = ${num*i} <br/>`
}

btn.addEventListener('click', ativar)