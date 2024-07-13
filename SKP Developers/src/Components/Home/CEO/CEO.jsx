import React, { useState, useRef } from "react";

import './CEO.css'
import play from '../../../assets/play.png'
import CEOO from '../../../assets/CEOO.png'
import demo from '../../../assets/demo.mp4'


export default function CEO(){
    const player = useRef(null);
    const [playState, setPlayState] = useState(false);

        const closePlayer = (e)=>{
            if(e.target === player.current){
                setPlayState(false);
            }
        }

    function CeoVideo(){
        return(
            <div className={`videoplayer ${playState ? '' : 'hide' }`} ref={player} onClick={closePlayer}>
                <video src={demo} autoPlay muted controls />
            </div>
        )
    }
    return(
        <div className="maincontainer" id='ceo'>
           {playState && <CeoVideo/>} 
        <div className="CEOcontainer">
            <div className="left">
                <img src={CEOO} className="CEOimg"/>
                <div className="playcontainer">
                <img src={play} className="playicon" onClick={()=>{setPlayState(true)}}/>
                </div>

            </div>
            <div className="right">
                <h2>MUQEEM MALIK</h2>
                <p><strong className="bold-text">Muqeem Malik</strong> is the CEO of SKP Developers.
                He was born and raised in <a target="_blank" href="https://en.wikipedia.org/wiki/Sheikhupura"><strong className="bold-text">Sheikhupura.</strong></a> In present, he is getting
                his higher education from <a target="_blank" href="https://www.ue.edu.pk"><strong className="bold-text">University of Education, Township </strong></a>
                based in <a target="_blank" href="https://en.wikipedia.org/wiki/Lahore"><strong className="bold-text">Lahore.</strong></a> He aimed to develop his own projects in a younger age,
                so that, he founded this company in 2024 in the age of 20 while studying in 5th semester of BSIT.</p>
                <h3>Click the play icon to listen some golden words of the CEO.</h3>
            </div>
        </div>
        </div>
    )
}