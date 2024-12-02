// 1. Sukurkite objekta studento duomenims saugoti.
// I si objekta sudekite tokias savybes su reiksmemis: vardas, pavarde, amzius, studiju programa, atsiskaitytu kreditu skaicius, pazymiai, amzius, ugis, kelintame kurse mokosi, kurioje mokykloje mokosi.
// Siuos duomenis galite grupuoti i vidinius objektus arba visus israsyti atskirai.
// Isveskite sia informacija per viena console. log () .
// Taip pat, pameginkite isvesti atskirose eilutese tris skirtingas pasirinktas savybes.

let studentas = {
  vardas: 'Jonas',
  pavarde: 'Jonaitis',
  amzius: 20,
  studijuPrograma: 'vadyba',
  atsiskaitytiKreditai: ['matematika', 'ekonomika', 'etika'],
  pazymiai: {
    matematika: 6,
    kalba: 7,
  },
  ugis: 175,
  kursas: 2,
  mokykla: 'VU',
};

console.log(studentas);
console.log(studentas.ugis);
console.log(studentas.atsiskaitytiKreditai[2]); // grazina objekto masyvo trecia nari
console.log(studentas.pazymiai.kalba); // grazina objekto objekto antra nari

// pvz 2

const currentYear = new Date(Date.now()).getFullYear();

console.log(currentYear);

// 2. Sukurkite objekta informacijai apie filma saugoti.
// I si objekta sudekite tokias savybes su reiksmemis:
// - pavadinimas, rezisierius, biudzetas, kiek uzdirbo pinigu po isleidimo, zanras, trukme, isleidimo metai, aktoriu sarasas (masyvas su ju vardais ir pavardemis).
// Isveskite sio objekto informacija.
// Paskaiciuokite ir isveskite sio filmo pelna (uzdarbis - biudzetas).
// Isveskite kiek filme dalyvavo aktoriu (ju kiekis).
// Paskaiciuokite kiek filmui yra metu (dabartinius metus tiesiog galite irasyti rankomis, arba panaudoti new Date (Date.now () ) . getFullYear () funkcija).

let filmas = {
  pavadinimas: 'GOT',
  rezisierius: 'Name Surname',
  biudzetas: 300000000,
  uzdarbis: 10000000000,
  zanras: 'fiction',
  trukme: '1.5 hours',
  isleidimoMetai: 2012,
  aktoriai: ['Vienas Aktorius', 'Kitas Aktorius', 'Dar Kitas Aktorius'],
};

console.log(filmas); // info

console.log(filmas.uzdarbis - filmas.biudzetas);

console.log(filmas.aktoriai.length); //  kiek filme dalyvavo aktoriu (ju kiekis)

console.log(new Date(Date.now()).getFullYear() - filmas.isleidimoMetai); // kiek filmui yra metu

// 3. Sukurkite du objektus dvieju knygu informacijai saugoti.
// Kiekviename objekte nurodykite tokias savybes su reiksmemis:
// - pavadinimas, autorius, zanras, kaina, puslapiy kiekis, skyriu sarasas (masyvas su pavadinimais), isleidimo metai, ar knyga galima rasti knygynuose.
// Isveskite siu knygu informacija.
// Isveskite kuri knyga plonesne (turi maziau puslapiu),
// bei kurioje knygoje yra daugiau skyriu.
// Paskaiciuokite, jeigu pigesnes knygos kaina padvigintumete, ar ji jau butu brangesne uz kita knyga?

let knygaPirma = {
  pavadinimas: 'Didingoji Istorija',
  autorius: 'Vardenis',
  zanras: 'drama',
  kaina: 20,
  puslapiai: 400,
  skyriai: ['Pirmas skyrius', 'Antras skyrius', 'Trecias skyrius'],
  isleidimoMetai: 1990,
  yraKnygynuose: true,
};

let knygaAntra = {
  pavadinimas: 'Kazkokia Istorija',
  autorius: 'Vardenis',
  zanras: ['fantatika', 'nuotykiai'],
  kaina: 15,
  puslapiai: 600,
  skyriai: [
    'Pirmasis skyrius',
    'Antrasis skyrius',
    'Treciasis skyrius',
    'Ketvirtasis skyrius',
  ],
  isleidimoMetai: 2020,
  yraKnygynuose: false,
};

// isveskite info
console.log('Pirma knyga:', knygaPirma);
console.log('Antra knyga:', knygaAntra);

// kuri knyga plonesne (turi maziau puslapiu)?
if (knygaPirma.puslapiai > knygaAntra.puslapiai) {
  console.log('Pirma knyga yra storesne');
} else if (knygaPirma.puslapiai < knygaAntra.puslapiai) {
  console.log('Antra knyga yra storesne');
} else {
  console.log('Abi knygos turi vienoda puslapiu kieki');
}

// kurioje knygoje yra daugiau skyriu?
if (knygaPirma.skyriai.length > knygaAntra.skyriai.length) {
  console.log('Pirma knyga turi daugiau skyriu');
} else if (knygaPirma.skyriai.length < knygaAntra.skyriai.length) {
  console.log('Antra knyga turi daugiau skyriu');
} else {
  console.log('Abi knygos turi vienoda skyriu kieki');
}

// jeigu pigesnes knygos kaina padvigintumete, ar ji jau butu brangesne uz kita knyga?

const pigesneKnyga = knygaPirma.kaina < knygaAntra.kaina ? knygaPirma : knygaAntra; // jei pirmos knygos kaina yra mazesne uz antra, tada prilygint pirmos knygos kaina antrai..
const brangesneKnyga = knygaPirma.kaina > knygaAntra.kaina ? knygaPirma : knygaAntra;

const dvigubaKaina = pigesneKnyga.price * 2;

if (dvigubaKaina > brangesneKnyga.price) {
  console.log(`"${pigesneKnyga.pavadinimas}"`);
} else {
  console.log(
    `Net padvigubinus kaina, visvien "${brangesneKnyga.pavadinimas}" yra brangesne`
  );
}

// kitas budas:
let pigi = null;
let brangi = null;

if (knygaPirma.kaina < knygaAntra.kaina) {
  pigi = knygaPirma;
  brangi = knygaAntra;
} else {
  pigi = knygaAntra;
  brangi = knygaPirma;
}

