const colors = ['red', 'blue', 'green', 'yellow', 'pink'];

const palette = document.getElementById('palette');
const addColorBtn = document.getElementById('add-color-btn');

// Sukuriu funkcija, kuri sukurs spalvos dezute:
function createColorBox(color) {
  const box = document.createElement('div');
  box.classList.add('color-box');

  box.style.backgroundColor = color;

  box.addEventListener('click', function () {
    alert(color);
  });

  palette.append(box);
}

// Iskvieciama is karto, kadangi nesu nurodes sitos logikos atskiroje funkcijoje:
colors.forEach((color) => {
  createColorBox(color);
});

// Funkcija kuri sugeneruos random spalva:
function generateRandomColor() {
  // Sukurk man tik is situ raidziu random spalva
  const letters = '0123456789abscef';
}

// Funkcija, kuri sugeneruos random spalva:
function generateRandomColor() {
  // Sukurk man tik is siu raidziu random spalva:
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    // leidziu cikla 6 kartus, 6 nes i hex koda priima tik tiek simboliu
    color += letters[Math.floor(Math.random() * 16)]; // ciklas istraukia random indeksa is 16 simboliu, nes tiek daveme simboliu is ko rinktis
  }

  return color;
}

// Paleidziama tik tada, kai bus paleidziamas mygtukas:
addColorBtn.addEventListener('click', function () {
  const randomColor = generateRandomColor();
  createColorBox(randomColor);
});
