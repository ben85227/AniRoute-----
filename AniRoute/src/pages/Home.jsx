import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../scss/Home.scss'

const AniRoute = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);
  const [lightboxData, setLightboxData] = useState(null);
  const [activeAnimations, setActiveAnimations] = useState({
    navbar: false,
    features: false,
    tours: false,
    booking: false,
    contact: false
  });

  const sectionRefs = {
    hero: useRef(null),
    features: useRef(null),
    tours: useRef(null),
    booking: useRef(null),
    contact: useRef(null)
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActiveAnimations(prev => ({
              ...prev,
              [sectionId]: true
            }));
          }
        });
      },
      { threshold: 0.3 }
    );

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowTopButton(scrollY > 300);
      setActiveAnimations(prev => ({
        ...prev,
        navbar: scrollY > 100
      }));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const showLightbox = (title, content) => {
    setLightboxData({ title, content });
  };

  const closeLightbox = () => {
    setLightboxData(null);
  };

  const featuresData = [
    {
      title: "分鏡對位・熟門嚮導",
      description: "依作品分鏡標註站位與光線時段，提供對位座標與拍攝禮儀，到場就能重現名場面。食宿依巡禮動線精選，近車站與景點，早出卡位更從容。"
    },
    {
      title: "彈性行程安排・安心朝聖",
      description: "每日預留可替換的周邊店鋪／聯名咖啡／展覽，遇天候或人潮即時啟動 Plan B。附交通支援與即時客服，第一次朝聖也踏實。"
    },
    {
      title: "限定周邊・不漏特典",
      description: "整理限定販售與特典規則、Stamp Rally（集章）與排隊攻略，附庫存熱度＆退稅提醒，收藏更完整。"
    }
  ];

  const toursData = [
    {
  id: 1,
  number: "1",
  title: "孤獨搖滾！",
  subtitle: "下北澤的青春樂章",
  description: "從STARRY原型LIVE HOUSE到澀谷街角，追尋波奇與團員們的搖滾舞台。",
  image: "tours1.jpg",
},
{
  id: 2,
  number: "2",
  title: "你的名字。",
  subtitle: "跨越時空的奇蹟",
  description: "走訪四谷須賀神社、新宿街景與天橋，重溫瀧與三葉的感人邂逅。",
  image: "tours2.jpg",
},
{
  id: 3,
  number: "3",
  title: "Love Live!",
  subtitle: "秋葉原的偶像夢",
  description: "從神田明神到秋葉原街頭，重溫μ’s 的校園舞台與夢想起點。",
  image: "tours3.jpg",
},
{
  id: 4,
  number: "4",
  title: "聲之形",
  subtitle: "溫柔的青春軌跡",
  description: "大垣市的學校與河畔橋梁重現劇中場景，走進石田與西宮的故事現場。",
  image: "tours4.jpg",
},
{
  id: 5,
  number: "5",
  title: "鬼滅之刃",
  subtitle: "古都修行之路",
  description: "探訪貴船神社、嵐山與北野天滿宮，感受炭治郎踏上的修行氛圍。",
  image: "tours5.jpg",
},
{
  id: 6,
  number: "6",
  title: "偶像大師 SideM",
  subtitle: "大阪的舞台光輝",
  description: "京橋與道頓堀街景清楚登場，體驗偶像們在關西留下的熱情足跡。",
  image: "tours6.jpg",
}
  ];

  const bookingSteps = [
    {
      number: "1",
      title: "瀏覽行程",
      subtitle: "尋找您喜愛的行程類型",
      description: "我們提供多種不同的主題類型，您可以直接按照既有行程，或是部分進行客製化調整。"
    },
    {
      number: "2",
      title: "填寫線上需求表",
      subtitle: "提供基本資料及需求",
      description: "請提供您的基本資料及聯絡資訊，以及您初步的旅遊需求，包含出發日、天數、人數等資訊。"
    },
    {
      number: "3",
      title: "服務專員聯繫您確認",
      subtitle: "進行最後確認與相關作業",
      description: "我們將盡快與您確認行程規劃細節，提供報價、進行簽約及收款，並安排後續出團作業。"
    }
  ];

  return (
    <div className="Home">

      <section id="hero" ref={sectionRefs.hero} className="hero-section">
        <div className="hero-bg">
          <img src="HomeHero.png" alt="hero-image" className="hero-image" />
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-title">下一幕，在現實</h2>
            <p className="hero-subtitle">專為動漫迷打造的聖地巡禮行程</p>
            <p className="hero-description">作品地圖 × 專車動線 × 導遊帶路</p>
          </div>
        </div>
      </section>

      <section id="features" ref={sectionRefs.features} className="features-section">
        <div className="container">
          <div className="section-header">
            <p className="section-title">把喜歡走成現實</p>
            <p className="section-subtitle">選擇 AniRoute 的理由</p>
          </div>

          <div className="features-grid">
            {featuresData.map((feature, index) => (
              <div key={index} className={`feature-card ${activeAnimations.features ? 'animate' : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" ref={sectionRefs.booking} className="booking-section">
        <div className="container">
          <div className="section-header">
            <h2>Booking</h2>
            <h3>報名流程</h3>
          </div>

          <div className="booking-steps">
            {bookingSteps.map((step, index) => (
              <div key={index} className={`booking-step ${activeAnimations.booking ? 'animate' : ''}`} style={{ animationDelay: `${index * 0.3}s` }}>
                <div className="step-circle">
                  <span className="step-number">{step.number}</span>
                </div>
                <div className="step-content">
                  <h4 className="step-title">{step.title}</h4>
                  <p className="step-subtitle">{step.subtitle}</p>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

<section id="tours" ref={sectionRefs.tours} className="tours-section">
  <div className="container">
    <div className="tours-layout">
      <div className="section-title-left">
        <h2>Tours</h2>
        <h3>行程列表</h3>
        <button className="view-all-btn">
          <Link to="/TourList">查看全部 →</Link>
        </button>
      </div>

      <div className="tour-box">
        {toursData.slice(0, 6).map((tour) => (
            <Link to="/TourList" className="tour" key={tour.id}>
            <div className="mask" href="#">
              <img src={tour.image} alt={tour.title} />
              <div className="content">
                <h2 className="cn-title-s">{tour.title}</h2>
                <span className="center-line"></span>
                <p className="cn-content-s">{tour.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
</section>



      <section id="contact" ref={sectionRefs.contact} className="contact-section">
        <div className="split-banner">
          <Link to="/CustomizedTours" className="panel left">
            <span className="label">
              <h2>Customized Tours</h2>
              <h3>量身訂做</h3>
              <p>無論您是對行程已有想法，或需要規劃上的建議，動漫巡禮皆歡迎您與我們聯繫，我們將聆聽您的需求，為您量身訂製最適合您的行程。</p>
            </span>
          </Link>
          <Link to="/Contact" className="panel right">
            <span className="label">
              <h2>Contact Us</h2>
              <h3>聯絡我們</h3>
              <p>感謝您來訪動漫巡禮。若您對本公司旅遊行程，需要進一步詢皆歡迎您隨時與我們聯繫</p>
            </span>
          </Link>
        </div>
      </section>


      {showTopButton && (
        <button className="back-to-top" onClick={scrollToTop}>
          <img src="/api/placeholder/60/60" alt="Back to top" />
        </button>
      )}
    </div>
  );
};

export default AniRoute;
