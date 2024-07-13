import React from 'react';
import './OurProjects.css';
import skplogo from '../../../assets/icon.png'
import praxisio from '../../../assets/praxisio.png'

const boxesData = [
  {
    heading: "PraxisIO",
    detail: "A learning site for all standard students.",
    iconLink: "/",
    visit: "Click icon to visit",
    iconImage: praxisio,
    detaillink: '/projects'

  },
  {
    heading: "RawaBit",
    detail: "A ultra-private chatting app for everyone.",
    iconLink: "/",
    visit: "Click icon to visit",
    iconImage: skplogo,
    detaillink: '/projects'

  },
  {
    heading: "MaluMation",
    detail: "An app giving new/previous info of somebody.",
    iconLink: "/",
    visit: "Click icon to visit",
    iconImage: skplogo,
    detaillink: '/projects'

  },
  {
    heading: "DreamRy",
    detail: "A dream animator and sender with friends.",
    iconLink: "/",
    visit: "Click icon to visit",
    iconImage: skplogo,
    detaillink: '/projects'
  }
];

const OurProjects = () => {
  return (
    <div className="animated-boxes">
      <h1 className="main-heading">SKP Projects</h1>
      <div className="boxes-container">
        {boxesData.map((box, index) => (
          <div key={index} className="box">
            <h2 className="box-heading">{box.heading}</h2>
            <p className="box-detail">{box.detail}</p>
            <a href={box.iconLink} className="box-icon">
              <img src={box.iconImage} alt="Icon" className="icon-image" />
            </a>
            <p className="visit-text">{box.visit}</p>
            <button className="btn"><a href={box.detaillink}>Detail</a></button>
          </div>
        ))}
      </div>
      <button style={{color:'rgb(69,34,22)'}} className="btn"><a href='/projects'>All Projects</a></button>
    </div>
  );
};

export default OurProjects;
