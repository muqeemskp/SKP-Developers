import React, { useState } from 'react';

import './WhatWeDo.css';
import canal from '../../../assets/canal.png'
import range from '../../../assets/range.png'
import mountain from '../../../assets/mountain.png'
import road from '../../../assets/road.png'
import ocean from '../../../assets/ocean.png'
import bg1 from '../../../assets/bg1.png'


const WhatWeDo = () => {
  const [bgImage, setBgImage] = useState(bg1);

  const handleHover = (image) => {
    setBgImage(image);
  };

  const handleLeave = () => {
    setBgImage(bg1);
  };

  return (
  <>

    <div
      className="slidercontainer"
      style={{ backgroundImage: `url(${bgImage})` }}
      onMouseLeave={handleLeave}
    >
      <div className="button" onMouseEnter={() => handleHover(canal)} >
        <h1 className="services">Web Design</h1>
        <div className="caption">
            <h3>Abdullah Malik</h3>
            <h1>MD</h1>
        </div>
      </div>
      <div className="button" onMouseEnter={() => handleHover(range)}>
      <h1 className="services">App Development</h1>
        <div className="caption">
            <h3>Abdullah Malik</h3>
            <h1>MD</h1>
        </div>
      </div>
      <div className="button" onMouseEnter={() => handleHover(mountain)}>
      <h1 className="services">UI/UX Design</h1>
        <div className="caption">
            <h3>Abdullah Malik</h3>
            <h1>MD</h1>
        </div>
      </div>
      <div className="button" onMouseEnter={() => handleHover(road)}>
      <h1 className="services">SEO</h1>
        <div className="caption">
            <h3>Abdullah Malik</h3>
            <h1>MD</h1>
        </div>
      </div>
      <div className="button" onMouseEnter={() => handleHover(ocean)}>
      <h1 className="services">See More</h1>
        <div className="caption">
            <h3>Abdullah Malik</h3>
            <h1>MD</h1>
        </div>
      </div>
    </div>
    </>
  );
};
export default WhatWeDo;