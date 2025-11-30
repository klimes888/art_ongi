/**
 * 스크롤 애니메이션 모듈
 * Intersection Observer API를 사용하여 뷰포트에 들어오는 요소에 애니메이션 적용
 */

class ScrollAnimationController {
  constructor() {
    this.observers = [];
    this.init();
  }

  /**
   * 초기화
   */
  init() {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => this.setupAnimations());
    } else {
      this.setupAnimations();
    }
  }

  /**
   * 애니메이션 설정
   */
  setupAnimations() {
    // 섹션 페이드인 애니메이션
    this.setupSectionAnimations();

    // 작가 카드 순차 애니메이션
    this.setupStaggerAnimations();

    // 크레딧 섹션 애니메이션
    this.setupCreditAnimations();
  }

  /**
   * 섹션 페이드인 애니메이션
   */
  setupSectionAnimations() {
    const sections = document.querySelectorAll(".animate-on-scroll");

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    sections.forEach((section) => {
      section.classList.add("opacity-0", "translate-y-8", "transition-all", "duration-700");
      sectionObserver.observe(section);
    });

    this.observers.push(sectionObserver);
  }

  /**
   * 작가 카드 순차 애니메이션 (Stagger effect)
   */
  setupStaggerAnimations() {
    const staggerGroups = document.querySelectorAll(".stagger-animation");

    staggerGroups.forEach((group) => {
      const items = group.querySelectorAll(".stagger-item");

      const staggerObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              items.forEach((item, index) => {
                setTimeout(() => {
                  item.classList.add("animate-fade-in-up");
                  item.classList.remove("opacity-0", "translate-y-8");
                }, index * 100); // 100ms씩 지연
              });
              staggerObserver.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        }
      );

      staggerObserver.observe(group);
      this.observers.push(staggerObserver);
    });
  }

  /**
   * 크레딧 섹션 애니메이션
   */
  setupCreditAnimations() {
    const creditColumns = document.querySelectorAll(".credit-column");

    const creditObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const columns = entry.target.querySelectorAll(".credit-column");
            columns.forEach((column, index) => {
              setTimeout(() => {
                column.classList.add("animate-fade-in-up");
                column.classList.remove("opacity-0", "translate-y-8");
              }, index * 150);
            });
            creditObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const creditSection = document.querySelector(".credit-section");
    if (creditSection) {
      creditObserver.observe(creditSection);
      this.observers.push(creditObserver);
    }
  }

  /**
   * 옵저버 정리
   */
  destroy() {
    this.observers.forEach((observer) => observer.disconnect());
    this.observers = [];
  }
}

// 전역 인스턴스 생성
const scrollAnimationController = new ScrollAnimationController();

// 페이지 언로드 시 정리
window.addEventListener("beforeunload", () => {
  scrollAnimationController.destroy();
});
