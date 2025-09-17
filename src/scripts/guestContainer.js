let adults = 0;
let children = 0;

// Función para resetear contadores
export function resetGuestCounters() {
  adults = 0;
  children = 0;
  
  if (adultsCount) adultsCount.textContent = '0';
  if (childrenCount) childrenCount.textContent = '0';
  if (guestCount) guestCount.textContent = '0';
  
  updateButtons();
  updateGuestDisplay();
}

const adultsCount = document.getElementById('adults-count');
const childrenCount = document.getElementById('children-count');
const adultsPlus = document.getElementById('adults-plus');
const adultsMinus = document.getElementById('adults-minus');
const childrenPlus = document.getElementById('children-plus');
const childrenMinus = document.getElementById('children-minus');
const guestCount = document.getElementById('guest-count');

function updateGuestDisplay() {
  const total = adults + children;
  guestCount.textContent = total;
  
  const guestText = guestCount.nextElementSibling;
  guestText.textContent = total === 1 ? 'guest' : 'guests';
}

function updateButtons() {
  adultsMinus.disabled = adults === 0;
  childrenMinus.disabled = children === 0;
  
  // Cambiar apariencia visual de botones deshabilitados
  if (adults === 0) {
    adultsMinus.classList.add('opacity-50', 'cursor-not-allowed');
  } else {
    adultsMinus.classList.remove('opacity-50', 'cursor-not-allowed');
  }
  
  if (children === 0) {
    childrenMinus.classList.add('opacity-50', 'cursor-not-allowed');
  } else {
    childrenMinus.classList.remove('opacity-50', 'cursor-not-allowed');
  }
}

adultsPlus.addEventListener('click', () => {
  adults++;
  adultsCount.textContent = adults;
  updateGuestDisplay();
  updateButtons();
});

adultsMinus.addEventListener('click', () => {
  if (adults > 0) {
    adults--;
    adultsCount.textContent = adults;
    updateGuestDisplay();
    updateButtons();
  }
});

childrenPlus.addEventListener('click', () => {
  children++;
  childrenCount.textContent = children;
  updateGuestDisplay();
  updateButtons();
});

childrenMinus.addEventListener('click', () => {
  if (children > 0) {
    children--;
    childrenCount.textContent = children;
    updateGuestDisplay();
    updateButtons();
  }
});

// Inicializar estado
updateButtons();