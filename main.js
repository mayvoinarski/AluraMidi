function soundPlay (idElementAudio) {
    const element = document.querySelector(idElementAudio);

    if (element && element.localName === 'audio' ) {
        
        element.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor não encontrado');
    }
}

const buttonsList = document.querySelectorAll('.tecla');

for (let counter = 0; counter < buttonsList.length; counter++) {
    
    const keyMusical = buttonsList[counter];
    const instrument = keyMusical.classList[1];
    const idAudio = `#som_${instrument}`;

    keyMusical.onclick = function () {
        soundPlay(idAudio);
    }

    keyMusical.onkeydown = function (evento) {
        if (evento.code ==='Space' || evento.code ==='Enter') {
        keyMusical.classList.add('ativa');
        }
    }
    keyMusical.onkeyup =function(){
        keyMusical.classList.remove('ativa')
    }
}
