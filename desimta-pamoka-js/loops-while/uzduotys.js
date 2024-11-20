// 1.Isveskite visus skaicius nuo 1 iki 20.

let num = 1;

while (num <= 20) {
  console.log(num);
  num++;
}

// 2. Isveskite visus skaicius nuo 1 iki 50.
// Prie kiekvieno lyginio skaiciaus parasykite Zodi „lyginis",
// o prie kiekvieno nelyginio - „nelyginis".

let number = 1;

while (number <= 50) {
  if (number % 2 === 0) {
    console.log('lyginis skaicius: ' + number);
  } else {
    console.log('nelyginis skaicius: ' + number);
  }
  number++;
}

// 3. Isveskite visus skaidius nuo 25 iki 50.
// Vietoj skaiciu, kurie dalinasi is 3 isveskite teksta „skaicius {skaicius} dalinasi is 3".

let skaicius = 25;

while (skaicius <= 50) {
  if (skaicius % 3 === 0) {
    console.log(`skaicius ${skaicius} dalinasi is 3`);
  }
  skaicius++;
}

// 4. Isvedinekite visus skaidius nuo 1 iki tol,
// kol pasitaikys skaicius, kuris dalinasi is 3 ir is 5.

let x = 1;

while (true) {
  if (x % 5 === 0 && x % 3 === 0) {
    break; // pasako ciklui, kad jis sustotu
  }
  x++;
}

console.log(x);

// 5. Is skaiciu nuo 1 iki 100, raskite visu lyginiu skaiciu suma.

let i = 1;
let suma = 0;

while (i <= 100) {
  if (i % 2 === 0) {
    suma = suma + i; // galima rasyti suma += i;
  }
  i++;
}

console.log('suma:', suma);

// 6. Zemiau parodyta pavyzdi pakeiskite taip,
// kad toje pacioje eiluteje isvestu ne tik skaiciu,
// bet ir jo kvadrata:
// let skaicius = 1;
// while (skaicius < 5) f
// console.log (skaicius);
// skaicius++;
// }

let sk = 1;

while (sk < 5) {
  console.log('sk: ' + sk * sk);
  sk++;
}

// 7. Isveskite atsitiktini kieki atsitiktiniu skaiciu.

let kiekis = Math.floor(Math.random() * 10) + 1; // taip bus sugeneruotas atsitiktinis skaicius
// math floor suapvalina iki artimiausio skaiciaus
// math random duoda atsitiktini skaiciu
// + 1 duoda, kad nebutu 0

while (kiekis > 0) {
  let skaicius1 = Math.floor(Math.random() * 100);
  console.log(skaicius1);
  kiekis--; // sustabdo cikla, kai salyga nustoja galioti
}

// 8. Isveskite atsitiktini kieki atsitiktiniu skaiciu.
// Raskite siu skaiciu suma.

let kiekis8 = Math.floor(Math.random() * 10) + 1;
let suma8 = 0;

while (kiekis8 > 0) {
  let skaicius8 = Math.floor(Math.random() * 100);
  suma8 += skaicius8;
  kiekis8--;
}

console.log(suma8);

// apie ciklus:
// for - kai zinom kiek kartu
// while - kai kazkas atsitiks