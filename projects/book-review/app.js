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
document
  .getElementById('reviewForm')
  .addEventListener('submit', async (event) => {
    event.preventDefault();
    const title = document.getElementById('bookTitle').value;
    const genre = document.getElementById('bookGenre').value;
    const rating = document.getElementById('rating').value;
    const reviewText = document.getElementById('reviewText').value;

    console.log(title, genre, rating, reviewText);

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Nurodau kokius duomenis siunciu i serveri kaip objekta:
        body: JSON.stringify({
          title,
          genre,
          rating,
          reviewText,
        }),
      });

      if (!response.ok) {
        throw new Error('Nepavyko sukurti naujos review!');
      }
    } catch (error) {
      console.error('Klaida kuriant nauja review');
      alert('Klaida kuriant nauja review!');
    }
  });

// EDIT method - neveikia!:

// kai paspaudzia ant edit mygtuko, uzfiksuojam id...
async function editReview(id) {
  // man noretusi issikelti paredaguota review...
  editingReviewId = id;

  // kai i inputs yra irasyta...
  if (title && genre && rating && reviewText) {
    try {
      const response = await fetch(`${apiUrl}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          genre,
          rating,
          reviewText,
        }),
      });

      if (!response.ok) {
        throw new Error('Nepavyko redaguoti review!');
      }
    } catch (error) {
      console.error('Klaida redaguojant review!');
      alert('Deja, klaida redaguojant review');
    }
  }
}

// DELETE metodas:
async function deleteReview(id) {
  try {
    // paredaguojame savo API, kad eitu butent i to id API:
    const response = await fetch(`${apiUrl}/${id}`, {
      method: 'DELETE',
    });

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
