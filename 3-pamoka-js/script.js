// 1. Uždavinys: Skaičių suma
// Sukurk tris kintamuosius su skaičiaus tipo reikšmėmis. Apskaičiuok jų sumą ir priskirk ją naujam kintamajam. Atspausdink rezultatą.
let a = 5;
let b = 10;
let c = 15;

let suma = a + b + c;

console.log(suma);
console.log('Suma: '+ suma);
console.log(`Suma: ${suma}`);
// BET negalima rasyti skliuostuose kintamojo tiesiog su $ zenklu, nes tada reiktu naudoti backtickus, bet sitoje uzduotyje mums nereikia rasyti tiek daug kodo, uztenka tiesiog skliaustuose parasyti suma.

// 2. Uždavinys: Stačiakampio plotas
// Sukurk du kintamuosius - ilgis ir plotis, priskirk jiems bet kokias reikšmes ir apskaičiuok stačiakampio plotą.
let ilgis = 100;
let plotis = 300;

let plotas = ilgis * plotis;

// Back-tickus naudojam tik tada, kai i scripta norim ideti kintamaji... 
// BET niekada nerasyti back-ticku jei nerasome kintamojo viduje...
console.log(`Stačiakampio plotas: ${plotas} cm2`);

// 3. Uždavinys: Kvadrato plotas
// Sukurk kintamąjį ir priskirk jam bet kokį skaičių. Apskaičiuok kvadrato plotą ir jį atspausdink.
let krastine = 6;

let kvadratoPlotas = krastine * krastine;

console.log(`Kvadrato plotas: ${kvadratoPlotas} cm2`);

// 4. Uždavinys: Vardo pasisveikinimas
// Sukurk kintamąjį vardas ir priskirk jam kokį nors vardą. Programa turi pasisveikinti su tuo vardu. Pvz.: “Labas, Vardeni”.
const vardas = 'Jone';

// Back-tickus naudojam tik tada, kai i scripta norim ideti kintamaji... 
// BET niekada nerasyti back-ticku jei nerasome kintamojo viduje...
const vardoPasisveikinimas = `Labas, ${vardas}!`;

console.log(vardoPasisveikinimas);

// 5. Uždavinys: Dvigubas skaičius
// Sukurk kintamąjį skaicius, jam priskirk bet kokią skaitinę reikšmę. Programa turi atspausdinti dvigubą šio skaičiaus reikšmę.
let e = 66;

let dvigubasSkaicius = e * e;

console.log('Dvigubas skaičius: ' + dvigubasSkaicius);

// 6. Uždavinys: Kūno masės indeksas
// Sukurk kintamuosius ūgis ir svoris. Parašyk programą, kuri apskaičiuoja kūno masės indeksą.
let ugisMetrais = 1.74;
let svoris = 60;

const KMI = svoris / (ugisMetrais * ugisMetrais);

console.log('Kūno Masės Indeksas: ' + KMI.toFixed(2));

// 7. Uždavinys: Draugų skaičius
// Sukurk kintamąjį drauguSkaicius, kuriame bus saugomas tavo draugų skaičius. Parašyk programą, kuri prideda 5 naujus draugus ir atspausdina bendrą draugų skaičių.
let drauguSkaicius = 4;
let naujiDraugai = 5;

let visiDraugai = drauguSkaicius + naujiDraugai;

console.log(`Draugų skaičius: ${visiDraugai}`);

// 8. Uždavinys: Kavos užsakymas
// Sukurk kintamuosius kavosKiekis ir kavosKaina. Parašyk programą, kuri suskaičiuoja kavos užsakymo sumą ir ją atspausdina.
let kavosKiekis = 10;
let kavosKaina = 4;
let valiuta = 'EUR';

let uzsakymoSuma = kavosKiekis * kavosKaina;

console.log(`Kavos užsakymas: ${uzsakymoSuma} ${valiuta}`);

// 9. Uždavinys: PVM skaičiavimas
// Sukurk kintamuosius kainaBePVM ir pvm, kurie išsaugos prekės kainą ir PVM procentą (pvz., 21). Programa turi apskaičiuoti kainą su PVM.
let kainaBePVM = 8;
let PVM = 21;

let kainaSuPVM = ((PVM + 100) * kainaBePVM) / 100;

console.log(`PVM skaičiavimas: ${kainaSuPVM} EUR`);

// 10. Uždavinys: Automobilio kuro sąnaudos
// Sukurk kintamuosius nuvaziuotiKm, kuroSanaudos ir kuroKaina. Parašyk programą, kuri apskaičiuoja kiek kainuos nukeliauti nuvaziuotiKm su šiuo automobiliu.
let nuvaziuotiKm = 80;
let kuroSanaudosSimtuiKm = 6;
let kuroKaina = 1.5;

let kelionesBiudzetas = (nuvaziuotiKm / 100) * kuroSanaudosSimtuiKm * kuroKaina;

console.log(`Automobilio kuro sąnaudos: ${kelionesBiudzetas.toFixed(2)} EUR`);

// 11. Uždavinys: Metų skaičius mėnesiais.
// Sukurk kintamąjį metai, kuriame būtų saugomas skaičius, kiek metų. Programa turi apskaičiuoti, kiek tai sudaro mėnesių.
let metai = 4;
const menesiaiMetuose = 12;

let metuSkaiciusMen = metai * menesiaiMetuose;

console.log(`Metų skaičius mėnesiais: ${metuSkaiciusMen}`);

// 12. Uždavinys: Temperatūros perskaičiavimas
// Parašyk programą, kuri konvertuoja temperatūrą iš Celsijaus į Farenheito skalę. Sukurk kintamąjį temperaturaC ir priskirk jam bet kokią reikšmę,
// o tada apskaičiuok temperatūrą Farenheito skalėje. Formulė: F = C * 9/5 + 32
let temperaturaC = 41;

let temperaturaF = temperaturaC * 9/ 5 + 32;

console.log(`Temperatūros perskaičiavimas Farenheitais: ${temperaturaF} F`);

// 13. Kaip pakelti kubu ir kvadratu?
let skaicius1 = 5;

console.log(skaicius1 ** 3);
console.log(skaicius1 ** 2);
