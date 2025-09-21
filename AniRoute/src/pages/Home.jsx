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

  // Intersection Observer for animations
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

  // Scroll effects
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

  // Data
  const featuresData = [
    {
      title: "專業旅遊服務",
      description: "我們是一家專注於紐西蘭旅遊的專業旅行社，致力於為每位旅客提供最安全、最舒適的旅行體驗。憑藉多年的當地經驗和專業知識，我們深知如何讓您的紐西蘭之旅成為一生難忘的回憶。"
    },
    {
      title: "客製化行程設計", 
      description: "每個旅客都是獨一無二的，因此我們提供完全客製化的行程規劃服務。從冒險刺激的極限運動到寧靜優美的自然風光，我們都能為您量身打造最適合的旅遊方案。"
    },
    {
      title: "安全保障承諾",
      description: "安全是我們最重視的核心價值。我們與當地最優秀的導遊和服務供應商合作，確保每一個環節都符合最高的安全標準，讓您能夠完全放心地享受旅程。"
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
      description: "我們提供多種不同的旅遊行程，包含冒險、文化、自然風光等主題，選擇最適合您的旅遊方式。"
    },
    {
      number: "2", 
      title: "填寫線上需求表",
      subtitle: "提供基本資料及需求",
      description: "請詳細填寫您的旅遊需求，包含人數、時間、預算等資訊，我們將為您客製化專屬行程。"
    },
    {
      number: "3",
      title: "服務專員聯繫您確認",
      subtitle: "進行最後確認與相關作業",
      description: "我們的專業服務團隊將與您聯繫，確認所有細節並協助您完成預訂程序。"
    }
  ];

  return (
    <div className="safe-travel">
      {/* Lightbox */}
      {lightboxData && (
        <div className="overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <span className="close" onClick={closeLightbox}>×</span>
            <br />
            <div>
              <h2 className="lightbox-title">{lightboxData.title}</h2>
              <hr />
              <p className="lightbox-paragraph">{lightboxData.content}</p>
              <h4 className="btn" onClick={closeLightbox}>Join</h4>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className={`navbar ${activeAnimations.navbar ? 'scrolled' : ''} ${isMenuOpen ? 'menu-active' : ''}`}>
        <div className="nav-container">
          <a href="#hero" className="nav-logo">
            <img src="/api/placeholder/120/40" alt="Safe Travel Logo" />
          </a>
          
          <div className="nav-menu">
            <ul>
              <li><a href="#features">特色服務</a></li>
              <li><a href="#tours">行程列表</a></li>
              <li><a href="#booking">報名流程</a></li>
              <li><a href="#contact">聯絡我們</a></li>
            </ul>
          </div>
          
          <button className="nav-toggle" onClick={toggleMenu}>
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" ref={sectionRefs.hero} className="hero-section">
        <div className="hero-bg">
          <img src="/api/placeholder/1920/1080" alt="New Zealand Railway" className="hero-image" />
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">下一幕，在現實</h1>
            <p className="hero-subtitle">專為動漫愛好者精心規劃的紐西蘭行程</p>
            <p className="hero-description">跟著動畫，發現真實——的魅力旅程</p>
          </div>
          
          <div className="hero-form">
            <h3>把喜歡走成現實</h3>
            <p>選擇 AniRoute 的理由</p>
            
            <form className="booking-form">
              <div className="form-group">
                <label>分國對位，專門規劃</label>
                <select>
                  <option>請選擇您的喜好類型</option>
                  <option>魔戒系列場景</option>
                  <option>動漫聖地巡禮</option>
                  <option>自然風光體驗</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>個性化專屬推薦</label>
                <input type="text" placeholder="告訴我們您的偏好..." />
              </div>
              
              <div className="form-group">
                <label>限定巡禮，不寂寞帖</label>
                <textarea placeholder="特殊需求或想法..."></textarea>
              </div>
              
              <button type="submit" className="submit-btn">開始規劃旅程</button>
            </form>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" ref={sectionRefs.features} className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">為什麼選擇我們</h2>
            <p className="section-subtitle">專業、安全、客製化的紐西蘭旅遊體驗</p>
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

      {/* Tours Section */}
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

      {/* Booking Section */}
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

      {/* Contact Section */}
      <section id="contact" ref={sectionRefs.contact} className="contact-section">
        <div className="contact-content">
          <div className="contact-left">
            <div className="contact-info">
              <h2>Customized Tours</h2>
              <h3>量身訂做</h3>
              <p>根據您的興趣和需求，我們可以為您設計獨一無二的旅程。無論是動漫聖地巡禮、自然風光探索，還是冒險運動體驗，我們都能為您打造專屬的紐西蘭之旅。</p>
              <button className="contact-btn"><Link to="/Contact">客製規劃 →</Link></button>
            </div>
          </div>
          
          <div className="contact-divider"></div>
          
          <div className="contact-right">
            <div className="contact-info">
              <h2>Contact Us</h2>
              <h3>聯絡我們</h3>
              <p>準備好開始您的紐西蘭冒險之旅了嗎？立即聯絡我們的專業團隊，讓我們為您規劃一趟完美的旅程。我們提供24小時客服支援，隨時為您解答疑問。</p>
              <button className="contact-btn">立即諮詢 →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-left">
            <img src="/api/placeholder/120/40" alt="Safe Travel Logo" className="footer-logo" />
            <div className="footer-text">
              <p>Safe Travel 安全旅遊</p>
              <small>您值得信賴的紐西蘭旅遊夥伴</small>
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

      {/* Back to Top Button */}
      {showTopButton && (
        <button className="back-to-top" onClick={scrollToTop}>
          <img src="/api/placeholder/60/60" alt="Back to top" />
        </button>
      )}
    </div>
  );
};

export default SafeTravel;