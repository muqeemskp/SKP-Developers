// src/components/TeamGrid.js
import React, { useState } from 'react';
import './OurTeam.css';

import { Link, animateScroll as scroll } from 'react-scroll';

import avatar1 from '../../../assets/avatar1.png';
import muqeems from '../../../assets/muqeems.png';
import abds from '../../../assets/abds.png'


const teamMembers = [
  { name: 'Muqeem Malik', role: 'CEO', image: muqeems, linkedIn: '#'},
  { name: 'Abdullah Malik', role: 'MD', image: abds, linkedIn: '#',},
  { name: 'Charlie Brown', role: 'CFO', image: avatar1, linkedIn: '#',},
  { name: 'David Lee', role: 'Lead Developer', image: avatar1, linkedIn: '#'},
  { name: 'Eva Green', role: 'Marketing Manager', image: avatar1, linkedIn: '#',  },
  { name: 'Fiona White', role: 'UX Designer', image: avatar1, linkedIn: '#',  },
  { name: 'George Harris', role: 'Product Manager', image: avatar1, linkedIn: '#' },
  { name: 'Hannah Davis', role: 'QA Specialist', image: avatar1, linkedIn: '#' },
  { name: 'Ian Clark', role: 'DevOps Engineer', image: avatar1, linkedIn: '#' },
  { name: 'George Harris', role: 'Product Manager', image: avatar1, linkedIn: '#' },
  { name: 'Hannah Davis', role: 'QA Specialist', image: avatar1, linkedIn: '#' },
  { name: 'Ian Clark', role: 'DevOps Engineer', image: avatar1, linkedIn: '#' },
  { name: 'George Harris', role: 'Product Manager', image: avatar1, linkedIn: '#' },
  { name: 'Hannah Davis', role: 'QA Specialist', image: avatar1, linkedIn: '#' },
  { name: 'Ian Clark', role: 'DevOps Engineer', image: avatar1, linkedIn: '#' },

  // Add more members as needed
];

const OurTeam = () => {


  const [visibleMembers, setVisibleMembers] = useState(6);

  const showMore = () => {
    setVisibleMembers(visibleMembers + 6);
    scroll.scrollTo(document.getElementById('forscroll').offsetTop);
  };

  const showLess = () => {
    setVisibleMembers(6);
    scroll.scrollTo(document.getElementById('team').offsetTop);
  };

  return (
    <div className="teamouterclass">
      <div className='leftt'></div>
    <div className="team-grid-container" id='team'>
      <h2 className="team-heading">Our Team</h2>
      <div className="team-grid">
        {teamMembers.slice(0, visibleMembers).map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            {/* <a href={member.linkedIn} className="team-member-linkedin" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a> */}
          </div>
        ))}
      </div>
      {visibleMembers < teamMembers.length ? (
        <button className="btn"  id='forscroll' style={{color: 'var(--primary-color)'}} onClick={showMore}>More Members</button>
      ) : (
        <button className="btn" style={{color: 'var(--primary-color)'}} onClick={showLess}>Collaps</button>
      )}
    </div>
    </div>
  );
};

export default OurTeam;
