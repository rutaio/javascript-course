// FUNKCIJOS (functions) izoliuoja tam tikra logika.
// Yra keli budai aprasyti funkcijas:
// 1) budas - funkcija kuri daro skaiciavimus objekto viduje, bet nieko negrazina
// 2) budas - funkcija su return, kuri grazina reiksmes

// pvz 1

let a = 5;
let b = 5;

function sudekSkaicius(a, b) {
  return a + b;
}

console.log(sudekSkaicius(a, b));

// pvz 2

let preke = {
  pavadinimas: 'piestukas',
  kodas: 'ASB123',
  kaina: 2.99,
  kiekis: 30,
  uzdarbis: function() {
    console.log(this.kaina * this.kiekis); // funkcija nevykdo siu veiksmu, kol mes ju neiskvieciame uz objekto ribu!
  },
};

preke.uzdarbis(); // iskvieciame funkcija ir tik tada ji suveikia 

// pvz 3

let item = {
  pavadinimas: 'piestukas',
  kodas: 'ASB123',
  kaina: 2.99,
  kiekis: 30,
  pardavusUzdirbs: function() {
    let sum = item.kaina & item.kiekis;
    console.log(sum); // kas yra funkcijoje, tas ir lieka joje
  },
};

console.log('Preke kai bus parduota:');
item.pardavusUzdirbs();

// pvz 4 - funkcijos su RETURN, jas galima iskviesti uz objektu su console.log

let automobilis = {
  marke: 'Toyota',
  modelis: 'Prius',
  kaina: 20000,
  nuolaidaProcentais: 10,
  automobilioKainaSuNuolaida: function() {
    let galutineKaina = this.kaina * (1 - this.nuolaidaProcentais / 100);

    return galutineKaina; 
  },
};

console.log(`Automobilis kainuos su ${automobilis.nuolaidaProcentais}% nuolaida: ${automobilis.automobilioKainaSuNuolaida()}$`);

// pvz 5

let kelione = {
    vieta: 'Paryzius',
    trukmeDienomis: 5,
    dienosBiudzetas: 100,
    apskaiciuotiVisaKelionesKaina: function() {
      let suma = this.trukmeDienomis * this.dienosBiudzetas;
      return suma;
    },
    parodykInformacija: function() {
      console.log(`Kelione i ${this.vieta}, truks ${this.trukmeDienomis} dienas, kainuos is viso: ${this.apskaiciuotiVisaKelionesKaina()}`)
    }
  }
  
  kelione.parodykInformacija();

