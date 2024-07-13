import React from "react";
import { NavLink } from "react-router-dom";
import "./Overview.css";

function Overview(){
  return (
    <div className="area" id="overview">
      <div className="context">
        <h1>Overview</h1>
        <p>
          Welcome to <strong>SKP Developers</strong>, where innovation meets excellence
          in software development. We specialize in delivering cutting-edge solutions tailored
          to meet the unique needs of businesses across various industries. Our team of seasoned
          developers, designers, and IT professionals is committed to crafting robust, scalable,
          and user-friendly applications that drive growth and streamline operations.
        </p>
        <button style={{color:'rgba(69,34,22)'}}className="btn"><a href='/about'>More About Us</a></button>
      </div>
    </div>
  );
};

export default Overview;
