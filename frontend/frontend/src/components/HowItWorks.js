import React from 'react';
import logo from '../assets/frij.png';
import { Link } from 'react-router-dom';
import HowItWorksImage from '../assets/HowItWorksImage.png';
import NavBar
 from './NavBar';
import Footer from './Footer';
function HowItWorks() {
    return (
        <div>
            {/* Navbar */}
            <NavBar />  

            {/* Main Content */}
            <div className="HomePage">
                <div className="left-side">
                    <header className="header">
                        <h1>How does <b>frij</b> work?</h1>
                        <p className="description">
                            frij is powered by a Python backend server that does all the heavy lifting to make finding recipes quick and easy. Here's how it works:
                        </p>
                        <ol className="how-it-works-list">
                            <li><b>Enter Ingredients:</b> Simply type in the ingredients you have on hand in the search bar.</li>
                            <li><b>Backend Magic:</b> The Python backend server takes your input and communicates with the <b>Spoonacular API</b></li>
                            <li><b>Smart Matching:</b> The server analyzes your ingredients and fetches recipes that match what you already have along with other details</li>
                            <li><b>Results in Seconds:</b> Within moments, you'll see tailored recipes, ready for you to explore and cook.</li>
                        </ol>
                        <p className="description">
                            With frij, you no longer have to spend time brainstorming meal ideas—it’s all automated, saving you time and energy.
                        </p>
                    </header>
                </div>

                <div className="right-side">
                    <img src={HowItWorksImage} className="image" alt="How It Works" />
                </div>
            </div>

           {/* <Footer /> */}
        </div>
    );
}

export default HowItWorks;
