// 4. Sukurkite tris objektus prekiu duomenims saugoti.
// Kiekviename objekte sudekite sias savybes su reiksmèmis: pavadinimas, kaina, savikaina, kodas, turimas kiekis sandelyje, siuntimui dezès matmenys (x, y, z asys).
// Isveskite visu triju prekiu informacija.
// Isveskite visu prekiu kainas vienoje eiluteje: (pirma preke kainuoja - ..., antra preke kainuoia - ..., ir t.t.).
// Raskite ir isveskite kuri preke yra brangiausia (jos pavadinima ir kaina arba visa, rastos prekés informacia).
// Raskite ir isveskite atskirose eilutese kiekvienos prekes dezes turi.
// Raskite ir isveskite atskirose eilutese kiekvienos prekes pelninguma (kaina - savikaina) * kiekis sandélyie).

const preke1 = {
  pavadinimas: 'Ausines',
  kaina: 100,
  savikaina: 50,
  kodas: 'WD5672-1',
  turimasKiekis: 635,
  deze: {
    ilgis: 61,
    plotis: 35,
    aukstis: 36,
  },
};

const preke2 = {
  pavadinimas: 'Nesiojamas Kompiuteris',
  kaina: 2200,
  savikaina: 900,
  kodas: 'MacBook-PRO',
  turimasKiekis: 254,
  deze: {
    ilgis: 80,
    plotis: 50,
    aukstis: 75,
  },
};

const preke3 = {
  pavadinimas: 'Laikrodis',
  kaina: 600,
  savikaina: 200,
  kodas: 'Samsung-423',
  turimasKiekis: 214,
  deze: {
    ilgis: 61,
    plotis: 35,
    aukstis: 8,
  },
};

// Isveskite visu triju prekiu informacija.
sandelys = [preke1, preke2, preke3];
console.log(sandelys);

// kitas budas
console.log(preke1);
console.log(preke2);
console.log(preke3);

// Isveskite visu prekiu kainas vienoje eiluteje: (pirma preke kainuoja - ..., antra preke kainuoia - ..., ir t.t.).
console.log(
  `pirma preke kainuoja - ${sandelys[0].kaina} EUR, antra preke kainuoja - ${sandelys[1].kaina} EUR, trecia preke kainuoja - ${sandelys[2].kaina} EUR`
);

// kitas budas
console.log(
  `pirma preke kainuoja - ${preke1.kaina} EUR, antra preke kainuoja - ${preke2.kaina} EUR, trecia preke kainuoja - ${preke3.kaina} EUR`
);

// Raskite ir isveskite kuri preke yra brangiausia (jos pavadinima ir kaina).
let brangiausiaPreke = preke1.kaina;

if (preke2.kaina > brangiausiaPreke) {
  brangiausiaPreke = preke2.kaina;
}

if (preke3.kaina > brangiausiaPreke) {
  brangiausiaPreke = preke3.kaina;
}

console.log(`Brangiausia preke kainuoja: ${brangiausiaPreke}`);

// Raskite ir isveskite atskirose eilutese kiekvienos prekes dezes turi.
let preke1Turis = preke1.deze.ilgis * preke1.deze.plotis * preke1.deze.aukstis;
console.log(`pirmos prekes dezes turis yra ${preke1Turis} kubiniu centimetru`);

let preke2Turis = preke2.deze.ilgis * preke2.deze.plotis * preke2.deze.aukstis;
console.log(`antros prekes dezes turis yra ${preke2Turis} kubiniu centimetru`);

let preke3Turis = preke3.deze.ilgis * preke3.deze.plotis * preke3.deze.aukstis;
console.log(`trecios prekes dezes turis yra ${preke3Turis} kubiniu centimetru`);

// Raskite ir isveskite atskirose eilutese kiekvienos prekes pelninguma (kaina - savikaina) * kiekis sandelyie).
let preke1Pelningumas =
  (preke1.kaina - preke1.savikaina) * preke1.turimasKiekis;
console.log(
  `"${preke1.pavadinimas}" prekes pelningumas yra: ${preke1Pelningumas} EUR`
);

let preke2Pelningumas =
  (preke2.kaina - preke2.savikaina) * preke2.turimasKiekis;
console.log(
  `"${preke2.pavadinimas}" prekes pelningumas yra: ${preke2Pelningumas} EUR`
);

let preke3Pelningumas =
  (preke3.kaina - preke3.savikaina) * preke3.turimasKiekis;
console.log(
  `"${preke3.pavadinimas}" prekes pelningumas yra: ${preke3Pelningumas} EUR`
);

// 5. Sukurkite objekta automobilio duomenims saugoti.
// I si objekta savybes su reiksmemis sukelkite, po to kai sukursite tuscia objekta (10-as pavyzdys).
// Sudekite sias savybes su reik$memis: marke, modelis, rida, gamybos metai, spalva, darbinis túris, ar dauzta, ar parduodama.
// Isveskite visa automobilio informacija.
// Paskaiciuokite ir isveskite kiek automobiliui yra metu (rankomis irasykite dabartinius metus arba panaudokite new Date (Date.now () ) .getFullYear () funkcija).
// Paskaiciuokite ir isveskite kiek vidutiniskai per metus yra nuvaziaves automobilis (jeigu viso nuvaziavo 300 kilometru, o automobiliui yra 2 metai, tai per metus vidutiniskai gaunasi 150 km.).

// PVZ, kaip susikurti tuscia objekta ir i ji ipushinti duomenis?
const masina = {
};

console.log(masina); // grazina tuscia objekta, nes duomenys nera ipushinti 

masina.marke = 'bmw';
masina.modelis = 'kazkoks';
masina.rida = 100000;
masina.gamybosMetai = 2000;
masina.spalva = 'neonine';
masina.darbinisTuris = 0.5;
masina.arDauzta = true;
masina.arParduodama = false;

// Isveskite visa automobilio informacija.
console.log(masina);

// Paskaiciuokite ir isveskite kiek automobiliui yra metu (rankomis irasykite dabartinius metus arba panaudokite new Date (Date.now () ) .getFullYear () funkcija).
let autoAmzius = new Date(Date.now()).getFullYear() - masina.gamybosMetai;
console.log(`Masinos amzius yra: ${autoAmzius} metai`);

// Paskaiciuokite ir isveskite kiek vidutiniskai per metus yra nuvaziaves automobilis:
// (jeigu viso nuvaziavo 300 kilometru, o automobiliui yra 2 metai, tai per metus vidutiniskai gaunasi 150 km.).

let vidutineRida = masina.rida / autoAmzius;
console.log(
  `Vidutiniskai si masina per metus yra nuvaziavusi po ${vidutineRida.toFixed()} km`
);
