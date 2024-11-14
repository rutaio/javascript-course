// Uzduotis nr.1 Susikurkite kintamaji pasirinkimui saugoti, i ji irasykite norima reiksme.
// Tikrinkite:
// 1. Ar pasirinkimas lygus 1? Jei taip, iSveskite, kad vartotojas laiméjo vandens.
// 2. Ar pasirinkimas lygus 2? Jei taip, isveskite, kad vartotojas laimejo limonada.
// 3. Ar pasirinkimas lygus 3? Jei taip, i§veskite, kad vartotojas laimèjo arbata.
// 4. Ar pasirinkimas lygus 4? Jei taip, i§veskite, kad vartotojas laimejo kava.
// 5. Jei pasirinkimas neegzistuoja, isveskite klaidos pranesima.

let pasirinkimas = 6;

switch (pasirinkimas) {
  case 1:
    console.log('vartotojas laiméjo vandens');
    break;
  case 2:
    console.log('vartotojas laiméjo limonada');
    break;
  case 3:
    console.log('vartotojas laiméjo arbata');
    break;
  case 4:
    console.log('vartotojas laiméjo kava');
    break;
  default:
    console.error('klaida');
}

// Uzduotis nr.2 Susikurkite kintamuosius trims skaiciams saugoti ir priskirkite jiems reiskmes.
// Tikrinkite pirma skaiciu:
// 1. Ar pirmas skaicius lygus 1? Jei taip, isvesti visu triju skaiciu suma.
// 2. Ar pirmas skaicius lygus 2? Jei taip, isvesti antro ir trecio skaiciu sandauga.
// 3. Ar pirmas skaicius lygus 3? Jei taip, isvesti pirmo skaiciaus kvadrata.
// 4. Jei nei vienas variantas netinka, isveskite klaidos pranesima.

let a = 1;
let b = 2;
let c = 3;

switch (a) {
  case 1:
    console.log(a + b + c);
    break;
  case 2:
    console.log(b * c);
    break;
  case 3:
    console.log(a ** 2);
    break;
  default:
    console.error('klaida');
}

// Uzduotis nr.3. Susikurkite kintamaji klaidos kodui saugoti.
// Jam priskirkite koki nors klaidos koda.
// Tikrinkite koks tai klaidos kodas (bent 3 skirtingus variantus),
// ties kiekvienu ju iSveskite skirtinga teksta, nurodanti, kad bus atliekami skirtingi veiksmai.

let logIn = 'username neatitinka';

switch (logIn) {
  case 'password neatitinka':
    console.error('Pasitikrinkite password ar tikrai toks');
    break;
  case 'email neatitinka':
    console.error('Pasitikrinkite savo email ar tikrai toks');
    break;
  case 'username neatitinka':
    console.error('Pasitikrinkite savo username ar tikrai toks');
    break;
}
