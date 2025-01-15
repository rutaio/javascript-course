// UZDUOTIS nr.1:
// Sukurkite JS funkcija, kurios parametras yra callback funkcija.
// Jusu funkcija turetu vykdyti callback funkcija po 2s.

// sukuriam funkcija, kuri priima callback funkcija, kaip parametra:
function delayedHello(callback) {
  setTimeout(() => {
    callback();
  }, 2000);
}

// sukuriam callback funkcija:
function sayHello() {
  console.log('Hello!');
}

// iskvieciame delayedHello funkcija
// ir perduodam sayHello funkcija kaip parametra:
// delayedHello(sayHello);

// SVARBU - kai funkcija naudojame kaip argumenta, tai nereikia rasyti skliausteliu:
// pvz delayedHello(sayHello) <-- sayHello yra funkcija, bet ji cia panaudota kaip argumentas, todel nereikia skliausteliu po jos

// UZDUOTIS nr.2:
// Sukurkite JS funkciją, kuri daro HTTP Request užklausą
// ir grąžina pažadą su duomenimis.

// 1 budas:

function requestHttp() {
  // pazadas pazada nueiti duomenu ir gris su atsakymu:
  fetch('./duomenys/data.json')
    // .json() yra metodas kuris pavercia response i json objekta:
    .then((response) => response.json())
    // .then() sekmes atveju grazina data i console:
    .then((json) => console.log(json))
    //  .catch() grazina error:
    .catch((error) => console.log('nepavyko pagauti duomenu...'));
}

requestHttp();

// 2 budas:

async function getHttp() {
  // noriu kad mano konstanta butu lygi fetch funkcijai, kuri grazina duomenis is mano folderio:
  const response = await fetch('./duomenys/data.json');

  // jei ok, grazins duomenis:
  if (response.ok) {
    return response.json();
  }
  // jei ne ok, duos klaida:
  else {
    throw new error('Nepavyko gauti duomenu');
  }
}

// 3 budas:

// funkcija:
const fetchFruits = async () => {
  // daro HTTP request:
  const response = await fetch('./duomenys/data.json');

  if (!response.ok) {
    throw new Error('Klaida, nepavyko gauti duomenu');
  } else {
    // grazina duomenis:
    return await response.json();
  }
};

fetchFruits()
  .then((duomenys) => {
    console.log(duomenys);
  })
  .catch((error) => {
    console.log('Klaida');
  });

// UZDUOTIS nr. 3:
// Sukurti funkciją(1), kuri kaip parametrus priimtų skaičių masyvą ir callback funkciją(2).
// Funkcija(1) turėtų iteruoti per masyvą ir siųsti kiekvieną jos narį callback funkcijai(2).
// Callback funkcijos esmė - patikrinti ar gautas skaičius yra lyginis ar nelyginis
// ir atitinkamą informaciją išvesti į konsolę.
// Funkcija turėtų būti iškviečiama taip (pavadinimai gali būti kitokie):
// pirmojiFunkcija(masyvas, callbackFunkcija)

// [1, 2, 3, 4]
function arLyginiaiSkaiciai(masyvas, callback) {
  // ciklas eis per masyva ir kiekviena karta ides callback:
  for (const item of masyvas) {
    callback(item);
  }
}

// si funkcija tikrina ar skaicius yra lyginis:
function callback(num) {
  // ar skaicius yra lyginis:
  const isEven = num % 2 === 0;

  // tikrinu su ternerio operatoriumi:
  console.log(`${num} yra ${isEven ? 'lyginis' : 'nelyginis'}`);
}

const skaiciuMasyvas = [1, 2, 3, 4, 5, 6, 7, 8];

// issikvieciame funkcija:
arLyginiaiSkaiciai(skaiciuMasyvas, callback);

// UZDUOTIS nr.4:
// Sukurkite funkciją, kuri priima masyvą (kuris užpildytas "string" tipo reikšmėmis(žodžiais)) ir callback funkciją.
// Funkcija turėtų iteruoti per masyvą ir nusiųsti kiekvieną stringą esantį masyve callback funckijai.
// Callback funkcija turi grąžinti atsiųsto "string" ilgį.
// - susikurti funkciją patikrinkZodzioIlgi(masyvas, callbackFunkcija)
// - funkcijos patikrinkZodzioIlgi esmė - panaudoti foreach ir kiekvienam masyvo nariui iškviest funkciją koksIlgis(string)

// 1 budas:

const zodynas = ['saule', 'dangus', 'menulis'];

