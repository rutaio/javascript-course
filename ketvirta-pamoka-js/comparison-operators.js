// Palyginimo operatoriai (comparison operators)

// Savokos: reiksme yra tai, kas irasyta; duomenu tipas yra skaicius, stringas ir t.t.

// == Palyginimas su konvertavimu
// Tikrina tik reikšmes
// Konvertuoja tipus, kad būtų identiški duomenų tipai...
// Todel nesaugu, nes gali buti, kad mums yra svarbus duomenu tipas funkcijoje..
// Šis dviejų lygybių konvertavimas yra neatsakingas būdas darbuotis. :)

console.log(2 == 2); // true
console.log('2' == 2); // true
console.log(0 == false); // true
console.log(1 == true); // true
// Tuscias string'as yra false? see: https://developer.mozilla.org/en-US/docs/Glossary/Truthy

// === Palyginimas be konvertavimo (strict comparison)
// Saugiau, nes tikrina ne tik reikšmes, bet ir jų duomenų tipus!
// Tai yra saugus būdas darbuotis :)

console.log(2 === 2); // true
console.log(2 === 1); // false
console.log(2 === '2'); // false
console.log('Ruta' === 'ruta'); // false
console.log('Ruta' === 'Ruta'); // true
console.log('Ruta ' === 'Ruta'); // false

// != nelygu (not equal)
// su vienu = konvertuoja tipus

console.log(2 != 2); // skaitosi: "ar du nėra lygu 2?". atsakymas: false
console.log(2 != '2'); // false

// !== Nelygu be konvertavimo
// Tai yra atvirkštinis === variantas,nes rašant ! vieno = nebereikia

console.log(2 !== 2); // false
console.log(2 !== '2'); // true

// > Daugiau

console.log(2 > 1); // true
console.log(2 > 3); // false

// >= Daugiau arba lygu

console.log(2 >= 2); // true

// < Mažiau

console.log(2 < 3); // true
console.log(2 < 2); // false

// <= Mažiau arba lygu

console.log(2 <= 2); // true
console.log(2 <= 1); // false

