// Uzduotis 12. Susikurkite tris skaicius. Raskite kuris is siu skaiciu yra didziausias.

let a = 45;
let b = 93;
let c = 31;

if (a > b && a > c) {
  console.log('a yra didziausias');
} else if (b > a && b > c) {
  console.log('b yra didziausias');
} else if (c > a && c > b) {
  console.log('c yra didziausias');
}

// 13. Susikurkite tris skaicius. Raskite kuris is siu skaiciu yra maziausias.

let skaiciusPirmas = 6032;
letskaiciusAntras = 2722;
let skaiciusTrecias = 6932;

if (a < b && a < c) {
  console.log('a yra maziausias');
} else if (b < a && b < c) {
  console.log('b yra maziausias');
} else if (c < a && c < b) {
  console.log('c yra maziausias');
}

// 14. Susikurkite triju egzaminu rezultatu kintamuosius. Suraskite pazymiu vidurki. Atlikite siuos patikrinimus:
// 1) ar gautas vidurkis yra [8-10];
// 2) ar gautas vidurkis yra [5-8);
// 3) ar gautas vidurkis yra <5.

let egzaminasAnglu = 6;
let egzaminasFizika = 7;
let egzaminasLietuviu = 9;

let vidurkis = (egzaminasAnglu + egzaminasFizika + egzaminasLietuviu) / 3;

console.log(vidurkis.toFixed(1));

if (vidurkis >= 8) {
  console.log('gautas vidurkis yra [8-10]');
} else if (vidurkis === 7.9 || vidurkis >= 5) {
  console.log('gautas vidurkis yra [5-8)');
} else if (vidurkis < 5) {
  console.log('gautas vidurkis yra <5');
}

// 15. Susikurkite du skaicius. Patikrinkite (naudojant 4 atskirus if'us):
// 1- ar pirmas skaicius yra didesnis uz antraji arba lygus 0;

let x = 20;
let z = 5;

if (x > z || x === 0) {
  console.log('pirmas skaicius yra didesnis uz antraji ar lygus uz 0');
} else {
  console.log('pirmas skaicius nera didesnis uz antraji ar lygus 0');
}

// 2- ar antras skaicius yra didesnis uz pirmaji ar lygus 5;
// nebaigtas.. klaida....
if (z > x || z === 5) {
  console.log('antras skaicius yra didesnis uz pirmaji ar lygus 5');
} else {
  console.log('antras skaicius nera didesnis uz pirmaji ar lygus 5');
}

// 3- ar pirmas skaicius yra didesnis uz antraji ir yra lygus 20;
// nebaigtas.. klaida....
const skaiciausSalyga1 = 20;

if (x > z && x === 20) {
  console.log('pirmas skaicius yra didesnis uz antraji' && skaiciausSalyga1);
} else {
  console.log('pirmas skaicius nera didesnis uz antraji ir lygus 20');
}

// 4- ar antras skaicius yra didesnis uz pirmaji ir mazesnis uz 100;
// nebaigtas..
