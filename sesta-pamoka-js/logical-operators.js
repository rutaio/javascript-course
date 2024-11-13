// Loginiai operatoriai &&, ||, !

// && - "ir" salyga (and and).
// ziuri ar abi salygos yra teisingos.
// false && false = false;
// false & true = false; (nes pirmasis yra false, tada antrojo net neziures!)
// true && false = false; (nes neatitinka antros salygos! abi salygos turi buti teisingos.)
// true && true = true;

// && pvz 1
const arPrisijunges = true;
const naudotojoRole = 'admin';

if (arPrisijunges && naudotojoRole === 'admin') {
  console.log(`Tu prisijunges kaip ${naudotojoRole.toUpperCase()}`);
} else {
  console.log(
    `Tu neprisijunges, nes tavo role yra ${naudotojoRole.toUpperCase()}`
  );
}

// && pvz 2
if (arPrisijunges && naudotojoRole === 'admin') {
  console.log(`Tu prisijunges kaip ${naudotojoRole}`);
} else if (arPrisijunges && naudotojoRole === 'user') {
  console.log('Tu esi useris');
} else if (!arPrisijunges) {
  console.log('Tu neprisijunges. Prisijunk!');
}

// && pvz 3
const a = 4;
const b = 6;

if (a > b && b > 0) {
  console.log('a ir b yra teigiami skaiciai');
} else {
  console.log('a arba b nera teigiamas skaicius');
}

// && pvz 4
let skaicius = 101;

if (skaicius > 0 && skaicius <= 100) {
  console.log('skaicius patenka tarp reziu nuo 0 iki 100');
} else if (skaicius > 0 && skaicius <= 1000) {
  console.log('skaicius patenka tarp 100 ir 1000');
}

// && pvz 5
const x = 1;
const z = 2;

if (x + 1 === 3 && z + 1 === 0) {
  console.log('abu teisingi');
} else {
  console.log('abu neteisingi');
}

// && pvz 6
const arPrisijungusi = true;
const arVipNare = true;

if (arPrisijungusi === arVipNare) {
  console.log('abu teisingi');
} else {
  console.log('abu neteisingi');
}

// || - "arba" salyga, reiskia, kad turi atitikti bent viena salyga.
// false || false = false;
// false || true = true;
// true || true = true;
// true || true = true; (?)

// || pvz 1
const c = 1;
const d = false;

if (c > 1 || d === true) {
  console.log('salyga yra teisinga');
} else {
  console.log('salyga yra neteisinga');
}

// || pvz 2
let balas = 101;

if (balas === 100 || balas === 90 || balas === 80) {
  console.log('Salyga atitinka');
} else {
  console.log('Salyga neatitinka');
}

// || pvz 3
let UserIsLoggedIn = false;
let UserIsAdmin = true;
let age = 21;

if ((UserIsLoggedIn && UserIsAdmin) || age === 21) {
  console.log('Patenki');
} else {
  console.log('Nepatenki');
}

// ! - "ne" salyga, reiskia atvirksciai.
// Leidzia patikrinti ar kazkokia reiksme yra false.
// !true = false;
// !false = true;

// ! pvz1
const isLoggedIn = false;

if (!isLoggedIn) {
  console.log('Tu esi neprisijunges');
} else {
  console.log('Tu esi prisijunges');
}

// pvz su viskuo
const arTuriBilieta = false;
const yraVipNarys = true;

if (arTuriBilieta) {
  console.log('Uzeikite i koncerta!');
} else if (!arTuriBilieta && yraVipNarys) {
  console.log('Tu neturi bilieto, bet esi VIP narys tai uzeik i koncerta!');
} else if (!arTuriBilieta && !yraVipNarys) {
  console.log('Tu neturi nei bilieto nei esi vip narys.');
}

// pvz kitas
let nuolaida = 0;
const arVipas = true;

if (arVipas) {
  nuolaida = 50;
} else { // sios eilutes galima ir nerasyti, nes yra let=0
  nuolaida = 0;
}

console.log(`Zmogus gauna ${nuolaida}% nuolaida`)