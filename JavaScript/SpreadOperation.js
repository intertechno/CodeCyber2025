const fruits = ["apple", "banana", "cherry"];
const vegetables = ["spinach", "carrot", "potato"];

// Using spread operator to combine arrays
const food = [...fruits, ...vegetables];
const food2 = [fruits, vegetables];


console.log(food); // Output: ["apple", "banana", "cherry", "spinach", "carrot", "potato"]
console.log(food2);
