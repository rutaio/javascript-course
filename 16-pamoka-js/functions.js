// FUNKCIJOS (functions) skirtos atlikti veiksmus.
// Rasomos su ()
// Funkcijos rasomos liepiamaja nuosaka (veiksmazodis su Camel Case: vienaMazoji ir kita didzioji raide)

// Funkcija pati savavališkai nevykdo jokio kodo, todėl norint, kad ji atliktų kokį nors darbą - reikės ją iškviesti.
// Sudeliojame logika, paleisime tada, kai reikes

// Jeigu funkcijai reikia kokių nors duomenų, jai tai galima perduoti kaip parametrus / argumentus.
// Parametrai ir argumentai yra kintamieji (bet koks duomenu tipas), kurie yra sukurti tik siai funkcijai.
// Bet funkcija gali pasiimti duomenis ir is isores, kai rasome tuscius ()

// Si funkcija grazina suma, padavus 2 skaicius:
function calculateSum(a, b) {
  return a + b; // Return zodis grazina reiksme
}

// reikia iskveisti si koda, kad jis pradetu veikti:
console.log(calculateSum(1, 2));

// pvz 2 - kitoks aprasymas:
const suma = calculateSum(1, 2);
console.log(suma);

// pvz 3
function pasisveikinimas(vardas) {
  console.log('Labas', vardas);
}

pasisveikinimas('Jonai'); // grazina Labas! Jonai

// pvz 4
function sayHello(vardas) {
  if (typeof vardas !== 'string') {
    console.log('Ivestas ne vardas');
  } else {
    console.log('Labas!', vardas);
  }
}

sayHello('bam');

// sudeliojame logika, paleisime tada, kai reikes
// galim iskviesti, kiek tik norim kartu

// pvz 5
function searchForQuery(query) {
  if (query) {
    console.log('searching...');
  }
}

// pvz 6
let laikas = '18:00';

function sayHi() {
  console.log('Labas rytas');
}

function sayBye() {
  console.log('Viso gero');
}

if (laikas === '18:00') {
  sayHi();
} else {
  sayBye();
}

// pvz 7
let skaicius = 10;

function isveskPadaugintaSkaiciu() {
    console.log(skaicius * 2); // funkcija gali iseiti is savo ribu ir pamatyti kintamuosiuos, kurie yra isoreje
} 

isveskPadaugintaSkaiciu();

