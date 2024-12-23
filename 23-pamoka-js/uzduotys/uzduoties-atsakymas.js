/* INSTRUKCIJOS:
Papildykite projektą:
    - Apskaičiuokite kiek kepalų duonos gali pagaminti kepykla per diena.
    - Atvaizduokite kiek kepalų duonos reikia iškepti.
    - Nurodykite "Taip" arba "Ne" ar kepykla spės iškepti visą reikiamą duonos kiekį.
    - Viskas turi būti atvaizduota HTML dokumente.
*/

// Issitraukiu elementus is HTML:
const calculateButton = document.getElementById('calculate');
const employeeCount = document.getElementById('employee-count');
const loavesPerEmployee = document.getElementById('loaves-per-employee');
const orderCount = document.getElementById('order-count');
const resultDiv = document.getElementById('results');
const resetButton = document.getElementById('reset');

// Kai mygtukas bus paspaudziamas, noriu kad apskaiciuotu ir atvaizduotu duomenis:
calculateButton.addEventListener('click', function () {
  // Paimu reiksmes is input ir pasiverciu i skaicius, kadangi inputuose visada yra tekstinis formatas 'string', o mes norim atlikti skaiciavimus tik su skaiciais!!
  const employeeCountValue = Number(employeeCount.value);
  const loavesPerEmployeeValue = Number(loavesPerEmployee.value);
  const orderCountValue = Number(orderCount.value);

  // suskaiciuoju kiek kepykla gali iskepti duonos per diena:
  const totalLoavesPerDay = employeeCountValue * loavesPerEmployeeValue;
  const isPossibleToFulfillOrder = totalLoavesPerDay >= orderCountValue;

  // pirmiausia patikrinu ar visi laukai uzpildyti, jei nors vienas yra tuscias, rodau error:
  if (!employeeCountValue || !loavesPerEmployeeValue || !orderCountValue) {
    resultDiv.innerHTML = '<p class="error">Iveskite visus duomenis!</p>';
    return;
  }

  // Atvaizduoju reiksmes:
  resultDiv.innerHTML = `
<p><strong>Kepykla per diena gali pagaminti: </strong>${totalLoavesPerDay} kepalu. </p>
<p><strong>Reikia pagaminti: </strong>${orderCountValue} kepalu. </p>
<p><strong>Ar spes pagaminti? </strong>${
    isPossibleToFulfillOrder ? 'Taip' : 'Ne'
  } . </p>

`;
});

resetButton.addEventListener('click', function () {
  employeeCount.value = '0';
  loavesPerEmployee.value = '0';
  orderCount.value = '0';
  resultDiv.innerHTML = `
    <p>Kol kas nieko nera</p>
    `;
});
