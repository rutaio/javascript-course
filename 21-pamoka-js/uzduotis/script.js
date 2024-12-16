// issikeliu DOM i kintamuosius, kad butu aiskesnis kodas
// juos panaudoju apsirasydama mygtuko veiksmus:
const nameInput = document.getElementById('name-input');
const ageInput = document.getElementById('age-input');
const colorInput = document.getElementById('color-input');
const button = document.getElementById('btn');
const output = document.getElementById('output');

// apsirasau mygtuka, kad ji paspaudus, parodytu teksta div'e:
button.addEventListener('click', function () {
  // pasirasau salyga, kad kai vartotojas irasys reiksmes i bet kuri is siu lauku:
  if (!nameInput.value || !ageInput.value || !colorInput.value) {
    // kad iskviestu alerta, kuris parodys teksta:
    alert('Iveskite varda, amziu arba spalva!');
    return;
  }

  // sukuriu div tag'a, kad jame parodytu output reiksmes:
  const container = document.createElement('div');

  // siam div'ui uzdedame borderi su stiliumi, kuriame bus visas turinys iremintas is output:
  container.style.border = '1px solid grey';
  container.style.borderRadius = '10px';
  container.style.marginTop = '5px';
  container.style.paddingTop = '5px';

  // noriu kad p tag'o tekstas butu input reiksme:
  container.innerHTML = `
  <p><strong>Vardas:</strong> ${nameInput.value}</p>
  <p><strong>Amžius:</strong> ${ageInput.value}</p>
  <p><strong>Mėgstama spalva:</strong> ${colorInput.value}</p>
  <button id="btn-delete">DELETE</button> 
 `;

  container.querySelector('#btn-delete').addEventListener('click', function () {
    container.remove();
  });

  // noriu kad mano div'as savo viduje turetu output reiksmes:
  output.append(container);
});
