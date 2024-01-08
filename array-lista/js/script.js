const fruits = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];
console.log(fruits);

const peach = 'pesca';

fruits.push(peach);
console.log(fruits);

let found = false;
let result = 'Oh no, devo uscire a comprare il cocomero!';

for (let i = 0; i < fruits.length && !found; i++) {
    const watermelon = 'cocomero';
    if (fruits[i] === watermelon) {
        found = true;
    }
}
if (found) result = 'Trovato! Devo solo preparare il cocktail.'
console.log(result);