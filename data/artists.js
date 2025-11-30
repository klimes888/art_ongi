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
      name: "박윤서",
      nameEn: "Park Yoon-seo",
      image: "assets/art/parkyoonseo.jpeg",
      description: ``,
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
