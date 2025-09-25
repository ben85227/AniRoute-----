import { Link } from 'react-router-dom';
import '../scss/_reset.scss'
import '../scss/Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
          <div className="footer-left">
            <img src="/LOGOFoo.png" alt="" className="footer-logo" />
            <div className="footer-text">
              <small>您值得信賴的動漫朝聖旅遊夥伴</small>
            </div>
          </div>

          <div>
            <small>Copyright &copy; AniRoute動漫巡禮</small>
          </div>

          <div className="footer-right">
            <div className="social-links">
              <span>追蹤我們</span>
              <a href="#"><img src="/icon-fb.svg" alt="Facebook" /></a>
              <a href="#"><img src="/icon-ig.svg" alt="Instagram" /></a>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer