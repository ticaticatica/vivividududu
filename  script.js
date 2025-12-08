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
     2) 단어를 자동으로 <span class="word"> 로 감싸고
        각 줄을 <div class="line"> 로 감싸기
        → nth-child가 정확하게 작동하게 만드는 핵심 코드
  --------------------------------------------------- */
  const text = document.getElementById("wigglyText");

  if (text) {

    // <br> 기준으로 줄 분리
    const lines = text.innerHTML.trim().split("<br>");

    // 각 줄을 line div로 감싸고, 단어는 span으로 감싸기
    const processed = lines
      .map(line => {
        const words = line
          .trim()
          .split(/\s+/) // 모든 공백 제거 및 단어 분리
          .map(word => `<span class="word">${word}</span>`)
          .join(" ");

        return `<div class="line">${words}</div>`;
      })
      .join("");

    // HTML 교체
    text.innerHTML = processed;
  }

  /* ---------------------------------------------------
     3) 제목 회전은 CSS hover로 처리하므로 JS 필요 없음
  --------------------------------------------------- */

});
