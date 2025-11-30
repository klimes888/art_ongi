// 참여 작가 데이터
window.ARTISTS = {
  metal: [
    {
      id: 1,
      name: "박송희",
      nameEn: "Park Song-hee",
      image: "assets/art/parksonghee.jpeg",
      description: ``,
    },
    {
      id: 2,
      name: "김주연",
      nameEn: "Kim Ju-yeon",
      image: "assets/art/kimjuyeon.jpeg",
      description: ``,
    },
    {
      id: 3,
      name: "조수아",
      nameEn: "Jo Su-a",
      image: "assets/art/josua.jpeg",
      description: ``,
    },
  ],
  pottery: [
    {
      id: 1,
      name: "홍길동",
      nameEn: "Hong Gil-dong",
      image: "assets/art/artist1.jpg",
      description: `홍길동 작가는 일상의 사물과 공간에 대한 새로운 해석을 통해 설치와 조각 작업을 선보입니다.

그의 작업은 관람객이 공간 속에서 직접 경험하고 상호작용할 수 있는 환경을 만들어냅니다. 재료의 물성과 형태를 탐구하며, 시간의 흐름 속에서 변화하는 작품의 특성을 중요하게 다룹니다.`,
    },
  ],
  glass: [],
  fabric: [],
  lacquered: [],
};

// 전역에서 사용 가능하도록 export
if (typeof module !== "undefined" && module.exports) {
  module.exports = artistsData;
}
