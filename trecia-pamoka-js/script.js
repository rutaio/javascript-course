// 1. Uždavinys: Skaičių suma
// Sukurk tris kintamuosius su skaičiaus tipo reikšmėmis. Apskaičiuok jų sumą ir priskirk ją naujam kintamajam. Atspausdink rezultatą.

let a = 5;
let b = 10;
let c = 15;

let suma = a + b + c;

console.log(suma);

// 2. Uždavinys: Stačiakampio plotas
// Sukurk du kintamuosius - ilgis ir plotis, priskirk jiems bet kokias reikšmes ir apskaičiuok stačiakampio plotą.

ilgis = 100;
plotis = 300;

let staciakampioPlotas = ilgis * plotis;

console.log(staciakampioPlotas);

// 3. Uždavinys: Kvadrato plotas
// Sukurk kintamąjį ir priskirk jam bet kokį skaičių. Apskaičiuok kvadrato plotą ir jį atspausdink.

d = 6;

let kvadratoPlotas = d * d;

console.log(kvadratoPlotas);

// 4. Uždavinys: Vardo pasisveikinimas
// Sukurk kintamąjį vardas ir priskirk jam kokį nors vardą. Programa turi pasisveikinti su tuo vardu. Pvz.: “Labas, Vardeni”.

vardas = 'Jone';

let vardoPasisveikinimas = '"Labas, ' + vardas + '"';

console.log(vardoPasisveikinimas);

// 5. Uždavinys: Dvigubas skaičius
// Sukurk kintamąjį skaicius, jam priskirk bet kokią skaitinę reikšmę. Programa turi atspausdinti dvigubą šio skaičiaus reikšmę.

e = 66;

let dvigubasSkaicius = e * e;

console.log(dvigubasSkaicius);

// 6. Uždavinys: Kūno masės indeksas
// Sukurk kintamuosius ūgis ir svoris. Parašyk programą, kuri apskaičiuoja kūno masės indeksą.

ugis = 174;
svoris = 60;

let KMI = (ugis + svoris) / 2;

console.log(KMI);

// 7. Uždavinys: Draugų skaičius
// Sukurk kintamąjį drauguSkaicius, kuriame bus saugomas tavo draugų skaičius. Parašyk programą, kuri prideda 5 naujus draugus ir atspausdina bendrą draugų skaičių.

drauguSkaicius = 4;

let naujiDraugai = 5;

console.log(drauguSkaicius + naujiDraugai);

// 8. Uždavinys: Kavos užsakymas
// Sukurk kintamuosius kavosKiekis ir kavosKaina. Parašyk programą, kuri suskaičiuoja kavos užsakymo sumą ir ją atspausdina.

kavosKiekis = 10;

kavosKaina = 4;

let uzsakymoSuma = kavosKiekis * kavosKaina;

console.log(uzsakymoSuma);

// 9. Uždavinys: PVM skaičiavimas
// Sukurk kintamuosius kainaBePVM ir pvm, kurie išsaugos prekės kainą ir PVM procentą (pvz., 21). Programa turi apskaičiuoti kainą su PVM.

kainaBePVM = 8;

PVM = 21;

let kainaSuPVM = ((PVM + 100) * kainaBePVM) / 100;

console.log(kainaSuPVM);

// 10. Uždavinys: Automobilio kuro sąnaudos
// Sukurk kintamuosius nuvaziuotiKm, kuroSanaudos ir kuroKaina. Parašyk programą, kuri apskaičiuoja kiek kainuos nukeliauti nuvaziuotiKm su šiuo automobiliu.

nuvaziuotiKm = 1000;

kuroSanaudos = 25;

kuroKaina = 1.5;

let kelionesBiudzetas = (nuvaziuotiKm / kuroSanaudos) * kuroKaina;

console.log(kelionesBiudzetas);

// 11. Uždavinys: Metų skaičius mėnesiais.
// Sukurk kintamąjį metai, kuriame būtų saugomas skaičius, kiek metų. Programa turi apskaičiuoti, kiek tai sudaro mėnesių.

metai = 4;

let menesiaiMetuose = metai * 12;

console.log(menesiaiMetuose);

// 12. Uždavinys: Temperatūros perskaičiavimas
// Parašyk programą, kuri konvertuoja temperatūrą iš Celsijaus į Farenheito skalę. Sukurk kintamąjį temperaturaC ir priskirk jam bet kokią reikšmę,
// o tada apskaičiuok temperatūrą Farenheito skalėje. Formulė: F = C * 9/5 + 32

temperaturaC = 41;

let F = (temperaturaC * 9) / 5 + 32;

console.log(F);
