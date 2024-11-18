// SWITCH palyginimo salyga arba palyginimo operatorius.
// leidzia palyginti viena salyga arba viena kintamaji su daugybe skirtingu reiksmiu.
// jis nekonvertuoja duomenu tipu.
// skirtas patikrinti to paties kintamojo reiksmes.
// IF ELSE buvo skirtas tikrinti keliu kintamuju reiksmes.

// pvz 1

let orderStatus = 'siunciamas';

switch (orderStatus) {
  case 'uzsakytas':
    console.log('jusu uzsakymas uzsakytas');
    break;
  case 'siunciamas':
    console.log('jusu uzsakymas siunciamas');
    break;
  case 'rusiuojamas':
    console.log('jusu uzsakymas rusiuojamas');
    break;
  case 'pristatytas':
    console.log('jusu uzsakymas pristatytas');
    break;
  default:
    console.log('nei viena salyga neatitiko');
}

// ta pati galima apsirasyti ir su IF ELSE
// if (orderStatus === 'siunciamas') {
//    console.log('jusu uzsakymas siunciamas');
// } else if

console.log('tolimesnis kodas...');

// pvz 2

let sviesoforas = 'geltona';

switch (sviesoforas) {
  case 'zalia':
    console.log('gali vaziuoti');
    break;
  case 'geltona':
    console.log('palauk');
    break;
  case 'raudona':
    console.log('stovek');
    break;
  default:
    console.log('sviesoforas neveikia');
}

// pvz 3

const day = 7;

switch (day) {
  case 1:
    console.log('Pirmadienis');
    break;
  case 2:
    console.log('Antradienis');
    break;
  case 3:
    console.log('Treciadienis');
    break;
  case 4:
    console.log('Ketvirtadienis');
    break;
  case 5:
    console.log('Penktadienis');
    break;
  case 6:
    console.log('Sestadienis');
    break;
  case 7:
    console.log('Sekmadienis');
    break;
  default:
    console.log('Tokios dienos nera');
}

// pvz 4

let skaicius1 = 5;
let skaicius2 = 10;
let veiksmas = '*';

switch (veiksmas) {
  case '+':
    console.log(skaicius1 + skaicius2);
    break;
  case '-':
    console.log(skaicius1 - skaicius2);
    break;
  case '*':
    console.log(skaicius1 * skaicius2);
    break;
  default:
    console.log('nezinomas veiksmas');
}

// pvz 5

let a = 6;

switch (a) {
  case 3:
    console.log('Skaicius', a);
    break;
  case 4:
    console.log('Skaicius', a);
    break;
  case '6':
    console.log('Skaicius', a);
    break;
  default:
    console.log('neegizstuoja');
}
