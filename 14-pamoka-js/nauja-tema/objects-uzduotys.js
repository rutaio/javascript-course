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
// - pavadinimas, autorius, zanras, kaina, puslapiy kiekis, skyriu sarasas (masyvas su pavadinimais), isleidimo metai, ar knyga galima rasti knygynuose. Isveskite siy knygu informacija.
//  Isveskite kuri knyga plonesne (turi maziau puslapiu),
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
  kaina: 10,
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

// kuri knyga plonesne (turi maziau puslapiu)?
if (knygaPirma.puslapiai > knygaAntra.puslapiai) {
  console.log('Pirma knyga yra storesne');
} else if (knygaAntra.puslapiai > knygaPirma.puslapiai) {
  console.log('Antra knyga yra storesne');
}

// kurioje knygoje yra daugiau skyriu?
if (knygaPirma.skyriai.length > knygaAntra.skyriai.length) {
  console.log('Pirma knyga turi daugiau skyriu');
} else if (knygaAntra.skyriai.length > knygaPirma.skyriai.length) {
  console.log('Antra knyga turi daugiau skyriu');
}

// jeigu pigesnes knygos kaina padvigintumete, ar ji jau butu brangesne uz kita knyga?
if (knygaPirma.kaina < knygaAntra.kaina) {
  console.log(`Pirmos knygos kaina lygi antrai: ${knygaPirma.kaina * 2} EUR`);
} else if (knygaAntra.kaina < knygaPirma.kaina) {
  console.log(`Antros knygos kaina lygi pirmai: ${knygaAntra.kaina * 2} EUR`);
} else knygaAntra.kaina === knygaPirma.kaina;
console.log('Kainos lygios');
