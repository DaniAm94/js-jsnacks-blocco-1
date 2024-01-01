const guests = ['ALDO', 'GIOVANNI', 'GIACOMO', 'ALFONSO', 'RODOLFO', 'OSVALDO'];
const user = prompt('Inserisci il tuo nome: ').trim().toUpperCase();
if (!user) {
    alert('Si prega di inserire un nome!');
} else {
    let isValid = false;
    for (let i = 0; i < guests.length; i++) {
        if (user === guests[i]) isValid = true;
    }
    if (isValid) console.log('Il tuo nome è nella lista degli invitati. Puoi partecipare alla festa!');
    else console.log('Il tuo nome non è nella lista degli invitati. Non puoi partecipare alla festa!');
    console.table(guests);
    console.log(`Il tuo nome: ${user}`);
}