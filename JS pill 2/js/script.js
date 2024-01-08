const target = 5000;
let sum = 0;
let iterations = 0;

while (sum < target) {
    const randomPlus = Math.floor(Math.random() * 10) + 1;
    sum += randomPlus;
    iterations++;
    // console.log(`Giro ${iterations}, numero generato: ${randomPlus}, somma attuale: ${sum}`);
}

console.log(`Per raggiungere il traguardo, sono state necessarie ${iterations} iterazioni, somma finale: ${sum}`);