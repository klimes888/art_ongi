// 모바일 메뉴 토글
const mobileMenuBtn = document.getElementById("mobileMenuBtn");

const koreanText = `
온기는 눈에 보이지 않아도 그 존재를 느낄 수 있습니다.<br />한 사람의
          몸과 마음에서 시작된 온기는 손끝, 발끝으로 퍼져나가<br />우리의 일상
          속 순간들을 지나며 번지고, 관계의 틈새를 따라 흐르며,<br />서로 다른
          존재들을 부드럽게 이어줍니다.<br />이번 전시는 그러한 온기의 흔적을
          따라가며 시작합니다.<br /><br />작가의 기억과 감정은 몸의 움직임을
          타고 흘러 작품에 스며듭니다.<br />우리는 걸음을 멈추게 하는 작품과
          마주하는 순간, 자신만의 온도로 작품의 온기를 서서히 받아들이게
          됩니다.<br />
          작가와 관람자 사이 서로의 공기가 포개어지면서 새로운 결이
          그려집니다.<br />
          헤어짐의 시간 속에서, 작품 곁에 남아있던 온기의 일부는 또 다른 곳을
          향해 나아갑니다.<br />이렇게 하나의 작품은 수없이 많은 겹침과 흩어짐을
          통해 온기의 형상을 만들어냅니다.<br /><br />작가들은 이번 전시를 향해
          걸어오며 공간과 시간을 함께 나누어왔습니다.<br />작업의 재료와 방식은
          달라도, 사물을 바라보는 시선과 손끝의 온기는 어느 순간 서로에게 영향을
          주며<br />미세한 울림을 만들어냅니다. 때로는 겹쳐지듯 닿고, 때로는
          흩어지며 각자의 자리로 돌아가는 과정은<br />매번 다른 모양으로
          이루어집니다. 그것이 작가에게는 의도치 않았더라도<br />작업의 폭을
          넓히는 작은 시작점이 되기도 합니다.<br /><br />작품마다 담긴 온기의
          결은 서로 다르지만,<br />그 안에는 작가들이 쌓아온 시간이 조용한
          층위를 이루고 있습니다.<br />그렇게 모여든 온기는 겹쳐지고 흩어지는
          흐름이 되어 공간을 채워갑니다.<br />지금 우리 앞에 머물러있는 온기를
          천천히 느껴보시기 바랍니다.`;

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

  const toggleLangBtn = document.getElementById("toggleLangBtn");
  const featureText = document.getElementById("featureText");
  let isKorean = true;

  const koreanText = featureText.innerHTML;
  const englishText = `
        Warmth is something that cannot be seen, yet its presence can be felt.<br />
        The warmth that begins from one’s body and mind spreads through the fingertips and toes,<br />
        passing through moments of our daily lives, flowing through the gaps between relationships,<br />
        and gently connecting different beings.<br />
        This exhibition begins by tracing those subtle traces of warmth.<br /><br />

        The artist’s memories and emotions flow through the movements of the body<br />
        and permeate into the work.<br />
        When we encounter a piece that makes us pause,<br />
        we slowly receive its warmth with a temperature uniquely our own.<br />
        As the air between artist and viewer overlaps,<br />
        a new texture quietly emerges.<br /><br />

        In the moment of parting, a fragment of the warmth that lingered beside the work<br />
        moves on toward another place.<br />
        In this way, each piece forms the shape of warmth<br />
        through countless overlaps and dispersals.<br /><br />

        The artists have walked toward this exhibition,<br />
        sharing space and time together.<br />
        Though their materials and methods differ,<br />
        their ways of observing objects and the warmth at their fingertips<br />
        influence one another, creating subtle resonances.<br />
        Sometimes they meet as if overlapping,<br />
        and at other times they scatter and return to their own places—<br />
        a process that takes a new form each time.<br />
        Even when unintentional, these encounters<br />
        often become small starting points that broaden the scope of their work.<br /><br />

        The textures of warmth held within each piece are different,<br />
        yet within them lie quiet layers of time accumulated by the artists.<br />
        Gathered together, these layers overlap and disperse,<br />
        becoming a flowing movement that fills the space.<br />
        We invite you to slowly feel the warmth that resides before us now.
    `;

  if (toggleLangBtn && featureText) {
    toggleLangBtn.addEventListener("click", () => {
      isKorean = !isKorean;
      featureText.innerHTML = isKorean ? koreanText : englishText;
      toggleLangBtn.textContent = isKorean ? "English ver." : "Korean ver.";
    });
  }
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

// js/artistRender.js
document.addEventListener("DOMContentLoaded", () => {
  const artistSection = document.getElementById("artistSection");

  // 카테고리 제목 매핑
  const categoryMap = {
    metal: "금속",
    pottery: "도자",
    glass: "유리",
    fabric: "섬유",
    lacquered: "옻칠",
  };

  // window.ARTISTS는 { metal: [...], pottery: [...] } 구조
  Object.entries(window.ARTISTS).forEach(([categoryKey, artists]) => {
    const categoryTitle = categoryMap[categoryKey] || categoryKey;

    // 카테고리 제목 출력
    artistSection.innerHTML += `
      <h3 class="text-xl md:text-2xl font-medium text-gray-900 mb-10">${categoryTitle}</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-16" id="group-${categoryKey}">
      </div>
    `;

    const groupContainer = document.getElementById(`group-${categoryKey}`);

    // 작가 카드 출력
    artists.forEach((artist) => {
      groupContainer.innerHTML += `
        <button
          type="button"
          class="flex flex-col text-left cursor-pointer"
          data-artist-card
          data-artist-name="${artist.name} ${artist.nameEn}"
          data-artist-image="${artist.image}"
          data-artist-desc="${artist.description.replace(/\n/g, "<br/>")}"
        >
          <div class="w-full aspect-square bg-gray-200 overflow-hidden rounded-md relative group">
            <img src="${
              artist.image
            }" class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" />
          </div>
          <h3 class="text-lg font-medium mt-4">${artist.name} ${
        artist.nameEn
      }</h3>
        </button>
      `;
    });
  });
});
