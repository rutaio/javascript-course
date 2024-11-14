// Uzduotis 1.1. Parasyti for, kuris isvestu kiekviena skaiciu, pradedant nuo 0 ir baigiant 10.

for (let i = 0; i <= 10; i++) {
  console.log(i);
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
// Jei reziai tinkami, tuomet vykdyti for, kuris atskirose eilutese isvestu kiekviena skaiciu is tu reziu,
// bei atskiriant tarpu - tu skaiciu kvadratus.

let a = 10;

// NESUPRANTU uzduoties - kas yra reziai?
// jei i yra visada 0, tai kaip jis gali buti maziau uz a? ar sitoje uzduotyje i gali buti bet koks skaicius?
for (let i = 5; i < a; i++) {
  console.log(`${i} ${i ** 2}`);
}
