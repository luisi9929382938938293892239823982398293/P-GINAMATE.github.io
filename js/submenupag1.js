let pag1Intro = document.getElementById('pag1Actividad0');
pag1Intro.style.display = 'block';

var registroPaginaActualpag1 = 0;

document.getElementById('btn0Pa1Act0').addEventListener('click',function()
{
    let mostrarPagina = document.getElementById('pag1Actividad0')
    mostrarPagina.style.display = 'block';

    let clickactual = 0;

    if(clickactual !== registroPaginaActualpag1)
    {
        let ocultarPagina = document.getElementById(`pag1Actividad${registroPaginaActualpag1}`);
        ocultarPagina.style.display = 'none';
    }

    registroPaginaActualpag1=0;
});

document.getElementById('btn1Pa1Act1').addEventListener('click',function()
{
    let mostrarPagina = document.getElementById('pag1Actividad1')
    mostrarPagina.style.display = 'block';

    let clickactual = 1;

    if(clickactual !== registroPaginaActualpag1)
    {
        let ocultarPagina = document.getElementById(`pag1Actividad${registroPaginaActualpag1}`);
        ocultarPagina.style.display = 'none';
    }

    registroPaginaActualpag1=1;
});

document.getElementById('btn2Pa1Act2').addEventListener('click',function()
{
    let mostrarPagina = document.getElementById('pag1Actividad2')
    mostrarPagina.style.display = 'block';

    let clickactual = 2;

    if(clickactual !== registroPaginaActualpag1)
    {
        let ocultarPagina = document.getElementById(`pag1Actividad${registroPaginaActualpag1}`);
        ocultarPagina.style.display = 'none';
    }

    registroPaginaActualpag1=2;
});


document.getElementById('btn3Pa1Act3').addEventListener('click',function()
{
    let mostrarPagina = document.getElementById('pag1Actividad3')
    mostrarPagina.style.display = 'block';

    let clickactual = 3;

    if(clickactual !== registroPaginaActualpag1)
    {
        let ocultarPagina = document.getElementById(`pag1Actividad${registroPaginaActualpag1}`);
        ocultarPagina.style.display = 'none';
    }

    registroPaginaActualpag1=3;
});