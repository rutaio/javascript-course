// Loops - tai yra cicklai, kai norime funkcija paleist daug kartu.
// Yra keli loops: for, while, do while, for in, for of
// "For" ciklas yra naudojamas, kai yra zinoma, kiek kartu jis bus naudojamas.
// For ciklo sintakse:
// for (kintamasis; salyga; operacija) { kodas }

// ● kintamasis - ciklo darbui reikalingas kintamasis,
// kuris bus sunaikintas ciklui baigus darbą,
// dažniausiai naudojamas norint suvaldyti,
// kiek kartų ciklas turi būti vykdomas.

// ● sąlyga - ciklas bus vykdomas kol sąlyga bus
// teisinga (grąžins true), sąlyga apsirašo tokiu
// pačiu principu kaip apsirašydavo patikrinimo
// sąlygoje if.

// ● operacija - kas bus daroma kiekvienos ciklo
// iteracijos metu, dažniausiai - didinamas kintamasis.

// ● kodas - kodas, kuris bus vykdomas jei sąlyga teisinga.

// pvz

// kintamasis cikluose dazniausiai rasome su i raide.
// dazniausiai kintamaji prilyginam 0

// ++ suveikia tik antra karta;
// 0 isiskaicuoja kaip skaicius
for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  console.log('Skaicius: ' + i);
}

for (let i = 1; i <= 10; i += 2) {
  console.log('Skaicius: ' + i);
}

// Nelyginiai skaiciai
// Si funkcija parodo, kurie skaiciai nuo 1 iki 10 yra nelyginiai:
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log('Nelyginis skaicius: ' + i);
  } else {
    console.log('Lyginis skaicius: ' + i);
  }
}

// Switch'as cikle
for (let i = 1; i <= 5; i++) {
  switch (i) {
    case 1:
      console.log('Vienas');
      break;
    case 2:
      console.log('Du');
      break;
    case 3:
      console.log('Trys');
      break;
    case 4:
      console.log('Keturi');
      break;
    case 5:
      console.log('Penki');
      break;
  }
}
