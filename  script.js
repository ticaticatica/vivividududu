

document.addEventListener("DOMContentLoaded", () => {

  /* -----------------------------
     SUBTITLE: 줄 분석 + 단어 재구성
  ------------------------------ */
  const text = document.getElementById("wigglyText");

  if (!text) {
    console.warn("Element #wigglyText not found");
    return;
  }

  const raw = text.innerText || text.textContent;
  
  if (!raw || raw.trim() === "") {
    console.warn("#wigglyText is empty");
    return;
  }

  const lines = raw.split(/\r?\n/).filter(l => l.trim() !== "");

  const processed = lines.map((line, lineIndex) => {
    const angle = (Math.random() * CONFIG.TILT_RANGE - CONFIG.TILT_RANGE / 2).toFixed(2);
    const lineDelay = (lineIndex * CONFIG.LINE_DELAY).toFixed(2);
    
    const words = line.trim().split(/\s+/);
    const wordHTML = words
      .map((w, wordIndex) => {
        const wordDelay = (wordIndex * CONFIG.WORD_DELAY).toFixed(2);
        return `<span class="word" style="animation-delay: ${wordDelay}s;">${w}</span>`;
      })
      .join(" ");

    return `<span class="line" style="--line-tilt:${angle}deg; animation-delay: ${lineDelay}s;">${wordHTML}</span>`;
  }).join("<br>");

  text.innerHTML = processed;

  /* -----------------------------
     TITLE HOVER & CLICK SPIN
  ------------------------------ */
  const spinningTitle = document.getElementById("spinningTitle");
  const titleElement = spinningTitle?.querySelector(".title");

  if (spinningTitle && titleElement) {
    let isSpinning = false;

    // Hover 효과
    spinningTitle.addEventListener("mouseenter", () => {
      if (!isSpinning) {
        titleElement.classList.add("spin-fast");
      }
    });

    spinningTitle.addEventListener("mouseleave", () => {
      if (!isSpinning) {
        titleElement.classList.remove("spin-fast");
      }
    });

    // 클릭으로 지속 회전 토글
    spinningTitle.addEventListener("click", () => {
      isSpinning = !isSpinning;
      
      if (isSpinning) {
        titleElement.classList.add("spin-fast");
      } else {
        titleElement.classList.remove("spin-fast");
      }
    });
  }

  /* -----------------------------
     에러 핸들링
  ------------------------------ */
  window.addEventListener("error", (e) => {
    console.error("Animation error:", e.message);
  });
});