var hora = new Date().getHours()

console.log(`Agora são: ${hora} horas.`)
if(hora < 12 && hora >= 6) {
    console.log(`Bom dia, são ${hora} horas`)
} else if (hora <= 18 && hora >= 12) {
    console.log(`Boa tarde, são ${hora} horas`)
} else {
    console.log(`Boa noite, são ${hora} horas`)
}