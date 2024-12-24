const submitButton = document.getElementById('submit');
const output = document.getElementById('output');

submitButton.addEventListener('click', () => {
  const name = document.getElementById('name');
  const age = document.getElementById('age');
  const color = document.getElementById('color');

  output.innerHTML = `
    <p><strong>Vardas: </strong>${name.value}</p>
    <p><strong>Amzius: </strong>${age.value}</p>
    <p><strong>Megstama spalva:</strong> <span style="color: ${color.value};">${color.value}</span></p>
    `;

  output.style.color = color;

  // Susikuriu delete mygtuka viduje korteles:
  const deleteButton = document.createElement('button');
  // Uzdedu mygtukui pavadinima:
  deleteButton.textContent = 'Istrinti';
  // Pasakau output elementui, kad isidetu delete mygtuka kartu su likusia informacija:
  output.append(deleteButton);

  deleteButton.addEventListener('click', function () {
    output.innerHTML = '';
    name.value = '';
    age.value = '';
    color.value = '';
  });
});
