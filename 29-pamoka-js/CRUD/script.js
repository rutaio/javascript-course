// JSON-SERVER - yra skirta sukurti netikra API serverio prieiga;
// galesim pasiekti su GET, POST, PUT, PATCH, DELETE

// json-server --version
// - pasitikrinu, ar yra instaliuotas json-server ir ar grazina versija

// json-server --watch path_iki_failo.json
// - paleidzia serveri ir nustato kelia iki failo kuris taps duomenu baze

// CRUD Aplikacijos kodas:

// mano vietinis API:
const apiUrl = 'http://localhost:3000/students';

// GET - grazina duomenis is API
async function getStudents() {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Nepavyko gauti studentu saraso');
    }

    const students = await response.json();
    const studentList = document.getElementById('student-list');
    students.forEach((student) => {
      const row = document.createElement('tr');
      row.innerHTML = `

      <td>${student.name}</td>
      <td>${student.surname}</td>
      <td>${student.studies}</td>
      <td>${student.age}</td>
      <td>
         <button onclick="editStudent('${student.id}', '${student.name}', '${student.surname}', '${student.studies}', '${student.age}')">Redaguoti</button>
         <button onclick="deleteStudent('${student.id}')">Ištrinti</button>
      </td>
      `;
      studentList.append(row);
    });
  } catch (error) {
    console.error(error);
    alert('Klaida gaunant studentu sarasa!');
  }
}

// POST/CREATE - sukurti nauja irasa
document
  .getElementById('add-student-form')
  .addEventListener('submit', async (event) => {
    // (event) gali buti parasytas kaip (e)
    // preventDefault neleidzia puslapiui persikrauti:
    // tada ir sioje vietoje (event) butu (e):
    event.preventDefault();
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const studies = document.getElementById('studies').value;
    const age = document.getElementById('age').value;

    console.log(name, surname, studies, age);

    // kadangi turime async event listeneri, galim naudoti TRY:
    try {
      const response = await fetch(apiUrl, {
        // nurodau, kad siunciu POST request, kuris sukurs nauja irasa musu JSON faile:
        // idedam parametrus:
        method: 'POST',
        // nurodau, kad siunciu JSON tipo duomenis i serveri:
        // headers rasome tik kai dirbame su FETCH:
        headers: {
          'Content-Type': 'application/json',
        },
        // Nurodau, kokius duomenis siunciu i serveri;
        // Siuo atveju name ir age kaip objekta:
        body: JSON.stringify({ name, surname, studies, age }),
      });

      if (!response.ok) {
        throw new Error('Nepavyko sukurti naujo studento!');
      }
    } catch (error) {
      console.error('Klaida kuriant nauja studenta');
      alert('Klaida kuriant nauja studenta!');
    }
  });

// PATCH/EDIT - atnaujinti irasa:
async function editStudent(id, name, surname, studies, age) {
  const newName = prompt('Naujas vardas:', name);
  const newSurname = prompt('Nauja pavarde:', surname);
  const newStudies = prompt('Nauja studiju programa:', studies);
  const newAge = prompt('Naujas amzius:', age);

  if (newName && newAge && newSurname && newStudies) {
    try {
      const response = await fetch(`${apiUrl}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newName,
          surname: newSurname,
          studies: newStudies,
          age: Number(newAge),
        }),
      });

      if (!response.ok) {
        throw new Error('Nepavyko redaguoti studento!');
      }
    } catch (error) {
      console.error('Klaida redaguojant studenta!');
      alert('Klaida redaguojant studenta!');
    }
  }
}

// DELETE - istrinti irasa:
async function deleteStudent(id) {
  try {
    // paredaguojame savo API, kad eitu butent i to id API:
    // is dvieju API stringu sukuriame viena:
    // galime rasyti ir fetch(apiUrl + '\' + id)
    const response = await fetch(`${apiUrl}/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Nepavyko istrinti studento!');
    }
  } catch (error) {
    console.error('Klaida istrinant studenta');
    alert('Klaida trinant studenta');
  }
}

getStudents();
