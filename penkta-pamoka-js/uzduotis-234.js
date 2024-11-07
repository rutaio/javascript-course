// Uzduotis nr.2: Susikurkite kintamaji vartotojo amziui saugoti.
// Patikrinkite ar amzius yra didesnis arba lygus 18-ai.
// Jei taip - isveskite "jus galite balsuoti".

let amzius = 21;

let amziausPatikra =
  amzius >= 18 ? 'jus galite balsuoti' : 'jus negalite balsuoti';

console.log(amziausPatikra);

// 3: Susikurkite kelis kintamuosius saugoti pazymiams.
// Raskite siu pazymiu vidurki. Patikrinkite ar vidurkis teigiamas(daugiau arba lygu 5-iems),
// jei taip - isveskite "vidurkis teigiamas".

let pazymysMatematika = 8;

let pazymysDaile = 9;

let pazymysIstorija = 6;

let moksluVidurkis = (pazymysMatematika + pazymysDaile + pazymysIstorija) / 3;

console.log(moksluVidurkis.toFixed(0));

if (moksluVidurkis >= 5) {
  console.log('vidurkis teigiamas');
} else {
  console.log('vidurkis neigiamas');
}

// 4. Susikurkite skaiciaus kintamaji. Atlikite siuos patikrinimus ir veiksmus:

let skaicius = 36;

// 1) Jei skaicius dalinasi is 5, tuomet isveskite sio skaiciaus daugybos lentele nuo 1 iki 5.

if (skaicius % 5 === 0) {
  console.log('skaicius dalinasi is 5');
} else {
  console.log('skaicius nesidalina is penkiu');
}

// 2) Jei skaicius yra lyginis, tuomet isveskite si skaiciu, jo kvadrata ir ji padalinta is 2

if (skaicius % 2 === 0) {
  console.log('skaicius yra lyginis');
} else {
  console.log('skaicius nera lyginis');
}

console.log(skaicius ** 2 / 2);

// 3) Jei skaicius nesidalina is 7, tuomet susikurkite antraji kontamaji.
// Isveskite siu dvieju skaiciu suma, skirtuma, sandauga, dalmeni.

if (skaicius % 7 === 0) {
    console.log('skaicius yra tinkamas kitiems veiksmams');
  } else {
    console.log('skaicius nera tinkamas kitiems veiksmas ir reikia naujo skaiciaus');
  }

let skaiciusKitas = 98;

let suma = skaicius + skaiciusKitas;
console.log(`Skaiciu suma yra: ${suma}`);

let skirtumas = skaicius - skaiciusKitas;
console.log(`Skaiciu skirtumas yra: ${skirtumas}`);

let sandauga = skaicius * skaiciusKitas;
console.log(`Skaiciu sandauga yra: ${sandauga}`);

let dalmuo = skaicius / skaiciusKitas;
console.log(`Skaiciu dalmuo yra: ${dalmuo.toFixed(3)}`);