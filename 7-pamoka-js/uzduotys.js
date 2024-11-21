// 1️. Užduotis: Kurjerio pristatymo patikrinimas
// Įsivaizduokite, kad kuriame kurjerio pristatymo sistemą, kuri patikrina, ar užsakymas bus pristatytas tą pačią dieną.
// Pristatymas tą pačią dieną galimas tik tuo atveju:
// jei užsakymas buvo pateiktas iki tam tikros valandos (pvz., iki 15h) ir jei prekė yra sandėlyje.

let uzsakymoLaikas = 9;
let prekeYraSandelyje = true;

let pristatymasTaPaciaDiena = 'Taip, pristatymas bus vykdomas ta pacia diena';
let pristatymasKitaDiena = 'Ne, uzsakymas nebus vykdomas ta pacia diena';

if (uzsakymoLaikas <= 15 && prekeYraSandelyje) {
  console.log(pristatymasTaPaciaDiena);
} else if (uzsakymoLaikas > 15 && prekeYraSandelyje) {
  console.log(pristatymasKitaDiena);
}

// 2️. Užduotis: Amžiaus kategorijos nustatymas
// Parašykime programą, kuri pagal žmogaus amžių nustato jo amžiaus kategoriją: vaikas, paauglys, suaugęs ar senjoras.
// Taisyklės:
// Jei amžius mažesnis nei 13, žmogus yra vaikas.
// Jei amžius tarp 13 ir 17 (imtinai), žmogus yra paauglys.
// Jei amžius tarp 18 ir 64 (imtinai), žmogus yra suaugęs.
// Jei amžius 65 ar daugiau, žmogus yra senjoras.

let amzius = 65;

if (amzius >= 65) {
  console.log('Senjoras');
} else if (amzius >= 18 && amzius <= 64) {
  console.log('Suagues');
} else if (amzius >= 13 && amzius <= 17) {
  console.log('Paauglys');
} else if (amzius < 13) {
  console.log('Vaikas');
}

// 3️. Užduotis: Kavinės nuolaidų sistema
// Įsivaizduokite, kad kuriame nuolaidų sistemą kavinei.
// Priklausomai nuo kliento statuso (pvz., ar jis yra lojalumo programos narys) ir pirkinio sumos, gali būti pritaikoma skirtinga nuolaida.
// Taisyklės:
// Jei klientas yra lojalumo narys ir pirkinio suma yra daugiau nei 20 eurų, jis gauna 20% nuolaidą.
// Jei klientas nėra lojalumo narys, bet pirkinio suma viršija 50 eurų, jis gauna 10% nuolaidą.
// Jei nei viena iš sąlygų netenkinama, nuolaida nepritaikoma.

let lojalusNarys = true;
let pirkinioSuma = 49;

if (lojalusNarys && pirkinioSuma >= 20) {
  console.log(
    'Klientas yra lojalumo programos narys ir pirkinio suma yra daugiau nei 20 EUR. Klientas gauna 20% nuolaida.'
  );
} else if (!lojalusNarys && pirkinioSuma >= 50) {
  console.log(
    'Klientas nera lojalumo programos narys, bet pirkinio suma virsija 50 EUR. Klientas gauna 10% nuolaida.'
  );
} else {
  console.log('Nuolaida nepritaikoma');
}

// 4️. Užduotis: Sporto klubo abonemento kaina
// Sporto klubas siūlo nuolaidas abonementams, priklausomai nuo lankytojo amžiaus ir ar jis studentas.
// Taisyklės:
// Jei lankytojas yra jaunesnis nei 18 metų arba studentas, jis gauna 15% nuolaidą.
// Jei lankytojas vyresnis nei 60 metų, jam taip pat taikoma 15% nuolaida.
// Kitais atvejais nuolaida netaikoma.

let lankytojoAmzius = 69;
let yraStudentas = true;
let nuolaidaAbonementui = 15;

if (lankytojoAmzius <= 18 || yraStudentas) {
  console.log(
    `Lankytojas yra jaunesnis nei 18 metų arba studentas, jis gauna ${nuolaidaAbonementui} % nuolaidą.`
  );
} else if (lankytojoAmzius >= 60) {
  console.log(
    `Lankytojas yra vyresnis nei 60 metų, jis gauna ${nuolaidaAbonementui} % nuolaidą.`
  );
} else {
  console.log('Nuolaida netaikoma');
}

// 5️. Užduotis: Egzamino įvertinimas pagal balą
// Parašykime programą, kuri pagal surinktą balą nustato, kokį įvertinimą gauna mokinys.
// Ši užduotis padės mokiniams suprasti, kaip veikia sąlygos ir diapazonai.
// Taisyklės:
// Jei balas yra nuo 90 iki 100, mokinys gauna įvertinimą „Puikiai“.
// Jei balas yra nuo 75 iki 89, įvertinimas yra „Gerai“.
// Jei balas yra nuo 50 iki 74, įvertinimas yra „Patenkinamai“.
// Jei balas yra mažesnis nei 50, įvertinimas yra „Nepatenkinamai“.

let egzaminoBalas = 49;

if (egzaminoBalas >= 90 && egzaminoBalas <= 100) {
  console.log('Puikiai');
} else if (egzaminoBalas <= 89 && egzaminoBalas >= 75) {
  console.log('Gerai');
} else if (egzaminoBalas <= 74 && egzaminoBalas >= 50) {
  console.log('Patenkinamai');
} else if (egzaminoBalas < 50) {
  console.log('Nepatenkinamai');
}

