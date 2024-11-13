// String'ai turi savo metodus...

let string = 'Ruta';

console.log(string.toLocaleLowerCase);

// Jei norime paimti pirma character, rasome 0;
// Nes programavime skaiciuojame nuo 0, ne nuo 1.
console.log(string.charAt(0)); // R

console.log(string.slice(1, 3)); // ut

let fileName = 'failasmp3';

// Kaip naudojant string patikrinti failo pabaiga?
if (fileName.endsWith('.pdf')) {
  console.log('Thank You! this is .pdf');
} else {
  console.log('File type is not .pdf');
}

// Nauja tema

const arPrisijunges = true;
const naudotojoRole = 'admin';

if (arPrisijunges) {
  if (naudotojoRole === 'admin') {
    console.log('Tu prisijunges');
  }
} else {
  console.log('Tu neprisijunges');
}

// Math.max funkcijos pvz

let a = 5;
let b = 9;
let c = 3;

let didziausiasSkaicius = Math.max(a, b, c);

console.log(didziausiasSkaicius);