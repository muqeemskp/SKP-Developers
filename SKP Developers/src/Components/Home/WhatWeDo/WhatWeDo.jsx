import React, { useState } from 'react';
import './WhatWeDo.css';

const WhatWeDo = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseMove = (e, index) => {
    const box = e.currentTarget;
    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotateX = ((y - midY) / midY) * 10;
    const rotateY = ((x - midX) / midX) * -10;

    box.style.setProperty('--rotateX', `${rotateX}deg`);
    box.style.setProperty('--rotateY', `${rotateY}deg`);
    box.style.setProperty('--hoverX', `${x}px`);
    box.style.setProperty('--hoverY', `${y}px`);
  };

  const handleMouseLeave = (e) => {
    const box = e.currentTarget;
    box.style.setProperty('--rotateX', '0deg');
    box.style.setProperty('--rotateY', '0deg');
    box.style.setProperty('--hoverX', '50%');
    box.style.setProperty('--hoverY', '50%');
    setHoverIndex(null);
  };

  // Sample data for each box
  const boxes = [
    {
      title: 'Web Design',
      content: 'We Design responsive Web designs according to your needs',
      buttonText: 'Detail',
      link: '/services'
    },
    {
      title: 'App Development',
      content: 'We develop responsive Apps according to your needs',
      buttonText: 'Detail',
      link: '/services'

    },
    {
      title: 'UI/UX Design',
      content: 'We Design extraordinary Figma/PS designs according to your needs',
      buttonText: 'Detail',
      link: '/services'

    },
    {
      title: 'SEO',
      content: 'We make your site rank at number 1',
      buttonText: 'Details',
      link: '/services'

    },
    {
      title: 'Hacking',
      content: 'We do ethical hacking for you and yours',
      buttonText: 'Detail',
      link: '/services'

    },
    {
      title: 'AI',
      content: 'We do work with AI using python',
      buttonText: 'Detail',
      link: '/services'

    },
  ];

  return (
    <div className="glass-box-grid">
      <h1 className="main-heading">What We Do</h1>
      <div className="grid-container">
        {boxes.map((box, index) => (
          <div
            key={index}
            className={`glass-box ${hoverIndex === index ? 'active' : ''}`}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => setHoverIndex(index)}
          >
            <div className="glass-box-content">
              <h2>{box.title}</h2>
              <p>{box.content}</p>
              <button className="glass-button"><a href={box.link}>{box.buttonText}</a></button>
            </div>
          </div>
        ))}
      </div>
      <button style={{color:'rgb(69,34,22)'}}className='btn'><a href='/services'>More Services</a></button>
    </div>
  );
};

export default WhatWeDo;
