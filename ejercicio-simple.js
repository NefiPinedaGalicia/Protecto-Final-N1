import { stays } from './src/scripts/stays.js';

// Ejercicio: Encuentra la estancia con rating exactamente 4.95
// Solo hay UNA estancia con este rating específico

const resultado = stays.filter(stay => stay.rating === 4.95);

console.log('Resultado encontrado:');
console.log(resultado);
console.log(`Total de resultados: ${resultado.length}`);