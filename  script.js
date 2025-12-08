document.addEventListener("DOMContentLoaded", () => {

  /* -----------------------------
     SUBTITLE: 줄 분석 + 단어 재구성
  ------------------------------ */
  const text = document.getElementById("wigglyText");

  if (text) {
    const raw = text.innerText;
    const lines = raw.split(/\r?\n/).filter(l => l.trim() !== "");

    const processed = lines.map(line => {
      const angle = (Math.random() * 10 - 5).toFixed(2); // -5~+5도
      const words = line.trim().split(/\s+/);
      const wordHTML = words
        .map(w => `<span class="word">${w}</span>`)
        .join(" ");

      return `<span class="line" style="--line-tilt:${angle}deg;">${wordHTML}</span>`;
    }).join("<br>");

    text.innerHTML = processed;
  }

  /* -----------------------------
     TITLE HOVER SPIN
  ------------------------------ */
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



  /* ---------------------------------------------------
     WAVY GRID CANVAS
  --------------------------------------------------- */
  /*const canvas = document.getElementById("wavyCanvas");
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
    const waveStrength = 12;
    const speed = 0.003;

    ctx.strokeStyle = "rgba(0,0,0,0.2)";
    ctx.lineWidth = 1;

    // Horizontal lines
    for (let y = 0; y < canvas.height; y += gridSize) {
      ctx.beginPath();
      for (let x = 0; x < canvas.width; x += 10) {
        const wave = Math.sin((x * 0.02) + (t * 2)) * waveStrength;
        ctx.lineTo(x, y + wave);
      }
      ctx.stroke();
    }

    // Vertical lines
    for (let x = 0; x < canvas.width; x += gridSize) {
      ctx.beginPath();
      for (let y = 0; y < canvas.height; y += 10) {
        const wave = Math.sin((y * 0.02) + (t * 2)) * waveStrength;
        ctx.lineTo(x + wave, y);
      }
      ctx.stroke();
    }

    t += speed;
    requestAnimationFrame(drawWavyGrid);
  }

  drawWavyGrid(); */
