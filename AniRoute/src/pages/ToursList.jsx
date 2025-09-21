import React from 'react';
import '../scss/ToursList.scss'

const ToursList = () => {
  const regionalTours = [
    {
      id: 1,
      image: "./images/milford-sound-s.jpg",
      title: "經典南北島全覽 13 日",
      description: "囊括經典知名景點，初訪紐西蘭必玩路線；同時包含大自然體驗，以及城市人文探索；老少咸宜，步調舒適，感受紐西蘭的優美純淨。"
    },
    {
      id: 2,
      image: "./images/lake-matheson-s.jpg",
      title: "南島深度遊 10 日",
      description: "將帶您深入南島的心臟，探索這片大自然的奇蹟之地，感受瑰麗的冰川峽谷、壯麗的山川湖泊，以及獨特的動植物世界。"
    },
    {
      id: 3,
      image: "./images/rotorua-s.jpg",
      title: "北島深度遊 6 日",
      description: "同時探索紐西蘭北島的自然奇觀和文化瑰寶，從熱情的毛利文化、壯麗的火山地貌，到現代城市生活，這段旅程將帶您深入體驗北島的魅力。"
    }
  ];

  const themedTours = [
    {
      id: 4,
      image: "./images/dunedin-s.jpg",
      title: "南島海岸遊 6 日",
      description: "踏上紐西蘭南島海岸線的奇幻之旅，您將探索壯麗的海岸景色、純淨的自然風光，以及探索各種環繞海岸的可愛動物們。"
    },
    {
      id: 5,
      image: "./images/glacier-s.jpg",
      title: "南島冒險遊 4 日",
      description: "踏上紐西蘭南島的冒險之旅，您將挑戰極限，感受前所未有的刺激與快樂。從高空跳傘、高空彈跳到冰川徒步冒險，為您帶來一生難忘的回憶。"
    },
    {
      id: 6,
      image: "./images/wanaka-dark-s.jpg",
      title: "南島攝影 6 日",
      description: "探索紐西蘭南島最壯麗的景色，捕捉大自然的神奇瞬間。從冰川到湖泊，從高山到海岸，讓您用鏡頭記錄南島的無限魅力。"
    }
  ];

  const sportsTours = [
    {
      id: 7,
      image: "./images/mt-cook-s.jpg",
      title: "南北島登山遊 10 日",
      description: "挑戰自我，征服高峰，踏上紐西蘭南北島的登山之旅。您將攀登東加里羅山的壯麗山脈，探索迷人的國家公園，感受大自然的無限魅力。"
    },
    {
      id: 8,
      image: "./images/queenstown-s.jpg",
      title: "南島單車遊 10 日",
      description: "您將騎行穿越壯麗的山川湖泊，探索迷人的小鎮和風景如畫的鄉村，讓您以單車近距離感受南島的自然美景和無盡魅力。"
    },
    {
      id: 9,
      image: "./images/ski-s.jpg",
      title: "南島滑雪遊 8 日",
      description: "體驗紐西蘭南島的冬季奇觀，探索世界級的滑雪勝地。從皇后鎮到瓦納卡的滑雪場，這次旅程將為滑雪愛好者提供絕佳的滑雪體驗和無與倫比的美景。"
    }
  ];

  const TourCard = ({ tour }) => (
    <div className="tour-card">
      <div className="tour-image">
        <img src={tour.image} alt={tour.title} />
      </div>
      <div className="tour-content">
        <h3 className="tour-title">{tour.title}</h3>
        <p className="tour-description">{tour.description}</p>
      </div>
    </div>
  );

  return (
    <div className="tours-page">
      {/* Header Banner */}
      <div className="banner">
        <div className="banner-overlay">
          <div className="banner-content">
            <h1 className="banner-title-en">Tours List</h1>
            <h2 className="banner-title-cn">行程列表</h2>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Regional Tours Section */}
        <section className="tour-section">
          <div className="section-header">
            <h2 className="section-title-en">Regional Tours</h2>
            <h3 className="section-title-cn">地區深度遊</h3>
          </div>
          <div className="tours-grid">
            {regionalTours.map(tour => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </section>

        {/* Themed Tours Section */}
        <section className="tour-section">
          <div className="section-header">
            <h2 className="section-title-en">Themed Tours</h2>
            <h3 className="section-title-cn">主題系列</h3>
          </div>
          <div className="tours-grid">
            {themedTours.map(tour => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </section>

        {/* Sports Tours Section */}
        <section className="tour-section">
          <div className="section-header">
            <h2 className="section-title-en">Sports Tours</h2>
            <h3 className="section-title-cn">運動系列</h3>
          </div>
          <div className="tours-grid">
            {sportsTours.map(tour => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ToursList;