// ECMA script standartizuoja Js
// Kaip rasysime funkcijas, kintamuosius, kt.

// ES6 standartas (ECMAscript 2015)

// 1. Atsirado kintamieji CONST ir LET, jie pakeite senaji VAR

// pvz 1 - let
if (true) {
  let message = 'sveiki';
  console.log(message);
}

console.log(message); // ReferenceError: message is not defined

// pvz 2 - const
const PI = 3.14159;

PI = 3.14; // TypeError: Assignment to constant variable. - nekintami kintamieji

// 2. Atsirado ARROW funkcijos
// Arrow funkcijos yra trumpesnes ir patogesnes nei senosios funkcijos

// Senoji funkcija
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5

// Naujoji arrow funkcija
// Jei funkcija turi tik viena eilute, galim nerasyti lauztiniu skliaustu ir return
const multiply = (a, b) => a + b; // si funkcija yra neanonimine, nes turi const

console.log(multiply(2, 3)); // 5

// dar paprastesnis funkcijos variantas
const greet = (name) => `Sveiki, ${name}`;

// kitas pvz:
const button = document.getElementById('button');

// Tradicinis budas:
button.addEventListener('click', function () {
  console.log('Paspaudei');
});

// Naujas budas:
button.addEventListener('click', () => {
  console.log('Paspaudei');
});

// 3. Atsirado DESTRUCTING ASSIGNMENTS 
// Destructing assignments leidzia iskart issitraukti kintamuosius is objekto arba masyvo

// Objekto atveju:
const user = {
  name: 'Tomas',
  age: 25,
};

// Senuoju budu:
const oldName = user.name; // Tomas
const oldAge = user.age; // 25

// Nauju budu:
const { name, age } = user;

console.log(name);
console.log(age);

// Masyvo atveju:
const colors = ['red', 'green', 'blue'];
const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor); // istraukia indeksus ir jiems priskiria pavadinimus: red

// 4. Atsirado SPREAD OPERATOR
// ... operatorius leidzia isskaidyti masyvo arba objekto turini, ir leidzia pripildyti naujomis reiksmemis

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5, ...numbers, ...numbers];

// 5. Atsirado DEFAULT PARAMETRAI
// leidzia nurodyti kintamojo reiksme, jei ji nebuvo suteikta

// pvz a)
const pasisveikinimas = (name = 'Vartotojas') => { // jei negaus reiksmes, tai grazins default reiksme: Vartotojau!
    console.log('Sveiki', name);
}

// pvz b)
const calculate = (a = 2, b = 3) => a * b;

console.log(calculate()); // grazins 6
console.log(calculate(3, 4)); // grazins 12

// SVARBU - verta pagalvoti, kada naudoti tokius 'fallbacks', o kada nereikia

// 6. Atsirado BACKTICKS `` (TEMPLATE LITERALS)

// 7. visas sarasas online: ES6 list features


















