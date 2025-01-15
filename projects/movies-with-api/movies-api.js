const searchInput = document.getElementById('searchInput');
const moviesContainer = document.getElementById('moviesContainer');

const fetchMovies = async () => {
  // galim naudot TRY CATCH bloka, nes tai yra ASYNC funkcija:
  try {
    // AWAIT dedam tik ant PROMISE (o FETCH ir yra promise):
    const response = await fetch(
      'https://api.tvmaze.com/search/shows?q=gladiator'
    );
    // jei 8-a eilute pavyko, sukurk duomenu faila:
    const data = await response.json();
  } catch (error) {
    // jei 8-a eilute grazintu reject, tai nueitu cia:
    console.error(error);
  }
};

fetchMovies();
