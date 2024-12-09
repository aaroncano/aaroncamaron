//menu de hamburguesa
const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', 'true');
        navToggle.setAttribute('aria-expanded', 'true');
    } else if (visibility === "true") {
        primaryNav.setAttribute('data-visible', 'false');
        navToggle.setAttribute('aria-expanded', 'false');
    }   
});

// copia correo al portapapeles
function copiarCorreo(element) {
    navigator.clipboard.writeText('aaroncanoc1@gmail.com').then(function() {
        // Muestra alerta
        const alerta = element.parentNode.querySelector('.alerta-correo');
        alerta.style.display = 'inline';
        // Oculta la alerta después de 3 segundos
        setTimeout(function() {
            alerta.style.display = 'none';
        }, 3000);
    }, function(err) {
        console.error('No se pudo copiar la dirección de correo: ', err);
    });
}


// Auste de visibilidad de las imágenes al hacer scroll en la section de proyectos destacado
const images = document.querySelectorAll('.proyecto-item img');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.1 });

images.forEach(img => {
    observer.observe(img);
});


// Itera sobre cada contenedor, añade event listeners para el movimiento del mouse
const zoomContenedores = document.querySelectorAll('.zoom-contenedor');
zoomContenedores.forEach(function(zoomContenedor) {
    const imagen = zoomContenedor.querySelector('img');
    
    zoomContenedor.addEventListener('mousemove', function(e) {
        const rect = zoomContenedor.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const xPorcentaje = (x / rect.width) * 100;
        const yPorcentaje = (y / rect.height) * 100;

        imagen.style.transformOrigin = `${xPorcentaje}% ${yPorcentaje}%`;
    });

    // Reinicia el transform-origin cuando el mouse sale del contenedor
    zoomContenedor.addEventListener('mouseleave', function() {
        imagen.style.transformOrigin = 'center center';
    });
});
