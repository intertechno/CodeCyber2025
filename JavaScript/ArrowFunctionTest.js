
const myObject = {
  value: 10,
  multiply: function(n) {
    setTimeout(function() {
      console.log(this.value * n);
    }.bind(this), 2000);
  }
};

// wait for a keypress to exit
process.stdin.resume();
process.stdin.setEncoding("utf8");
process.stdin.setRawMode(true);

process.stdin.on("data", (key) => {
    console.log("Exiting application.");
    process.exit();
});

process.on("exit", () => {
  process.stdin.setRawMode(false);
  process.stdin.pause();
});
console.log("Press any key to exit...");

// test the function call
myObject.multiply(5);
console.log("Test function called");
