function carregar() {
    let msg = document.querySelector('div#msg');
    let img = document.querySelector('img#imag');
    let hour = new Date().getHours();

    msg.innerHTML = `Agora são ${hour}h.`

    if(hour >= 6 && hour < 12) {
        //bom dia
        document.body.style.background= 'rgb(164, 170, 111)';
        img.src = './images/morning.png'
    } else if (hour < 19 && hour >= 12) {
        //boa tarde
        document.body.style.background= 'rgb(190, 141, 95)'
        img.src = './images/afternoon.png'
    } else {
        //boa noite
        document.body.style.background= 'rgb(50, 55, 83)'
        img.src = './images/night.png'
    }
}