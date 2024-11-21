// Masyvo metodai
// Push metodas - nauju nariu idejimas i masyva

let pienoProduktai = ['pienas', 'kefyras', 'grietine'];

pienoProduktai.push('jogurtas'); // prideda i paskutini masyvo elementa

console.log('Pieno gaminiai: ' + pienoProduktai);

// pvz

let newProduct = 'mushrooms';
let milkProducts = ['milk'];
let otherProducts = [];

if (newProduct === 'kefir') {
  milkProducts.push(newProduct);
} else {
  otherProducts.push(newProduct);
}

console.log(milkProducts);
console.log(otherProducts);
