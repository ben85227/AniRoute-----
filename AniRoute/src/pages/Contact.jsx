// import React from 'react';
// import '../scss/Contact.scss'

// const Contact = () => {
//   const tours = [
//     {
//       id: 1,
//       title: '經典南北島全覽 13 日',
//       subtitle: 'Classic North & South Island 13 Days',
//       price: 'NT$ 158,000',
//       duration: '13天10夜',
//       image: '/images/tour-1.jpg'
//     },
//     {
//       id: 2,
//       title: '南島深度遊 10 日',
//       subtitle: 'South Island In-depth 10 Days',
//       price: 'NT$ 128,000',
//       duration: '10天7夜',
//       image: '/images/tour-2.jpg'
//     },
//     {
//       id: 3,
//       title: '北島深度遊 6 日',
//       subtitle: 'North Island In-depth 6 Days',
//       price: 'NT$ 88,000',
//       duration: '6天5夜',
//       image: '/images/tour-3.jpg'
//     },
//     {
//       id: 4,
//       title: '南島海岸遊 6 日',
//       subtitle: 'South Island Coast 6 Days',
//       price: 'NT$ 98,000',
//       duration: '6天5夜',
//       image: '/images/tour-4.jpg'
//     },
//     {
//       id: 5,
//       title: '南島冒險遊 4 日',
//       subtitle: 'South Island Adventure 4 Days',
//       price: 'NT$ 68,000',
//       duration: '4天3夜',
//       image: '/images/tour-5.jpg'
//     },
//     {
//       id: 6,
//       title: '南島攝影 6 日',
//       subtitle: 'South Island Photography 6 Days',
//       price: 'NT$ 108,000',
//       duration: '6天5夜',
//       image: '/images/tour-6.jpg'
//     }
//   ];

//   return (
//     <div className="tours-page">
//       <header className="navbar background">
//         <a href="./index.html">
//           <img className="logo" src="/images/logo.svg" alt="安心旅遊 Safe Travel" />
//         </a>
//         <nav className="menu">
//           <ul className="cn-title-xs">
//             <li><a href="./index.html">Home</a></li>
//             <li><a href="./tours.html">行程列表</a></li>
//             <li><a href="./customized.html">量身訂製</a></li>
//             <li><a href="#">聯絡我們</a></li>
//           </ul>
//         </nav>
//         <button className="nav-toggle">
//           <span className="line"></span>
//         </button>
//       </header>

//       <main>
//         <div className="banner">
//           <div className="square-box">
//             <img src="/images/banner-slide-1.jpg" alt="" />
//             <div className="circle-box">
//               <header className="title-l">
//                 <h3 className="en-l">Tours</h3>
//                 <h1 className="cn-title-xl">行程列表</h1>
//               </header>
//             </div>
//           </div>
//         </div>

//         <section className="tours-section">
//           <div className="tours-intro">
//             <div className="text-content cn-content-m">
//               <p>
                
//               </p>
//             </div>
//           </div>

//           <div className="tours-grid">
//             {tours.map(tour => (
//               <div key={tour.id} className="tour-card">
//                 <div className="tour-image">
//                   <img src={tour.image} alt={tour.title} />
//                   <div className="tour-overlay">
//                     <span className="tour-duration">{tour.duration}</span>
//                   </div>
//                 </div>
//                 <div className="tour-content">
//                   <h3 className="tour-title cn-title-m">{tour.title}</h3>
//                   <p className="tour-subtitle en-s">{tour.subtitle}</p>
//                   <div className="tour-price">
//                     <span className="price-text cn-content-l">{tour.price}</span>
//                     <span className="price-unit cn-content-s">起</span>
//                   </div>
//                   <button className="tour-btn btn-square en-s">
//                     <div>
//                       詳細內容
//                       <img src="/images/arrow-right.svg" alt="箭頭 arrow" />
//                     </div>
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//       </main>

//       <footer>
//         <div className="left-text cn-content-s">
//           <a href="#">
//             <img className="logo" src="/images/logo.svg" alt="安心旅遊 Safe Travel" />
//           </a>
//           <div className="text-box">
//             <p>交觀甲字第123456號．品保北8888號</p>
//             <a href="#">隱私權保護政策</a>
//             <small className="en-xs">Copyright © 2024 AniRoute.</small>
//           </div>
//         </div>
//         <div className="right-text cn-content-s">
//           <h3 className="en-m">Contact</h3>
//           <p>(+886) 02-8888-8888</p>
//           <a href="mailto:service@safetravel.com">service@AniRoute.com</a>
//           <p>新北市新店區一二路123號1樓</p>
//           <div className="follow-us">
//             <span className="en-xs">Follow us</span>
//             <a href="#">
//               <img src="/images/icon-line.svg" alt="動漫巡禮官方 Line" />
//             </a>
//             <a href="#">
//               <img src="/images/icon-fb.svg" alt="動漫巡禮 FB" />
//             </a>
//           </div>
//         </div>
//         <button id="btn-top"></button>
//       </footer>
//     </div>
//   );
// };

// export default Contact;