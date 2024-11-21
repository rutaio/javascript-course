// 10. Susikurkite skaiciui saugoti skirta kintamaji. Tikrinkite (naudojant visas if salygos dalis):

let kintamasis = 47;

// 10.1) Ar skaicius yra lyginis?

if (kintamasis % 2 === 0) {
  console.log('skaicius yra lyginis');
} else {
  console.log('skaicius nera lyginis');
}

// 10.2) Ar dalinasi is 5?

if (kintamasis % 5 === 0) {
  console.log('skaicius dalinasi is 5');
} else {
  console.log('skaicius nesidalina is 5');
}

// 10.3) Ar skaicius lygus 3?

if (kintamasis === 3) {
  console.log('taip, skaicius yra lygus 3');
} else {
  console.log('ne, skaicius nera lygus 3');
}

// 10.4) Jeigu nieko nepavyko rasti, isveskite klaidos pranesima.

if (kintamasis % 2 === 0) {
  console.log('skaicius yra lyginis');
} else if (kintamasis % 5 === 0) {
  console.log('skaicius dalinasi is 5');
} else if (kintamasis === 3) {
  console.log('taip, skaicius yra lygus 3');
} else {
  console.log('Alert');
}

// 11. Susikurkite tris skaicius. Tikrinkite (naudojant visas if salygos dalis):
// 11.1) Ar pirmi du skaiciai lygus?
// 11.2) Ar pirmas ir trecias skaiciai lygus?
// 11.3) Ar trecias skaicius didesnis uz pirma?
// 11.4) Ar antras skaicius lygus dvigubai trecio skaiciaus reiksmei?
// 11.5) Ar pirmas skaicius dalinasi is 3?
// 11.6) Jei nieko nepavyko rasti, isveskite klaidos pranesima.

let f = 61;
let o = 42;
let s = 19;

if (f === o) {
  console.log('pirmi du skaiciai yra lygus');
} else if (f === s) {
  console.log('pirmas ir trecias skaiciai yra lygus');
} else if (s > f) {
  console.log('trecias skaicius yra didesnis uz pirma');
} else if (o === s ** 2) {
  console.log('antras skaicius yra lygus dvigubai trecio skaiciaus reiksmei');
} else if (f % 3 === 0) {
  console.log('pirmas skaicius dalinasi is 3');
} else {
  console.log('Klaida');
}
