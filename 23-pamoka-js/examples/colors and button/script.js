const colors = ['#ff5733', '#33FE56', '#3257FF', '#F4FF32', '#FF32A6'];

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

// Paleidziama tik tada, kai bus paleidziamas mygtukas:
addColorBtn.addEventListener('click', function () {
  createColorBox('red');
});
