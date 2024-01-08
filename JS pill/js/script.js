let randomNum = Math.floor(Math.random() * 100);
while (randomNum % 2) {
    randomNum = Math.floor(Math.random() * 100);
    console.log('Numero generato: ', randomNum);
}
console.log('Il numero trovato è pari: ', randomNum);