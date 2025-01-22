import React from 'react';
import logo from '../assets/frij.png'
import { Link } from 'react-router-dom';
import AboutImage from '../assets/AboutImage.png'
import NavBar from './NavBar';
import Footer from './Footer';
function AboutUs() {
    return (
        
        <div>
            <NavBar />

            <div className="AboutPage">
                <div className="left-side">
                    <header className="header">
                        <h1>About <b>frij</b></h1>
                        <p className="description">
                        Every time I opened my fridge, I found random condiments and ingredients and never knew what to make of them. I had to get creative to make meals for my family, which often took more time than I wanted to spend! I realized I could save a whole lot of time brainstorming and decided to automate the process. <b>That’s how frij was born </b>—a web app that quickly finds recipes based on what you already have at home. It’s simple, efficient, and perfect for anyone who loves good food but hates the hassle of figuring out what to cook.
                        </p>
                    </header>


                    <header className="header">
                        <h1>About <b>Shahd</b></h1>
                        <p className="description">
                        I’m <b>Shahd Khartabil</b>, the designer and developer of frij. 
                        I’m passionate about combining technology and creativity to solve everyday problems. 
                        Let’s connect:
                        </p>
                    
                        <ul>
                            <li>🌐 <a href="https://shahdk.com" target="_blank" rel="noopener noreferrer">Website</a></li>
                            <li>💼 <a href="https://www.linkedin.com/in/shahd-khartabil-33942b229" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li>🐙 <a href="https://github.com/shahdk33" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                            <li>📧 <a href="mailto:shahdkhartabil2@gmail.com">Email</a></li>
                        </ul>
                    </header>


                </div>

                <div className="right-side">
                    <img src={AboutImage} className="image" alt="Food" />
                </div>
            </div>

            <Footer />

        </div>
    );
}

export default AboutUs;
