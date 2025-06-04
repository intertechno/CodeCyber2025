
// function to add two numbers
function addNumbers(a: number, b: number): number {
    return a + b;
}

// function to greet a user
function greet(name: string): string {
    return `Hello, ${name}!`;
}

// function to find the max number in an array
function findMax(arr: number[]): number {
    return Math.max(...arr);
}

// function to update a property in an object
interface GenericObject {
    [key: string]: any;
}

function updateObjectProperty<T extends GenericObject, K extends keyof T>(
    obj: T,
    property: K,
    value: T[K]
): T {
    obj[property] = value;
    return obj;
}

// using the functions
console.log(addNumbers(10, 5)); // 15
console.log(greet("Alice")); // "Hello, Alice!"
console.log(findMax([1, 3, 2, 5, 4])); // 5
console.log(updateObjectProperty({ name: "Bob", age: 30 }, "age", 31)); // { name: "Bob", age: 31 }
