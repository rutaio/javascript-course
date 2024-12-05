// Naming functions - funkciju pavadinimai visada turi buti skirtingi!

// PAVYZDZIAI, KAIP RASYTI FUNKCIJU PAVADINIMUS?

// A) KAI NORIME GAUTI DUOMENIS

function getNumberValue() {
  return 2 + 2;
}

function getUsername() {
  return 'usernam123';
}

function checkWeather() {
  return 'sunny';
}

function retrieveOrderDetails() {
  return 'order details..';
}

// B) KAI NORIME ATLIKTI VEIKSMA

function setUsername(name) {
  console.log('setting username to: ' + name);
}

function updateWeather(temperature) {
  console.log('updating temperature to: ', temperature);
}

function changePassword(newPassword) {
  console.log('changing password to: ', newPassword);
}

// C) KAI NORIME PATIKRINTI DUOMENIS ARBA VALIDACIJA

function isEmailValid(email) {
  // su boolean'ais galime rasyti funkcija klausimo forma
  return email.includes('@');
}

function hasSubscription(isPaid) {
  if (isPaid) {
    return true;
  } else {
    return false;
  }
}

function hasPermission(role) {
  return role === 'admin'; // grazins true
}

// funkcija gali buti funkcijoje

function deletePost(role, postName) { // si funkcija trina posta
  if (hasPermission(role)) { // si funkcija tikrina role
    console.log(`Postas su pavadinimu ${postName} buvo istrintas`);
  } else {
    console.log(
      `Klaida, vartotojas su role ${role.toUpperCase()} neturi teises istrinti irasu`
    );
  }
}

deletePost('user', 'Kaip investuoti pinigus?');