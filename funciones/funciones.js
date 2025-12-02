
// Muestra un mensaje de bienvenida cuando la página carga
window.onload = function() {
  alert("¡Bienvenido a Deportes!  Explora y aprende sobre tus deportes favoritos.");
};

// Selecciona todas las secciones del sitio
let secciones = document.querySelectorAll("section");

// Recorre cada sección y agrega los eventos del mouse
secciones.forEach(function(seccion) {
  
  // Cuando el cursor entra en la sección
  seccion.addEventListener("mouseenter", function() {
    seccion.style.backgroundColor = "#e0f7fa"; // cambia a color más claro
  });
  
  // Cuando el cursor sale de la sección
  seccion.addEventListener("mouseleave", function() {
    seccion.style.backgroundColor = ""; // vuelve al color original
  });
});