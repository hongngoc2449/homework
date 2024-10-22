const uniqueNumbers = new Set();

uniqueNumbers.add(1);
uniqueNumbers.add(2);
uniqueNumbers.add(3);
uniqueNumbers.add(1);

console.log(uniqueNumbers.size);

console.log(uniqueNumbers.has(2));

uniqueNumbers.delete(3);

uniqueNumbers.forEach((value) => {
    console.log(value);
});
// Output:
// 3
// true
// 1
// 2
