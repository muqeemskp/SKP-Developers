import React from "react";
import Form from "../Form/Form";

import skpicon from '../../../assets/skpicon.png'
import lhricon from '../../../assets/lhricon.png'

import './Addresses.css'

export default function Addresses() {
    const adres = [
        {
            icon: skpicon,
            city: 'Sheikhupura',
            area: 'Ghazni Road',
            email: 'info@skpdevelopers.com',
            phone: '0334 9878084',
            emailhref: "mailto:muqeemnaeem777@gmail.com",
            telhref: "tel:+923349878084",
            lochref: "https://www.google.com/maps?q=31.70359,73.98943"
        },
        {
            icon: lhricon,
            city: 'Lahore',
            area: 'College Road',
            email: 'info@skpdevelopers.com',
            phone: '0334 9878084',
            emailhref: "mailto:muqeemnaeem777@gmail.com",
            telhref: "tel:+923349878084",
            lochref: "https://www.google.com/maps?q=31.45048,74.29806"

        },
        {
            icon: lhricon,
            city: 'Lahore',
            area: 'Faisal Town',
            email: 'info@skpdevelopers.com',
            phone: '0334 9878084',
            emailhref: "mailto:muqeemnaeem777@gmail.com",
            telhref: "tel:+923349878084",
            lochref: "https://www.google.com/maps?q=31.48300,74.30522"


        },
    ];

    function scroll() {
        document.getElementById('myform').scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="addresscontainer">
            <div className="left">
                <div className="site-name-address">
                    <img src='/src/assets/icon.png' className="logo-address" />
                    <a href='/'>SKP Developers</a>
                </div>
                <h1>Let's have a <br />meeting</h1>
                <button
                    style={{ fontSize: '20px', paddingLeft: '40px', paddingRight: '40px' }}
                    className="btn"
                    onClick={scroll}
                >
                    Schedule a call
                </button>
            </div>

            <div className="right">
                {adres.map((adrs, index) => (
                    <div className="address" key={index}>
                        <img src={adrs.icon} className="adresicon" />
                        <div className="address-details">
                            <h3>{adrs.city}</h3>
                            <p>Address:&nbsp;&nbsp;&nbsp;&nbsp;<a target="_blank" href={adrs.lochref}>{adrs.area}</a></p>
                            <p>Email:&nbsp;&nbsp;&nbsp;&nbsp;<a href={adrs.emailhref}>{adrs.email}</a></p>
                            <p>Phone:&nbsp;&nbsp;&nbsp;&nbsp;<a href={adrs.telhref}>{adrs.phone}</a></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
