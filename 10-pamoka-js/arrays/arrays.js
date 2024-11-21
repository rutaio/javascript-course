// Array = Masyvas yra vieta, kur galim sugrupuoti duomenis.
// Masyvas rasomas kaip kintamasis.
// Masyva galime ideti net ir i pati console.log, bet dazniau masyvas bus priskirtas t.t. kintamajam.

// Masyvus galima įsivaizduoti kaip:
// Masyvas yra specialaus tipo kintamasis, kuris gali saugoti daugiau nei vieną reikšmę.
// Masyvas apjungia kelis skirtingus kintamuosius į vieną vietą.
// Masyvas padeda sugrupuoti susijusius duomenis.
// Masyve gali buti bet koks duomenu tipas: skaicius, stringai, bolean (true/false), netgi undefined ir null.
// Bet stengiames nemiksuoti duomenu tipu!

// Backend'as visada mums atsius duomenis masyvo formatu.
// ant masyvo galime naudoti ir ciklus, kad apdoroti duomenis mum reikiamu budu.

// pirmoji reiksme yra "nulinta", antroji - pirma, trecioji - antra,
// nes skaiciuojame nuo 0.

// pvz 1

const markes = ['audi', 'bmw', 'opel']; // duomenys atskiriami kableliu

console.log(markes);

// pvz 2

const matematika = 7;
const geografija = 8;
const informatika = 6;

const studentoPazymiai = [matematika, geografija, informatika];

console.log('geografijos pazymys: ' + studentoPazymiai[1]);

// pvz 3 - ar masyvas yra true ar false? nei tas, nei tas...

let masyvas = [];

if (masyvas) {
  console.log('1');
} else {
  console.log('2');
}

// bet mes labiau tikrinsime masyvo ilgi..
// tuscias masyvas gali egzistuoti

let masyvas2 = [];

console.log(masyvas.length);

// pvz 5

let sum = 0;
let array = [3, 2, 1];

sum = array[0] + array[1] + array[2];

console.log(sum);

// pvz 6

let skaiciai = [1, 2, 3, 4, 5];

console.log(skaiciai.length);

// pvz 7

let automobiliai = ['jeep'];

if (automobiliai.length) {
  // reiskia true = 1
  console.log('Masyvas netuscias');
}

if (automobiliai.length === 1) {
  // reiskia, kad masyve yra 1 elementas
  console.log('Masyve yra vienas elementas', automobiliai[0]);
}

if (automobiliai.length === 1) {
  console.log('Masyve yra vienas elementas', automobiliai[2]); // parodys undefined, nes nesame apsirase antrojo masyvo kintamojo
}

// pvz 8

let numbers = ['pirmas', 'antras', 'trecias', 'ketvirtas'];

// pirmas masyvo narys
console.log(numbers[0]);

// paskutinis masyvo narys
console.log(numbers[numbers.length - 1]); // paimk visa masyvo ilgi ir atimk 1, kuris yra nulintas

// pvz 9 - kaip pakeisti masyvo kintamuju pozicija

let vardai = ['Tomas', 'Agne', 'Greta'];

console.log(vardai);

vardai[0] = 'Greta';
vardai[2] = 'Tomas';

console.log(vardai)