const searchButton = document.getElementById('search-container');
const searchOverlay = document.getElementById('search-overlay');
const closeButton = document.getElementById('close-search');
const searchContainer = document.getElementById('search-container-mobile');

// Mostrar overlay al hacer clic en el botón de búsqueda
searchButton.addEventListener('click', () => {
  searchOverlay.classList.remove('hidden');
  searchOverlay.classList.add('fixed');
});

// Cerrar overlay en móvil solo con botón X
closeButton.addEventListener('click', () => {
  searchOverlay.classList.add('hidden');
  searchOverlay.classList.remove('fixed');
});

// Cerrar overlay en desktop al hacer clic fuera del contenedor
searchOverlay.addEventListener('click', (e) => {
  if (window.innerWidth >= 768 && e.target === searchOverlay) {
    searchOverlay.classList.add('hidden');
    searchOverlay.classList.remove('fixed');
  }
});

// Cerrar overlay en desktop con tecla ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && window.innerWidth >= 768 && !searchOverlay.classList.contains('hidden')) {
    searchOverlay.classList.add('hidden');
    searchOverlay.classList.remove('fixed');
  }
});