function clicar() {
    let txyear = document.querySelector('input#year')
    let year = Number(txyear.value)
    let cyear = new Date().getFullYear()
    let msg = document.querySelector('div#text')


    if(year.length == 0 || year > cyear) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        let age = cyear - year
        let fsex = document.getElementsByName('radsex')
        let gender = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked) {
            gender = "um Homem"
            if(age < 15) {
                foto = "homem1"
                img.setAttribute('src', `./assets/${foto}.png`)
            } else if (age < 55) {
                foto = "homem2"
                img.setAttribute('src', `./assets/${foto}.png`)
            } else {
                foto = "homem3"
                img.setAttribute('src', `./assets/${foto}.png`)
            }

        } else if (fsex[1].checked) {
            gender = "uma Mulher"
            if(age < 15) {
                foto = "woman1"
                img.setAttribute('src', `./assets/${foto}.png`)
            } else if (age < 55) {
                foto = "woman2"
                img.setAttribute('src', `./assets/${foto}.png`)
            } else {
                foto = "woman3"
                img.setAttribute('src', `./assets/${foto}.png`)
            }
        }

        msg.style.textAling = 'center'
        msg.innerHTML = `Você é ${gender} de ${age} anos`
        msg.appendChild(img)
    }

}