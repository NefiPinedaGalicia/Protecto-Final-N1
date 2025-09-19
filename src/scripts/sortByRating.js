/**
 * Maneja el ordenamiento de cards por calificación
 */

import { stays } from './stays.js';
import { createCards } from './utils.js';

let sortState = 0; // 0: original, 1: descendente, 2: ascendente
let currentStays = [...stays];
let originalOrder = [...stays];

document.addEventListener('DOMContentLoaded', () => {
    const sortButton = document.getElementById('sort-rating-btn');
    
    sortButton.addEventListener('click', () => {
        const cardContainer = document.getElementById('card-container');
        
        sortState = (sortState + 1) % 3;
        
        if (sortState === 0) {
            // Orden original
            currentStays = [...originalOrder];
        } else if (sortState === 1) {
            // Descendente (mayor a menor)
            currentStays.sort((a, b) => b.rating - a.rating);
        } else {
            // Ascendente (menor a mayor)
            currentStays.sort((a, b) => a.rating - b.rating);
        }
        
        // Recrear cards
        const isDark = document.documentElement.classList.contains('dark');
        cardContainer.innerHTML = '';
        currentStays.forEach(stay => {
            const card = document.createElement('div');
            card.className = 'mb-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg';
            card.innerHTML = `
                <div class="overflow-hidden rounded-2xl mb-3">
                    <img src="${stay.photo}" alt="${stay.title}" class="w-full h-64 object-cover transition-transform duration-300 hover:scale-110">
                </div>
                <div class="flex justify-between items-start mb-2 px-2">
                    <div class="flex items-center space-x-2">
                        ${stay.superHost ? `<span class="border text-xs px-2 py-1 rounded-full" style="font-family: 'Montserrat', sans-serif; border-color: ${isDark ? '#e5e7eb' : '#1f2937'}; color: ${isDark ? '#e5e7eb' : '#1f2937'};">SUPERHOST</span>` : ''}
                        <span class="text-sm" style="font-family: 'Mulish', sans-serif; color: ${isDark ? '#9ca3af' : '#6b7280'};">${stay.type}${stay.beds ? `, ${stay.beds} beds` : ''}</span>
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
            cardContainer.appendChild(card);
        });
    });
});

// Función para actualizar el array cuando se haga una búsqueda
export function updateCurrentStays(newStays) {
    currentStays = [...newStays];
    originalOrder = [...newStays];
    sortState = 0;
}