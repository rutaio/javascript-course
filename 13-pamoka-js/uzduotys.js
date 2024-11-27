// 17.Susikurkite bet kokiu Zodziu masyva ir uzpildykite jj duomenimis.
// Isveskite visus zodzius su indeksais i atskiras eilutes. Pvz: 0 - medis, 1 - tvora, ...

let masyvas = ['tulpe', 'roze', 'piene', 'melisa'];

for (let index in masyvas) {
  console.log(`${Number(index) + 1} - ${masyvas[index]}`);
}

// 18. Susikurkite masyva pirkiniu sarasui saugoti ir uzpildykite ji duomenimis.
// Isveskite kiek pirkiniu yra siame sarase.
// Tap pat, isveskite kiekviena irasa atskiroje eiluteje, pries kiekviena parasant bruksniuka ar koki kita skirtuka.

let pirkiniai = ['duona', 'pienas', 'mesa', 'vanduo', 'pomidorai'];

console.log(`Pirkiniu kiekis: ${pirkiniai.length}`); // tokiu principu veikia pirkiniu krepseliai in ecommerce, kiekviena preke yra ipushinama i masyva

for (let pirkinys of pirkiniai) {
  console.log(`- ${pirkinys}`);
}

// 19. Susikurkite masyva studento pazymiams saugoti.
// Uzpildykite si masyva duomenimis.
// Raskite pazymiu vidurkj.
// Isveskite visus siuos pazymius ir gauta vidurki.

let pazymiai = [9, 8, 4, 7, 8];
let sum = 0;
let vidurkis = 0;

for (let pazymys of pazymiai) {
  console.log(pazymys);
  sum += pazymys; // negalime apskaiciuoti sumos be ciklo, todel rasome sumos skaiciavima ciklo viduje
}

vidurkis = sum / pazymiai.length; // geriau rasyti ne cikle, nes ji skaiciuojame tik viena karta

console.log('Pazymiu vidurkis yra: ', vidurkis.toFixed(0));

// 19. b) variantas

const grades = [10, 7, 8, 5];
let sumGrades = 0;

for (let grade of grades) {
  sumGrades += grade;
}

average = sumGrades / grades.length;

console.log('Pazymiai:');

for (let index in grades) {
  console.log(`${Number(index) + 1}: ${grades[index]}`);
}

console.log('Vidurkis:', average);

// 20. Susikurkite masyva keliones nuovaziuotiems kilometrams saugoti
// ir uzpildykite ji duomenimis (pvz 120, 145, 90 ir pan., kur kiekvienas skaicius reiskia kiek km kuria diena buvo nuvaziuota).
// Isveskite visus nuvaziuotus per diena kilometrus, kurie yra didesni nei 150.

let kelione = [490, 202, 236, 145, 166];

for (let km of kelione) {
  if (km >= 150) {
    console.log(`Kilometrai per diena daugiau nei 150km: ${km}`);
  }
}

// 20. b variantas

const kilometrai = [100, 150, 50, 40, 200, 300];
const kilometraiVirs150 = [];

for (let km of kilometrai) {
  if (km > 150) {
    kilometraiVirs150.push(km);
  }
}

console.log(kilometraiVirs150);

// 21. Susikurkite masyva failu pavadinimams saugoti, uzpildykite ji duomenimis.
// Jums reikes nuskaityti siuos failus, todel pirma noresite patikrinti su kuriais galite dirbti.
// Isveskite i ekrana tik tuos failus, kuriu galune yra .txt arba .json tipo.

let archyvas = [
  'plan.txt',
  'report.txt',
  'code.json',
  'project.json',
  'image.jpg',
  'excel.csv',
];

for (let failas of archyvas) {
  if (failas.endsWith('.txt')) {
    console.log('Txt failai: ', failas);
  } else if (failas.endsWith('.json')) {
    console.log('Json failai: ', failas);
  }
}

// 21. b variantas

let archive = [
  'plan.txt',
  'report.txt',
  'code.json',
  'project.json',
  'image.jpg',
  'excel.csv',
];

