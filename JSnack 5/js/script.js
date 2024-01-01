const array = [];

for (let i = 0; i < 6; i++) {
    const num = parseInt(prompt('Inserisci un numero: '));
    if (isNaN(num)) {
        alert('Si prega di inserire un numero!');
        i--;
    } else {
        console.log(num);
        if (num % 2) array.push(num);
    }
}
console.log('Lista dei numeri dispari che hai inserito:', array);
