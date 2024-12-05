// 7. Sukurkite funkcija, kuri isvestu 10 atsitiktiniu skaiciu vienoje eiluteje, skaicius atskiriant tarpu.
// Sia funkcija iskvieskite 5 kartus.

function generateRandomNumbers() {
  let num = [];
  for (let i = 0; i < 10; i++) {
    const number = Math.floor(Math.random() * 10);
    num.push(number);
  }
  console.log(num);
}

for (let i = 0; i < 5; i++) {
  generateRandomNumbers();
}

// kitas budas be masyvo:

function sugeneruokSkaiciuEile() {
  let result = '';
  for (let i = 0; i < 10; i++) {
    let skaicius = Math.floor(Math.random() * 100) + 1; // rasom +1, kad generuotu skaicius nuo 1, o ne 0
    let gap = i < 9 ? ' ' : '';
    result += skaicius + gap;
  }
  console.log(result);
}

for (let i = 0; i < 5; i++) {
  sugeneruokSkaiciuEile();
}

// 10. Sukurkite funkcija, kuri isvestu atsitiktini skaiciu.
// Uz funkcijos ribu sukurkite cikla, kuri butu vykdomas 10 kartu.
// Iskvieskite sukurta funkcija cikle.
// Turetumete pamatyti 10 atsitiktiniu skaiciu.

function sukurkAtsitiktiniSkaiciu() {
  let atsitiktinisSkaicius = Math.floor(Math.random() * 10) + 1;
  return atsitiktinisSkaicius;
}

for (let i = 0; i < 10; i++) {
  console.log(sukurkAtsitiktiniSkaiciu());
}

// 9. Sukurkite funkcija pasisveikinimui, siai funkcijai per argumentus perduokite varda, funkcijoje isveskite teksta labas ir gauta varda.
// Sukurkite kita funkcija, kuri irgi per argumentus gautu varda, taciau pasakytu 'viso gero' ir pati varda.
// Ne funkcijose susikurkite kintamaji vardui saugoti ir irasykite varda.
// Iskvieskite abi funkcijas, perduodant kintamaji joms.

function sayHello(vardas) {
  return `Labas, ${vardas}`;
}

function sayBye(vardas) {
  return `Viso gero, ${vardas}`;
}

let vardas = 'Ruta';

console.log(sayHello(vardas));
console.log(sayBye(vardas));

// 10. Sukurkite funkcija, kuriai perduotumete du skaicius.
// Si funkcia turi rasti kuris skaicius yra didesnis ir isvesti gauta atsakyma, o jei skaiciai lygüs - tuomet isvesti, kad skaiciai lygüs.
// Iskvieskite sia funkcija keleta kartu, duodant skirtingus skaicius.

function compareNumbers(a, b) {
  if (a > b) {
    return `Pirmas skaicius ${a} yra didesnis uz antra`;
  } else if (a < b) {
    return `Antras skaicius ${b} yra didesnis uz pirma`;
  } else {
    return `Abu skaiciai yra lygus`;
  }
}

console.log(compareNumbers(5, 9));
console.log(compareNumbers(6, 2));
console.log(compareNumbers(3, 3));

// 11. Sukurkite funkcija, kuri per argumentus gautu automobilio duomenis (marke, modelis, gamybos metai, darbinis turis).
// Si funkcija turetu siuos duomenis isvesti kaip nors graziai formatuotai.
// Iskvieskite sia funkcija du kartus, perduodant skirtingus duomenis jai.

function getCarInfo(marke, modelis, metai, darbinisTuris) {
  return `Pristatome automobili ${marke}, kuris yra ${modelis} modelio, pagamintas ${metai} metais ir yra ${darbinisTuris} darbinio turio`;
}

console.log(getCarInfo('Jeep', 'Kazkoks', 1999, 1));
console.log(getCarInfo('BMW', 'Geriausias', 2009, 0.5));
console.log(getCarInfo('Minicooper', 'Vienetinis', 2020, 2));

// 12. Sukurkite funkcija sumai skaiciuoti, si funkcija per arguments turetu gauti du skaicius, bei isvesti pati veiksma kartu su atsakymu (pvz 7 + 5 = 12).
// Sukurkite tokias pacias funkcijas skirtumui, sandaugai ir dalmeniui rasti.
// Sukurkite dar viena funkcija, kuri sugeneruotu du atsitiktinius skaicius, bei iskviestu kitas 4 funkcijas, perduodant joms sugeneruotus skaicius.
// Sia bendraja funkcija iskvieskite keleta kartu.

// Suma
function calculateSum(x, y) {
  let suma = x + y;
  return `${x} + ${y} = ${suma}`;
}

console.log(calculateSum(2, 5));

// Skirtumas
function calculateSkirtumas(x, y) {
  let skirtumas = x - y;
  return `${x} - ${y} = ${skirtumas}`;
}

console.log(calculateSkirtumas(2, 5));

// Sandauga
function calculateSandauga(x, y) {
  let sandauga = x * y;
  return `${x} * ${y} = ${sandauga}`;
}

console.log(calculateSandauga(2, 5));

// Dalmuo
function calculateDalmuo(x, y) {
  let dalmuo = x / y;
  return `${x} / ${y} = ${dalmuo}`;
}

console.log(calculateDalmuo(2, 5));

// atsitiktiniai skaiciai:
function makeRandomNumber() {
  let atsitiktiniaiSkaiciai = 0;
  for (let i = 0; i < 2; i++) {
    let atsitiktiniaiSkaiciai = Math.floor(Math.random() * 100);
    console.log(atsitiktiniaiSkaiciai);
  }

  return atsitiktiniaiSkaiciai; // KLAUSIMAS - kodel grazina 2 skaicius ir 0?
}

console.log(makeRandomNumber());

// 4 funkcijos pasiima atsitiktinius skaicius:
calculateSum(makeRandomNumber());
calculateSkirtumas(makeRandomNumber());
calculateSandauga(makeRandomNumber());
calculateDalmuo(makeRandomNumber());

// Sia bendraja funkcija iskvieskite keleta kartu:
// hmm? :D

