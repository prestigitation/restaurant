//img
import main_banner from './img/main_banner.jpg'
import secondary_banner from './img/banner_background.png'

import './App.scss';

//script


//lib
import { useEffect, useState } from 'react'
import History from './components/History'
import MainBanner from './components/MainBanner';
import SecondaryBanner from './components/SecondaryBanner';


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
    </div>
  );
}

export default App;
