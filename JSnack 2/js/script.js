const fistWord = prompt('Inserisci la prima parola :').trim();
const secondWord = prompt('Inserisci la seconda parola :').trim();
console.log(fistWord);
console.log(secondWord);
if (!fistWord || !secondWord) {
    alert('Si prega di inserire due parole!');
} else {
    let result = `Le due parole sono uguali. Lunghezza: ${fistWord.length}`;
    if (fistWord.length > secondWord.length) {
        result = `La seconda parola è più corta.
        ${secondWord}, lunghezza: ${secondWord.length}
        ${fistWord}, lunghezza: ${fistWord.length}`;
    } else if (fistWord.length < secondWord.length) {
        result = `La prima parola è più corta.
        ${fistWord}, lunghezza: ${fistWord.length}
        ${secondWord}, lunghezza: ${secondWord.length}`;
    }
    console.log(result);
}