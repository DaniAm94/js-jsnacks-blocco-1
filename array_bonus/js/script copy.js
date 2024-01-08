const firstNames = ['Diego', 'Danilo', 'Francesco', 'Arianna', 'Santiago'];
const lastNames = ['Scaranari', 'Verderame', 'Marzi', 'Maffucci', 'Cantafio'];

const fullNames = [];

// for (let i = 0; i < 3; i++) {
//     const randomName = Math.floor(Math.random() * firstNames.length);
//     const randomLastName = Math.floor(Math.random() * lastNames.length);
//     const fullName = `${firstNames[randomName]}  ${lastNames[randomLastName]}`;

//     if (!fullNames.includes(fullName)) fullNames.push(fullName);
// }

while (fullNames.length < 3) {
    const randomName = Math.floor(Math.random() * firstNames.length);
    const randomLastName = Math.floor(Math.random() * lastNames.length);
    const fullName = `${firstNames[randomName]}  ${lastNames[randomLastName]}`;

    if (!fullNames.includes(fullName)) fullNames.push(fullName);
}

console.log(fullNames);