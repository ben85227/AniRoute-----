import { Link } from 'react-router-dom';
import '../scss/_reset.scss'
import '../scss/Footer.scss'

const Footer = () => {
  return (
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
    );
}

export default Footer