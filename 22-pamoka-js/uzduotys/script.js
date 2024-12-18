const masyvas = ['#ff5733', '#33FE56', '#3257FF', '#F4FF32', '#FF32A6'];

// Issikvieciame vieta, i ka desim color boxes:
const palete = document.getElementById('palete');

// Kiekvienai spalvai sukuriame po diva..
masyvas.forEach((spalva) => {
  const spalvosDeze = document.createElement('div'); // Kiekvienai spalvai is masyvo sukuria po div'a
  const spalva = masyvas[i]; // isitraukiam kiekviena spalva is masyvo nariu...

  spalvosDeze.style.backgroundColor = spalva; // cia turetu kiekvienam div'ui priskirti skirtinga spalva?

  palete.append(spalvosDeze); // pridedam spalvotus div'us i paletes div'a HTML'e
});

// AR CIA VISAI NE TOKS BUDAS, NES JUK DAR REIKES IDETI IR EVENT LISTENER'I??
