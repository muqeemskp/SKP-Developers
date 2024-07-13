import React from "react";

import Hero from '../Components/Home/Hero/Hero'
import Overview from "../Components/Home/Overview/Overview";
import CoreTeam from "../Components/Home/CoreTeam/CoreTeam";
import WhatWeDo from "../Components/Home/WhatWeDo/WhatWeDo";
import CEO from "../Components/Home/CEO/CEO";
import OurProjects from "../Components/Home/OurProjects/OurProjects";
import ClientsWork from "../Components/Home/ClientsWork/ClientsWork";
import Addresses from "../Components/Home/Addresses/Addresses";
import Form from "../Components/Home/Form/Form"

export default function Home(){
    return(
        <>
        <Hero/>
        <Overview/>
        <WhatWeDo/>
        <OurProjects/>
        <CEO/>
        <ClientsWork/>
        <CoreTeam/>
        <Addresses/>
        <Form/>

        </>
    )
}
