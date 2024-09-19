

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
