// Uzduotis: Suskaičiuoti kiek duonos kepalų kepykla sugebės iškepti per dieną,
// ar spes įgyvendinti visus dienos užsakymus ir suskaičiuoti kiek iš jų uždirbs pelno.

const darboValandos = 8;
let darbuotojoKepalaiPerValanda = 6;
let darbuotojai = 25;
let kepaloSavikaina = 0.5;
let kepaloPardavimoKaina = 2.5;
let dienosUzsakymai = 1600;

// 1. Suskaičiuoti kiek kepykla per vieną darbo dieną spės iškepti duonos kepalų.

let darbuotojoDienosKepalai = darboValandos * darbuotojoKepalaiPerValanda;
console.log(
  `Vienas darbuotojas gali iskepti max ${darbuotojoDienosKepalai} kepalu per diena`
);

let ivykdytiUzsakymai = darbuotojoDienosKepalai * darbuotojai;
console.log(
  `Visi darbuotojai gali iskepti max ${ivykdytiUzsakymai} kepalu per diena`
);

// 2. Apskaičiuoti visų kepalų savikainą, gautas pajamas pardavus ir iš to gauto pelno dalį.

let parduotuKepaluSavikaina = ivykdytiUzsakymai * kepaloSavikaina;
console.log(`Kepalu dienos savikaina yra lygi ${parduotuKepaluSavikaina} EUR`);

let pajamos = ivykdytiUzsakymai * kepaloPardavimoKaina;
console.log(`Kepyklos dienos pajamos yra ${pajamos} EUR`);

let pelnas = pajamos - parduotuKepaluSavikaina;
console.log(`Kepyklos dienos pelnas yra ${pelnas} EUR`);

// 3. Patikrinti ar kepykla spės iškepti visą tos dienos užsakymą.
// Jei ne, suskaičiuoti kiek kepalų nespės iškepti.

if (dienosUzsakymai === ivykdytiUzsakymai) {
  console.log('Taip, kepykla per diena spes iskepti visus uzsakytus kepalus');
} else if (dienosUzsakymai > ivykdytiUzsakymai) {
  console.log('Deja ne, kepykla per diena nespes iskepti visu uzsakytu kepalu');
}

let nebaigtiUzsakymai = dienosUzsakymai - ivykdytiUzsakymai;
console.log(`Kepykla per diena nespes iskepti ${nebaigtiUzsakymai} kepalu`);

// 4. (Papildomai) Įvertinkite tai, kad pajamas ir pelną galite gauti tik pilnai įvykdžius užsakymą.

if (pelnas && pajamos) {
    if (dienosUzsakymai === ivykdytiUzsakymai) {
        console.log('Taip, kepykla gaus dienos pajamas ir pelna');
    } else if (dienosUzsakymai > ivykdytiUzsakymai) {
        console.log(`Ne, deja kepykla negaus dienos pajamu ir pelno, nes veluoja iskepti ${nebaigtiUzsakymai} trukstamus kepalus`);
    }
} 

