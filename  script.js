/* ---------------------------------------------------
   WORD WRAP FOR SUBTITLE (고정 버전)
--------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  const text = document.getElementById("wigglyText");

  if (text) {
    // 1) <br> 전후 공백 제거 + 개행 제거
    let cleanHTML = text.innerHTML
      .replace(/\r?\n|\r/g, "")        // 모든 개행 제거
      .replace(/\s*<br>\s*/g, "<br>")  // br 앞뒤 공백 제거
      .trim();

    // 2) <br> 기준으로 줄 분리
    const lines = cleanHTML.split("<br>");

    // 3) 각 단어 span화
    const processed = lines
      .map(line =>
        line
          .trim()
          .split(/\s+/)
          .map(word => `<span class="word">${word}</span>`)
          .join(" ")
      )
      .join("<br>"); // 다시 줄 합치기

    // 4) HTML 갱신
    text.innerHTML = processed;
  }
});

/* ---------------------------------------------------
   WAVY GRID CANVAS
--------------------------------------------------- */

const canvas = document.getElementById("wavyCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let t = 0;

function drawWavyGrid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const gridSize = 40;
  const waveStrength = 12; // 강도
  const speed = 0.003;

  ctx.strokeStyle = "rgba(0,0,0,0.25)";
  ctx.lineWidth = 1;

  // 수평선
  for (let y = 0; y < canvas.height; y += gridSize) {
    ctx.beginPath();
    for (let x = 0; x < canvas.width; x += 10) {
      let wave = Math.sin((x * 0.02) + (t * 2)) * waveStrength;
      ctx.lineTo(x, y + wave);
    }
    ctx.stroke();
  }

  // 수직선
  for (let x = 0; x < canvas.width; x += gridSize) {
    ctx.beginPath();
    for (let y = 0; y < canvas.height; y += 10) {
      let wave = Math.sin((y * 0.02) + (t * 2)) * waveStrength;
      ctx.lineTo(x + wave, y);
    }
    ctx.stroke();
  }

  t += speed;
  requestAnimationFrame(drawWavyGrid);
}

drawWavyGrid();

/* ---------------------------------------------------
   TITLE HOVER SPIN (회전 기능 복구)
--------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  const spinningTitle = document.getElementById("spinningTitle");
  const titleElement = spinningTitle?.querySelector(".title");

  if (spinningTitle && titleElement) {
    spinningTitle.addEventListener("mouseenter", () => {
      titleElement.classList.add("spin-fast");
    });

    spinningTitle.addEventListener("mouseleave", () => {
      titleElement.classList.remove("spin-fast");
    });
  }
});

