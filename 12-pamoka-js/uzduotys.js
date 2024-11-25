// 13. Susikurkite skaiciu masyva ir uzpildykite ji duomenimis.
// Isveskite visus skaicius atskirose eilutese.
// Prie kiekvieno lyginio skaiciaus dar isvedant jo kvadrata.

let masyvas = [54, 63, 87, 21, 32, 42];

for (let i = 0; i < masyvas.length; i++) {
  // i++ reiskia kad kiekviena karta kai sukasi ciklas, prideda
  const sk = masyvas[i];
  if (sk % 2 === 0) {
    console.log(`Lyginis skaicius ${sk}, Jo kvadaratas: ${sk ** 2}`);
  } else {
    console.log(sk);
  }
}

// Perziureti koda ar teisingai
// 14. Susikurkite studento pazymiu masyva ir uzpildykite ji duomenimis (atsitiktiniais arba kokius irasysite).
// Isveskite kiekviena pazymi atskiroje eiluteje.
// Prie kiekvieno pazymio nurodykite ar tai teigiamas, ar neigiamas pazymys.
// Taip pat, jeigu neigiamas pazymys, tuomet dar nurodykite kiek balu truko iki teigiamo pazymio.
// Teigiamas pazymys skaitosi 5 balai.

let pazymiai = [];

for (let i = 0; i <= 5; i++) {
  // ar cia turi buti <= 5 ar pazymiai.length ?
  let pazymys = Math.floor(Math.random() * 10) + 1;
  pazymiai.push(pazymys);
}

console.log(pazymiai);

let minimalusTeigiamas = 5;

for (let i = 0; i < pazymiai.length; i++) {
  let pazymys = pazymiai[i];

  if (pazymiai[i] >= 5) {
    console.log(`Teigiamas pazymys: ${minimalusTeigiamas}`);
  } else pazymiai[i] < 5;
  let truksta = minimalusTeigiamas - pazymys;
  console.log(`Neigiamas pazymys: ${pazymiai[i]}`);
}

// 15. Susikurkite zodziu masyva ir uzpildykite duomenimis.
// Isveskite visus zodzius ekrane, nurodant is kiek raidziu kiekvienas sis zodis yra sudarytas.
// Papildykite skripta taip, kad rastumete visu raidziu kieki
// (pvz yra zodziai "medis" ir "alus", 5 ir 4 raidés atitinkamai, o jas sudèjus gaunasi 9 raidés).

let zodziai = ['mesa', 'duona', 'vanduo', 'sultys'];
let bendrasRaidziuKiekis = 0;

for (let i = 0; i < zodziai.length; i++) {
  let raidziuKiekis = zodziai[i].length;
  bendrasRaidziuKiekis += raidziuKiekis; // pridek
  console.log(`"${zodziai[i]}" raidiziu kiekis: ${raidziuKiekis}`);
}

console.log('Bendras raidziu kiekis: ' + bendrasRaidziuKiekis);

// 16. Susikurkite skaiciu masyva ir uzpildykite duomenimis.
// Raskite visu skaiciu, kurie dalinasi is 3 suma ir vidurki.
// Isveskite pradinius duomenis ir gautus atsakymus.

// AR TEISINGAI?
// 16.a) mano variantas

let numbers = [6, 2, 8, 1, 4, 9];
let sum = 0;
let average = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 3 === 0) {
    sum += numbers[i];
  }
}

console.log('Suma: ', sum);

average = sum / numbers.length; // neteisinga formule

console.log('Vidurkis: ', average);

// 16.b) variantas is mokytojo

const skaiciai = [6, 2, 8, 1, 4, 9];

let sumaDalinasiIs3 = 0;
let kiekisDalinasiIs3 = 0;

for (let i = 0; i < skaiciai.length; i++) {
  const skaicius = skaiciai[i];

  if (skaicius % 3 === 0) {
    sumaDalinasiIs3 += skaicius;
    kiekisDalinasiIs3++; // kai tenkins salyga prides po viena
  }
}

let vidurkisDalinasiIs3 = sumaDalinasiIs3 / kiekisDalinasiIs3;

console.log('Suma is 3: ', sumaDalinasiIs3);
console.log('Vidurkis is 3: ', vidurkisDalinasiIs3);
