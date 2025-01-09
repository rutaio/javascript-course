// PROMISES
// Tai objektas, kuris leidzia tvarkyti asinchroninius veiksmus
// Jis veikia pagal principa:
// - laukia, kol veiksmas bus uzbaigtas.
// - ir tada grazina rezultata ar klaida.

// Promise buna trys busenos:
// 1) pending - laukia kol veiksmas bus uzbaigtas.
// 2) fulfilled - veiksmas baigtas sekmingai.
// 3) rejected - veiksmas baigtas su klaida.

// SVARBU: PROMISES - VISADA REIKIA RETURN STATUSA IR VALUE

// PVZ
// Funkcija, kuri imituos kavos uzsakyma:
// (bet tai yra tik pavyzdys)
const orderCoffee = (coffeeType) => {
  return new Promise((resolve, reject) => { // sis sakinys igalina naudoti .then
    console.log('Uzsakymas yra priimtas..');

    setTimeout(() => {
      if (coffeeType === 'Latte') {
        // Resolve - funkcija, kuri grazina sekminga rezultata:
        resolve('Latte yra paruosta');
      } else {
        // Reject - funkcija, kuri grazina klaida:
        reject('Atsiprasome, bet siuo metu neturime sios kavos');
      }
    }, 5000); // laikas milisekundemis
  });
};

// Galime naudoti .then() ir .catch() metodus, nes orderCoffee funkcija grazina Promise objekta:
orderCoffee('Latte')
  .then((message) => {
    // message - tai yra resolve funkcijos grazinamas rezultatas
    console.log('Barista sako: ', message);
  })
  .catch((error) => {
    // message - tai yra reject funkcijos grazinama klaida

    console.log('Barista sako: ', message);
  });
