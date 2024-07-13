import React from "react";
import AboutHero from '../Components/About/AboutHero/AboutHero'
import Detail from '../Components/About/Detail/Detail'
import OurTeam from "../Components/About/OurTeam/OurTeam";
import Features from "../Components/About/Features/Features";
import Time from "../Components/About/Time/Time";


export default function About(){
    return(
        <>
        <AboutHero/>
        <Detail/>
        <Features/>
        <OurTeam/>
        <Time/>
        </>
    )
}