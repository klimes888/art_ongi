// 모바일 메뉴 토글
const mobileMenuBtn = document.getElementById("mobileMenuBtn");

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", function () {
    console.log("모바일 메뉴 클릭");
    // 모바일 메뉴 기능은 필요에 따라 추가하세요
  });
}

// 페이지 로드 완료 시
document.addEventListener("DOMContentLoaded", function () {
  console.log("랜딩 페이지 로드 완료");

  // 스무스 스크롤
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});

// 스크롤 애니메이션 예제
window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;

  // 헤더 배경 변경 예제
  const header = document.querySelector("header");
  if (scrollPosition > 50) {
    header.classList.add("shadow-md");
  } else {
    header.classList.remove("shadow-md");
  }
});
