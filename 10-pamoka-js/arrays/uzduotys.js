// 1. Susikurkite norima masyva su duomenimis.
let baldai = ['kedes', 'spintos', 'stalai', 'suolai', 'sofos'];

// Is sio masyvo isveskite pirma ir paskutini nari,
console.log(baldai[0]); // pirmas narys: kedes
console.log(baldai[baldai.length - 1]); // paskutinis narys: sofos

// du pasirinktus narius is masyvo vidurio
console.log('antras pasirinktas narys: ' + baldai[1]);
console.log('kitas pasirinktas narys: ' + baldai[2]);

// ir kieki kiek siame masyve yra nariu.
console.log(baldai.length); // 5

// 2. Susikurkite norima masyva su duomenimis.
let parduotuve = ['mesa', 'zuvis', 'darzoves', 'bakaleja'];

// Issiveskite viso sio masyvo informacija.
console.log(parduotuve);

// Pakeiskite triju pasirinktu nariu reiksmes i kitas.
parduotuve[1] = 'bakaleja';
parduotuve[0] = 'darzoves';
parduotuve[3] = 'mesa';

// Issiveskite pakeisto masyvo informacija.
console.log(parduotuve);

// 3. Susikurkite norima tuscia masyva.
let hobiai = [];

// Uzpildykite si masyva duomenimis naudojant push komanda.
hobiai.push('mada');
hobiai.push('filosofija');
hobiai.push('gamta');
hobiai.push('kompai');

// Issiveskite uzpildyto masyvo informacija.
console.log(hobiai);

// 4. Susikurkite tuscia masyva.
// Uzpildykite si masyva atsitiktinai sugeneruotais skaiciais.
// Isveskite sio masyvo informacija.

// 4.a) atsakymas su WHILE (pasitikrinti kodel man neisejo virsutine uzduotis?):
let masyvasW = [];

let z = 0;

while (z < 10) {
  const randomSkaicius = Math.floor(Math.random() * 100) + 1;
  masyvasW.push(randomSkaicius);
  z++;
}

console.log('4 atsakymas su While ciklu: ' + masyvasW);

// 4.b) atsakymas  pagal Edgara:
let masyvas = [
  Math.floor(Math.random() * 100) + 1, // funkcija isgeneruos kita skaiciu, o tada kintamasis laikys sita reiksme, kol mes patys jo nepakeisim
  Math.floor(Math.random() * 100) + 1, // funkcija isgeneruos kita skaiciu, o tada kintamasis laikys sita kita reiksme
  Math.floor(Math.random() * 100) + 1,
];

console.log('4 atsakymas paprastai: ' + masyvas);

// 4.c) atsakymas pagal Greta:
let tuscias = [];

for (let i = 0; i <= 10; i++) { // rasom 10, nes norim sugeneruoti tiek skaiciu; ciklas suksis tol kol salyga atitiks
 let betkoks = Math.floor(Math.random() * 100) + 1; // sugeneruoja skaiciu

 tuscias.push(betkoks); // ipushina i masyva
 }

 console.log('4 atsakymas su For ciklu: ' , Math.random());

// 5. Sukurkite du masyvus dvieju studentu pazymiams saugoti.
// Iveskite po 3-5 pazymius kiekvienam studentui (iskart kuriant masyvus arba per push funkcija).
// Suskaiciuokite ir isveskite ju vidurkius.

let studentas1 = [8, 6, 4, 10];
let studentas2 = [4, 6, 10, 7];

let suma1 = studentas1[0] + studentas1[1] + studentas1[2] + studentas1[3];
let vidurkis1 = suma1 / studentas1.length;

console.log(vidurkis1);

let suma2 = studentas2[0] + studentas2[1] + studentas2[2] + studentas2[3];
let vidurkis2 = suma2 / studentas2.length;

console.log(vidurkis2);

// Issiaiskinkite kurio studento vidurkis didesnis ir isveskite atsakyma.

if (vidurkis1 > vidurkis2) {
  console.log('Pirmas mokinys turi didesni vidurki');
} else if (vidurkis2 > vidurkis1) {
  console.log('Antras mokinys turi didesni vidurki');
} else {
  console.log('Abu vidurkiai lygus');
}
