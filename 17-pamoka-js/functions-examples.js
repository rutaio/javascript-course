// pvz 1

function turnOnWipers() {
  // ijungia valytuvus
}

function turnOnAC() {
  // ijungia air conditioner
}

function createWeatherAlert(temperature, isRaining) {
  if (temperature < 0) {
    return 'Ispejimas: lauke minusas, atsargiai vairuokite';
  } else if (isRaining) {
    turnOnWipers();
    return 'Ispejimas: lauke lyja, slidus kelias!';
  } else if (temperature > 30) {
    turnOnAC();
    return 'Ispejimas: lauke karsta, nepalikite augintiniu!';
  } else {
    return '';
  }
}

console.log(createWeatherAlert(40, true));

// pvz 2

function isShopOpen() {
  const currentHour = new Date().getHours();

  if (currentHour >= 9 && currentHour <= 18) {
    return 'Parduotuve yra atidaryta';
  } else {
    return 'Parduotuve uzdaryta';
  }
}

console.log(isShopOpen()); // mes patys renkames, kada rasyti console.log uz funkcijos ar joje

// kitas budas:

function arParduotuveDirba() {
  const currentHour = new Date().getHours();

  if (currentHour >= 9 && currentHour <= 18) {
    return console.log('Parduotuve yra atidaryta');
  } else {
    return console.log('Parduotuve uzdaryta');
  }
}

arParduotuveDirba(); // mes patys renkames, kada rasyti console.log uz funkcijos ar joje

// pvz 3

function checkTicketPrice(age) {
  switch (age) {
    case 1:
      return 'kaina 1 eur';
      break;
    case 2:
      return 'kaina 2 eur';
      break;
    default:
      return 'pilna kaina 10 eur';
  }
}

console.log(checkTicketPrice(3));

// pvz 4

function pasisveikinimas(name, surname) {
  console.log('Labas', name, surname);
}

let name1 = 'Tomas';
let surname1 = 'Tomaskauas';

pasisveikinimas('Ruta', 'J');
pasisveikinimas(name1, surname1);

