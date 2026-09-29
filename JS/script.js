// Función para voltear las tarjetas de los desarrolladores
function toggleCard(container) {
  container.classList.toggle('flipped');
}

// Elementos DOM para la animación de la nutria
const nutriaRunner = document.getElementById('nutriaMovil');
const navbarLogo = document.getElementById('navbarLogo');
const brandNav = document.getElementById('brandNav');

// Al finalizar el viaje de la nutria, se hace visible el logo fijo de la navbar
nutriaRunner.addEventListener('animationend', () => {
  navbarLogo.style.opacity = '1';
});

// Función para reiniciar el recorrido de la nutria dinámicamente
function reiniciarRecorrido() {
  navbarLogo.style.opacity = '0';
  nutriaRunner.style.animation = 'none';
  nutriaRunner.offsetHeight; // Forzar reflow para reiniciar la animación CSS
  nutriaRunner.style.animation = 'viajeNutria 4.5s ease-in-out forwards';
}

// Eventos para activar la animación nuevamente al hacer clic
nutriaRunner.addEventListener('click', reiniciarRecorrido);
brandNav.addEventListener('click', reiniciarRecorrido);