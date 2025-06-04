function calculateSum(a, b) {
    if (a > 100) {
        throw new Error("Value exceeds limit");
    }
    return a + b;
}

let result = calculateSum(5, 10);
console.log(result); // Output: 15

let personName = "John Doe";

// ...
personName = [1, 2, 3]; // Bad practice: Reassigning a string variable to an array
console.log(personName); // Output: [1, 2, 3]


let firstName = "Alice";
let lastName = "Smith";
let fullName = calculateSum(firstName, lastName); // Bad practice: Using a function that expects numbers with strings
