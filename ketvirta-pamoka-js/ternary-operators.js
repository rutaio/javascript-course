// Ternary operators
// salyga ? true : false
// Su sita salyga galima patikrinti tik 1 salyga...
// Tinka tais atvejais, kai reikia greitai uzrasyt

let amzius = 18;
let amziausStatusas = amzius >= 18 ? 'adult' : 'child';

console.log(amziausStatusas); // adult

// Galima ta pati aprasyti ir su IF:
// Su sita salyga galima patikrinti DAUG salygu...
let age = 18;
let ageStatus = null;

if (age >= 18) {
  ageStatus = 'adult';
} else if (age < 18) {
  ageStatus = 'teenager';
} else {
  ageStatus = 'child';
}

console.log(ageStatus); // adult
