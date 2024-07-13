import React, { useState, useEffect } from 'react';
import './ClientsWork.css';

import company1 from '../../../assets/company1.png'
import company2 from '../../../assets/company2.png'
import company3 from '../../../assets/company3.png'
import company4 from '../../../assets/company4.png'
import company5 from '../../../assets/company5.png'
import company6 from '../../../assets/company6.png'
import avatar from '../../../assets/avatar.png'


const ClientsWork = () => {
  const slides = [
    {
      logo: company1,
      companyName: 'Company One',
      projectName: 'Project Alpha',
      projectDefinition: 'A brief description of Project Alpha.',
      clientReview: 'Excellent collaboration and great results!',
      clientPic: avatar,
      clientName: 'Jane Smith',
      clientRole: 'CTO, Tech Solutions',
      rating: 5,
    },
    {
      logo: company2,
      companyName: 'Company Two',
      projectName: 'Project Beta',
      projectDefinition: 'A brief description of Project Beta.',
      clientReview: 'Very satisfied with the service!',
      clientPic: avatar,
      clientName: 'John Doe',
      clientRole: 'CEO, Innovate Inc.',
      rating: 4,
    },
    {
      logo: company3,
      companyName: 'Company Three',
      projectName: 'Project Gamma',
      projectDefinition: 'A brief description of Project Gamma.',
      clientReview: 'Outstanding performance!',
      clientPic: avatar,
      clientName: 'Alice Johnson',
      clientRole: 'Manager, Creative Solutions',
      rating: 5,
    },
    {
        logo: company4,
        companyName: 'Company One',
        projectName: 'Project Alpha',
        projectDefinition: 'A brief description of Project Alpha.',
        clientReview: 'Excellent collaboration and great results!',
        clientPic: avatar,
        clientName: 'Jane Smith',
        clientRole: 'CTO, Tech Solutions',
        rating: 5,
      },
      {
        logo: company5,
        companyName: 'Company Two',
        projectName: 'Project Beta',
        projectDefinition: 'A brief description of Project Beta.',
        clientReview: 'Very satisfied with the service!',
        clientPic: avatar,
        clientName: 'John Doe',
        clientRole: 'CEO, Innovate Inc.',
        rating: 4,
      },
      {
        logo: company6,
        companyName: 'Company Three',
        projectName: 'Project Gamma',
        projectDefinition: 'A brief description of Project Gamma.',
        clientReview: 'Outstanding performance!',
        clientPic: avatar,
        clientName: 'Alice Johnson',
        clientRole: 'Manager, Creative Solutions',
        rating: 5,
      },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateTransform = () => {
      const slideWidth = document.querySelector('.slide').offsetWidth;
      const containerWidth = document.querySelector('.slider-container').offsetWidth;
      const initialOffset = (containerWidth - slideWidth) / 2; // Initial offset to center the first slide
      document.querySelector('.slides').style.transform = `translateX(${initialOffset - currentIndex * slideWidth}px)`;
    };

    window.addEventListener('resize', updateTransform);
    updateTransform();
    return () => window.removeEventListener('resize', updateTransform);
  }, [currentIndex]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (<>
  <div className='mainn'>
        <h1>Client Projects and Reviews</h1>
    <div className="slider-container">
      <div className="slides">
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <div className="slide-top">
              <img src={slide.logo} alt="Company Logo" className="company-logo" />
              <h3 className="company-name">{slide.companyName}</h3>
            </div>
            <div className="slide-content">
            
                {/* //animation bg */}
            <div className="circles">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
              <h4 className="project-name">{slide.projectName}</h4>
              <p className="project-definition">{slide.projectDefinition}</p>
              <h4 className="review-heading">Client Review</h4>
              <p className="client-review">"{slide.clientReview}"</p>
            </div>
            <div className="slide-bottom">
              <img src={slide.clientPic} alt="Client" className="client-pic" />
              <div className="client-details">
                <p className="client-name">{slide.clientName}</p>
                <p className="client-role">{slide.clientRole}</p>
                <div className="review-stars">{'★'.repeat(slide.rating)}</div>
              </div>
            </div>
          </div>
          
        ))}
      </div>
      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
  </div>
    <button style={{color:'rgb(69, 34, 22)'}} className='btn'><a href='/projects'>Client's Details</a></button>
  </div>
    </>
  );
};

export default ClientsWork;