// 6️. Užduotis: Kino bilietų kainos nustatymas
// Parašykite programą, kuri apskaičiuoja kino bilieto kainą, atsižvelgiant į lankytojo amžių ir seanso laiką.
// Jei lankytojas yra vaikas (mažiau nei 12 metų), bilieto kaina yra 5 eurai.
// Jei lankytojas yra suaugęs ir eina į dienos seansą (iki 17 val.), bilieto kaina yra 7 eurai.
// Jei lankytojas yra suaugęs ir eina į vakarinį seansą (nuo 17 val.), bilieto kaina yra 10 eurų.
// Jei lankytojas yra senjoras (daugiau nei 65 metų), bilieto kaina yra 6 eurai.

let pirkejoAmzius = 65;
let seansoLaikas = 18;

if (pirkejoAmzius <= 12) {
  console.log(`Bilieto kaina vaikams yra 5 EUR`);
} else if (pirkejoAmzius > 12 && seansoLaikas < 17) {
  console.log(
    `Bilieto kaina suaugusiems, einantiems i dienini seansa, yra 7 EUR`
  );
} else if (pirkejoAmzius > 12 && seansoLaikas >= 17) {
  console.log(
    `Bilieto kaina suaugusiems, einantiems i vakarini seansa, yra 10 EUR`
  );
} else pirkejoAmzius >= 65;
console.log(`Bilieto kaina senjorams yra 6 EUR`);

// 7️. Užduotis: Atsiskaitymo su nuolaida sistema
// Sukurkite programą, kuri apskaičiuoja galutinę pirkimo sumą, pritaikant nuolaidas pagal savaitės dieną ir pirkinio sumą.
// Jei krepšelio suma viršija 100 eurų ir šiandien yra trečiadienis, taikoma 15% nuolaida.
// Jei krepšelio suma viršija 50 eurų ir šiandien yra penktadienis, taikoma 10% nuolaida.
// Kitais atvejais nuolaida netaikoma.

let krepselioSuma = 100;
let yraTreciadienis = true;
let yraPenktadienis = false;

let galutineSumaTreciad = krepselioSuma - (krepselioSuma * 15) / 100;
let galutineSumaPenktad = krepselioSuma - (krepselioSuma * 10) / 100;

if (krepselioSuma >= 100 && yraTreciadienis) {
  console.log(
    `Treciadieniais uzsakymai virsijantys 100 EUR moka galutine suma: ${galutineSumaTreciad}`
  );
} else if (krepselioSuma >= 50 && yraPenktadienis) {
  console.log(
    `Penktadieniais uzsakymai virsijantys 50 EUR moka galutine suma: ${galutineSumaPenktad}`
  );
} else {
  console.log('Nuolaida netaikoma.');
}

// 8️. Užduotis: Laikmatis darbo laiko patikrinimui
// Parašykite programą, kuri patikrina, ar įvestas laikas yra darbo laikas.
// Darbo laikas: nuo 9:00 iki 17:00.
// Jei laikas patenka į darbo laiką, programa turi grąžinti pranešimą „Dabar darbo laikas“.
// Jei laikas nepatenka į darbo laiką, programa turi grąžinti pranešimą „Dabar ne darbo laikas“.

let darboLaikas = 18;

if (darboLaikas >= 9 && darboLaikas <= 17) {
  console.log('Dabar darbo laikas');
} else {
  console.log('Dabar ne darbo laikas');
}

// 9️. Užduotis: Mokesčių apskaičiavimas pagal pajamas
// Sukurkite programą, kuri apskaičiuoja mokesčius pagal gyventojo pajamas.
// Jei pajamos yra mažesnės nei 10,000 eurų per metus, mokestis yra 5%.
// Jei pajamos yra tarp 10,000 ir 30,000 eurų, mokestis yra 10%.
// Jei pajamos yra tarp 30,000 ir 60,000 eurų, mokestis yra 15%.
// Jei pajamos yra daugiau nei 60,000 eurų, mokestis yra 20%.

let gyventojoPajamos = 61000;

if (gyventojoPajamos >= 60000) {
  console.log('Pajamu mokestis yra 20%');
} else if (gyventojoPajamos < 60000 && gyventojoPajamos >= 30000) {
  console.log('Pajamu mokestis yra 15%');
} else if (gyventojoPajamos < 30000 && gyventojoPajamos >= 10000) {
  console.log('Pajamu mokestis yra 10%');
} else if (gyventojoPajamos < 10000) {
  console.log('Pajamu mokestis yra 5%');
}

// 10. Užduotis: Bibliotekos knygų skolinimo trukmės patikrinimas
// Parašykite programą, kuri nustato, ar knygos skolinimosi trukmė yra leistina, priklausomai nuo skaitytojo statuso.
// Jei skaitytojas yra studentas, jis gali skolintis knygą 30 dienų.
// Jei skaitytojas yra mokytojas, jis gali skolintis knygą 60 dienų.
// Jei skaitytojas yra bibliotekos narys, bet nei studentas, nei mokytojas, jis gali skolintis knygą 14 dienų.
// Jei skaitytojas nėra bibliotekos narys, jis negali skolintis knygos.

let skaitytojasStudentas = false;
let skaitytojasMokytojas = true;
let yraBibliotekosNarys = false;

if (skaitytojasStudentas) {
  console.log('Skaitytojas yra studentas ir gali skolintis knygą 30 dienų');
} else if (skaitytojasMokytojas) {
  console.log('Skaitytojas yra mokytojas ir gali skolintis knygą 60 dienų');
} else if (yraBibliotekosNarys && !skaitytojasStudentas && !skaitytojasMokytojas) {
    console.log('Skaitytojas yra narys ir gali skolintis knygą 14 dienų');
} else if (!yraBibliotekosNarys) {
  console.log('Skaitytojas negali skolintis knygos');
}
