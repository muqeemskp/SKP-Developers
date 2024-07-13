import React from "react";
import { useNavigate } from "react-router-dom";
import './CoreTeam.css';


import abd from '../../../assets/abd.png';
import muqeem from '../../../assets/muqeem.png';
import avatar from '../../../assets/avatar.png';

export default function CoreTeam() {

    const navigate = useNavigate();

    function scrollto(){
       navigate('/about/#team');
    }

    return (
        <div className="maindiv">
            <h1 className="title">Core Team</h1>

            <div className="picsdiv">
                <div className="member">
                    <img src={abd} alt="Abdullah Malik" />
                    <div className="caption">
                        <h1>MD</h1>
                        <h3>Abdullah Malik</h3>
                        <a href="mailto:muqeemnaeem777@gmail.com">muqeemnaeem777@gmail.com</a>
                    </div>
                </div>
                <div className="member">
                    <img src={muqeem} alt="Muqeem Malik" />
                    <div className="caption">
                        <h1>CEO</h1>
                        <h3>Muqeem Malik</h3>
                        <a href="mailto:muqeemnaeem777@gmail.com">muqeemnaeem777@gmail.com</a>
                    </div>
                </div>
                <div className="member">
                    <img src={avatar} alt="Unknown" />
                    <div className="caption">
                        <h3>Unknown</h3>
                    </div>
                </div>
            </div>
            <button style={{color:'rgb(69,34,22)'}}className="btn" onClick={scrollto}>Our Team</button>
        </div>
    );
}