let textFiles = [];
let codeFiles = [];

for (let files of archive) {
  if (files.endsWith('.txt')) {
    textFiles.push(files);
  } else if (files.endsWith('.json')) {
    codeFiles.push(files);
  }
}

console.log(`Tekstiniai failai yra sie: ${textFiles}`);
console.log(`Kodo failai yra sie: ${codeFiles}`);

// 22. Susikurkite masyva automobiliu markems saugoti ir uzpildykite ji duomenimis.
// Isveskite kiekviena automobili atskiroje eiluteje, nurodant kiek raidziu sudaro jo pavadinima.

let markes = ['jeep', 'minicooper', 'audi', 'bmw'];

for (automobilis of markes) {
  console.log(`${automobilis.toUpperCase()} - ${automobilis.length} raides`);
}

// 23. Susikurkite masyva ivykusiu klaidu kodams saugoti ir uzpildykite si masyva duomenimis.
// Tuomet isveskite visas sukauptas klaidas administratoriui, taip, kad jis suprastu kas per klaidos ivyko.
// Pavyzdziui, jeigu yra kodas "ui87" tai kad isvestu "Grafines sasajos klaida navigacijoje",
// arba jeigu kodas "sys12", tuomet "Truksta operatyviosios atminties sistemoje" ir pan.

let klaidos = ['ui87', 'sys12'];

for (kodas of klaidos) {
  if (kodas === 'ui87') {
    console.log('Grafines sasajos klaida navigacijoje');
  } else if (kodas === 'sys12') {
    console.log('Truksta operatyviosios atminties sistemoje');
  }
}

// 23.b) variantas

const kodai = ['ui87', 'sys12'];
const koduZinutes = [
  'Grafines sasajos klaida navigacijoje',
  'Truksta operatyviosios atminties sistemoje',
];

for (let indeksas in kodai) {
  console.log(`${kodai[indeksas]} - ${koduZinutes[indeksas]}`);
}

// 24. Susikurkite masyva sandelio likuciams saugoti, (kiekvienas atskiras narys masyve yra atskiros prekes likutis).
// Su kiekvienu likuciu paskaiciuokite per kiek dienu bus ispirktas, jei per diena vidutiniskai yra nuperkami 5 vnt.
// Isveskite atsakymus atskirose eilutese, nurodant kiek yra dabar ir kiek dienu uzteks jo.
// Pavyzdziui, jeigu yra likuciai 74, 54 ir 32, tai 74 vnt. prekes uzteks mazdaug 15 dienu, 54 vnt. prekes uzteks mazdaug 11 dienu ir t.t.

let sandelys = [408, 666, 936, 135, 3223];
let parduotasPrekesKiekisPerDiena = 5;

for (preke of sandelys) {
  preke -= parduotasPrekesKiekisPerDiena;
  console.log(
    `Dabartinis prekes likutis: ${preke}, uzteks ${(
      preke / parduotasPrekesKiekisPerDiena
    ).toFixed()} dienu`
  );
}

// 25. Susikurkite masyva studento pazymiams saugoti. Uzpildykite si masyva atsitiktinai sugeneruotais pazymiais.
// Raskite vidurki.
// Raskite, kiek neigiamu pazymiu studentas gavo (mazesniu nei 5).
// Isveskite visus teigiamus pazymius, gauta vidurki ir neigiamus pazymius.

let studentoPazymiai = [4, 6, 9, 10, 6];
let suma = 0;
let pazymiuVidurkis = 0;

for (pazymys of studentoPazymiai) {
  suma += pazymys;
  if (pazymys < 5) {
    console.log(`Neigiami pazymiai: ${pazymys}`);
  } else if (pazymys >= 5) {
    console.log(`Teigiami pazymiai: ${pazymys}`);
  }
}

pazymiuVidurkis = suma / studentoPazymiai.length;

console.log(`Vidurkis: ${pazymiuVidurkis}`);