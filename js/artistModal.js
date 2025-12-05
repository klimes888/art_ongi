/**
 * 작가 모달 제어 모듈
 * 작가 카드 클릭 시 모달을 열고, 작가 정보를 표시합니다.
 */

class ArtistModal {
  constructor() {
    this.modal = null;
    this.modalName = null;
    this.modalNameEn = null;
    this.modalType = null;
    this.modalDesc = null;
    this.modalClose = null;
    this.modalYoutube = null;
    this.modalYoutubeContainer = null;
    this.modalContentContainer = null;
    this.artistImageSlider = null;
    this.modalPrevBtn = null;
    this.modalNextBtn = null;
    this.artistCards = null;

    this.currentImageIndex = 0;
    this.currentImages = [];

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
    this.modalName = document.getElementById("artistModalName");
    this.modalNameEn = document.getElementById("artistModalNameEn");
    this.modalType = document.getElementById("artistModalType");
    this.modalDesc = document.getElementById("artistModalDesc");
    this.modalClose = document.getElementById("artistModalClose");
    this.modalYoutube = document.getElementById("artistModalYoutube");
    this.modalYoutubeContainer = document.getElementById(
      "artistYoutubeContainer"
    );
    this.modalContentContainer = document.querySelector(".modal-content-container");
    this.artistImageSlider = document.getElementById("artistImageSlider");
    this.modalPrevBtn = document.getElementById("modalPrevBtn");
    this.modalNextBtn = document.getElementById("modalNextBtn");
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

    // 이미지 슬라이더 버튼
    if (this.modalPrevBtn) {
      this.modalPrevBtn.addEventListener("click", () => this.previousImage());
    }
    if (this.modalNextBtn) {
      this.modalNextBtn.addEventListener("click", () => this.nextImage());
    }
  }

  /**
   * 모달 열기
   * @param {HTMLElement} card - 클릭된 작가 카드 요소
   */
  openModal(card) {
    // 카드의 데이터 속성에서 작가 ID 가져오기
    const artistId = parseInt(card.getAttribute("data-artist-id"));

    // ARTISTS 배열에서 해당 작가 정보 찾기
    const artist = window.ARTISTS.find((a) => a.id === artistId);

    if (!artist) {
      console.warn("Artist not found:", artistId);
      return;
    }

    // 모달에 정보 설정
    this.modalName.textContent = artist.name;
    this.modalNameEn.textContent = artist.nameEn;
    this.modalType.textContent = artist.type || "";
    this.modalDesc.textContent = artist.description || "";

    // 타입이 없으면 태그 숨기기
    if (!artist.type) {
      this.modalType.style.display = "none";
    } else {
      this.modalType.style.display = "inline-block";
    }

    // 유튜브 설정
    if (artist.youtube) {
      this.modalYoutube.src = artist.youtube;
      this.modalYoutubeContainer.style.display = "block";
      // 콘텐츠 영역을 8칼럼으로 설정
      if (this.modalContentContainer) {
        this.modalContentContainer.classList.remove("md:col-span-12");
        this.modalContentContainer.classList.add("md:col-span-8");
      }
    } else {
      this.modalYoutubeContainer.style.display = "none";
      // 콘텐츠 영역을 12칼럼(전체 너비)으로 설정
      if (this.modalContentContainer) {
        this.modalContentContainer.classList.remove("md:col-span-8");
        this.modalContentContainer.classList.add("md:col-span-12");
      }
    }

    // 이미지 슬라이더 설정
    this.setupImageSlider(artist.modalImg || []);

    // 모달 표시
    this.modal.classList.remove("hidden");
    this.modal.classList.add("flex");

    // body 스크롤 방지
    document.body.style.overflow = "hidden";
  }

  /**
   * 이미지 슬라이더 설정
   */
  setupImageSlider(images) {
    this.currentImages = images;
    this.currentImageIndex = 0;

    // 슬라이더 초기화
    this.artistImageSlider.innerHTML = "";

    if (images.length === 0) {
      this.artistImageSlider.innerHTML =
        '<div class="w-full h-full flex items-center justify-center text-gray-400">이미지가 없습니다</div>';
      this.modalPrevBtn.style.display = "none";
      this.modalNextBtn.style.display = "none";
      return;
    }

    // 이미지 추가
    images.forEach((imgSrc, index) => {
      const img = document.createElement("img");
      img.src = `assets/artist/${imgSrc}`;
      img.alt = `작품 이미지 ${index + 1}`;
      img.loading = "lazy";
      img.className =
        "absolute inset-0 w-full h-full object-contain transition-opacity duration-300";
      img.style.opacity = index === 0 ? "1" : "0";
      this.artistImageSlider.appendChild(img);
    });

    // 버튼 표시 여부 (이미지가 2개 이상일 때만)
    if (images.length > 1) {
      this.modalPrevBtn.style.display = "block";
      this.modalNextBtn.style.display = "block";
    } else {
      this.modalPrevBtn.style.display = "none";
      this.modalNextBtn.style.display = "none";
    }
  }

  /**
   * 다음 이미지
   */
  nextImage() {
    if (this.currentImages.length <= 1) return;

    const images = this.artistImageSlider.querySelectorAll("img");
    images[this.currentImageIndex].style.opacity = "0";

    this.currentImageIndex =
      (this.currentImageIndex + 1) % this.currentImages.length;
    images[this.currentImageIndex].style.opacity = "1";
  }

  /**
   * 이전 이미지
   */
  previousImage() {
    if (this.currentImages.length <= 1) return;

    const images = this.artistImageSlider.querySelectorAll("img");
    images[this.currentImageIndex].style.opacity = "0";

    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.currentImages.length) %
      this.currentImages.length;
    images[this.currentImageIndex].style.opacity = "1";
  }

  /**
   * 모달 닫기
   */
  closeModal() {
    this.modal.classList.add("hidden");
    this.modal.classList.remove("flex");

    // 유튜브 정지
    this.modalYoutube.src = "";

    // body 스크롤 복원
    document.body.style.overflow = "";
  }
}

// 모달 인스턴스 생성 (전역으로 노출)
window.artistModal = new ArtistModal();
