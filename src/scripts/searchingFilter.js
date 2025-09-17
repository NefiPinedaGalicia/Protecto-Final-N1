

import { stays } from './stays.js';

const locationInput = document.querySelector('input[placeholder="Add location"]');
const containerLocation = document.getElementById('container-location');
let searchedCities = [];

// Obtener ciudades únicas
const uniqueCities = [...new Set(stays.map(stay => stay.city))];

// Función para mostrar sugerencias como dropdown
function showSuggestions(query) {
  if (!query) {
    hideSuggestions();
    return;
  }

  const matches = uniqueCities.filter(city => 
    city.toLowerCase().includes(query.toLowerCase())
  );

  const suggestionsHtml = matches.length === 0 
    ? `<div class="p-3 text-gray-500 text-sm" style="font-family: 'Mulish', sans-serif;">No se encuentra esa ubicación</div>`
    : matches.map(city => `
        <div class="suggestion-item p-3 hover:bg-gray-100 cursor-pointer flex items-center space-x-2" data-city="${city}">
          <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" class="w-4 h-4">
            <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
          <span class="text-sm" style="font-family: 'Mulish', sans-serif;">${city}, Finland</span>
        </div>
      `).join('');

  // Crear dropdown fuera del formulario
  let dropdown = document.getElementById('suggestions-dropdown');
  if (!dropdown) {
    dropdown = document.createElement('div');
    dropdown.id = 'suggestions-dropdown';
    dropdown.className = 'fixed bg-white border border-gray-200 rounded-lg shadow-lg z-[9999] max-h-48 overflow-y-auto';
    document.body.appendChild(dropdown);
  }
  
  // Posicionar el dropdown debajo del input
  const inputRect = locationInput.getBoundingClientRect();
  dropdown.style.top = `${inputRect.bottom + window.scrollY}px`;
  dropdown.style.left = `${inputRect.left + window.scrollX}px`;
  dropdown.style.width = `${inputRect.width}px`;
  
  dropdown.innerHTML = suggestionsHtml;
  dropdown.style.display = 'block';

  // Agregar event listeners con delegación para móvil
  dropdown.addEventListener('click', (e) => {
    const suggestionItem = e.target.closest('.suggestion-item');
    if (suggestionItem) {
      const city = suggestionItem.dataset.city;
      selectCity(city);
    }
  });
}

// Función para ocultar sugerencias
function hideSuggestions() {
  const dropdown = document.getElementById('suggestions-dropdown');
  if (dropdown) {
    dropdown.style.display = 'none';
  }
}

// Reposicionar dropdown y mostrar ciudades al cambiar tamaño de ventana
window.addEventListener('resize', () => {
  const dropdown = document.getElementById('suggestions-dropdown');
  if (dropdown && dropdown.style.display !== 'none') {
    const inputRect = locationInput.getBoundingClientRect();
    dropdown.style.top = `${inputRect.bottom + window.scrollY}px`;
    dropdown.style.left = `${inputRect.left + window.scrollX}px`;
    dropdown.style.width = `${inputRect.width}px`;
  }
  
  if (searchedCities.length > 0) {
    showSelectedCities();
  }
});

// Función unificada para mostrar ciudades seleccionadas
function showSelectedCities() {
  const isDesktop = window.innerWidth >= 768;
  const desktopContainer = containerLocation;
  const mobileContainer = document.getElementById('container-location-mobile');
  
  // Limpiar ambos contenedores
  desktopContainer.innerHTML = '';
  if (mobileContainer) mobileContainer.innerHTML = '';
  
  if (searchedCities.length === 0) return;

  const citiesHtml = searchedCities.map(city => `
    <div class="selected-city p-3 flex items-center space-x-2 border-b border-gray-100 last:border-b-0 cursor-pointer hover:bg-gray-50 active:bg-gray-100" data-city="${city}">
      <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" class="w-4 h-4 flex-shrink-0">
        <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
      <span class="text-sm" style="font-family: 'Mulish', sans-serif;">${city}, Finland</span>
    </div>
  `).join('');

  if (isDesktop) {
    desktopContainer.innerHTML = citiesHtml;
  } else if (mobileContainer) {
    mobileContainer.innerHTML = `
      <div class="mt-4 border-t border-gray-200 pt-4 bg-gray-50 rounded-lg">
        ${citiesHtml}
      </div>
    `;
  }
}

// Event listener único para selección de ciudades
document.addEventListener('click', (e) => {
  const cityItem = e.target.closest('.selected-city');
  if (cityItem) {
    locationInput.value = `${cityItem.dataset.city}, Finland`;
  }
});

// Función para seleccionar ciudad
function selectCity(city) {
  locationInput.value = `${city}, Finland`;
  
  if (!searchedCities.includes(city)) {
    searchedCities.push(city);
  }
  
  hideSuggestions();
  showSelectedCities();
}

// Event listeners
locationInput.addEventListener('input', (e) => {
  showSuggestions(e.target.value);
});

locationInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    const query = e.target.value.trim();
    const matchedCity = uniqueCities.find(city => 
      city.toLowerCase().includes(query.toLowerCase())
    );
    
    if (matchedCity) {
      selectCity(matchedCity);
    }
  }
});

// Prevenir envío del formulario
const form = locationInput.closest('form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });
}

// Ocultar sugerencias al hacer clic fuera
document.addEventListener('click', (e) => {
  if (!locationInput.parentElement.contains(e.target)) {
    hideSuggestions();
  }
});

// Limpiar todo al abrir el overlay
const searchButton = document.getElementById('search-container');
const searchOverlay = document.getElementById('search-overlay');
const closeButton = document.getElementById('close-search');

function clearAll() {
  searchedCities = [];
  locationInput.value = '';
  containerLocation.innerHTML = '';
  const containerLocationMobile = document.getElementById('container-location-mobile');
  if (containerLocationMobile) {
    containerLocationMobile.innerHTML = '';
  }
  hideSuggestions();
}

searchButton.addEventListener('click', clearAll);
closeButton.addEventListener('click', clearAll);

// Limpiar al cerrar con ESC o clic fuera (solo desktop)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && window.innerWidth >= 768 && !searchOverlay.classList.contains('hidden')) {
    clearAll();
  }
});

searchOverlay.addEventListener('click', (e) => {
  if (window.innerWidth >= 768 && e.target === searchOverlay) {
    clearAll();
  }
});

// Mostrar ciudades seleccionadas cuando se hace clic en location field
const locationField = document.querySelector('input[placeholder="Add location"]').parentElement;
locationField.addEventListener('click', showSelectedCities);
locationInput.addEventListener('focus', showSelectedCities);



const location = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
`;

