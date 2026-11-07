
const pantallaInicio = document.getElementById('pantalla-inicio');
const pantallaCorazon = document.getElementById('pantalla-corazon');
const pantallaRegalo = document.getElementById('pantalla-regalo');

const botonDescubrir = document.getElementById('descubrir');
const corazonPrincipal = document.getElementById('corazon-principal');

const rellenoCorazon = document.getElementById('relleno-corazon');

let progreso = 0;
const cantidadPorToque = 20;
let regaloAbierto = false;

// Primera pantalla a segunda pantalla
botonDescubrir.addEventListener('click', () => {

    pantallaInicio.classList.remove('activa');

    setTimeout(() => {
        pantallaCorazon.classList.add('activa');
    }, 300);

});

// Rellenar el corazón
corazonPrincipal.addEventListener('click', () => {

    if (regaloAbierto || progreso >= 100) return;

    progreso = Math.min(progreso + cantidadPorToque, 100);

    const altura = (progreso / 100) * 110;
    const posicionY = 110 - altura;

    rellenoCorazon.setAttribute('height', altura);
    rellenoCorazon.setAttribute('y', posicionY);

    corazonPrincipal.animate(
        [
            { transform: 'scale(1)' },
            { transform: 'scale(1.2)' },
            { transform: 'scale(1)' }
        ],
        {
            duration: 400,
            easing: 'ease-in-out'
        }
    );

    // Corazón completamente lleno
    if (progreso >= 100) {

        regaloAbierto = true;

        corazonPrincipal.classList.add('completo');

        // Esperar un momento y abrir el regalo
        setTimeout(() => {

            pantallaCorazon.classList.remove('activa');

            pantallaRegalo.scrollTop = 0;

            setTimeout(() => {
                pantallaRegalo.classList.add('activa');
            }, 500);

        }, 1000);

    }

});


const botonMostrarCarta = document.getElementById('mostrar-carta');
const contenidoCarta = document.getElementById('contenido-carta');

botonMostrarCarta.addEventListener('click', () => {

    contenidoCarta.hidden = !contenidoCarta.hidden;

    botonMostrarCarta.textContent = contenidoCarta.hidden
        ? 'Leer mi carta ♡'
        : 'Cerrar mi carta ♡';

    if (!contenidoCarta.hidden) {
        contenidoCarta.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }

});

