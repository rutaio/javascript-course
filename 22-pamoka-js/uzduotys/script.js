// Uzduotis: spalvos paimamos is masyvo. Paspaudus ant dezutes, ivyksta alert su spalvos kodu.
// Reikia: 1) kad sukurtu po dezute, 2) kad visas nuspalvintu, 3) kad padarytu alertus

// Susikuriame masyva:
const masyvas = ['#ff5733', '#33FE56', '#3257FF', '#F4FF32', '#FF32A6'];

// Issikvieciame vieta, i ka desim spalvotas dezutes:
const palete = document.getElementById('palete');

// Kiekvienai spalvai is masyvo sukuriame po diva:
// Sukame cikle su forEach:
masyvas.forEach((spalva) => {
  const spalvosDeze = document.createElement('div'); // Kiekvienai spalvai is masyvo sukuria po div'a.
  spalvosDeze.classList.add('spalvosDeze'); // Kiekvienai spalvai uzdedam klase.

  spalvosDeze.style.backgroundColor = spalva; // Cia turetu kiekvienam div'ui priskirti skirtinga spalva, pagal tai per kokia dabar eina spalva.

  spalvosDeze.addEventListener('click', function () { // Sukuriame funkcija, kuri parodys alertus, kai bus paspaudziame ant skirtingu spalvu deziu.
    alert(spalva);
  });

  palete.append(spalvosDeze); // Pridedam spalvotus div'us i paletes div'a HTML'e.
});
