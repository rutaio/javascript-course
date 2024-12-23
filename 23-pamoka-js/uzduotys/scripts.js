/* INSTRUKCIJOS:
Papildykite projektą:
    - Apskaičiuokite kiek kepalų duonos gali pagaminti kepykla per diena.
    - Atvaizduokite kiek kepalų duonos reikia iškepti.
    - Nurodykite "Taip" arba "Ne" ar kepykla spės iškepti visą reikiamą duonos kiekį.
    - Viskas turi būti atvaizduota HTML dokumente.
*/

// Isitraukiu vieta, kur bus rodomas atsakymas:
const output = document.getElementById('results');

// Issitraukiu kintamuosius, pagal kuriuos bus skaiciuojamas atsakymas:
const darbuotojaiInput = document.getElementById('employee-count');
const kepalaiInput = document.getElementById('loaves-per-employee');
const uzsakymasInput = document.getElementById('order-count');

// Isitraukiu mygtukus, kurie iskvies funkcija, kad apskaiciuotu atsakyma:
const calculateBtn = document.getElementById('calculate');
const resetBtn = document.getElementById('reset');

const resultContainer = document.getElementById('results');

// Apsirasau funkcijas, kad paspaudus mygtuka padarytu skaiciavimus ir parodytu juos atsakymo laukelyje:
calculateBtn.addEventListener('click', function () {
  // pasiverciame INPUT reiksmes is STRING i NUMBERS:
  const darbuotojaiInputNumber = Number(darbuotojaiInput.value);
  const kepalaiInputNumber = Number(kepalaiInput.value);
  const uzsakymasInputNumber = Number(uzsakymasInput.value);

  // isivedu kintamaji, pagal kuri bus aisku, koks atsakymas turi buti parodytas:
  let kiekKepyklaIskepsKepalu = darbuotojaiInputNumber * kepalaiInputNumber;

  // apsirasau funkcija, kad kai vartotojas irasys reiksmes i visus siuos laukus:
  if (!darbuotojaiInputNumber && !kepalaiInputNumber && !uzsakymasInputNumber) {
    // kad palygintu, ar paskaiciuotas iskeptas kepalu kiekis atitiks ivesta uzsakymo kieki:
    if (kiekKepyklaIskepsKepalu >= uzsakymasInputNumber) {
      return true;
    } else {
      return false;
    }

    // patikrinu, ar visi laukai uzpildyti, jei nors vienas laukas tuscias rodys alert:
  } else if (
    !darbuotojaiInputNumber ||
    !kepalaiInputNumber ||
    !uzsakymasInputNumber
  ) {
    // iskvies alerta, kuris parodys teksta:
    alert('Uzpildykite visus laukelius!');
    return;
  }

  // noriu kad p tag'o tekstas butu input reiksme:
  resultContainer.innerHTML = `
  <p><strong>Kepykla per diena gali pagaminti:</strong> ${kiekKepyklaIskepsKepalu} kepalu</p>
  <p><strong>Reikia pagaminti:</strong> ${uzsakymasInputNumber} kepalu</p>
  <p><strong>Ar spes pagaminti?</strong> </p>  
  `;

  // siuo atveju nebuvo svarbu kas buvo parasyta results dive, todel nebereikia naudoti append

});

// apsirasome kad reset mygtukas veiktu:
resetBtn.addEventListener('click', function () {
  darbuotojaiInput.value = '0';
  kepalaiInput.value = '0';
  uzsakymasInput.value = '0';
  resultContainer.innerHTML = 'Kol kas nieko nera';
});

// KO TRUKSTA:
// - AR TAIP, AR NE

// SVARBU! input reiskmes visada yra string'as!!!
// todel pries darant skaiciavimus reikia su input'ais reikia ju reiksmes pasiversti is STRING i NUMBER
