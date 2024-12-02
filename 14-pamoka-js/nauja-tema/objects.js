// Objects (Objektai)
// Objektas paprastai naudojamas kai norime sugrupuoti duomenis
// apie vieną esybę (object key), pavyzdžiui, vieno studento duomenys, vienos knygos duomenys ir pan.
// Objects - objektai laiko susijusia info apie kokia nors esybe
// Kuo Objektai skiriasi nuo Masyvu? Butent apie sita esybe..

// pvz 1
// objekto kintamajame yra raktai su reiksmemis
const objektas = {
  key: 'value',
  raktas: 'reiksme',
};

// pvz 2

const marke = 'Bmw';
const metai = 1998;
const spalva = 'raudona';
const duruKiekis = 4;
const kuroTipas = 'benzinas';

// pasirasome nauju budu:
const automobilis = {
  marke: 'Bmw',
  metai: 1998,
  spalva: 'raudona',
  duruKiekis: 4,
  kuroTipas: 'benzinas',
  pravardes: ['Peleda', 'Ryklys', 'Penktukas'],
};

console.log(automobilis.pravardes[1]); // grazins antraji nari 

const automobilis2 = {
  marke: 'Jeep',
  metai: 2000,
  spalva: 'melyna',
  duruKiekis: 2,
  kuroTipas: 'dujos',
};

console.log(automobilis2);

//  pvz 3

const registeredUser = {
  username: 'Edgaras90',
  email: 'email@email.com',
  phone: '+370123456',
  city: 'Vilnius',
};

// pvz 4 - knygos duomenys

const knyga = {
  pavadinimas: 'Nuotykiai',
  autorius: 'Jonas Jonaitis',
  isbn_kodas: '12452-13',
  puslapiai: 400,
  temos: ['fantastika', 'nuotykiai'], // galime deti ir masyva!
  leidimas: {
    metai: 2022,
    leidykla: 'Linksmos knygos',
    vertejas: 'Petras Petraitis',
    adresas: 'Vilniaus g. 10, Vilnius',
  },
  kaina: 19.99,
  valiuta: 'EUR',
  arTurime: true,
  arNaudota: false,
};

// Objekto duomenis galime pasiekti naudojant taska ir objekto rakta
console.log(knyga.pavadinimas);

if (knyga.pavadinimas === 'Nuotykiai') {
  console.log('Tai yra knyga apie nuotykius');
} else {
  console.log('Si knyga yra apie kitas temas');
}

console.log(knyga.leidimas.metai); // 2022 - grazina objekto objekto reiksme
console.log(knyga.temos[1]); // nuotykiai - grazina objekto masyvo nari
console.log(knyga['puslapiai']); // galima ir taip

// pvz 5

let darbuotojas = {
  pareigos: 'Programuotojas',
  lygis: 'Jaunesnysis',
  atlyginimas: 1000,
  isidarbino: 2020,
};

console.log(darbuotojas);

let dabartiniaiMetai = 2024;
let jauDirba = dabartiniaiMetai - darbuotojas.isidarbino;

console.log(jauDirba);

switch (jauDirba) { // su switch tikriname vieno kintamojo reiksme
  case 1:
    darbuotojas.atlyginimas += 100;
    break;
  case 2:
    darbuotojas.atlyginimas += 200;
    break;
  case 3:
    darbuotojas.atlyginimas += 300;
    break;
  case 4:
    darbuotojas.atlyginimas += 400;
    break;
}

console.log(darbuotojas.atlyginimas);

// pvz 6 - kaip prideti duomenis i objekta:

let worker = {};

worker.pareigos = 'programmer';

console.log(worker);