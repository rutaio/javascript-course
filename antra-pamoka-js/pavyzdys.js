// Kintamuju reiksmiu priskyrimas
const vardas = 'Jone';
const pavarde = 'Jonaite';
const gimimo_metai = '1987';
const miestas = 'Vilnius';
const megstamiausiaSpalva = 'neonine';

const dabartiniaiMetai = 2024;
const amzius = dabartiniaiMetai - gimimo_metai;

// const sakinys = 'Labas, mano vardas' + ' ' + vardas + '.';
//console.log(sakinys);

//const sakinys = `Labas, mano vardas ${vardas}. Mano pavarde ${pavarde}. As gimiau ${gimimo_metai} metais, man yra: ${2024 - gimimo_metai}.`;
const sakinys = `Labas, mano vardas ${vardas}. Mano pavarde ${pavarde}. As gimiau ${gimimo_metai} metais, man yra: ${amzius}.`;

console.log(sakinys);
