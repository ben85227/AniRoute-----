import { Link } from 'react-router-dom';
import '../scss/_reset.scss'
import '../scss/Footer.scss'

const Footer = () => {
  return (
    <footer>
      <div className='footerMain'>
        <small>Copyright &copy; AniRoute動漫巡禮</small>
        <button className="to-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="回到最上面">
          ↑
        </button>
      </div>
        </footer >
    );
}

export default Footer