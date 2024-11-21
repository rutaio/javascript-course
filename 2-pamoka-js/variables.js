// Kintamieji (variables) - dalykas, kuris turi reiksme ir gali kisti arba ne
// Kintamasis - atminties vieta, kurioje yra saugoma informacija

// 1. let - kintamasis, kurio reikme gali buti keiciama
let amzius = 37;

console.log('Ruta' + ' ' + 'Mano amzius: ' + amzius);

amzius = 38;

console.log('Ruta' + ' ' + 'Mano amzius: ' + amzius);

// 2. const - kintamasis, kurio reiksmes keisti negalima
const vardas = 'Agne';

// negalima redeklaruoti konstantos reiksmes
// vardas = 'Egle';

console.log('Mano vardas: ' + vardas);

// 3. var - senas budas kurti kintamuosius
var pavarde = 'Petre';

pavarde = 'Jone';

console.log('Mano pavarde: ' + pavarde);

// Kaip patikrinti duomenu tipa?
console.log(typeof vardas);
