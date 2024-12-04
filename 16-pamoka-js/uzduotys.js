// 1. Sukurkite funkcija, kuri isvestu jusu varda ir kodel pasirinkote programavima.
// Iskvieskite sia funkcija tris kartus.

function defineMotivation(vardas, reason) {
  console.log(vardas, reason);
}

defineMotivation('Ruta -', 'curious to make systems!');
defineMotivation('Ruta -', 'loves a sense of peace!');
defineMotivation('Ruta -', 'loves quiet colleagues!');

// 2. Sukurkite funkcija, kuri isvestu 5 eiluciu eilerasti.
// Iskvieskite sia funkcija 5 kartus.

function writePoem(poem) {
  console.log(poem);
}

writePoem('Give it time to the quiet');
writePoem('Cocoon still cracks in silence');
writePoem('Give it time for the bird');
writePoem('Born to sing loud');
writePoem('Give it time, And cocoon may give life to a bird');

// kitas budas: kai norim isvesti ta pati teksta 5 katus:

function writePoetry(poetry) {
  console.log('Give it time to the quiet');
}

for (let i = 0; i < 5; i++) {
  writePoetry(); // tada rasys ta pacia eilute
}

// 3. Sukurkite tris funkcijas, kur kiekviena isvestu skirtingus tekstus.
// Iskvieskite visas tris funkcijas po viena karta.

function isveskTekstaPirma() {
  // rasydami funkcija mes galim nuspresti ar mums reikia argumento, ar paliekam tuscia
  console.log('tekstas pirmas');
}

function isveskTekstaAntra() {
  console.log('tekstas antras');
}

function isveskTekstaTrecia() {
  console.log('tekstas trecias');
}

isveskTekstaPirma();
isveskTekstaAntra();
isveskTekstaTrecia();

// 4. Sukurkite dvi funkcijas, kur vienoje butu viena teksto eilute, kitoje - kita.
// Sukurkite trecia funkcija, kuri iskviestu pirmas dvi funkcijas.
// Iskvieskite sia treciaja funkcija uz visu funkciju ribu.

function showcaseFirstLine() {
  console.log('Cia yra viena teksto eilute');
}

function showcaseSecondLine() {
  console.log('O cia jau antra teksto eilute');
}

function showcaseSummary() {
  showcaseFirstLine();
  showcaseSecondLine();
}

showcaseSummary();

// kitas budas:

function pirmaEile() {
  return 'Labas';
}

function antraEile() {
  return 'Vakaras';
}

function sujungtosEiles() {
  console.log(pirmaEile() + ' ' + antraEile());
}

sujungtosEiles();

// 5. Sukurkite funkcija, kurios viduje sugeneruotume 2 atsitiktinius skaicius.
// Funkcijoje suskaiciuokite ir isveskite siu dvieju skaiciu suma,
// kartu isvedant ir pati atliekama veiksma (pvz 7 + 2 = 9).
// Iskvieskite sia funkcia keleta kartu.

function generateSum() {
  const skaicius1 = Math.floor(Math.random() * 10) + 1;
  const skaicius2 = Math.floor(Math.random() * 10) + 1;

  let suma = skaicius1 + skaicius2;

  console.log(`${skaicius1} + ${skaicius2} = ${suma}`);
}

generateSum();
generateSum();
generateSum();

// 6. Sukurkite ir iskvieskite funkcija, kurioje kintamuosiuose butu saugoma informacija apie policininka (vardas, pavarde, amzius, alga, etatas, specializacija).
// Isveskite sia informacija suformatuotai (pavydziui iterpkite ¡ sakini, ar isveskite sarasu ar pan.).

function storePolicemanInfo() {
  let vardas = 'Robotas';
  let pavarde = 'Policininkas';
  let amzius = 100;
  let alga = 9000;
  let etatas = 'patrulis';
  let specializacija = 'apsauga';

  console.log(
    `${vardas} ${pavarde}, kurio amzius yra ${amzius}, uzdirba laaaabai gerai: net ${alga} EUR, nes jis yra pats geriausias ${etatas}, kurio specializacija - ${specializacija}`
  );
}

storePolicemanInfo();