function patikrinkZodzioIlgi(zodynas, callbackFunkcija) {
  // Funkcija turėtų iteruoti per masyvą ir nusiųsti kiekvieną stringą esantį masyve callback funkcijai:
  for (const zodis of zodynas) {
    callbackFunkcija(zodis);
  }
}

// Callback funkcija turi grąžinti atsiųsto "string" ilgį:
function callbackFunkcija(word) {
  const koksIlgis = `${word} turi: ${word.length} raides`;
  console.log(koksIlgis);
}

patikrinkZodzioIlgi(zodynas, callbackFunkcija);

// 2 budas (pagal lektoriu):

function whatLength(string) {
  return string.length;
}

function checkWordLength(dictionary, callbackFunkcija2) {
  dictionary.forEach((oneWord) => {
    const length = callbackFunkcija2(oneWord);
    console.log(`Zodis: ${oneWord}, ilgis: ${length}`);
  });
}

const dictionary = ['automobilis', 'katinas', 'suo'];
checkWordLength(dictionary, whatLength);

// UZDUOTIS nr.5:
// Sukurkite funkciją, kuri kaip argumentus priima masyvą, sudarytą iš objektų ir callback funkciją.
// Funkcija turėtų iteruoti per masyvą ir nusiųsti kiekvieną ten esantį objektą
// (tarkim tai automobilis, turintis šias properties: rida, markė, modelis, gamybos metai ir kaina (bet galite susikurti ir savo nuožiūra)) callback funkcijai.
// Callback funkcija turėtų grąžinti naują objektą, kuriame būtų tik atrinktos objekto properties, tarkim tik markė ir modelis)

// 2 budas is Artiom:

function filterCarData(cars) {
  return {
    brand: cars.brand,
    model: cars.model,
  };
}

function iteruotiPerObjektus(masyvas, callback) {
  masyvas.forEach(function (objektas) {
    const naujasObjektas = callback(objektas);
    console.log(naujasObjektas);
  });
}

const cars = [
  {
    rida: 120000,
    brand: 'Toyota',
    year: 2015,
    model: 'Corolla',
  },

  {
    rida: 120000,
    brand: 'Toyota2',
    year: 2015,
    model: 'Corolla2',
  },
];

iteruotiPerObjektus(cars, filterCarData);

// UZDUOTIS NR 6:
// Sukurkite funkciją, kuri priims parametrą isUserLogedIn (reikšmė gali būti true
//  arba false). Jūsų funkcijos viduje, naudojantis Promise konstruktoriumi, sukursite
//  naują promise objektą, kuris tikrins ar isUserLogedIn yra true ar false, jeigu
// paduotas parametras ar false, jūsų sukurtas promise turėtų reject’inti užklausą,
// kitu atveju - resolvinam ir grąžinam pasirinktą pranešimą. Iškvieskite tą funkciją
//  naudojantis then ir catch, o gautą rezultatą atvaizduokite konsolėje.

const userStatus = false;

function checkUserLoginStatus(isUserLoggedIn) {
  return new Promise((resolve, reject) => {
    if (isUserLoggedIn) {
      resolve('Naudotojas prisijunges');
    } else {
      reject('Naudotojas prisijunges');
    }
  });
}

checkUserLoginStatus(userStatus) // jei cia bus ideta 1 grazins true, jei 0 grazins false, jei tuscias stringas grazins false, jei tuscias objektas {} grazins true
  .then((message) => {
    console.log('Sekmingai prisijunges:', message);
  })
  .catch((error) => {
    console.log('Klaida:', error);
  });

// UZDUOTIS nr 7:
// Sukurkite async funkciją, kuri priimtų parametrą "age". Funkcijos viduje
// padarykite patikrinimą ar "age" yra paduotas ir ar jis yra skaičius - priešingu
// atveju iškvieskite klaidą (throw). Toliau tikrinkite ar amžius yra daugiau nei 18,
// jeigu taip, grąžinkite, kad “vartotojas gali laikyti vairuotojo egzaminą", priešingu
// atveju iškvieskite klaidą (throw) ir parašykite, kad "jūsų amžius turi būti daugiau
// nei 18". Iškvieskite šią funkciją naudojantis then ir catch.

// async pavercia bet kokia funkcija i promise:
async function checkDriversAge(age) {
  if (age >= 18) {
    // resolve
    return 'Vairuotojas yra pilnametis.';
  } else {
    // reject
    throw new Error('Vairuotojas yra nepilnametis.');
  }
}

checkDriversAge(19)
  .then((message) => {
    console.log('Vairuotojas gali vairuoti:', message);
  })
  .catch((error) => {
    console.log('Vairuotojas negali vairuoti:', error);
  });
