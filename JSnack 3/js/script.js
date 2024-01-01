let sum = 0;
for (let i = 0; i < 10; i++) {
    const num = parseInt(prompt(`Inserisci il ${i + 1}° numero:`));
    if (isNaN(num) || !num) {
        alert('Si prega di inserire un numero!');
        i--;
    } else {
        console.log(num);
        sum += num;
    }
}
console.log(`La somma dei 10 numeri inseriti è: ${sum}`);