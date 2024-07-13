import React from 'react';
import './Detail.css';
import detailpic from '../../../assets/detailpic.png'; //pic will be updated later

const Detail = () => {
  return (
    <div className="about-company-container">
      <div className="about-text">
        <h1>About Our Company</h1>
        <p> 
          Founded in 2024, our software house has rapidly grown into a premier provider of innovative software solutions. With a team of highly skilled professionals, we are dedicated to transforming business ideas into state-of-the-art software products. Our expertise spans across various sectors, including finance, healthcare, and retail, enabling us to deliver customized solutions that meet diverse industry needs.
        </p>
        <p>
          Our mission is to drive technological advancement through cutting-edge development practices and a client-centric approach. We believe in fostering long-term partnerships with our clients by delivering high-quality solutions that enhance their operational efficiency and market competitiveness. Our commitment to excellence and continuous innovation ensures that we remain at the forefront of the software development industry.
        </p>
      </div>
      <div className="about-image">
        <div className="decorative-box top-right"></div>
        <img src={detailpic} alt="Company" className="company-pic" />
        <div className="decorative-box bottom-left"></div>
      </div>
    </div>
  );
}

export default Detail;
