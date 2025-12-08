document.addEventListener("DOMContentLoaded", () => {
  console.log("페이지 로드 완료!");

  /* ---------------------------------------------------
     1) 카드(.card) 클릭 시 테두리 밝아졌다 돌아오는 효과
  --------------------------------------------------- */
  const card = document.querySelector(".card");

  if (card) {
    card.addEventListener("click", () => {
      card.style.borderColor = "rgba(0,0,0,0.25)";
      setTimeout(() => {
        card.style.borderColor = "rgba(0,0,0,0.08)";
      }, 150);
    });
  }

  /* ---------------------------------------------------
     2) 텍스트 각 단어를 자동으로 <span class="word"> 로 감싸기
  --------------------------------------------------- */
  const text = document.getElementById("wigglyText");

  if (text) {
    const lines = text.innerHTML.split("<br>");

    const processed = lines
      .map(line =>
        line
          .trim()
          .split(/\s+/)     // 🔥 줄 앞·공백 문제 해결
          .map(word => `<span class="word">${word}</span>`)
          .join(" ")
      )
      .join("<br>");

    text.innerHTML = processed;
  }

  /* ---------------------------------------------------
     3) 제목 회전 효과 (삭제됨 — hover로 대체됨)
  --------------------------------------------------- */

  // ❌ 이
