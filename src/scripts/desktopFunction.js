const locationField = document.querySelector('[data-field="location"]') || document.querySelector('input[placeholder="Add location"]').parentElement;
const guestsField = document.querySelector('[data-field="guests"]') || document.querySelector('#guest-count').parentElement.parentElement;
const containerGuests = document.getElementById('container-guests');
const containerLocation = document.getElementById('container-location');

// Función para limpiar estilos en mobile
function clearDesktopStyles() {
  if (window.innerWidth < 768) {
    locationField.classList.remove('border-2', 'border-black');
    guestsField.classList.remove('border-2', 'border-black');
    containerGuests.style.display = '';
    containerGuests.style.visibility = '';
  }
}

// Escuchar cambios de tamaño de ventana
window.addEventListener('resize', clearDesktopStyles);

// Al hacer clic en el campo de location
locationField.addEventListener('click', () => {
  if (window.innerWidth >= 768) {
    // Ocultar container-guests
    containerGuests.style.display = 'none';
    // Resaltar borde de location
    locationField.classList.add('border-2', 'border-black');
    // Quitar resaltado de guests
    guestsField.classList.remove('border-2', 'border-black');
  } else {
    clearDesktopStyles();
  }
});

// Al hacer clic en el campo de guests
guestsField.addEventListener('click', () => {
  if (window.innerWidth >= 768) {
    // Mostrar container-guests
    containerGuests.style.display = 'flex';
    containerGuests.style.visibility = 'visible';
    // Resaltar borde de guests
    guestsField.classList.add('border-2', 'border-black');
    // Quitar resaltado de location
    locationField.classList.remove('border-2', 'border-black');
    // Mantener ciudades visibles en container-location
  } else {
    clearDesktopStyles();
  }
});