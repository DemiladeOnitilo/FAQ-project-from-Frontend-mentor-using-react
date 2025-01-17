import React from 'react';
import bgdesktop from "./assets/images/background-pattern-desktop.svg";
import bgmobile from "./assets/images/background-pattern-mobile.svg";
import Container from './components/Container';

const App = () => {

  return (
    <div>
      <div className='top-img'>
        {/* <picture>
          {"(max-width: 640px)" ? <img src={bgmobile} alt="" /> :<img src={bgdesktop} alt="" /> } 
          <source media="(min-width: 600px)" srcset={bgdesktop} alt="" />
          <source media="(min-width: 100px)" srcset={bgmobile} alt="" />
        </picture> */}
        {/* <img src={bgdesktop} alt="" /> */}
      </div>
      <div>
        <Container />
      </div>
    </div>
  )
}

export default App