const button = document.createElement("button");

button.textContent = "Click me!";
button.style.fontSize = "22px";
button.style.backgroundColor = "lightblue";
button.style.padding = "10px";

button.addEventListener("click", () => {
   alert("Hello, JavaScript!");
});

document.body.appendChild(button);
