//img
import main_banner from './img/main_banner.jpg'
import secondary_banner from './img/banner_background.png'
import menu_background from './img/menu_background.png'
import footer_image from './img/footer_image.png'
import './App.scss';

//script
import History from './components/History'
import MainBanner from './components/MainBanner';
import SecondaryBanner from './components/SecondaryBanner';
import ProductBanner from './components/ProductBanner';
import Menu from './components/Menu';
import Comments from './components/Comments';
import Gallery from './components/Gallery';
import Cooks from './components/Cooks';

//lib
import { useEffect, useState } from 'react'



function App() {
  
  const [width, setWidth] = useState(window.screen.width)
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.screen.width))
    return () => {
      window.removeEventListener('resize', () => setWidth(window.screen.width))
    }
  })
  
  return (
    <div className="page">
      <div className="page__banner">
        <img src={main_banner} className="page__banner-image" alt="banner" />
        <div className="page__banner-image_block content__wrapper">
          <MainBanner width={width} />
        </div>
      </div>
      <div className="content__wrapper page__history">
        <History />
      </div>
      <div className="secondary__banner">
        <img src={secondary_banner} className="secondary__banner-image" alt="secondary banner" />
        <div className="secondary__banner-image_block content__wrapper">
          <SecondaryBanner />
        </div>
      </div>
      <div className="content__wrapper products__banner">
        <ProductBanner />
      </div>
      <div className="page__menu">
        <img src={menu_background} className="page__banner-image" alt="menu_background" />
        <div className="content__wrapper page__menu-wrapper">
          <Menu />
        </div>
      </div>
      <div className="page__comments">
        <div className="page__comments-wrapper">
          <Comments />
        </div>
      </div>
      <div className="page__gallery">
        <div className="content__wrapper">
          <Gallery />
        </div>
      </div>
      <div className="page__cooks content__wrapper">
        <Cooks />
      </div>
      <div className="page__footer">
        <img className="footer__image" src={footer_image} alt="footer_image" />
      </div>
    </div>
  );
}

export default App;
