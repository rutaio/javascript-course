// ASYNC ir AWAIT
// tai yra "sintetinis cukrus" :)
// leidzia rasyti asinchronini koda (tampa pazadu), taciau ji kontroliuoti kaip sinchronini koda.

// PVZ:
// kuo skiriasi chuck norris pvz ir async await. chuck norris pvz paleidome funkcija ir kas bus tas bus, 
// o su async mes galime kontroliuoti funkcija, t.y. mes laukiam kol ivyks await ir tik tada einam i tolesni koda..

// Async pavercia mano funkcija i Promise:
// async naudojame kai norime palaukti funkcijos:
// async nevyks kol jos viduje esantis fetch negrazins resolve arba reject:
async function getTodos() {
  // noriu kad mano konstanta butu lygi fetch funkcijai, kuri grazina duomenis is mano API:
  // await naudojame tik su async funkcija, laukiame kol Promise (fetch) grazins duomenis:
  const response = await fetch('./api/todo.json');

  // vienas budas apsirasyti:
  // if (response.ok) {
  //   return response.json();
  //}
  //throw new error('Nepavyko gauti duomenu');

  // kitas budas apsirasyti, pvz pirma apsirasyti error:
  if (response.status !== 200) {
    throw new error('Klaida');
  } else {
    // jei viskas gerai, return duomenis:
    return await response.json();
  }
}

// si funkcija grazina Promise, todel ant jos galime naudoti .then ir .catch:
getTodos()
  .then((duomenys) => {
    console.log(duomenys);
  })
  .catch((error) => {
    console.log('Klaida', error);
  });

// Status codes:
// 200 - viskas gerai
// 400 - frontend problemos
// 500 - serverio problemos
