
function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'img/manhaCirculo.png'
        document.body.style.background = '#DDC3A4'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'img/tardeCirculo.png'
        document.body.style.background = '#746162'
    } else {
        img.src = 'img/noiteCirculo.png'
        document.body.style.background = '#1E5164'
    }
}
