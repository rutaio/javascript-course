// Užduotis: sukurti atsiliepimų puslapį, kuriame būtų galima peržiūrėti, pridėti, redaguoti ir ištrinti atsiliepimus apie knygas.
// 1. Reikia panaudoti POST, PATCH, DELETE ir GET metodus. (GET metodas jau panaudotas)
// 2. Reikia panaudoti json-server, kad būtų galima saugoti atsiliepimus. (db.json failas jau duotas su pavyzdžiu)

const apiUrl = 'http://localhost:3000/reviews';
const reviewList = document.getElementById('reviewList');

// GET metodas
async function fetchReviews() {
  const response = await fetch(apiUrl);
  const reviews = await response.json();
  reviewList.innerHTML = '';
  reviews.forEach((review) => {
    const reviewItem = document.createElement('li');
    reviewItem.innerHTML = `
      <div class="review-item">
        <strong>${review.title}</strong>
        <div>Žanras: <b>${review.genre}</b></div>
        <div>Reitingas: <b>${review.rating}</b> / 5</div>
        <p>${review.reviewText}</p>
      </div>
      <div class="review-actions">
        <button onclick="editReview('${review.id}')">Edit</button>
        <button onclick="deleteReview('${review.id}')">Delete</button>
      </div>
    `;
    reviewList.appendChild(reviewItem);
  });
}

// POST/CREATE metodas:
// lektoriaus budas:
const reviewForm = document.getElementById('reviewForm');

async function addReview(review) {
  try {
    // fetch visada tikisi gauti duomenis kaip objekta:
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // irasome tik argumenta, nebutina isskaidyti kad tai yra objektas, nes kodas ir taip zino kad tai yra objektas:
      body: JSON.stringify({ review }),
    });

    // reikia kad perkrautu ir rodytu latest reviews:
    await response.json();
    fetchReviews();
  } catch (error) {
    console.log(error);
    alert('Klaida!');
  }
}

// klausyk kol tave submit:
reviewForm.addEventListener('submit', (event) => {
  // neleidzia formai persikrauti automatiskai:
  event.preventDefault();
  // issitraukiam formos inputu reiksmes:
  const title = document.getElementById('bookTitle').value;
  const genre = document.getElementById('bookGenre').value;
  const rating = document.getElementById('rating').value;
  const reviewText = document.getElementById('reviewText').value;

  const newReview = {
    title,
    genre,
    rating,
    reviewText,
  };

  // pasirasom du variantus:
  if (editingReviewId) {
    updatedReview(editingReviewId, newReview);
  } else {
    addReview(newReview);
  }

  editingReviewId = null;
  reviewForm.querySelector('button').textContent = 'Prideti apzvalga';
});

// mano budas:
// document
//  .getElementById('reviewForm')
//  .addEventListener('submit', async (event) => {
//    event.preventDefault();
//    const title = document.getElementById('bookTitle').value;
//    const genre = document.getElementById('bookGenre').value;
//    const rating = document.getElementById('rating').value;
//   const reviewText = document.getElementById('reviewText').value;
//
//    try {
//      const response = await fetch(apiUrl, {
//        method: 'POST',
//        headers: {
//          'Content-Type': 'application/json',
//        },
//       // Nurodau kokius duomenis siunciu i serveri kaip objekta:
//       body: JSON.stringify({
//         title,
//         genre,
//        rating,
//        reviewText,
//      }),
//    });
//
//      if (!response.ok) {
//        throw new Error('Nepavyko sukurti naujos review!');
//      }
//    } catch (error) {
//      console.error('Klaida kuriant nauja review');
//      alert('Klaida kuriant nauja review!');
//    }
//  });

// EDIT/PATCH metodas is dvieju daliu:
// LEKTORIAUS BUDAS:
// tik kai zmogus paspaus edit:
let editingReviewId = null;

// 1) edit stadija
// kai spaudziu EDIT turi ivykti fetchas ir uzpildyti input laukus turimais duomenimis:
// kreipiuos i review ir grazina id:
async function editReview(id) {
  try {
    const response = await fetch(`${apiUrl}/${id}`);
    const data = await response.json();
    // inputus prilyginu:
    document.getElementById('bookTitle').value = data.title;
    document.getElementById('bookGenre').value = data.genre;
    document.getElementById('rating').value = data.rating;
    document.getElementById('reviewText').value = data.reviewText;
    // pakeiciu mygtuko teksta:
    document.querySelector('button').textContent = 'Atnaujinti duomenis';
    // susikuriam konstanta editingReviewId (auksciau) ir prilyginam id:
    editingReviewId = id;
  } catch (error) {
    console.error(error);
    alert('Nepavyko gauti reviews duomenu');
  }
}

// 2) edit duomenu updatinimo stadija
// i argumentus galim irasyti bet ka:
async function updatedReview(id, updatedReview) {
  try {
    const response = await fetch(`${apiUrl}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedReview),
    });
    await response.json();
    fetchReviews();
  } catch (error) {
    console.error(error);
    alert('Nepavyko atnaujinti reviews');
  }
}

// EDIT method - neveikia!:
// kai paspaudzia ant edit mygtuko, uzfiksuojam id...
//async function editReview(id) {
// man noretusi issikelti paredaguota review...
// editingReviewId = id;

// kai i inputs yra irasyta...
// if (title && genre && rating && reviewText) {
// try {
// const response = await fetch(`${apiUrl}/${id}`, {
//  method: 'PATCH',
//  headers: { 'Content-Type': 'application/json' },
// body: JSON.stringify({
//  title,
//   genre,
//    rating,
//      reviewText,
//    }),
//
//   });
//
// if (!response.ok) {
// throw new Error('Nepavyko redaguoti review!');
// }
// } catch (error) {
// console.error('Klaida redaguojant review!');
//   alert('Deja, klaida redaguojant review');
//   }
// }
//}

// DELETE metodas:
async function deleteReview(id) {
  try {
    // paredaguojame savo API, kad eitu butent i to id API:
    const response = await fetch(`${apiUrl}/${id}`, {
      method: 'DELETE',
    });

    // reikia kad perkrautu ir rodytu latest reviews:
    await response.json();
    fetchReviews();

    if (!response.ok) {
      throw new Error('Nepavyko istrinti review!');
    }
  } catch (error) {
    console.error('Klaida trinant review');
    alert('Klaida trinant review');
  }
}

// Kai dokumentas užkrautas, iškviečiamas fetchReviews funkcija
document.addEventListener('DOMContentLoaded', fetchReviews);
