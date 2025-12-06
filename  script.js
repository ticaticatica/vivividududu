// 페이지가 모두 로드된 후 실행됨
document.addEventListener("DOMContentLoaded", () => {
  console.log("페이지 로드 완료!");

  // .card 요소를 찾아서
  const card = document.querySelector(".card");

  // 카드가 클릭되면 테두리가 살짝 진해졌다가 돌아오는 효과
  if (card) {
    card.addEventListener("click", () => {
      card.style.borderColor = "rgba(0,0,0,0.25)"; // 잠깐 진하게
      setTimeout(() => {
        card.style.borderColor = "rgba(0,0,0,0.08)"; // 원래대로 복귀
      }, 150);
    });
  }
});
