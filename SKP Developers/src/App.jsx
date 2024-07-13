import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';


import Navbar from '../src/Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer'
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Projects from '../src/pages/Projects';
import Jobs from '../src/pages/Jobs';
import Contact from '../src/pages/Contact';
import Services from '../src/pages/Services';


// import '../styles/header.css';




export default function App(){

    return(
        <>
        <div>
            <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    {/* <Route path='/projects' element={<Projects/>}/>
                    <Route path='/jobs' element={<Jobs/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/services' element={<Services/>}/> */}
                </Routes>
            <Footer/>
            </BrowserRouter>
        </div>
        </>
    )

}