import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../scss/Home.scss'

const SafeTravel = () => {
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
      title: "白雪奇緣",
      subtitle: "天雪怪旅外遊",
      description: "探索紐西蘭南島的壯麗雪山風光",
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      number: "2",
      title: "龍征傳說",
      subtitle: "古山中奇歷險",
      description: "深入中土世界的魔戒拍攝場景",
      image: "/api/placeholder/300/200"
    },
    {
      id: 3,
      number: "3",
      title: "智慧魔法",
      subtitle: "",
      description: "體驗紐西蘭獨特的文化與自然奇觀",
      image: "/api/placeholder/300/200"
    },
    {
      id: 4,
      number: "4",
      title: "海上族城堡",
      subtitle: "霧上龍宮",
      description: "探索海岸線的壯麗城堡與秘境",
      image: "/api/placeholder/300/200"
    },
    {
      id: 5,
      number: "5",
      title: "Jojo冒險奇遇 星塵鬥士篇",
      subtitle: "",
      description: "跟隨經典動漫場景的冒險之旅",
      image: "/api/placeholder/300/200"
    },
    {
      id: 6,
      number: "6",
      title: "南島巡迴之冒",
      subtitle: "千里遊歷",
      description: "完整體驗紐西蘭南島精華景點",
      image: "/api/placeholder/300/200"
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
    <div className="safe-travel">

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
              <div key={index} className={`feature-card ${activeAnimations.features ? 'animate' : ''}`} style={{animationDelay: `${index * 0.2}s`}}>
                <div className="feature-icon">
                  <img src={`/api/placeholder/80/80`} alt={feature.title} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tours" ref={sectionRefs.tours} className="tours-section">
        <div className="container">
          <div className="section-header">
            <div className="section-title-left">
              <h2>Tours</h2>
              <h3>行程列表</h3>
              <button className="view-all-btn"><Link to="/TourList">查看全部 →</Link></button>
            </div>
          </div>

          <div className="tours-grid">
            {toursData.map((tour) => (
              <div key={tour.id} className={`tour-card ${activeAnimations.tours ? 'animate' : ''}`} onClick={() => showLightbox(tour.title, tour.description)}>
                <div className="tour-number">{tour.number}</div>
                <div className="tour-image">
                  <img src={tour.image} alt={tour.title} />
                </div>
                <div className="tour-content">
                  <h3 className="tour-title">{tour.title}</h3>
                  {tour.subtitle && <p className="tour-subtitle">{tour.subtitle}</p>}
                </div>
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
              <div key={index} className={`booking-step ${activeAnimations.booking ? 'animate' : ''}`} style={{animationDelay: `${index * 0.3}s`}}>
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

      <section id="contact" ref={sectionRefs.contact} className="contact-section">
        <div className="contact-content">
          <div className="contact-left">
            <div className="contact-info">
              <h2>Customized Tours</h2>
              <h3>量身訂做</h3>
              <p>無論您是對行程已有想法，或需要規劃上的建議，動漫巡禮皆歡迎您與我們聯繫，我們將聆聽您的需求，為您量身訂製最適合您的行程。</p>
              <button className="contact-btn"><Link to="/CustomizedTours">客製規劃 →</Link></button>
            </div>
          </div>

          <div className="contact-divider"></div>

          <div className="contact-right">
            <div className="contact-info">
              <h2>Contact Us</h2>
              <h3>聯絡我們</h3>
              <p>感謝您來訪動漫巡禮。若您對本公司旅遊行程，需要進一步詢皆歡迎您隨時與我們聯繫</p>
              <button className="contact-btn">立即諮詢 →</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-left">
            <img src="/api/placeholder/120/40" alt="Safe Travel Logo" className="footer-logo" />
            <div className="footer-text">
              <p>AniRoute 動漫巡禮</p>
              <small>您值得信賴的動漫朝聖旅遊夥伴</small>
            </div>
          </div>

          <div className="footer-right">
            <h4>Follow Us</h4>
            <div className="social-links">
              <span>追蹤我們</span>
              <a href="#"><img src="/api/placeholder/36/36" alt="Facebook" /></a>
              <a href="#"><img src="/api/placeholder/36/36" alt="Instagram" /></a>
            </div>
          </div>
        </div>
      </footer>

      {showTopButton && (
        <button className="back-to-top" onClick={scrollToTop}>
          <img src="/api/placeholder/60/60" alt="Back to top" />
        </button>
      )}
    </div>
  );
};

export default SafeTravel;
