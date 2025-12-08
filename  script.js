document.addEventListener("DOMContentLoaded", () => {
  console.log("페이지 로드 완료!");

  /* ----------------------------
     카드 클릭 시 테두리 반짝
  ---------------------------- */
  const card = document.querySelector(".card");

  if (card) {
    card.addEventListener("click", () => {
      card.style.borderColor = "rgba(0,0,0,0.25)";
      setTimeout(() => {
        card.style.borderColor = "rgba(0,0,0,0.08)";
      }, 150);
    });
  }

  /* ----------------------------
     단어를 span.word로 자동 래핑
  ---------------------------- */
  const text = document.getElementById("wigglyText");

  if (text) {
    const lines = text.innerHTML.split("<br>");

    const processed = lines
      .map(line =>
        line
          .trim()
          .split(/\s+/)
          .map(word => `<span class="word">${word}</span>`)
          .join(" ")
      )
      .join("<br>");

    text.innerHTML = processed;
  }

  /* ----------------------------
     제목 회전은 JS 사용 ❌
     hover 기반으로 CSS에서 처리함
  ---------------------------- */
});
