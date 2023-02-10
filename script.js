function carregar(){
var msg = document.querySelector('div#msg')
var img = document.querySelector('img#imagem')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
msg.innerHTML = `<p>Agora são ${hora} hora(s) e ${minutos} minutos....</p>`
    if (hora >= 5 && hora < 12){
        msg.innerHTML += `Bom Dia!`
        img.src ='imagens/manha.png'
        document.body.style.background = '#8acdfa'
    }else if (hora >= 12 && hora < 18){
        msg.innerHTML += `Boa Tarde!`
        img.src ='imagens/tarde.png'
        document.body.style.background = '#fc731e'
    } else {
        msg.innerHTML += `Boa Noite!`
        img.src ='imagens/noite.png'
        document.body.style.background = '#081c38'
    }

}

