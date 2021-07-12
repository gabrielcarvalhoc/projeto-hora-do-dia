function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();

    if (hora >= 6 && hora < 12) {
        msg.innerHTML = `Bom dia, agora são ${hora} hora(s) e ${minuto} minuto(s).`;
        img.src = 'img/manha.jpg';
        document.body.style.background = '#bdb72f';
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `Boa tarde, agora são ${hora} hora(s) e ${minuto} minuto(s).`;
        img.src = 'img/tarde.jpg';
        document.body.style.background = '#c0eaf8';
    } else {
        msg.innerHTML = `Boa noite, agora são ${hora} hora(s) e ${minuto} minuto(s).`;
        img.src = 'img/noite.jpg';
        document.body.style.background = '#263650';
    }
}
