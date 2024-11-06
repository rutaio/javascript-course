// Palyginimo operatoriai (comparison operators)

// == Palyginimas su konvertavimu
// Tikrina tik reikšmes
// Konvertuoja tipus, kad būtų identiški duomenų tipai...
// Šis dviejų lygybių konvertavimas yra neatsakingas būdas darbuotis. :)

console.log(2 == 2); // true
console.log('2' == 2); // true
console.log(0 == false); // true

// === Palyginimas be konvertavimo (strict comparison)
// Tikrina ne tik reikšmes, bet ir jų duomenų tipus!
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














