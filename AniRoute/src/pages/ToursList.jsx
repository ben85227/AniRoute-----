import React from 'react';
import '../scss/ToursList.scss'

const ToursList = () => {
  const TokiyoTours = [
    {
      id: 1,
      image: "./images/milford-sound-s.jpg",
      title: "《孤獨搖滾！》",
      description: "走進《孤獨搖滾！》舞台，下北澤LIVE HOUSE、澀谷街角都能找到劇中場景。從「STARRY」原型到澀谷十字路口，重現波奇的青春日常，一邊拍照、一邊感受現場搖滾氛圍。"
    },
    {
      id: 2,
      image: "./images/lake-matheson-s.jpg",
      title: "《你的名字。》",
      description: "重溫《你的名字。》名場面，走訪四谷須賀神社石階、新宿街景與天橋。沿著瀧與三葉的足跡，體驗那份跨越時空的青春邂逅。"
    },
    {
      id: 3,
      image: "./images/rotorua-s.jpg",
      title: "《Love Live!》",
      description: "《Love Live!》粉絲必訪秋葉原與神田明神。從校園原型到祈願聖地，一路重現μ’s 的日常舞台，感受偶像夢想的熱血氣氛。"
    }
  ];

  const KyotoTours = [
    {
      id: 4,
      image: "./images/dunedin-s.jpg",
      title: "《涼宮春日的憂鬱》",
      description: "追尋SOS團的日常舞台，從西宮北高校原型到夙川河岸，沿著街道感受春日與夥伴們的青春足跡，體驗還原度極高的名場景。"
    },
    {
      id: 5,
      image: "./images/glacier-s.jpg",
      title: "《聲之形》",
      description: "走訪《聲之形》取景地大垣，從學校、橋梁到河畔步道，重溫石田與西宮的相遇與和解，感受細膩青春的溫柔氛圍。"
    },
    {
      id: 6,
      image: "./images/wanaka-dark-s.jpg",
      title: "《鬼滅之刃》",
      description: "京都的貴船神社、嵐山與古老神社，被視為《鬼滅之刃》靈感舞台。沿途山林寺社氛圍濃厚，仿佛與炭治郎一同踏上修行之路。"
    }
  ];

  const OsakaTours = [
    {
      id: 7,
      image: "./images/mt-cook-s.jpg",
      title: "《名偵探柯南：迷宮的十字路》",
      description: "大阪是服部平次的舞台，從大阪城到通天閣與新世界都在劇中登場。走進熱鬧街區，親身體驗推理與青春交織的經典場景。"
    },
    {
      id: 8,
      image: "./images/queenstown-s.jpg",
      title: "《Free! 男子游泳部》",
      description: "動畫中角色曾造訪大阪港與海遊館。沿著港灣散步、走進水族館，就像與遙和真琴一同追逐友情與水花。"
    },
    {
      id: 9,
      image: "./images/ski-s.jpg",
      title: "《偶像大師 SideM》",
      description: "作品裡偶像們在大阪舉辦活動，京橋與道頓堀街景清楚登場。沿途不只還原動畫氛圍，也能感受現實舞台的熱情活力。"
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
            <h2 className="banner-title-cn">行程列表</h2>
            <h3 className="banner-title-en">Tours List</h3>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Regional Tours Section */}
        <section className="tour-section">
          <div className="section-header">
            <h2 className="section-title-en">Tokiyo Tours</h2>
            <h3 className="section-title-cn">東京地區</h3>
          </div>
          <div className="tours-grid">
            {TokiyoTours.map(tour => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </section>

        {/* Themed Tours Section */}
        <section className="tour-section">
          <div className="section-header">
            <h2 className="section-title-en">Kyoto Tours</h2>
            <h3 className="section-title-cn">京都地區</h3>
          </div>
          <div className="tours-grid">
            {KyotoTours.map(tour => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </section>

        {/* Sports Tours Section */}
        <section className="tour-section">
          <div className="section-header">
            <h2 className="section-title-en">Osaka Tours</h2>
            <h3 className="section-title-cn">大阪地區</h3>
          </div>
          <div className="tours-grid">
            {OsakaTours.map(tour => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ToursList;