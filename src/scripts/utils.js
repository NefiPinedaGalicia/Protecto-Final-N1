/**
 * Módulo de funciones utilitarias.
 * Este archivo contiene funciones auxiliares que serán utilizadas y llamadas
 * desde el archivo principal para realizar varias operaciones.
 */

import { stays } from './stays.js';

const loading = `<div class="mb-6 animate-pulse">
  <div class="w-full h-64 bg-gray-300 rounded-2xl mb-3 flex items-center justify-center">
    <svg
      viewBox="0 0 16 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      class="w-10 h-10 text-gray-200"
    >
      <path
        d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"
      ></path>
      <path
        d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"
      ></path>
    </svg>
  </div>
  <div class="flex justify-between items-start mb-2">
    <div class="h-4 bg-gray-200 rounded w-32"></div>
    <div class="h-4 bg-gray-200 rounded w-12"></div>
  </div>
  <div class="h-6 bg-gray-200 rounded w-3/4"></div>
</div>`;

const noResults = `<div class="mb-6 text-center">
  <div class="w-full h-64 bg-gray-100 rounded-2xl mb-3 flex items-center justify-center">
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      class="w-16 h-16 text-gray-400"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.35-4.35"></path>
      <line x1="9" y1="9" x2="13" y2="13"></line>
      <line x1="13" y1="9" x2="9" y2="13"></line>
    </svg>
  </div>
  <div class="text-gray-500">
    <p class="text-lg font-semibold mb-1">No results found</p>
    <p class="text-sm">Try adjusting your search criteria</p>
  </div>
</div>`;

export function createCards() {
    const container = document.getElementById('card-container');
    
    stays.forEach(stay => {
        const card = document.createElement('div');
        card.className = 'mb-6';
        
        card.innerHTML = `
            <img src="${stay.photo}" alt="${stay.title}" class="w-full h-64 object-cover rounded-2xl mb-3">
            <div class="flex justify-between items-start mb-2 px-2">
                <div class="flex items-center space-x-2">
                    ${stay.superHost ? '<span class="border border-gray-800 text-gray-800 text-xs px-2 py-1 rounded-full">SUPERHOST</span>' : ''}
                    <span class="text-gray-600 text-sm">${stay.type}${stay.beds ? `, ${stay.beds} beds` : ''}</span>
                </div>
                <div class="flex items-center space-x-1">
                    <svg class="w-4 h-4 fill-red-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span class="text-sm">${stay.rating.toFixed(1)}</span>
                </div>
            </div>
            <h3 class="text-lg font-bold px-2">${stay.title}</h3>
        `;
        
        container.appendChild(card);
    });
}