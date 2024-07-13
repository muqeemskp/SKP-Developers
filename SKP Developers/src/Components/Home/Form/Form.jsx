import React, { useState } from "react";
import './Form.css';
import mail_icon from '../../../assets/mail_icon.png';
import phone_icon from '../../../assets/phone_icon.png';

export default function Form() {

    const [result, setResult] = useState("");

    //taken from Web3Forms, 250 mails free per month

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "17d6d2ed-1352-456e-82cf-f482b65e7750");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Response Sent");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className="contact-container" id='myform'>
            <div className="contact-info">
                <h3>Send us a message</h3>
                <ul>
                    <li><h4>We'll respond to you within 24 hours.</h4></li>
                    <li><h4>Only Experts (not site manager) will reply.</h4></li>
                </ul>
                <p>
                    Feel free to reach out through our contact form or find our <strong>contact
                        information below.</strong> You can discuss your project, ask us for call scheduling, or provide feedback
                    using the form. Your feedback, questions, and suggestions are 
                    important to us as we strive to provide exceptional service.
                </p>

                <ul>
                    <li>
                        <img src={mail_icon} alt="Mail icon" />
                        <a href="mailto:muqeemnaeem777@gmail.com">muqeemnaeem777@gmail.com</a>
                    </li>
                    <li>
                        <img src={phone_icon} alt="Phone icon" />
                        <a href="tel:+923349878084">+92 334 9878 084</a>
                    </li>
                </ul>
            </div>
            <div className="contact-form">
                <form onSubmit={onSubmit}>
                    <label htmlFor="name">Your Name *</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="phone">Phone *</label>
                    <input type="tel" id="phone" name="phone" required />

                    <label htmlFor="message">Message *</label>
                    <textarea id="message" name="message" rows="6" required></textarea>

                    <label htmlFor="source-of-knowing">How did you hear about us?</label>
                    <input type="text" id="source-of-knowing" name="source_of_knowing" />

                    <button type="submit" className="submit-btn">Submit</button>
                    <h3 className="result">{result}</h3>
                </form>
            </div>
        </div>
    );
}
