//  6. Susikurkite masyva studiju programu pavadinimams saugoti.
// Uzpildykite si masyva duomenimis.
// Isveskite kiekviena studiju programa atskiroje eiluteje.

let studijuProgramos = ['Biologija', 'Fizika', 'Matematika', 'Anglu Kalba'];

for (let i = 0; i < studijuProgramos.length; i++) {
  console.log(studijuProgramos[i]);
}

// 7. Susikurkite masyva saliu pavadinimams saugoti ir ji uzpildykite duomenimis.
// Isveskite saliu pavadinimus atskirose eilutese, su prierasu "Salis" ir tada nurodant Sali is masyvo.

let salys = ['Latvija', 'Airija', 'Ispanija', 'Japonija', 'Prancuzija'];

for (let i = 0; i < salys.length; i++) {
  console.log(`Šalis: ${salys[i]}`);
}

// 8. Susikurkite masyva igyvendintu projektu pavadinimams saugoti.
// Uzpildykite si masyva duomenimis.
// Isveskite kiekviena projekta atskirose eilutèse,
// pries kiekviena projekta parasant kelintas tai projektas yra (pradedant 1-U).

let igyvendintiProjektai = ['CRweb', 'RPweb', 'DHweb', 'TLweb', 'ASweb'];

for (let i = 0; i < igyvendintiProjektai.length; i++) {
  console.log(`${i + 1}-asis projektas: ${igyvendintiProjektai[i]}`);
}

// 9. Susikurkite skaiciu masyva ir uzpildykite duomenimis.
// Is masyvo isveskite tik tuos skaicius, kurie yra didesni nei 5.
// 9.a) variantas

let masyvas = [4, 4, 2, 9, 90, 3];

for (let i = 0; i < masyvas.length; i++) {
  // issivedu visus skaicius
  if (masyvas[i] >= 5) {
    // ziuriu kurie skaiciai yra didesni nei 5
    console.log(masyvas[i]);
  }
}

// 9.b)variantas

const masyvasB = [4, 4, 2, 9, 90, 3];
const skaiciaiDidesniUz5 = [];

for (let i = 0; i < masyvasB.length; i++) {
  if (masyvasB[i] >= 5) {
    skaiciaiDidesniUz5.push(masyvasB[i]);
  }
}

console.log(skaiciaiDidesniUz5);

// 9.c)variantas

const masyvasC = [4, 4, 2, 9, 90, 3];
const skaiciaiDidesniUz5C = [];

for (let i = 0; i < masyvasC.length; i++) {
  const skaicius = masyvasC[i];
  if (skaicius >= 5) {
    skaiciaiDidesniUz5C.push(skaicius);
  }
}

console.log(skaiciaiDidesniUz5C);

// 10. Susikurkite skaiciu masyva ir uzpildykite ji atsitiktiniais skaiciais.
// Raskite visu skaiciu, kurie dalinasi is 4 suma.

// mano bandymas A:
let list = []; // 1) pasidarau masyva

let sum = 0; // 2) pasirasau, kad ieskosiu sumos is isfiltruotu skaiciu

for (let i = 0; i < 10; i++) { // 3) darau uzduoti
  let number = Math.floor(Math.random() * 100) + 1; // prisigaminu skaiciu
  list.push(number); // juos idedu i masyva
  {
    if (list[i] % 4 === 0) { // filtruoju, kurie skaiciai dalinasi is 4
      console.log(list[i]); // o kam sitas?
      sum += number; // butent tuos skaicius pridedu i suma
    }
  }
}

console.log('Mano A variantas:', sum);

// antras bandymas B:
let sarasas = [
  // 1)pasirasau funkcija, kad sugeneruotu atsitiktiniu skaiciu:
  Math.floor(Math.random() * 100) + 1,
  Math.floor(Math.random() * 100) + 1,
  Math.floor(Math.random() * 100) + 1,
  Math.floor(Math.random() * 100) + 1,
];

let suma = 0; // 2)pasirasau, kokio kintamojo ieskosiu

for (let i = 0; i < sarasas.length; i++) { // 3)filtruoju, kurie skaiciai dalinasi is 4 ir skaiciuoju ju suma
  if (sarasas[i] % 4 === 0) {
    suma += sarasas[i];
  }
}

console.log('Mano B variantas:', suma); // 4)issiloginu tu isfiltruoju skaiciu suma

// 10. c) mokytojo variantas - du ciklai aiskiau, nei vienas
const skaiciuMasyvas2 = [];
const limitas = 10;
let sumaIs4 = 0;

for (let i = 0; i < limitas; i++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    skaiciuMasyvas2.push(randomNumber);
}

for (let i = 0; i < skaiciuMasyvas2.length; i++) {
    const skaicius = skaiciuMasyvas2[i];

    if (skaicius % 4 === 0) {
        console.log(skaicius);
        sumaIs4 += skaicius;
    }
}

console.log('C variantas', sumaIs4);

// 11. Susikurkite pazymiu masyva ir uzpildykite ji atsitiktiniais pazymiais.
// Raskite siu pazymiu vidurki.
// Isveskite sugeneruotus duomenis ir gauta vidurki.

let pazymiai = [
  Math.floor(Math.random() * 100) + 1,
  Math.floor(Math.random() * 100) + 1,
  Math.floor(Math.random() * 100) + 1,
  Math.floor(Math.random() * 100) + 1,
];

let pazymiuSuma = pazymiai[0] + pazymiai[1] + pazymiai[2] + pazymiai[3];
console.log(pazymiuSuma);

let pazymiuVidurkis = pazymiuSuma / pazymiai.length;
console.log(pazymiuVidurkis);

// 11.b) mokytojo varianta

const pazymiaiB = [];
let sumaPazymiu = 0;

for (let i = 0; i < 5; i++) {
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    pazymiaiB.push(randomNumber);
}

for (let i = 0; i < pazymiai.length; i++) {
    sumaPazymiu += pazymiaiB[i];
}

let vidurkisB = sumaPazymiu / pazymiaiB.length;

console.log('Pazymiai B variantas', pazymiaiB);
console.log('Suma B variantas', sumaPazymiu);
console.log('Vidurkis B variantas', vidurkisB);


// 12. Susikurkite pazymiu masyva ir uzpildykite ji atsitiktiniais pazymiais.
// Raskite siu pazymiu vidurki.
// Isveskite visus skaicius, kurie yra didesni nei vidurkis.

let grades = []; // pildau masyva pazymiais:

for (let i = 1; i <= 10; i++) { // rasom 10, nes norim sugeneruoti tiek skaiciu; ciklas suksis tol kol salyga atitiks
  let atsitiktinisPazymys = Math.floor(Math.random() * 10) + 1; // sugeneruoja skaiciu
  grades.push(atsitiktinisPazymys); // ipushina skaiciu i masyva
}

console.log('Pazymiai: ', grades);

let gradesSum = // skaiciuoju atrastu pazymiu suma
  grades[0] +
  grades[1] +
  grades[2] +
  grades[3] +
  grades[4] +
  grades[5] +
  grades[6] +
  grades[7] +
  grades[8] +
  grades[9];
console.log('Pazymiu suma:', gradesSum);

let gradesAverage = gradesSum / grades.length; // skaiciuoju pazymiu vidurki
console.log('Vidurkis: ', gradesAverage);

for (let i = 1; i <= 10; i++) { // ieskau pazymiu, didesniu nei vidurkis
  if (grades[i] > gradesAverage) {
    console.log(`Pazymiai didesni nei vidurkis yra sie: ${grades[i]}`);
  }
}

