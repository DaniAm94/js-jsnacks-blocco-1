// Flag per la validazione
let isValid = true;

// Chiedo all'utente quanti elementi vuole nell'array
const nElements = parseInt(prompt('Quanti elementi ci devono essere nell\'array?'));
const tailLength = parseInt(prompt('Quanto vuoi che sia lunga la coda da stampare?'))
// Controlli di validazione l'utente deve inserire un numero e non deve essere inferiore a 6
if (isNaN(nElements) || isNaN(tailLength)) {
    isValid = false;
    alert('Sei Pregato di inserire un numero!')
} else if (nElements < 1) {
    isValid = false;
    alert('Deve esserci almeno 1 elemento');
} else if (tailLength > nElements) {
    isValid = false;
    alert('La coda di elementi da stampare non può essere più lunga dell\'array iniziale');
}

if (isValid) {
    // Creo un array in cui inserire gli elementi
    const list = [];

    // Creo un array "coda" in cui inserire gli ultimi 5 elementi dell'array list
    const tail = [];

    // Implemento un ciclo for per riempire l'array list
    for (let i = 0; i < nElements; i++) {

        // A ogni ciclio creo un numero random da 0 a 100 da inserire nell'array list
        const randomElement = Math.floor(Math.random() * 100 + 1);
        // Inserisco l'elemento nell'array list
        list[i] = randomElement;

        // Se l'indice mi indica che siamo arrivati al primo elemento della coda all'ora inserisco quell'elemento anchhe nell'array tail
        if (i >= (nElements - tailLength)) {
            tail.push(randomElement);
        }
    }

    // Stampo i due array
    console.table(list);
    console.log('Coda: ', tail);
}

