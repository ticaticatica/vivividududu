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
