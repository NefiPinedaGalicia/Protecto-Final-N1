/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */

import { createCards } from './utils.js';
import './headerButton.js';
import './guestContainer.js';
import './desktopFunction.js';
import './searchingFilter.js';
import './darkMode.js';
import './sortByRating.js';

document.addEventListener('DOMContentLoaded', () => {
    createCards();
});