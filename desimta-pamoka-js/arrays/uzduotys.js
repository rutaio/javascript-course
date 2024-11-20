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


// NESUPRANTU
// 4. Susikurkite tuscia masyva. 
let laimingiSkaiciai = [];

// Uzpildykite si masyva atsitiktinai sugeneruotais skaiciais.
let iskriteSkaiciai = Math.floor(Math.random() * 10) + 1; // taip bus sugeneruotas atsitiktinis skaicius

while (laimingiSkaiciai > 0) {
  let iskriteSkaiciai = Math.floor(Math.random() * 100);
  console.log(iskriteSkaiciai);
  laimingiSkaiciai--; // sustabdo cikla, kai salyga nustoja galioti
}

laimingiSkaiciai.push(iskriteSkaiciai);

// Isveskite sio masyvo informacija.
console.log(laimingiSkaiciai);

// NEBAIGTA
// 5. Sukurkite du masyvus dvieju studentu pazymiams saugoti.
let jonoPazymiai = [4, 6, 10, 8, 8];
let marytesPazymiai = [8, 6, 4, 10, 9];

// Iveskite po 3-5 pazymius kiekvienam studentui (iskart kuriant masyvus arba per push funkcija).
// Suskaiciuokite ir isveskite ju vidurkius.
// Issiaiskinkite kurio studento vidurkis didesnis ir isveskite atsakyma.
