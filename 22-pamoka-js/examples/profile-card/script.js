// Gaunu konteineri, i kuri sukursiu profilio kortele:
const container = document.getElementById('profile-contained');
// Mano profilio korteles duomenys, kurie atsivaizduos konteineryje:
const userProfile = {
  name: 'Vardenis Pavardenis',
  age: 30,
  photo:
    'https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
  bio: 'Esu Daktaras, kuris gydo zmones',
 startedCareer: '2020',
};

// Susikuriame profilio kortele:
const card = document.createElement('div');
card.classList.add('profile-card'); // sukuriu klase sitam div'ui

// Susikuriame paveiksliuka:
const img = document.createElement('img');
img.src = userProfile.photo;
img.alt = userProfile.name;

// Pridedame varda
const vardas = document.createElement('h3');
vardas.textContent = userProfile.name;

// Pridedame amziu
const amzius = document.createElement('h4');
amzius.textContent = `Amzius: ${userProfile.age}`;

// Pridedame bio
const bio = document.createElement('p');
bio.textContent = userProfile.bio;

// Pridedame date of birth:
const year = document.createElement('span');
year.textContent = `Pradejo dirbti: ${userProfile.startedCareer} m.`;

// Idedame apsirasyta turini i profilio kortele:
// Cia galime reguliuoti, koks bus eiliskumas - kaip bus parodyta:
card.append(vardas);
card.append(amzius);
card.append(img);
card.append(bio);
card.append(year);

// Idedame kortele i konteineri:
container.append(card);
