const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

/*
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 150, 100);

ctx.fillStyle = "blue";
ctx.fillRect(60, 100, 150, 100);
*/

let width = 1000;
let height = 800;

let angle = 0;
let hue = 0;
const text = '★ Retro Vibes ★';

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, width, height);

    ctx.save();
    ctx.translate(width / 2, height / 2);
    ctx.rotate(angle);

    ctx.font = 'bold 60px Courier New';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = `hsl(${hue}, 100%, 70%)`;
    ctx.shadowColor = `hsl(${(hue + 180) % 360}, 100%, 50%)`;
    ctx.shadowBlur = 20;
    ctx.fillText(text, 0, 0);
    ctx.restore();

    angle += 0.01;
    hue = (hue + 1) % 360;

    requestAnimationFrame(draw);
}

draw();