// Chiedo all'utente di inserire la lunghezza dei due array
const firstLength = parseInt(prompt('Scegli la lunghezza del primo array'));
const secondLenght = parseInt(prompt('Scegli la lunghezza del secondo array'));

// Controllo che gli input dell'utente siano validi
let isValid = true;
if (isNaN(firstLength) || isNaN(secondLenght)) {
    isValid = false;
    alert('Devi inserire un numero!');
} else if (firstLength < 1 || secondLenght < 1) {
    isValid = false;
    alert('L\'array deve contenere almeno 1 elemento');
}

// Se la validazione è ok allora proseguo
if (isValid) {
    // Inizializzo un flag per controllare se dovrò estendere uno dei due array
    let hasToExtend = false;
    // Dichiaro i due array
    const firstArray = [];
    const secondArray = [];
    let min = [];
    // Messaggio da mostrare in caso di uguale lunghezza
    let result = 'Gli array hanno uguale lunghezza';

    // Confronto i due array ed eventualmente cambio il messaggio
    if (firstLength < secondLenght) {
        result = 'L\'array più piccolo è il primo';

        // ! Così se modifico min modificherò anche firstArray (Può andar bene per questo esercizio perchè voglio effettivamente modificare l'array più piccolo)
        min = firstArray;
        // ! Cosi posso modificare min senza intaccare firstArray
        // ? min = [...firstArray]
        hasToExtend = true;
    } else if (firstLength > secondLenght) {
        result = 'L\'array più piccolo è il secondo';
        // ! Così se modifico min modificherò anche secondArray (Può andar bene per questo esercizio perchè voglio effettivamente modificare l'array più piccolo)
        min = secondArray;
        // ! Cosi posso modificare min senza intaccare secondArray
        // ? min = [...secondArray];
        hasToExtend = true;
    }
    // Risultato del confronto
    console.log(result);

    // Calcolo la differenza dei due array e la mostro
    const lengthGap = Math.abs(firstLength - secondLenght);
    console.log('La differenza tra i due array è di: ', lengthGap);

    // Riempio i due array con numeri casuali da 1 a 200
    for (let i = 0; i < firstLength; i++) {
        const randomNumb = Math.floor(Math.random() * 200 + 1)
        firstArray.push(randomNumb);
    }
    for (let i = 0; i < secondLenght; i++) {
        const randomNumb = Math.floor(Math.random() * 200 + 1)
        secondArray.push(randomNumb);
    }

    // Mostro i due array
    console.table(firstArray);
    console.table(secondArray);


    // Se i due array hanno lunghezza diversa allora eseguo l'estensione dell'array più piccolo
    if (hasToExtend) {
        for (let i = 0; i < lengthGap; i++) {
            const randomNumb = Math.floor(Math.random() * 200 + 1)
            min.push(randomNumb);
        }
        console.log('L\'array più piccolo è stato esteso per eguagliare l\'altro in lunghezza: ');
        console.table(min);
        console.log(firstArray);
        console.log(secondArray);
    }
}

