// Nuotrauku masyvas:
const imageUrls = [
  'https://placehold.co/600x400',
  'https://placehold.co/600x400',
  'https://placehold.co/600x400',
  'https://placehold.co/600x400',
  'https://placehold.co/600x400',
  'https://placehold.co/600x400',
  'https://placehold.co/600x400',
  'https://placehold.co/600x400',
  'https://placehold.co/600x400',
  'https://placehold.co/600x400',
  'https://placehold.co/600x400',
  'https://placehold.co/600x400',
  'https://placehold.co/600x400',
  'https://placehold.co/600x400',
  'https://placehold.co/600x400',
  'https://placehold.co/600x400',
];

// Issikvieciame vieta, i ka desim foto:
const gallery = document.getElementById('gallery');

// 1 BUDAS:
// Norim kad kiekvienai is foto sukurtu img taga:
for (let i = 0; i < imageUrls.length; i++) {
  // kiekviena foto norim paimt ir ja atvaizduoti:
  // prisilyginam kintamajam ir per cikla issitraukiam kiekviena masyvo nari:
  const image = imageUrls[i];

  // kai suks cikla kiekvienam paveiksleliui sukurs img elemento taga HTML'e:
  const imageElement = document.createElement('img');

  // ciklo metu uzdeda source ir alt teksta kiekvienam paveiksleliui:
  imageElement.src = image;
  imageElement.alt = 'Alt tekstas jei nekrauna paveikslelio';

  // imageElement turi source'a, todel ji idedame i galerija:
  // append rasome i cikla, nes norim kad kiekvienas image eitu i galerija:
  gallery.append(imageElement); 
}

// 2 BUDAS:
imageUrls.forEach((image) => {
    const imageElement = document.createElement('img');

    imageElement.src = image;
    imageElement.alt = 'Alt tekstas jei nekrauna paveikslelio';

    gallery.append(imageElement); 
});