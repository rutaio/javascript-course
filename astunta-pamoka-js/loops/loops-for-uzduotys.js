// Uzduotis 1.1. Parasyti for, kuris isvestu kiekviena skaiciu, pradedant nuo 0 ir baigiant 10.
// "++" reiskia, kad kiekviena karta kintamaji didintu po viena karta.

for (let i = 0; i <= 10; i++) {
  console.log(i); // <-- cia rasome console log, jei norim pamatyti skaiciu sarasa
}

// 1.2. Parasyti for, kuris isvestu kas antra skaiciu, pradedant O ir baigiant 15.

for (let i = 0; i <= 15; i += 2) {
  console.log(i);
}

// 1.3. Parasyti for, kuris isvestu kas trecia skaiciu, pradedant 1 ir baigiant 20.
// Kiekviena skaiciu apskliausti lauztiniais skliaustais. Pvz.: [1][4][7]..

for (let i = 1; i <= 20; i += 3) {
  console.log(`[${i}]`);
}

// 1.4. Parasyti for, kuris eitu pro kiekviena skaiciu nuo 1 iki 20.
// Jame apsirasyti if salyga, kuri patikrintu ar dabartinis skaicius dalinasi is 4,
// jei taip tai si skaiciu isvesti.

for (let i = 0; i <= 20; i++) {
  if (i % 4 == 0) {
    console.log(`Dabartinis skaicius dalijasi is 4: ${i}`);
  }
}

// 1.5. Susikurkite kintamuosius reziu pradziai ir pabaigai nusakyti.
// Patikrinkite, kad tai butu validu (pradzia turi büti mazesne nei pabaiga).
// Jei reziai tinkami, tuomet vykdyti for,
// kuris atskirose eilutese isvestu kiekviena skaiciu is tu reziu,
// bei atskiriant tarpu - tu skaiciu kvadratus.

let start = 3;
let end = 8;

if (start < end) {
  for (let i = start; i <= end; i++) {
    console.log(`${i} ${i ** 2}`);
  }
} else {
  console.log('pradzia didesne arba lygi pabaigai, todel kodas nevykdomas');
}

// 1.6. Susikurkite kintamuosius reziu pradziai ir pabaigai nusakyti.
// Patikrinkite, kad tai butu validu (pradzia turi buti mazesne nei pabaiga).
// Jei reziai tinkami, tuomet vykdyti for, kuris is duotu skaiciu isvestu visus nelyginius skaicius
// arba tuos, kurie dalinasi is 8.

let pradzia = 3;
let pabaiga = 8;

if (pradzia < pabaiga) {
  for (let i = pradzia; i <= pabaiga; i++) {
    if (i % 2 === 1 || i % 8 === 0) {
      console.log(i);
    }
  }
} else {
  console.log('pradzia yra didesne arba lygi pabaigai');
}

// 1.7. (papildomai, sunkiau) 
// Be daugybos veiksmo programoje, sudauginti du skaicius.

let num1 = 5;
let num2 = 3;
let result = 0;

for (let i = 0; i < Math.abs(num2); i++) {
  result += num1;
}

console.log(result);
