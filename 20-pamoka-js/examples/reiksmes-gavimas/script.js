// Salyga:
// Kai suvesiu varda, tekstas turi pasikeisti
// Jei neivesiu nieko, turi atsirasti error!

// 1. Isitraukiame input elementa:
const input = document.getElementById('name-input');

// 2. Pasiimame mygtuka:
const button = document.getElementById('change-name-btn');

// 3. Pasiimame error message:
const errorMessage = document.getElementById('error-message');

// 4. Pasiimame greeting message:
const greeting = document.getElementById('greeting');

// 5. Apsirasome funkcija:
button.addEventListener('click', function () {
  const inputValue = input.value; // gauname ivesta reiksme kaip stringa
  // console.log(input.value); // patikriname console'je

  // 6. apsirasome veiksmus:
  if (inputValue !== '') { 
    greeting.textContent = `Sveikas, ${inputValue}`;
    errorMessage.style.display = 'none';
  } else {
    errorMessage.textContent = 'Iveskite savo varda!';
    errorMessage.style.display = 'block';
  }
});
