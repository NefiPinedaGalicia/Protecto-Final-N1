import { stays } from "./stays.js";
import { resetGuestCounters } from "./guestContainer.js";

export function createCards() {
  const container = document.getElementById("card-container");
  container.innerHTML = '';
  const isDark = document.documentElement.classList.contains('dark');

  stays.forEach((stay) => {
    const card = document.createElement("div");
    card.className = "mb-6";

    card.innerHTML = `
      <img src="${stay.photo}" alt="${stay.title}" class="w-full h-64 object-cover rounded-2xl mb-3">
      <div class="flex justify-between items-start mb-2 px-2">
        <div class="flex items-center space-x-2">
          ${stay.superHost ? `<span class="border text-xs px-2 py-1 rounded-full" style="font-family: 'Montserrat', sans-serif; border-color: ${isDark ? '#e5e7eb' : '#1f2937'}; color: ${isDark ? '#e5e7eb' : '#1f2937'};">SUPERHOST</span>` : ""}
          <span class="text-sm" style="font-family: 'Mulish', sans-serif; color: ${isDark ? '#9ca3af' : '#6b7280'};">${stay.type}${stay.beds ? `, ${stay.beds} beds` : ""}</span>
        </div>
        <div class="flex items-center space-x-1">
          <svg class="w-4 h-4 fill-red-500" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          <span class="text-sm" style="font-family: 'Mulish', sans-serif; color: ${isDark ? '#d1d5db' : '#6b7280'};">${stay.rating.toFixed(1)}</span>
        </div>
      </div>
      <h3 class="text-lg font-bold px-2" style="font-family: 'Montserrat', sans-serif; color: ${isDark ? '#ffffff' : '#000000'};">${stay.title}</h3>
    `;

    container.appendChild(card);
  });
}

const loading = `<div class="mb-6 animate-pulse">
  <div class="w-full h-64 bg-gray-300 rounded-2xl mb-3 flex items-center justify-center">
    <svg viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-10 h-10 text-gray-200">
      <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"></path>
      <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"></path>
    </svg>
  </div>
  <div class="flex justify-between items-start mb-2">
    <div class="h-4 bg-gray-200 rounded w-32"></div>
    <div class="h-4 bg-gray-200 rounded w-12"></div>
  </div>
  <div class="h-6 bg-gray-200 rounded w-3/4"></div>
</div>`;

const noResults = `<div class="col-span-full flex flex-col items-center justify-center py-16">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 text-gray-400 mb-4">
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.35-4.35"></path>
    <line x1="9" y1="9" x2="13" y2="13"></line>
    <line x1="13" y1="9" x2="9" y2="13"></line>
  </svg>
  <p class="text-lg font-semibold mb-1 text-gray-500" style="font-family: 'Montserrat', sans-serif;">No results found</p>
  <p class="text-sm text-gray-400" style="font-family: 'Mulish', sans-serif;">Try adjusting your search criteria</p>
</div>`;

export function showLoadingCards() {
  const container = document.getElementById('card-container');
  container.innerHTML = Array(3).fill(loading).join('');
}

export function searchStays(location, guests) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let results = stays;
      
      if (location) {
        results = results.filter(stay => 
          stay.city.toLowerCase().includes(location.toLowerCase())
        );
      }
      
      if (guests > 0) {
        results = results.filter(stay => stay.maxGuests >= guests);
      }
      
      resolve(results);
    }, 3000);
  });
}

