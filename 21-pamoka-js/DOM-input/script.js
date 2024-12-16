// INPUT

const input = document.getElementById('name-input');
const surnameInput = document.getElementById('surname-input');
const button = document.getElementById('change-name-btn');
const output = document.getElementById('output');

button.addEventListener('click', function () {
  if (!input.value || !surnameInput.value) {
    alert('Iveskite varda arba pavarde!');
    return;
  }

  // sukuriame h1 tag'a:
  const heading = document.createElement('h1');
  // noriu kad h1 tag'o tekstas butu input reiksme:
  heading.textContent = `${input.value} ${surnameInput.value}`;
  // noriu kad mano div'as savo viduje turetu sita heading:
  output.append(heading);
});
