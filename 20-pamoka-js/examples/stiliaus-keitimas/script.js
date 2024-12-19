// Norime padaryti h1 centruota per puslapi
// 1. Susirandame h1 elementa
// 2. Pakeiciame jo stiliu, kad butu centruotas
const heading = document.querySelector('h1');
heading.style.textAlign = 'center'; // ideda i html inline

// 3. Isitraukiame dezute, kuriai keisime spalva:
const colorBox = document.getElementById('color-box');

// 4. Isitraukiame mygtukus, kuriuos paspaudus pasikeis dezutes spalva:
const redButton = document.getElementById('btn-red');
const greenButton = document.getElementById('btn-green');
const resetButton = document.getElementById('btn-reset');

// 5. Paruosiame funkcija (kai paspaus mygtuka, padaryk x):
// si funkcija priima du argumentus: veiksma ir funkcijos aprasyma:
redButton.addEventListener('click', function () {
  colorBox.style.backgroundColor = 'red';
  colorBox.style.border = '2px solid green';
});

greenButton.addEventListener('click', function () {
  colorBox.style.backgroundColor = 'green';
  colorBox.style.border = '20px dotted red';
});

resetButton.addEventListener('click', function () {
  colorBox.style.backgroundColor = 'blue';
  colorBox.style.borderRadius = '50%';
  colorBox.style.width = '300px';
});
