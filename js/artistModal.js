/**
 * 작가 모달 제어 모듈
 * 작가 카드 클릭 시 모달을 열고, 작가 정보를 표시합니다.
 */

class ArtistModal {
  constructor() {
    this.modal = null;
    this.modalImage = null;
    this.modalName = null;
    this.modalRole = null;
    this.modalDesc = null;
    this.modalClose = null;
    this.artistCards = null;

    this.init();
  }

  /**
   * 모달 초기화
   */
  init() {
    // DOM 로드 완료 후 실행
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => this.setupModal());
    } else {
      this.setupModal();
    }
  }

  /**
   * 모달 설정
   */
  setupModal() {
    // DOM 요소 가져오기
    this.modal = document.getElementById("artistModal");
    this.modalImage = document.getElementById("artistModalImage");
    this.modalName = document.getElementById("artistModalName");
    this.modalRole = document.getElementById("artistModalRole");
    this.modalDesc = document.getElementById("artistModalDesc");
    this.modalClose = document.getElementById("artistModalClose");
    this.artistCards = document.querySelectorAll("[data-artist-card]");

    // 필수 요소가 없으면 종료
    if (!this.modal || !this.artistCards.length) {
      console.warn("Artist modal elements not found");
      return;
    }

    // 이벤트 리스너 등록
    this.attachEventListeners();
  }

  /**
   * 이벤트 리스너 등록
   */
  attachEventListeners() {
    // 각 작가 카드에 클릭 이벤트 추가
    this.artistCards.forEach((card) => {
      card.addEventListener("click", () => this.openModal(card));
    });

    // 닫기 버튼
    if (this.modalClose) {
      this.modalClose.addEventListener("click", () => this.closeModal());
    }

    // 모달 바깥 클릭 시 닫기
    this.modal.addEventListener("click", (e) => {
      if (e.target === this.modal) {
        this.closeModal();
      }
    });

    // ESC 키로 닫기
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !this.modal.classList.contains("hidden")) {
        this.closeModal();
      }
    });
  }

  /**
   * 모달 열기
   * @param {HTMLElement} card - 클릭된 작가 카드 요소
   */
  openModal(card) {
    // 카드의 데이터 속성에서 작가 정보 가져오기
    const name = card.getAttribute("data-artist-name") || "";
    const role = card.getAttribute("data-artist-role") || "";
    const image = card.getAttribute("data-artist-image") || "";
    const desc = card.getAttribute("data-artist-desc") || "";

    // 모달에 정보 설정
    this.modalImage.src = image;
    this.modalImage.alt = name;
    this.modalName.textContent = name;
    this.modalRole.textContent = role;
    this.modalDesc.textContent = desc;

    // 모달 표시
    this.modal.classList.remove("hidden");
    this.modal.classList.add("flex");

    // body 스크롤 방지
    document.body.style.overflow = "hidden";
  }

  /**
   * 모달 닫기
   */
  closeModal() {
    this.modal.classList.add("hidden");
    this.modal.classList.remove("flex");

    // body 스크롤 복원
    document.body.style.overflow = "";
  }
}

// 모달 인스턴스 생성
const artistModal = new ArtistModal();
