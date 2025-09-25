import React, { useState } from 'react'  // 引入 React 和 useState
import { Link } from 'react-router-dom'  // 引入 Link
import '../scss/_reset.scss'
import '../scss/Navbar.scss'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)  // 定義狀態控制選單開關

    const toggleMenu = () => {
        setIsOpen(!isOpen)  // 點擊後切換開關狀態
    }

    return (
        <div id='topbar'>
            <div className="logo"><Link to='/'><img src="/LOGONav.png" alt="logo" /></Link></div>
            <div className="navbar">
                <button
                    className={`hamburger ${isOpen ? 'is-active' : ''}`}
                    onClick={toggleMenu}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                <nav className={`navigation ${isOpen ? 'show' : ''}`}>
                    <ul className='menu'>
                        <li><Link to='/'>首頁</Link></li>
                        <li><Link to='/TourList'>行程列表</Link></li>
                        <li><Link to='/CustomizedTours'>量身訂做</Link></li>
                        <li><Link to='/Contact'>聯絡我們</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
