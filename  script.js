// ---------------------------------------------
// 1) SUBTITLE: Word-by-word wiggly animation
// ---------------------------------------------
document.addEventListener("DOMContentLoaded", () => {

  const text = document.getElementById("wigglyText");
  if (!text) return;

  // clean up breaks / spaces
  let cleanHTML = text.innerHTML
    .replace(/\r?\n|\r/g, "")
    .replace(/\s*<br>\s*/g, "<br>")
    .trim();

  const lines = cleanHTML.split("<br>");

  const processed = lines
    .map(line =>
      line
        .trim()
        .split(/\s+/)
        .filter(w => w.length > 0)
        .map(word => `<span class="word">${word}</span>`)
        .join(" ")
    )
    .join("<br>");

  text.innerHTML = processed;
});

// ---------------------------------------------
// 2) WAVY GRID CANVAS
// ---------------------------------------------
const canvas = document.getElementById("wavyCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let gridSize = 40;       // 격자 간격
let waveSpeed = 0.0015;  // 물결 속도
let waveStrength = 6;    // 물결 세기

let t = 0;

function drawGrid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "rgba(0,0,0,0.06)";
  ctx.lineWidth = 1;

  // vertical lines
  for (let x = 0; x < canvas.width; x += gridSize) {
    ctx.beginPath();
    for (let y = 0; y < canvas.height; y += 5) {
      let offset = Math.sin((y * 0.03) + t) * waveStrength;
      ctx.lineTo(x + offset, y);
    }
    ctx.stroke();
  }

  // horizontal lines
  for (let y = 0; y < canvas.height; y += gridSize) {
    ctx.beginPath();
    for (let x = 0; x < canvas.width; x += 5) {
      let offset = Math.sin((x * 0.03) + t) * waveStrength;
      ctx.lineTo(x, y + offset);
    }
    ctx.stroke();
  }
}

function animate() {
  t += waveSpeed * 60;
  drawGrid();
  requestAnimationFrame(animate);
}

animate();
