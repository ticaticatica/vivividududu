document.addEventListener("DOMContentLoaded", () => {

  const text = document.getElementById("wigglyText");

  if (text) {
    // 1) HTML에서 <br>을 특별한 구분자로 치환
    let raw = text.innerHTML
      .replace(/<br\s*\/?>/gi, "__BR__")
      .replace(/\r?\n|\r/g, "__BR__");

    // 2) 구분자를 기준으로 줄 분리
    const lines = raw.split("__BR__").filter(l => l.trim() !== "");

    // 3) 줄 → 단어 → span 변환
    const processed = lines.map(line => {
      const angle = (Math.random() * 10 - 5).toFixed(2);

      const words = line.trim().split(/\s+/);
      const wordHTML = words
        .map(w => `<span class="word">${w}</span>`)
        .join(" ");

      return `<span class="line" style="--line-tilt:${angle}deg;">${wordHTML}</span>`;
    }).join("<br>");

    text.innerHTML = processed;
  }
});


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
