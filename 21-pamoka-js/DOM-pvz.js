// DOM yra dokumentas, kuris reprezentuoja objektu medi.
// Skirtas web'ui, ne mobiliosioms programelems, ir ne Node'ui.

// KAI NORIME ISSITRAUKTI 1 ELEMENTA
const element = document.getElementById('unikalus id'); // grazina visa objekta su belenkiek duomenu

element.innerText = 'Goodbye';

//  KAI NORIME ISSITRAUKTI DAUG
const elements = document.getElementsByClassName('heading');

console.log(elements[1].innerText);

// KAI NORIME ISSITRAUKTI PAGAL TAG'A
console.log(document.getElementsByTagName('p'));

// KAI NORIME ISSITRAUKTI PIRMAJI ELEMENTA PAGAL SI FILTRA
console.log(document.querySelector('p'));

// KAI NORIME ISSITRAUKTI VISUS ELEMENTUS PAGAL SI FILTRA
console.log(document.querySelectorAll('.paragrafas'));

// TURINIO KEITIMAS:
const elementai = document.getElementById('pirmas');

elementai.innerHTML = '<h1>hey</h1>';
elementai.textContent = '<h1>hey</h1>'; // pakeis teksto vidu, sitame pvz parasys ir tagus, ne tik teksta!

// PRITAIKYTI FUNKCIJA VISIEMS ELEMENTAMS:
const headingElementai = document.querySelectorAll('h1');

headingElementai.forEach(function (heading) {
  //heading.style.color = 'red';
  //heading.style.border = '1px solid green';
  // heading.style.textAlign = 'center';
  heading.classList.add('green-box');
});





