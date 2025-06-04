// classical function declaration
function calculateSum(a, b) {
    return a + b;
}

let result = calculateSum(1, 2);
console.log(result);

// declaring a function variable
const sumFunc = function(a, b) {
    return a + b;
}
result = sumFunc(1, 2);
console.log(result);


// declaring a function variable, with arrow syntax
const sumFunc2 = (a, b) => a + b;
result = sumFunc(1, 2);
console.log(result);
