let nums = []
let res = document.querySelector('div#res')
let box = document.querySelector('div#box')
let btn = document.querySelector('input#btn')
let btn2 = document.querySelector('input#btn2')
let btn3 = document.querySelector('input#btn3')

function view() {
    let len = nums.length
    return len
}

function minorvalue() {
    let minor = nums[0]
    for(let i in nums) {
        nums[i] < minor ? minor = nums[i] : null
    }
    return minor
}

function majorvalue() {
    let major = nums[0]
    for(let i in nums) {
        nums[i] > major ? major = nums[i] : null
    }
    return major
}

function sum() {
    let num = 0
    for(let i in nums) {
        num += nums[i]
    }
    return num
}

function media() {
    let i = sum() / view()
    return i.toFixed(2)
}

function push(n) {
    res.innerHTML = ""
    let num = n
    nums.push(num)
    box.innerHTML += num + '<br/>'

}

function ativar() {
    view() > 0 ? escrever() : alert('Digite pelo um numero para começar')
     
}

function escrever() {
    res.innerHTML = ""
    res.innerHTML += `⭕Ao todo temos ${view()} números.<br/>`
    res.innerHTML += `⭕O maior valor é: ${majorvalue()}<br/>`
    res.innerHTML += `⭕O menor valor é: ${minorvalue()}<br/>`
    res.innerHTML += `⭕A soma de todos é: ${sum()}<br/>`
    res.innerHTML += `⭕A média de todos é: ${media()}<br/>`
}

function add() {
    let ntxt = document.querySelector('input#num')
    num = Number(ntxt.value)
    
    let i = nums.indexOf(num)

    !ntxt.value || ntxt.value == 0 || ntxt.value > 100 ? alert('Digite um valor de 1-100') : (i != -1 ? alert('O número já foi adicionado') : push(num))
    ntxt.value = ''
    ntxt.focus()
}

function limpar() {
    nums = []
    res.innerHTML = ''
    box.innerHTML = 'Números:<br/>'
}

btn.addEventListener('click', add)

btn2.addEventListener('click', ativar)

btn3.addEventListener('click', limpar)