const n = parseInt(prompt('Inserisci un numero: '));
if (isNaN(n) || n <= 0) {
    alert('Si prega di inserire un numero maggiore di 1!');
} else {
    for (let i = 0; i < n; i++) {
        const cube = Math.pow((i + 1), 3);
        console.log(`Il cubo di ${i + 1} é: ${cube}`);
    }
}