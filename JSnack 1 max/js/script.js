const firstNum = parseInt(prompt('Inserisci il primo numero: '));
const secondNum = parseInt(prompt('Inserisci il secondo numero: '));

if (isNaN(firstNum) || isNaN(secondNum)) {
    alert('Si prega di inserire due numeri!');
} else {
    let result = 'I due numeri sono uguali';

    if (firstNum < secondNum) {
        result = `Il massimo tra i due numeri è: ${secondNum}`;
    } else if (firstNum > secondNum) {
        result = `Il massimo tra i due numeri è: ${firstNum}`;
    }

    console.log(`Primo numero: ${firstNum}`);
    console.log(`Secondo numero: ${secondNum}`);
    console.log(result);
}