function add(a, b) {
    return a + b;
}

const myObject = {
    value: 10,
    multiply: (n) => {
        setTimeout(() =>
            console.log(this.value * n), 500);
    }
};
