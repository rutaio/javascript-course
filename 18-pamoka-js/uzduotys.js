// 13. Susikurkite funkcija, kuri per argumentus primtu Zodziu masyva.
// Funkcijoje isveskite visus zodzius is masvvo atskirose eilutese, nurodant ZodZio ilgi (simboliu kieki).
// Uz funkcijos ribu susikurkite zodziu masyva ir upildykite ji duomenimis.
// Iskvieskite sukurta funkcija perduodant turima masyva

let word = [];

function showWords() {
  console.log(`${word[0]}: ${word[0].length}`);
  console.log(`${word[1]}: ${word[1].length}`);
  console.log(`${word[2]}: ${word[2].length}`);
  console.log(`${word[3]}: ${word[3].length}`);
}

word.push('saule', 'menulis', 'dangus', 'planetos');

showWords();

// kitas b) variantas - geresnis:

const zodziai = ['saule', 'menulis', 'dangus', 'planetos'];

function showZodziai(masyvas) {
  for (let i = 0; i < masyvas.length; i++) {
    let zodis = masyvas[i];
    let zodzioIlgis = zodis.length;

    console.log(`Zodis ${zodis}, ilgis: ${zodzioIlgis}`);
  }
}

showZodziai(zodziai);

// 14. Susikurkite funkcija, kuri per arguments primtu skaiciu masyva.
// Funkcija turetu atspausdinti visus skaicius, salia ju isvedant to skaiciaus kvadrata ir ji padalinta is dvieju.
// Uz funkcijos ribu susikurkite du skaiciu masyvus ir uzpildykite ji duomenimis.
// Iskvieskite funkcija du kartus, kiekviena karta perduodant skirtinga turima masyva.

let masyvas1 = [];
let masyvas2 = [];

function showNumbers(number) {
  console.log(`${number[0]}, ${(number[0] * number[0]) / 2}`);
  console.log(`${number[1]}, ${(number[1] * number[1]) / 2}`);
  console.log(`${number[2]}, ${(number[2] * number[2]) / 2}`);
  console.log(`${number[3]}, ${(number[3] * number[3]) / 2}`);
}

masyvas1.push(1, 5, 88, 90);
masyvas2.push(4, 22, 97, 111);

showNumbers(masyvas1);
showNumbers(masyvas2);

// kitas b) variantas:

function spausdintiSkaicius(skaiciai) {
  for (let i = 0; i < skaiciai.length; i++) {
    let skaicius = skaiciai[i];
    let skaiciausKvadratas = skaicius * skaicius;
    let padalintasSkaicius = skaiciausKvadratas / 2;
    console.log(
      `Skaicius: ${skaicius}, Kvadratas: ${skaiciausKvadratas}, Padalinta: ${padalintasSkaicius} `
    );
  }
}

const masyvas = [1, 5, 88, 90];

spausdintiSkaicius(masyvas);

// 15. Susikurkite funkcija, kuri per argumentus primtu pazymiu masyva, bei studento varda su pavarde.
// Funkcija turetu isvesti studento varda ir pavarde, jo pazymius.
// Taip pat, suskaiciuoti vidurki, bei ji isvesti.
// Uz funkcijos ribu susikurkite reikiamus kintamuosius ir masyvus, arba objektus studentu pazymiams saugoti ir uzpildykite jus duomenimis.
// Iskvieskite sia funkcia perduodant visus reikalingus duomenis.

let studentas = {
  vardas: 'Jonas',
  pavarde: 'Jonaitis',
  pazymiai: [5, 6, 8, 10, 6],
  studentData: function () {
    let suma = +this.pazymiai;
    let pazymiuVidurkis = suma / this.pazymiai.length;

    return `${this.vardas} ${this.pavarde}, pazymiai: ${this.pazymiai} ir vidurkis: ${pazymiuVidurkis}`; // kodel neskaiciuoja vidurkio?
  },
};

console.log(studentas.studentData());

// kitas b) variantas:

function isveskStudentoInformacija(vardas, pavarde, grades) {
  console.log(`Studentas: ${vardas} ${pavarde}`);
  console.log(`Pazymiai: ${grades}`);

  let suma = 0;
  for (let i = 0; i < grades.length; i++) {
    suma += grades[i];
  }

  let vidurkis = suma / grades.length;

  console.log(`Studento pazymiu vidurkis: ${vidurkis}`);
}

let vardas = 'Jonas';
let pavarde = 'Jonaitis';
let grades = [5, 6, 8, 10, 6];

isveskStudentoInformacija(vardas, pavarde, grades);

// 16. Susikurkite funkcija, kuri per argumentus primtu skaiciu masyva.
// Funkcija turetu rasti didziausia skaiciu is masyvo bei isvesti gauta atsakymus.
// Taip pat, susikurkite funkcija, kuri per argumentus primtu masyva ir i ji sugeneruotu pasirinkta kieki atsitiktiniu skaiciu.
// Susikurkite tris tuscius masyvus.
// Iskvieskite atsitiktiniu skaiciu generavimo funkcija tris kartus, kiekviena karta perduodant funkcijai vis kita masyva.
// Kai duomenys bus uzpildyti, masyvuose esanciaa informacija issiveskite norimu büdu (per console.log arba per dar atskira funkcija).
// Tuomet kvieskite didziausio skaiciaus paieskos funkcija tris kartus, kiekviena karta perduodant skirtinga masyva i ja.

function findBiggestNumber(numbers) {
  let biggestNumber = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > biggestNumber) {
      biggestNumber = numbers[i];
    }
  }
  console.log('Didziausias skaicius masyve yra: ', biggestNumber);
}

findBiggestNumber([3, 4, 5]);

function generateRandomNumbers(numbers, amount) {
  for (let i = 0; i < amount; i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    numbers.push(randomNumber);
  }
}

let masyvasRandom1 = [];
let masyvasRandom2 = [];
let masyvasRandom3 = [];

generateRandomNumbers(masyvasRandom1, 10); // 10 pasako kiek skaiciu sugeneruoti
generateRandomNumbers(masyvasRandom2, 15);
generateRandomNumbers(masyvasRandom3, 30);

console.log(masyvasRandom1);
console.log(masyvasRandom2);
console.log(masyvasRandom3);


// SVARBU: kad funkcijos butu dinamiskos (kai ateis daugiau duomenu)! 