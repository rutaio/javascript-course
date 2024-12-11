// 23. Susikurkite funkcija kuri primtu skaiciu masyva per argumentus.
// Si funkcija turetu rasti duotuju skaiciu suma ir grazinti gauta atsakyma.
// Uz funkcijos ribu susikurkite du skaiciu masyvus ir uzpildykite juos duomenimis.
// Iskvieskite turima funkcija du kartus, jai abu kartus perduodant skirtinga masyva.
// Gautus atsakymus isveskite.
// Taip pat, raskite kuri suma gavosi didesne ir isveskite atsakyma.

function calculateSum(masyvas) {
  let sum = 0; // suma, kuri taps skaiciumi, kai baigs skaiciuoti

  for (let i = 0; i < masyvas.length; i++) { // skaiciuoju suma tiek karty kiek yra masyve nariu
    sum += masyvas[i];
  }

  return sum; // nurodo ka funkcija turi grazinti; return naudojame tada kai mums reikes jo grazintos reiksmes veliau skaiciavimams...
}

let masyvas1 = [4, 8, 9, 3, 5];
let masyvas2 = [44, 88, 99, 33, 55];

// situ galima cia nerasyti sitoje uzduotyje, nes veliau dar skaiciuojame:
console.log(calculateSum(masyvas1)); // cia grazins suma, nes pries tai return nurodeme kad grazintu suma
console.log(calculateSum(masyvas2)); // cia skliaustuose paduodame kad masyvo duomenis idetu i funkcija

const suma1 = calculateSum(masyvas1);
const suma2 = calculateSum(masyvas2);

if (suma1 > suma2) {
  console.log(`pirma suma didesne: ${suma1}`);
} else if (suma2 > suma1) {
  console.log(`antra suma didesne: ${suma2}`);
} else {
  console.log('suma yra lygi');
}

// 24. Susikurkite funkcija kuri per argumentus primtu zodziu masyva.
// Ji turetu rasti ir grazinti ilgiausia zodi masyve.
// Uz funkcijos ribu susikurkite zodziu masyva.
// Iskvieskite funkcija perduodant jai zodziu masyva.
// Gauta atsakyma isveskite, taip pat, nurodykite sio zodzio ilgi.

function findLongestWord(zodziai) {
  let ilgiausiasZodis = zodziai[0]; // ieskosime ilgiausio zodzio, todel susikuriame kintamaji ir ji prilyginam kazkokiam pirminiam zodziui is masyvo

  for (let i = 1; i < zodziai.length; i++) { // suksiu cikla nuo 1, nes mes pries tai prilyginome savo ilgiausia ieskoma zodi pirmajam masyvo zodziui
    if (zodziai[i].length >= ilgiausiasZodis.length) {  // nurodau masyvo ilgi ir tikrinu ar dabartinio zodzio ilgis yra ilgesnis uz ilgiausia zodi, kuri pazymejau kaip nulinta
      ilgiausiasZodis = zodziai[i]; // kodel cia eiliskumas svarbu? todel kad rasome pirma tai, ko ieskome!
    }
  }

  return ilgiausiasZodis;
}

let augalai = ['palme', 'azuolas', 'egle']; // jei yra keli zodziai vienodo ilgio, tai ims paskutini zodi
const ilgiausiasZodis = findLongestWord(augalai);

console.log(ilgiausiasZodis);

// 25. Susikurkite funkcija kuri per argumentus primtu pazymiu masyva.
// Ji turetu patikrinti ar visi pazymiai teigiami: jei visi teigiami turetu grazintu true kaip atsakyma, o jei yra bent vienas neigiamas - false.
// Susikurkite du pazymiu masyvus.
// Iskvieskite sia funkcija du kartus, abu kartus perduodant skirtingus masyvus.
// Gautus atsakymus paverskite i teksta (jeigu gavote true - isveskite teksta 'visi studento pazymiai teigiami', jei false - 'studentas turi bent viena neigiama pazymi').
// Siam iskonvertavimui is true/false i teksta galite pameginti pasikurti atskira funkcija, jai perduoti kitos funkcijos atsakyma.

// PIRMA UZDUOTIES DALIS:
function isAnyGradeNegative(grades) {
  for (const anyGrade of grades) { // ieskau kiekvieno nario reiksmes
    if (anyGrade < 5) {  // tikrina, ar bent vienas pazymys esantis masyve yra neigiamas
      return false;
    } else {
      return true;
    }
  }
}

// ANTRA UZDUOTIES DALIS:
// sukuriu nauja funkcija, kad konvertuociau atsakymus i teksta:
function convertToText(result) {
  if (result) {
    return 'visi studento pazymiai teigiami';
  } else {
    return 'studentas turi bent viena neigiama pazymi';
  }
}

const grades1 = [4, 10, 7, 8, 6];
const result1 = isAnyGradeNegative(grades1);
console.log(convertToText(result1));

const grades2 = [6, 8, 10, 6, 7];
const result2 = isAnyGradeNegative(grades2);
console.log(convertToText(result2));


// KITAS B) VARIANTAS:

function arVisiPazymiaiYraTeigiami(pazymiai) {
  for (let i = 0; i < pazymiai.length; i++) {
    if (pazymiai[i] < 5) {
      return false;
    } else {
      return true;
    }
  }
}

function konvertuokITeksta(rezultatas) {
  // return rezultatas // ternerio operatorius
  //  ? 'Visi studento pazymiai teigiami'
  //  : 'Studentas turi bent viena neigiama pazymi';
  if (rezultatas) { // automatiskai atitinka TRUE
    return 'Visi studento pazymiai teigiami';
  } else {
    return 'Studentas turi bent viena neigiama pazymi';
  }
}

const pazymiai1 = [6, 7, 8, 9, 10];
const pazymiai2 = [10, 4, 9, 8, 7];

const rezultatas1 = arVisiPazymiaiYraTeigiami(pazymiai1);
console.log(konvertuokITeksta(rezultatas1));

const rezultatas2 = arVisiPazymiaiYraTeigiami(pazymiai2);
console.log(konvertuokITeksta(rezultatas2));
