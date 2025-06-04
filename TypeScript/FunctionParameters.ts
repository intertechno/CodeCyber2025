function myFunction2(param1, param2, param3 = false) {
    console.log("Parameter 1:", param1);
    console.log("Parameter 2:", param2);
    console.log("Parameter 3:", param3);
    console.log("--------------------");
}

// Calling the function with three parameters
myFunction2("Hello", 42, true);

// Calling the function with fewer parameters
myFunction2("Hello", 42); // param3 will be undefined

/*
// Calling the function with more parameters
myFunction2("Hello", 42, true, "Extra parameter"); // Extra parameter will be ignored
*/