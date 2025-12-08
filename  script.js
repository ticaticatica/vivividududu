document.addEventListener("DOMContentLoaded", () => {
  console.log("페이지 로드 완료!");

  // 카드(.card) 클릭 시 테두리 밝아졌다 돌아오는 효과
  const card = document.querySelector(".card");

  if (card) {
    card.addEventListener("click", () => {
      card.style.borderColor = "rgba(0,0,0,0.25)"; // 잠깐 진하게
      setTimeout(() => {
        card.style.borderColor = "rgba(0,0,0,0.08)"; // 복귀
      }, 150);
    });
  }

  // --------------------------------------------
  // ✨ 텍스트 각 단어를 자동으로 <span class="word"> 로 감싸기
  // --------------------------------------------

  const text = document.getElementById("wigglyText");
  if (!text) return;

  const lines = text.innerHTML.split("<br>");

  const processed = lines
    .map(line =>
      line
        .trim()
        .split(" ")
        .map(word => `<span class="word">${word}</span>`)
        .join(" ")
    )
    .join("<br>");

  text.innerHTML = processed;
});
