// DOM ir MYGTUKAS

// visi heading elementai
const headingElements = document.querySelectorAll('h1');
// buttonas nes paspaudus reikes kazka atlikti
const button = document.getElementById('main-button');

// padarau, kad button klausytu paspaudimo veiksmo ir paleistu funkcija
button.addEventListener('click', function () {
  headingElements.forEach(function (heading) {
    // kadangi reikia pereiti per visus headingus, cia tai atlieku
    if (heading.innerText === 'Heading 2') {
      // pagal salyga pasakyta, kad jei h2 tai uzdeti kita klase
      heading.classList.add('blue-box');
    } else {
      heading.classList.add('green-box');
    }
  });
});
