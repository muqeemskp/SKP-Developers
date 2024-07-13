// src/components/KeyFeatures.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaUsers } from 'react-icons/fa';
import { MdAssignment } from 'react-icons/md'; // For Projects
import { IoMdConstruct } from 'react-icons/io'; // For Services
import { Link, animateScroll as scroll } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import './Features.css';

const features = [
  {
    title: 'Extraordinary Projects',
    description: 'Our Projects are the reason of our fame, you can visit out projects by clicking following button.',
    icon: <MdAssignment />,
    thebtn: 'All Projects',
    link: '/#overview',
    external: true
  },
  {
    title: 'Expert Team',
    description: 'Our team consists of experienced professionals in various fields, you can visit our team by clicking following button.',
    icon: <FaUsers />,
    thebtn: 'Our Team',
    link: 'team',
    external: false
  },
  {
    title: 'Every IT Service',
    description: 'We provide every service in the field of IT, you can see the services provided by us by clicking the following button.',
    icon: <IoMdConstruct />,
    thebtn: 'Our Services',
    link: '/services',
    external: true
  },
  {
    title: '24/7 Availability',
    description: 'We are available for our customers for 24/7, you can click the following button to see our client reviews.',
    icon: <FaClock />,
    thebtn: 'Client Reviews',
    link: '/projects#reviews',
    external: true
  },
];

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const navigate = useNavigate();

  const handleButtonClick = (index) => {
    setActiveFeature(index);
  };

  const handleLinkClick = (link, external) => {
    if (external) {
      // Navigate to another page
      navigate(link);
    } else {
      // Smooth scroll to section on the same page
      scroll.scrollTo(document.getElementById(link).offsetTop);
    }
  };

  return (
    <div className="key-features-container">
      <h1 className="heading">SKP Key Features</h1>
      <div className="boxq">
      <div className="circless">
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
        <div className="buttons">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              className={index === activeFeature ? 'active' : ''}
            >
              {feature.icon}
            </button>
          ))}
        </div>
        <motion.div
          className="feature-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          key={activeFeature}
        >
          <h2>{features[activeFeature].title}</h2>
          <p>{features[activeFeature].description}</p>
          <button
            className="keybutton"
            onClick={() => handleLinkClick(features[activeFeature].link, features[activeFeature].external)}
          >
            {features[activeFeature].thebtn}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
