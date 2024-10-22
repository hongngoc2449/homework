const studentGrades = new Map();

studentGrades.set('John', 85);
studentGrades.set('Anna', 92);
studentGrades.set('Bob', 75);

console.log(studentGrades.get('Anna'));

console.log(studentGrades.has('John')); 

studentGrades.delete('Bob');

studentGrades.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});

// Output:
// 92
// true
// John: 85
// Anna: 92
