// Uzduotis nr.1: Susikurkite tris kintamuosius skaiciams saugoti.
// Parasykite sias atskiras salygas.

let a = 6;
let b = 9;
let c = 11;

// 1. Ar pirmas ir antras skaiciai yra lygus?

if (a === b) {
    console.log('1.pirmas ir antras skaiciai yra lygus');
} else {
    console.log('1.pirmas ir antras skaiciai nera lygus');
}

// 2. Ar antras ir trecias skaiciai yra lygus?

if (b === c) {
    console.log('2.antras ir trecias skaiciai yra lygus');
} else {
    console.log('2.antras ir trecias skaiciai nera lygus');
}

// 3. Ar pirmas skaicius yra didesnis uz antraji?

// 3.a) budas:
console.log(a > b);

// 3.b) budas:
const rezultatas =
  a > b
    ? 'pirmas skaicius daugiau nei antras'
    : 'pirmas skaicius maziau nei antras';
console.log(rezultatas);

// 3.c) budas:
if (a > b) {
  console.log('3.c) pirmas skaicius daugiau nei antras');
} else {
  console.log('3.c) pirmas skaicius maziau nei antras');
}

// 4. Ar antras skaicius yra didesnis uz dviguba treciojo skaiciaus reiksme,
// t.y. (trecias skaicius padaugintas is 2)?

//Pirmas budas 4.a) tai paciai uzduociai isspresti:
if (b > c ** 2) {
  console.log('4.a) antras atsakymas yra didesnis uz trecio kvadrata');
} else {
  console.log('4.a) antras skaicius nera didesnis uz trecio kvadrata');
}

//Antras budas 4.b) tai paciai uzduociai isspresti:
const atsakymas =
  b > c ** 2
    ? '4.b) antras atsakymas yra didesnis uz trecio kvadrata'
    : '4.b) antras skaicius nera didesnis uz trecio kvadrata';

console.log(atsakymas);

// 5. Ar pirmas skaicius yra lyginis (ar dalinasi is 2)?

if (a % 2 === 0) {
  console.log('5.pirmas skacius yra lyginis');
} else {
  console.log('5.pirmas skaicius nera lyginis');
}

// 6. Ar antras skaicius yra nelyginis (ar nesidalina is 2)?

if (b % 2 !== 0) {
  console.log('6.antras skaicius yra nelyginis');
} else {
  console.log('6.antras skaicius yra lyginis');
}

// 7. Ar trecias skaicius yra teigimas (didsenis uz 0)?

if (c > 0) {
  console.log('7.trecias skaicius yra teigiamas');
} else {
  console.log('7.trecias skaicius yra neigiamas');
}

// 8. Ar pirmas skaicius yra neigiamas (mazesnis uz 0)?

if (a < 0) {
  console.log('8.pirmas skaicius yra neigiamas');
} else {
  console.log('8.pirmas skaicius yra teigiamas');
}

// 9. Ar antras skaicius dalinasi is 4?

if (b % 4 === 0) {
  console.log('9.antras skaicius dalinasi is 4');
} else {
  console.log('9.antras nesidalina is 4');
}

// 10. Ar trecias skaicius dalinasi is 8?

if (c % 8 === 0) {
  console.log('10.trecias skaicius dalinasi is 8');
} else {
  console.log('10.trecias nesidalina is 8');
}
