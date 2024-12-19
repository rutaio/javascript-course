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

// Apsirasau funkcijas, kad paspaudus mygtuka padarytu skaiciavimus ir parodytu juos atsakymo laukelyje:
calculateBtn.addEventListener('click', function () {
  // isivedu kintamaji, pagal kuri bus aisku, koks atsakymas turi buti parodytas:
  let kiekKepyklaIskepsKepalu = darbuotojaiInput * kepalaiInput;

  // apsirasau funkcija, kad kai vartotojas irasys reiksmes i visus siuos laukus:
  if (!darbuotojaiInput.value && !kepalaiInput.value && !uzsakymasInput.value) {
    // kad palygintu, ar paskaiciuotas iskeptas kepalu kiekis atitiks ivesta uzsakymo kieki:
    if (kiekKepyklaIskepsKepalu >= uzsakymasInput) {
      return true;
    } else {
      return false;
    }

    // kai vartotojas irasys reiksmes i nors viena is siu lauku:
  } else if (
    !darbuotojaiInput.value ||
    !kepalaiInput.value ||
    !uzsakymasInput.value
  ) {
    // kad iskviestu alerta, kuris parodys teksta:
    alert('Uzpildykite visus laukelius!');
    return;
  }

  // sukuriu div tag'a, kad jame parodytu output reiksmes:
  const container = document.createElement('div');

  // noriu kad p tag'o tekstas butu input reiksme:
  container.innerHTML = `
  <p><strong>Kepykla per diena gali pagaminti:</strong> ${kiekKepyklaIskepsKepalu.value} kepalu</p>
  <p><strong>Reikia pagaminti:</strong> ${uzsakymasInput.value} kepalu</p>
  <p><strong>Ar spes pagaminti?</strong> ${calculateBtn.value}</p> 
  `;

  // noriu kad mano div'as savo viduje turetu output reiksmes:
  output.append(container);
});

// KO TRUKSTA:
// - KIEK KEPYKLA GALI PAGAMINTI
// - AR TAIP, AR NE
// RESET MYGTUKO NERA..
