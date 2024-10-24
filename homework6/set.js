const uniqueNumbers = new Set();
const set = new Set([1,2,3,4,5])

uniqueNumbers.add(1);
uniqueNumbers.add(2);
uniqueNumbers.add(3);
uniqueNumbers.add(1);

console.log(uniqueNumbers.size);

console.log(uniqueNumbers.has(2));

uniqueNumbers.delete(3);
const a = Array.from(set)[0];
const b = Array.from(set)[4];
console.log(a + b)

uniqueNumbers.forEach((value) => {
    console.log(value);
});
// Output:
// 3
// true
// 1
// 2
