// Aritmetika

// Sudetis
const a = 5;
const b = 10;

console.log(a + b);

// Atimtis
const c = 10;
const d = 5;

console.log(c - d);

// Daugyba
const e = 5;
const f = 10;

console.log(e * 7);

// Dalyba
const g = 10;
const h = 5;

console.log(g / h);

// Eiliskumas
console.log(5 + 10 * 2);
console.log((5 + 10) * 2);

// Matematika pirmiausiai vyksta skliaustuose
let i = 5;
let j = 10;

console.log((i + j) * 2);

// Kai stringas, tai tik priglaudzia prie to bloko, nedaro matematikos
console.log('belekas' + i + j);
console.log('belekas' + (i + j));

// Minusas, daugyba, dalyba duoda NaN...
console.log('belekas' - (i + j));
console.log('belekas' * (i + j));
console.log('belekas' / (i + j));

// Kompas netikrina stringo vidaus, todel jei norime, kad graziai matytusi tekstas is stringo vidaus, tai pridedam dvitaski ir tarpa :)
console.log('suma: ' + (i + j));

// Galima rasyti per kableli??
console.log('suma: ', i, j);

// --x, x--, ++x, x++ pakelia arba atima per viena skaiciu
// let k = 5;
// console.log('a' + a); // 5
// console.log('a++: ' + a++); // 5
//console.log('a: ' + ++a); // 7

// pavyzdys
let m = 5;
let n = 2;

console.log(m);
console.log(n);

m += 5 * n; // 15, nes += reiskia, kad jo reiksme ..

console.log(a);

// apie += ...
// let z = 5;
// z = 10;
// console.log(z);
// z += 10; // 5 + 10 = 15
// console.log(z);
