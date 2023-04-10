
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //Kid
                img.setAttribute('src','aquiVaiAimagem.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src','aquiVaiAimagem.png')
            } else if ( idade < 50){
                //Adulto
                img.setAttribute('src','aquiVaiAimagem.png')
            } else {
                //Idoso
                img.setAttribute('src','aquiVaiAimagem.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                    //Kid
                    img.setAttribute('src','aquiVaiAimagem.png')
                } else if (idade < 21){
                    //Jovem
                    img.setAttribute('src','aquiVaiAimagem.png')
                } else if ( idade < 50){
                    //Adulto
                    img.setAttribute('src','aquiVaiAimagem.png')
                } else {
                    //Idoso
                    img.setAttribute('src','aquiVaiAimagem.png')
                }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}
