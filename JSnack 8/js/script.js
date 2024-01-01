const num = prompt('Inserisci un numero di 4 cifre: ');
if (isNaN(num) || num < 1000 || num > 9999) {
    alert('Si prega di inserire un numero di 4 cifre!');
} else {
    let sum = 0;
    for (let i = 0; i < 4; i++) {
        sum += parseInt(num.charAt(i));
    }
    console.log('Numero inserito: ', num)
    console.log('La somma delle 4 cifre del numero che hai inserito è: ', sum);
}