const array1 = [5, 7];
const array2 = [3, 54, 6, 3, 23];

const shorterArray = array1.length < array2.length ? array1 : array2;
const longerArray = array1.length > array2.length ? array1 : array2;
console.log(shorterArray, longerArray);

while (shorterArray.length < longerArray.length) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    shorterArray.push(randomNumber);
}
console.log(shorterArray, longerArray);