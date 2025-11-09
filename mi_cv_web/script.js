// Función para mostrar/ocultar todas las secciones
function toggleSecciones() {
  const secciones = document.querySelectorAll('main section');
  secciones.forEach(sec => {
    sec.classList.toggle('oculto');
  });
}

// Agrega el comportamiento al botón del footer
document.getElementById('toggleSeccionesBtn').addEventListener('click', toggleSecciones);

// Efecto visual al pasar el mouse sobre las habilidades
const habilidades = document.querySelectorAll('.lista-habilidades li');
habilidades.forEach(habilidad => {
  habilidad.addEventListener('mouseover', () => {
    habilidad.style.transform = 'scale(1.1)';
  });
  habilidad.addEventListener('mouseout', () => {
    habilidad.style.transform = 'scale(1)';
  });
});