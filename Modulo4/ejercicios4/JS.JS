const numeros = document.querySelectorAll('.numero');
const cajas = document.querySelectorAll('.caja');
const verificarBtn = document.getElementById('verificar');
const resultadoDiv = document.getElementById('resultado');

numeros.forEach(numero => {
    numero.addEventListener('dragstart', iniciarArrastre);
    numero.addEventListener('dragend', terminarArrastre);
});

cajas.forEach(caja => {
    caja.addEventListener('dragover', arrastrarSobre);
    caja.addEventListener('dragenter', entrarArrastre);
    caja.addEventListener('dragleave', salirArrastre);
    caja.addEventListener('drop', soltar);
});

function iniciarArrastre(e) {
    e.dataTransfer.setData('text', e.target.dataset.category);
    e.target.classList.add('arrastrando');
}

function terminarArrastre(e) {
    e.target.classList.remove('arrastrando');
}

function arrastrarSobre(e) {
    e.preventDefault();
}

function entrarArrastre(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function salirArrastre(e) {
    e.target.classList.remove('drag-over');
}

function soltar(e) {
    e.preventDefault();
    const categoria = e.dataTransfer.getData('text');
    const numeroArrastrado = document.querySelector(`.arrastrando[data-category="${categoria}"]`);
    e.target.appendChild(numeroArrastrado);
    e.target.classList.remove('drag-over');
}

verificarBtn.addEventListener('click', verificar);

function verificar() {
    let correctos = 0;
    let total = numeros.length;

    cajas.forEach(caja => {
        const categoriaCaja = caja.dataset.category;
        const numerosEnCaja = caja.querySelectorAll('.numero');

        numerosEnCaja.forEach(numero => {
            if (numero.dataset.category === categoriaCaja) {
                numero.classList.add('correcto');
                numero.classList.remove('incorrecto');
                correctos++;
            } else {
                numero.classList.add('incorrecto');
                numero.classList.remove('correcto');
            }
        });
    });

    resultadoDiv.textContent = `Correctos: ${correctos} / ${total}`;
}