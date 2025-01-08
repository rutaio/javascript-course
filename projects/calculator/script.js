let firstNumber = 0;
let secondNumber = 0;
let action = '+';
let answer = 0;

let input = document.getElementById('calc-input');
let calculation = document.getElementById('calculation');

let history = [];

function onNumberClick(number) {
  // 1.Padarykite, kad įvedimas negalėtų prasidėti su skaičiumi 0:
  if (number === 0 && !input.value) {
    // << jei skaicius yra 0 ir laukelyje nieko neegzistuoja
    alert('iveskite kita skaiciu, bet ne 0');
  } else {
    input.value += number;
  }
}

// 3. Papildykite programą taip, kad eitų įvesti skaičius per kablelį:
// reikia rasti paskutini ivesta skaiciu, kurio gale pridesime taskeli:
function onDecimalClick() {
  // noriu paimti paskutini stringo elementa:
  const lastNumber = input.value;

  // jei paskutinis number nera taskas ar kablelis, pridek kableli:
  if (!lastNumber.includes('.') && !lastNumber.includes(',')) {
    input.value += ',';
  }

  // dabar einame koreguoti onCountClick funkcija...
}

function onActionClick(clickedAction) {
  // 2.Padarykite, kad iš eilės nebūtų galima suvesti dviejų skirtingų veiksmų
  // arba kad paskutinį įvestą veiksmą pakeistų naujai paspaustu (kad nebūtų
  // dviejų sudėčių iš eilės ir pan.).
  const inputArray = input.value.trim().split(' ');
  const lastElement = inputArray[inputArray.length - 1];

  if (
    // arba galima paprasciau apsirasyti: if (['+', '-', '/', '*')].includes(lastElement)
    lastElement === '+' ||
    lastElement === '*' ||
    lastElement === '/' ||
    lastElement === '-'
  ) {
    inputArray[inputArray.length - 1] = clickedAction;
    input.value = inputArray.join(' ') + ' ';
  } else {
    // sitie buvo mano veiksmai pries pridedant 2. uzduoties atsakyma is lektoriaus...
    // input.value += ' ' + clickedAction + ' ';
    // action = clickedAction;
    input.value += `${clickedAction}`;
  }
}

function onEqualClick() {
  // pirma, istrauk kiekviena nari atskirai:
  // 5 x 2
  let splitted = input.value.replace(/,/g, '.').split(' '); // replace ir padaryk taska
  // ['5', 'x', '2']
  // 5
  firstNumber = parseInt(splitted[0]); // pavercia string i number
  // 'x'
  action = splitted[1];
  // 2
  secondNumber = parseInt(splitted[2]);

  // tada, iskviesk skaiciavimo funkcija ir pereik per ja:
  calculateAnswer();
  // galiausiai, parodyk atsakyma:
  input.value = answer.toString().replace('.', ','); // kad rodytu atsakymus per kableli

  calculation.innerHTML = `${firstNumber} ${action} ${secondNumber}`;

  addToHistory();
}

function calculateAnswer() {
  // action = '+' '/', 'x', '-'
  switch (action) {
    case '+':
      answer = firstNumber + secondNumber;
      break;
    case '-':
      answer = firstNumber - secondNumber;
      break;
    case '/':
      answer = firstNumber / secondNumber;
      break;
    case 'x':
      answer = firstNumber * secondNumber;
      break;
  }

  console.log(answer);
}

function onClearCalculator() {
  // nuresettinu duomenis:
  firstNumber = 0;
  secondNumber = 0;
  action = '+';
  answer = 0;
  // nuresettinu pati html, kad duomenys nebeatsivaizduotu:
  input.value = '';
  calculation.innerHTML = '';
}

// 6. Leiskite ištrinti paskutinį įvedimą (skaičių ar veiksmą) laukelyje (tarsi padaryti backspace).
function onBackspaceClick() {
  if (input.value.length > 0) {
    input.value = input.value.substring(0, input.value.length - 1);
  }
}

function addToHistory() {
  let historyItem = {
    firstNumber,
    action,
    secondNumber,
    answer,
  };

  history.push(historyItem);

  // 7. Istorijoje rodykite tik 5 paskutinius atliktus veiksmus:
  if (history.length > 5) {
    // saugom tik paskutinius 5 elementus:
    history = history.slice(-5);
  }
}

document.getElementById('show-history').onclick = function () {
  // paimam paskutinius 5 elementus is masyvo ir juos atvaizduojam:
  let lastFiveHistory = history.slice(-5);

  let formatted = lastFiveHistory.map(
    (x) => `<p>${x.firstNumber} ${x.action} ${x.secondNumber} = ${x.answer}</p>`
  );

  let historyBlock = document.querySelector('.calculator .history-items');
  historyBlock.innerHTML = formatted.join('');
};

// 4. Leiskite išjungti / įjungti istoriją.
function hideHistory() {
  let historyBlock = document.querySelector('.calculator .history');
  historyBlock.innerHTML = '';
}

// 5. Leiskite išvalyti visą istoriją.
function clearHistory() {
  history = [];
  let historyBlock = document.querySelector('.calculator .history-items');
  historyBlock.innerHTML = '';
}
