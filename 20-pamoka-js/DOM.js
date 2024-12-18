// DOM - dokumento objektinis modelis
// Reprezentuoja HTML dokumenta, kaip objektu medi.

// DOM leidzia keist HTML struktura ir isvaizda per JS, nereikia eit i CSS ar HTML...
// DOM vyksta tevo ir vaiko vaidmenyse.

// HTML selektoriai:

// 1. istraukiame elementa PAGAL ELEMENTO ID:
const element = document.getElementById('unikalusId'); // dokumento viduje egzistuoja funkcija, kuri iskviecia elemento id
// sis aprasymas virsuje yra tas pat, kaip sis, tik virsutinis yra paprastesnis:
//const document = {
//  getElementById: function (id) {
//    return element;
//  }
//}

// 2. PAGAL ELEMENTO KLASE:
const elementsByClassName = document.getElementsByClassName('klasesPavadinimas');
// istraukia visus elementus su ta klase, grazina kolekcija, t.y. masyva duomenu

// 3. PAGAL VISUS TAM TIKRO TIPO ELEMENTUS:
// pvz: p, h1, span, a, section.. ir t.t.
const elementsByTagName = document.getElementsByTagName('p');
// is viso html, grazina visus paragrafus kaip masyva duomenu

// 4. PIRMO ELEMENTO PASIRINKIMAS:
// suras pirma elementa su tuo tagu, kuri pasirenkame:
const firstElement = document.querySelector('.klasesPavadinimas');
// cia klase rasome su taskeliu !

// 5. VISU ELEMENTU PASIRINKIMAS PAGAL SELEKTORIU:
const allElements = document.querySelectorAll('.klasesPavadinimas');

// PVZ:
/// VIENO ELEMENTO IESKOJIMAS KITO ELEMENTO VIDUJE:
const container = document.querySelector('.klasesPavadinimas');
container.querySelector('span'); // paprasiau jo vaikinio elemento


// 









