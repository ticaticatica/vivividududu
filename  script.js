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
          .split(" ")
          .map(word => `<span class="word">${word}</span>`)
          .join(" ")
      )
      .join("<br>");

    text.innerHTML = processed;
  }

  /* ---------------------------------------------------
     3) Title(Welcome to / Viddle Village) 회전 효과
        - 기본적으로 천천히 회전
        - 클릭하면 빠르게 회전 후 원래 상태로 복귀
  --------------------------------------------------- */
  const spinningTitle = document.getElementById("spinningTitle");

  if (spinningTitle) {
    spinningTitle.addEventListener("click", () => {
      // 빠르게 회전하는 클래스 추가
      spinningTitle.classList.add("spin-fast");

      // 1.5초 후 다시 느린 회전으로 복귀
      setTimeout(() => {
        spinningTitle.classList.remove("spin-fast");
      }, 1500);
    });
  }
});
