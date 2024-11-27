// for.. of.. loops
// for.. of.. ciklai
// sis ciklas grazina reiksmes is masyvo (ne indeksus)
// sukurtas veikti su masyvais, objektais, stringais

// pvz 1

const masyvas123 = ['awe', 'bee', 'circle'];

for (let masyvoDalyvis of masyvas123) {
  console.log(masyvoDalyvis.length);
}

// pvz 2

// const masyvas = ['a', 'b', 'c'];

// for (const reiksme of masyvas) { // cia negalim rasyt const, nes zemiau bandom pakeisti jos reiksme..
//    console.log(reiksme += 2);
// }

// pvz 3

const string = 'string';

for (let raide of string) {
  console.log(raide); // eis per kiekviena zodyje esancia raide
}

// pvz 4

const array = [1, 2, 3, 4, 5];

for (let number of array) {
  console.log(number);
}

// pvz 5

let spalvos = ['zalia', 'raudona', 'geltona'];

for (let spalva of spalvos) {
  console.log(spalva);
}

// pvz 6

const pazymiai = [10, 6, 4, 7, 3];

for (let pazymys of pazymiai) {
  if (pazymys > 5) {
    console.log('Pazymys yra teigiamas', pazymys);
  } else {
    console.log('Pazymys yra neigiamas', pazymys);
  }
}

// pvz 7

let komanda = [
  'Programuotojas',
  'Dizaineris',
  'Vadybininkas',
  'Senjoras',
  'Jauniklis',
];

for (const narys of komanda) {
  // grazina reiksme
  console.log(narys);
}

for (const narys in komanda) {
  // grazina indeksa 0 1 2 3 4
  console.log(narys);
}

let pirmas_studentas = [7, 8, 9, 10];
let antras_studentas = [9, 8, 9, 6];

for (const pazymys of pirmas_studentas) {
  console.log('Pirmo studento pazymys:', pazymys);
}

for (const pazymys of antras_studentas) {
  console.log('Antro studento pazymys:', pazymys);
}

// pvz 8

let skaiciai = [1, 2, 3];
let sum = 0;

for (const skaicius of skaiciai) {
  sum += skaicius;
}

console.log(sum);

// pvz 9

let numbers = [-1, -2, -3, 1, 2, 3];

let teigiami_numbers = [];
let neigiami_numbers = [];

for (const number_Kazkoks of numbers) {
  if (number_Kazkoks > 0) {
    teigiami_numbers.push(number_Kazkoks);
  } else {
    neigiami_numbers.push(number_Kazkoks);
  }
}

console.log('Teigiami skaiciai yra: ', teigiami_numbers);
console.log('Neigiami skaiciai yra: ', neigiami_numbers);
