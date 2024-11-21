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

// NETEISINGAI
// 9. Susikurkite skaiciu masyva ir uzpildykite duomenimis.
// Is masyvo isveskite tik tuos skaicius, kurie yra didesni nei 5.

let masyvas = [4, 4, 2, 9, 90, 3];

let x = 0;

for (let i = 0; i < masyvas.length; i++) {
  // issivedu visus skaicius
  if (masyvas[i] > 5) {
    // ziuriu kurie skaiciai yra didesni nei 5
    x++; // o kam sis?
  }
}

console.log('9 uzduoties atsakymas:', x); // neteisingas atsakymas..

// 10. Susikurkite skaiciu masyva ir uzpildykite ji atsitiktiniais skaiciais.
// Raskite visu skaiciu, kurie dalinasi is 4 suma.

// mano bandymas A:
let list = []; // 1) pasidarau masyva

let sum = 0; // 2) pasirasau, kad ieskosiu sumos is isfiltruotu skaiciu

for (let i = 0; i < 10; i++) { // 3) darau uzduoti
  let number = Math.floor(Math.random() * 100) + 1; // prisigaminu skaiciu
  list.push(number); // juos idedu i masyva
  {
    if (i % 4 === 0) { // filtruoju, kurie skaiciai dalinasi is 4
      console.log(list[i]); // o kam sitas?
      sum += number; // butent tuos skaicius pridedu i suma
    }
  }
}

console.log('Mano A variantas:', sum);

// antras bandymas B:
let sarasas = [ // 1)pasirasau funkcija, kad sugeneruotu atsitiktiniu skaiciu:
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

// 12. Susikurkite pazymiu masyva ir uzpildykite ji atsitiktiniais pazymiais.
// Raskite siu pazymiu vidurki.
// Isveskite visus skaicius, kurie yra didesni nei vidurkis.

let grades = []; // pildau masyva pazymiais:

for (let i = 1; i <= 10; i++) {   // rasom 10, nes norim sugeneruoti tiek skaiciu; ciklas suksis tol kol salyga atitiks
  let atsitiktinisPazymys = Math.floor(Math.random() * 10) + 1; // sugeneruoja skaiciu
  grades.push(atsitiktinisPazymys); // ipushina skaiciu i masyva
}

console.log(grades);

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
console.log(gradesSum);

let gradesAverage = gradesSum / grades.length; // skaiciuoju pazymiu vidurki
console.log(gradesAverage);

for (let i = 1; i <= 10; i++) { // ieskau pazymiu, didesniu nei vidurkis
  if (grades[i] > gradesAverage) {
    console.log(`Pazymiai didesni nei vidurkis yra sie: ${grades[i]}`);
  }
}
