// JS is synchronous (kodas yra nevykdomas tol, kol nebus pabaigtas kita kodo eilute)
// but exists asynchronous JS
// tai kodas kuris yra pradedamas vykdyti dabar, bet uzbaigtas veliau
// jis nera vykdomas pagal eile, o pagal ivykius, kuriuos mes nustatome
// pvz didele funkcija, kuriai reikia daug laiko, pvz funkcija, kuri turi pasiimti duomenis is DB, etc
// Asinchroninis JS veikia ir Node (terminale)

// setTimeout()
// 1. Veiksmas
console.log('Grizau namo');
// 2. Veiksmas
console.log('Uzsisakiau pica');
// 3. Veiksmas
// setTimeout - tai funkcija, kuri paleidzia nurodyta koda po nurodyto laiko:
// (BET ji netinka naudoti, kai nezinome, kada kodas turetu buti paleistas)
setTimeout(() => {
  console.log('Pica avyko');
  console.log('Pradejau valgyti pica');
}, 10000); // turime nurodyti laiko tarpa: milisekundemis
// 4. Veiksmas
console.log('Nusimoviau batus');
console.log('Nusimaudziau');

// HTTP REQUESTS
// APIs
// Application Programming Interface:
// - leidzia bendrauti su kita programa
// - programavimo sasaja, kuri leidzia mums naudotis kitu programu funksijomis arba duomenimis.
// API endpoints galima sukurti su Node js.
// API pades atiduoti duomenis ir pasiimti.
// backend devs kuria APIs, t.y. kaip atiduoti duomenis, kad frontend dev galetu juos panaudoti.
// vienas API gali atnesti duomenis, kitas update, kitas istrint, etc.

// serveris atiduos info json formatu (panasus i JS objektus)
// pvz: https://jsonplaceholder.typicode.com/todos/1
function getTodos() {
  // fetch yra pazadas padaryti kazka:
  fetch('https://jsonplaceholder.typicode.com/todos/1') // kai gavo...
    .then((response) => response.json()) // ...tik tada (gavo 200 statusa = sekme)
    .then((json) => console.log(json))
    .catch((error) => console.log('nepavyko pagauti API'));
}

getTodos();

// PROMISES
// Tai objektas, kuris leidzia tvarkyti asinchroninius veiksmus
// Jis veikia pagal principa:
// - laukia, kol veiksmas bus uzbaigtas.
// - ir tada grazina rezultata ar klaida.

// Promise buna trys busenos:
// 1) pending - laukia kol veiksmas bus uzbaigtas.
// 2) fulfilled - veiksmas baigtas sekmingai.
// 3) rejected - veiksmas baigtas su klaida.

