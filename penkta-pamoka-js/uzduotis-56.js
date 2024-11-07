// 5. Sukurkite tris skaiciu kintamuosius. Patikrinkite sias salygas (naudojant else if dalis):

let m = 56;
let n = 32;
let r = 87;

// 5.1)Ar pirmas skaicius yra didesnis uz antra?

if (m > n) {
  console.log('5.1) pirmas skaicius yra didesnis uz antra');
} else {
  console.log('5.1) pirmas skaicius nera didesnis uz antra');
}

// 5.2)Ar antras skaicius yra didesnis uz trecia?

if (n > r) {
  console.log('5.2) antras skaicius yra didesnis uz trecia');
} else {
  console.log('5.2) antras skaicius nera didesnis uz trecia');
}

// 5.3)Ar trecias skaicius yra didesnis uz pirma?

if (r > m) {
  console.log('5.3) trecias skaicius yra didesnis uz pirma');
} else {
  console.log('5.3) trecias skaicius nera didesnis uz pirma');
}

// 5.4)Ar pirmi du skaiciai yra lygus?

if (m === n) {
  console.log('5.4) pirmi du skaiciai yra lygus');
} else {
  console.log('5.4) pirmi du skaiciai nera lygus');
}

// 5.5)Ar paskutiniai su skaiciai yra lygus?

if (n === r) {
  console.log('5.5) paskutiniai du skaiciai yra lygus');
} else {
  console.log('5.5) paskutiniai du skaiciai nera lygus');
}

// 5.6)Ar pirmas skaicius yra lygus 0?

if (m === 0) {
  console.log('5.6) pirmas skaicius yra lygus 0');
} else {
  console.log('5.6) pirmas skaicus nera lygus 0');
}

// 5.7)Ar antras skaicius yra neigiamas?

if (n < 0) {
  console.log('5.7) antras skaicius yra neigiamas');
} else {
  console.log('5.7) antras skaicius yra teigiamas');
}

// 5.8)Ar trecias skaicius yra teigiamas?

if (r > 0) {
  console.log('5.8) trecias skaicius yra teigiamas');
} else {
  console.log('5.8) trecias skaicius yra neigiamas');
}

// 6. Susikurkite kintamaji egzamino pazymiui saugoti [0-10].
// Naudojant else if dalis patikrinkite sias salygas ir isveskite atitinkama teksta:
// 6.1) Jei pazymys yra lygus 10, isveskite "puiku".
// 6.2) Jei pazymys yra lygus arba didesnis nei 9, isvesti "labai gerai".
// 6.3) Jei pazymys yra lygus arba didesnis nei 7, isvesti "gerai".
// 6.4) Jei pazymys yra lygus arba didesnis nei 5, isvesti "patenkinamai".
// 6.5) Jei pazymys yra mazesnis uz 5, isvesti "egzaminas neislaikytas".

let pazymysPirmas = 6;
let pazymysAntras = 8;
let pazymysTrecias = 3;

let vidurkis = (pazymysPirmas + pazymysAntras + pazymysTrecias) / 3;

console.log(vidurkis.toFixed(0));

if (vidurkis >= 10) {
  console.log('Puiku');
} else if (vidurkis >= 9) {
  console.log('Labai gerai');
} else if (vidurkis >= 7) {
  console.log('Gerai');
} else if (vidurkis >= 5) {
  console.log('Patenkinamai');
} else {
    console.log('Egzaminas neislaikytas');
}
