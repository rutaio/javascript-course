// Arrays with Loops
// Masyvai su Ciklais

// pvz 1

const masyvas = [90, 30, 20, 30, 50, 60];

for (let i = 0; i < masyvas.length; i++) {
  // islogins visus narius!
  console.log(masyvas[i]);
}

// pvz 2

let automobiliai = ['Bmw', 'Audi', 'Opel'];

console.log(automobiliai[0]);
console.log(automobiliai[1]);
console.log(automobiliai[2]);

for (let i = 0; i < automobiliai.length; i++) {
  console.log(automobiliai[i]);
}

// pvz 3

let miestai = ['Vilnius', 'Kaunas', 'Klaipeda', 'Siauliai'];

for (let i = 0; i < miestai.length; i++) {
  console.log(i + 1 + '-asis miestas ' + miestai[i]);
}

// pvz 4

let skaiciai = [];

for (let i = 0; i < 10; i++) { // i < 10 reiskia kad sukame cikla 10 kartu
  let atsitiktinisSkaicius = Math.floor(Math.random() * 100) + 1; // Math Floor suapvalina
  // kadangi kintamasis yra cikle, todel atsiranda tiek atsitiktiniu skaiciu, kiek kartu yra paleidziamas ciklas 
  skaiciai.push(atsitiktinisSkaicius);
}

console.log(skaiciai);

// pvz 5: lyginiu skaiciu ir nelyginiu skaiciu suma
// tai yra mazas algoritmas

let numbers = [9, 9, 6, 3, 5, 2];

let lyginiuSkaiciuSuma = 0;
let nelyginiuSkaiciuSuma = 0; // dar nezinom

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    lyginiuSkaiciuSuma += numbers[i]; // jei salyga atitinka, pridek ta skaiciu ir padaryk suma
  } else {
    nelyginiuSkaiciuSuma += numbers[i];
  }
}

console.log('Visi skaiciai', numbers); // visu skaiciu suma
console.log('Lyginiu skaiciu suma', lyginiuSkaiciuSuma); // lyginiu skaiciu suma
console.log('Nelyginiu skaiciu suma', nelyginiuSkaiciuSuma); // nelyginiu skaiciu suma