// for.. in.. loops
// sis ciklas grazina indeksus is masyvo (ne reiksmes)

// pvz 1

const masyvas = ['a', 'b', 'c'];

for (let index in masyvas) {
  console.log(index); // grazina 0 1 2
}

// pvz 2

const array = [1, 2];

for (let reiksme in masyvas) {
  console.log(masyvas[reiksme]); // del IN zodelio, grazina reiksmes!
}

const list = '12345';

for (let index in list) {
  console.log(list[index]); // grazina reiksmes
}

// BET jei rasau ne IN bet OF
// tada grazins reiksmes..

// pvz 3
// indeksai yra grazinami kaip stringai,
// o stringai nedaro matematikos!
// sita uzduotis ir parodo, kad realybeje tokios situacijos tikriausiai nebus!
let skaiciai = [1, 2, 3];
let sum = 0;

for (const skaicius in skaiciai) {
  sum += skaicius;
}

console.log(sum);
