import React from "react";
import {useTypewriter, Cursor} from 'react-simple-typewriter';

import Overview from "../Overview/Overview";
import './Hero.css';

export default function Hero(){

    function scroll(){
        document.getElementById('overview').scrollIntoView({behavior:'smooth'})
    }
        const [text] = useTypewriter({
            words: ['A Software company founded by Muhammad Muqeem Malik'],
            loop: 1,
            typeSpeed: 50,
            deleteSpeed: 20,
        });

    return(
    <> 
        <div className="hero">
            <div className="hero-text">
                <h1 className="text">SKP DEVELOPERS</h1>
                <h3 className="type">{text}</h3>
                <button className="btn" onClick={scroll}>Overview</button>
            </div>
        </div>
    </>
)
}