// 참여 작가 데이터
const artistsData = [
  {
    id: 1,
    name: "홍길동",
    nameEn: "Hong Gil-dong",
    role: "설치 · 조각",
    image: "assets/artist1.jpg",
    description: `홍길동 작가는 일상의 사물과 공간에 대한 새로운 해석을 통해 설치와 조각 작업을 선보입니다.

그의 작업은 관람객이 공간 속에서 직접 경험하고 상호작용할 수 있는 환경을 만들어냅니다. 재료의 물성과 형태를 탐구하며, 시간의 흐름 속에서 변화하는 작품의 특성을 중요하게 다룹니다.`,
  },
  {
    id: 2,
    name: "김예지",
    nameEn: "Kim Yeji",
    role: "회화 · 드로잉",
    image: "assets/artist2.jpg",
    description: `김예지 작가는 회화와 드로잉을 통해 내면의 감정과 기억을 시각화합니다.

색채와 선의 반복적인 레이어링을 통해 시간의 축적을 표현하며, 추상과 구상 사이의 경계를 탐색합니다. 그녀의 작업은 개인적인 서사를 보편적인 감정으로 확장시키는 과정을 담고 있습니다.`,
  },
  {
    id: 3,
    name: "박서연",
    nameEn: "Park Seoyeon",
    role: "미디어 · 영상",
    image: "assets/artist3.jpg",
    description: `박서연 작가는 미디어와 영상을 활용하여 현대사회의 소통 방식과 관계의 양상을 탐구합니다.

디지털과 아날로그의 경계에서 발생하는 현상들을 포착하며, 기술이 인간의 감정과 경험에 미치는 영향을 작품으로 풀어냅니다. 인터랙티브 요소를 통해 관람객의 참여를 유도하는 것이 특징입니다.`,
  },
];

// 전역에서 사용 가능하도록 export
if (typeof module !== "undefined" && module.exports) {
  module.exports = artistsData;
}