export function displaySearchResults(results) {
  const container = document.getElementById('card-container');
  const titleContainer = document.getElementById('title-container');
  const staysCount = document.getElementById('stays-count');
  
  if (results.length === 0) {
    container.innerHTML = noResults;
    titleContainer.querySelector('h3').textContent = 'No stays found';
    staysCount.textContent = '0 stays';
    showBackButton();
    return;
  }
  
  const location = results[0]?.city || 'Finland';
  titleContainer.querySelector('h3').textContent = `Stays in ${location}`;
  staysCount.textContent = `${results.length}+ stay${results.length !== 1 ? 's' : ''}`;
  
  container.innerHTML = '';
  
  if (window.innerWidth >= 1024 && results.length === 1) {
    container.innerHTML = '<div class="mb-6"></div>';
  }
  
  results.forEach((stay) => {
    const card = document.createElement('div');
    card.className = 'mb-6';
    card.innerHTML = `
      <img src="${stay.photo}" alt="${stay.title}" class="w-full h-64 object-cover rounded-2xl mb-3">
      <div class="flex justify-between items-start mb-2 px-2">
        <div class="flex items-center space-x-2">
          ${stay.superHost ? '<span class="border border-gray-800 dark:border-gray-200 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-full" style="font-family: \'Montserrat\', sans-serif;">SUPERHOST</span>' : ''}
          <span class="text-gray-600 dark:text-gray-400 text-sm" style="font-family: 'Mulish', sans-serif;">${stay.type}${stay.beds ? `, ${stay.beds} beds` : ''}</span>
        </div>
        <div class="flex items-center space-x-1">
          <svg class="w-4 h-4 fill-red-500" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          <span class="text-sm dark:text-gray-300" style="font-family: 'Mulish', sans-serif;">${stay.rating.toFixed(1)}</span>
        </div>
      </div>
      <h3 class="text-lg font-bold px-2 dark:text-white" style="font-family: 'Montserrat', sans-serif;">${stay.title}</h3>
    `;
    container.appendChild(card);
  });
  
  showBackButton();
}

function showBackButton() {
  const titleContainer = document.getElementById('title-container');
  if (!document.getElementById('back-button')) {
    const backButton = document.createElement('button');
    backButton.id = 'back-button';
    backButton.className = 'text-red-500 text-sm hover:text-red-600 transition-colors';
    backButton.style.fontFamily = 'Mulish, sans-serif';
    backButton.textContent = '← Back to all stays';
    titleContainer.appendChild(backButton);
    
    backButton.addEventListener('click', resetToAllStays);
  }
}

function resetToAllStays() {
  const container = document.getElementById('card-container');
  const titleContainer = document.getElementById('title-container');
  const staysCount = document.getElementById('stays-count');
  const backButton = document.getElementById('back-button');
  
  container.innerHTML = '';
  createCards();
  
  titleContainer.querySelector('h3').textContent = 'Stays in Finland';
  staysCount.textContent = '12+ stays';
  
  if (backButton) backButton.remove();
}

async function performSearch() {
  const searchOverlay = document.getElementById('search-overlay');
  const locationInput = document.querySelector('input[placeholder="Add location"]');
  const guestCount = document.getElementById('guest-count');
  
  const location = locationInput.value.replace(', Finland', '').trim();
  const guests = parseInt(guestCount.textContent) || 0;
  
  if (!location && guests === 0) {
    alert('Please select a location or number of guests to search');
    return;
  }
  
  // LIMPIAR COMPLETAMENTE EL OVERLAY DESPUÉS DE BÚSQUEDA
  const containerLocation = document.getElementById('container-location');
  const containerLocationMobile = document.getElementById('container-location-mobile');
  
  // Limpiar campos
  locationInput.value = '';
  
  // RESETEAR CONTADORES COMPLETAMENTE
  resetGuestCounters();
  
  // Limpiar contenedores
  if (containerLocation) containerLocation.innerHTML = '';
  if (containerLocationMobile) containerLocationMobile.innerHTML = '';
  
  // Cerrar overlay
  searchOverlay.classList.add('hidden');
  searchOverlay.classList.remove('fixed');
  
  showLoadingCards();
  const results = await searchStays(location, guests);
  displaySearchResults(results);
}

document.addEventListener('DOMContentLoaded', () => {
  const searchDesktop = document.getElementById('search-desktop');
  const searchMobile = document.getElementById('search-final');
  const logo = document.querySelector('header img');
  
  if (searchDesktop) {
    searchDesktop.addEventListener('click', (e) => {
      e.preventDefault();
      performSearch();
    });
  }
  
  if (searchMobile) {
    searchMobile.addEventListener('click', (e) => {
      e.preventDefault();
      performSearch();
    });
  }
  
  if (logo) {
    logo.addEventListener('click', () => {
      resetToAllStays();
    });
  }
});