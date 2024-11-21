// 1.8 Raskite visu skaiciu nuo 1 iki 100 suma.
let suma = 0;

for (let i = 1; i <= 100; i++) {
  suma += i;
}

console.log(suma); // 5050

// 1.9. Raskite visu lyginiu skaiciu nuo 20 iki 50 suma.
let lyginiuSuma = 0;

for (let i = 20; i <= 50; i += 2) {
  lyginiuSuma += i;
}

console.log(lyginiuSuma); // 560

// 1.10. Raskite visu nelyginiu skaiciu nuo 30 iki 60 suma.
let nelyginiuSuma = 0;

for (let i = 30; i < 60; i++) {
  if (i % 2 !== 0) {
    nelyginiuSuma += i;
  }
}

console.log(nelyginiuSuma); // 675

// 1.11. Rasti visu skaiciu, zemesniu uz 1000 ir kurie dalinasi is 3 arba 5, suma.
let sum = 0;

for (let i = 0; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i; // <-- cia rasome formule, tuo atveju, kai norime tik paskaiciuoti, o console log parodyti tik viena skaiciu atskirai
  }
}

console.log(sum); // 233168 <-- console log rasome atskirai, kai norime pamatyt tik viena skaiciu

// pvz: Visi skaiciai mazesni uz 10 ir kurie dalinasi is 3 arba 5 yra: 3, 5, 6, 9.
// Siu skaiciu suma yra 23.
let result = 0;

for (let i = 1; i < 10; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    result += i;
  }
}

console.log(result); // 23

// 1.12. The "Fizz-Buzz test" is an interview question designed to help filter out the 99.5% of programming job candidates,
// who can't seem to program their way out of a wet paper bag.
// The text of the programming assignment is as follows:
// "Write a program that prints the numbers from 1 to 100.
// But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz"."
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

//1.13. (sunkesne) Parasyti for cikla, kuris isvestu norima kieki fibonaciaus skaiciu i ekrana.
// Fibonaciaus sekoje kiekvienas skaicius yra lygus pries ji ejusiu dvieju skaiciu sumai: 1, 1, 2, 3, 5, 8, 13, 21...
// 1). Susikurkite tris sveikuju skaiciu kintamuosius, kurie jums pades tai pasiekti.
// 1). Pirmi du kintamieji saugos paskutinius du skaicius.
// 2). Treciasis bus siu pirmu dvieju skaiciu suma.
// 3). Pirmus du skaicius isveskite ne cikle, o pries ji
// ir cikla pradekite vykdyti nuo 2, o ne nuo 0.
// 4). Kiekvieno ciklo metu turite perskaiciuot treciaji skaiciu (pirmu dvieju skaiciu sudetis),
// tuomet pirmasis skaicius yra lygus antram, o antrasis lygus treciam, isvesti i ekrana trecia skaiciu.
let a = 1;
let b = 1;

let sumaF = 0;

for (let i = 2; i <= 10; i++) {
  sumaF = a + b;
  a = b;
  b = sumaF;

  console.log(sumaF);
}
