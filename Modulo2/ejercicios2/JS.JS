document.addEventListener("DOMContentLoaded", () => {
    const textos = document.querySelectorAll('.texto');
    const cuadro = document.getElementById('cuadro');
    const resultado = document.getElementById('resultado');

    textos.forEach(texto => {
        texto.addEventListener('dragstart', dragStart);
    });

    cuadro.addEventListener('dragover', dragOver);
    cuadro.addEventListener('drop', drop);

    function dragStart(e) {
        e.dataTransfer.setData('text', e.target.id);
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function drop(e) {
        e.preventDefault();
        const id = e.dataTransfer.getData('text');
        const textoArrastrado = document.getElementById(id);

        if (textoArrastrado.id.startsWith('correcto')) {
            resultado.textContent = '¡Correcto!';
            resultado.style.color = 'green';
        } else {
            resultado.textContent = 'Incorrecto';
            resultado.style.color = 'red';
        }

        // Opción para hacer desaparecer el texto después de soltarlo
    }   // textoArrastrado.style.display = 'none';
});


document.addEventListener("DOMContentLoaded", () => {
    const text = document.querySelectorAll('.texto');
    const cuadrado = document.getElementById('cuadrado');
    const respuesta = document.getElementById('respuesta');

    text.forEach(texto => {
        texto.addEventListener('dragstart', dragStart);
    });

    cuadrado.addEventListener('dragover', dragOver);
    cuadrado.addEventListener('drop', drop);

    function dragStart(e) {
        e.dataTransfer.setData('text', e.target.id);
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function drop(e) {
        e.preventDefault();
        const id = e.dataTransfer.getData('text');
        const textoArrastrado = document.getElementById(id);

        if (textoArrastrado.id.startsWith('correcto')) {
            respuesta.textContent = '¡Correcto!';
            respuesta.style.color = 'green';
        } else {
            respuesta.textContent = 'Incorrecto';
            respuesta.style.color = 'red';
        }

        // Opción para hacer desaparecer el texto después de soltarlo
        // textoArrastrado.style.display = 'none';
    }
});
