document.addEventListener("DOMContentLoaded", () => {

  const text = document.getElementById("wigglyText");
  if (!text) return;

  // 1) 불필요한 개행 제거 + <br> 양옆 공백 제거
  let cleanHTML = text.innerHTML
    .replace(/\r?\n|\r/g, "")       // 모든 줄바꿈 제거
    .replace(/\s*<br>\s*/g, "<br>") // br 주변 공백 제거
    .trim();

  // 2) <br> 기준으로 라인 분리
  const lines = cleanHTML.split("<br>");

  // 3) 각 라인을 단어로 분리하고 <span class="word"> 감싸기
  const processed = lines
    .map(line =>
      line
        .trim()
        .split(/\s+/)               // 여러 칸 공백도 단어 구분자로 처리
        .filter(word => word.length > 0) // 빈 단어 제거
        .map(word => `<span class="word">${word}</span>`)
        .join(" ")
    )
    .join("<br>");

  // 4) HTML 다시 삽입
  text.innerHTML = processed;
});
