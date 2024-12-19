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
const elementsByClassName =
  document.getElementsByClassName('klasesPavadinimas');
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

// MODIFIKAVIMAS:

// 1) ELEMENTO HTML TURINIO KEITIMAS:
element.innerHTML = '<div>Sveiki</div>';

// 2) ELEMENTO TEKSTO KEITIMAS:
element.textContent = 'Sveiki';

// 3) ELEMENTO KLASES PRIDEJIMAS:
element.classList.add('naujaKlase');

// 4) PAKEISTI STILIU:
element.style.color = 'red';
element.style.padding = '100px';
element.style.margin = '50px';
element.style.display = 'none';

// 5) KAI NORIME DARYTI PAKEITIMUS PER VISA MASYVA:
const masyvas = ['a', 'b', 'c'];

masyvas.forEach((item, index) => {
  console.log(item);
});

// 6) FUNKCIJOS PRITAIKYMAS ANT VISU ELEMENTU:
// pvz 1
document.querySelectorAll('.box').forEach(function(box) {
    box.style.display = 'none';
})

// pvz 2
// Padaryk kazka kiekvienam elementui is masyvo
// Sugalvojam pavadinima ir nurodom kaip argumenta
// Viduje funkcijos atliekam norimus veiksmus su butent siuo elementu:
allElements.forEach((element) => {
    element.style.color = 'red';
})