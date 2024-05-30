var contador = 1;

let btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () => {

    if (contador < contarPaginas()) {
        let ocultarPagina = document.getElementById(`contenido${contador}`);
        ocultarPagina.style.zIndex = '1';

        let mostrarPagina = document.getElementById(`contenido${contador + 1}`);
        mostrarPagina.style.zIndex = '2';

        contador++;

    }
    else {
        let mostrarPagina = document.getElementById(`contenido1`);
        mostrarPagina.style.zIndex = '2';

        let ocultarPagina = document.getElementById(`contenido${contarPaginas()}`);
        ocultarPagina.style.zIndex = '1';
        contador = 1;

    }

});

let btnAtras = document.getElementById('btnAtras');
btnAtras.addEventListener('click', () => {

    if (contador === 1) {
        let mostrarPagina = document.getElementById(`contenido${contarPaginas()}`);
        mostrarPagina.style.zIndex = '2';
        contador = contarPaginas();

    } else if (contador > 0) {
        contador--;
        let mostrarPagina = document.getElementById(`contenido${contador}`);
        mostrarPagina.style.zIndex = '2';

        let ocultarPagina = document.getElementById(`contenido${contador + 1}`);
        ocultarPagina.style.zIndex = '1';
    }
});


function contarPaginas() {
    let cantidadPaginas = 0;

    for (i = 1; ; i++) {
        let contadorDePaginas = document.getElementById(`contenido${i}`);
        if (contadorDePaginas === null) {
            break;
        }
        cantidadPaginas++;
    }
    return cantidadPaginas;

}

let btnHome = document.getElementById('btnHome');
btnHome.addEventListener('click', () => {
    let ocultarPagina = document.getElementById(`contenido${contador}`);
    ocultarPagina.style.zIndex = '1';
    contador = 1;
    let mostrarPagina = document.getElementById('contenido1');
    mostrarPagina.style.zIndex = '2';

});

let btnInfo = document.getElementById('btnInfo');
btnInfo.addEventListener('click', () => {
let popup = document.getElementById('popup');
popup.style.display = 'flex';

});

let btnCancelar = document.getElementById('btnCancelar');
btnCancelar.addEventListener('click',() => {
let popup = document.getElementById('popup');
popup.style.display = 'none';
});


    document.addEventListener('DOMContentLoaded', function() {
        // Obtener el elemento select
        var selectElement = document.querySelector('select');

        // Añadir un evento change al elemento select
        selectElement.addEventListener('change', function() {
            // Obtener el valor de la opción seleccionada
            var selectedOption = selectElement.options[selectElement.selectedIndex].value;

            // Redirigir a la página correspondiente
            if (selectedOption !== '#') {
                window.location.href = selectedOption;
            }
        });
    });
    document.getElementById('clickableImage').addEventListener('click', function() {
        var audio = document.getElementById('audio');
        audio.play();
    });
    
    function toggleAudio() {
        var audio = document.getElementById('audioluis');
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }
    function toggleAudio2() {
        var audio = document.getElementById('audionico');
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }

