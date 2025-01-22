import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
                        <footer className="footer">
                            <div className="footer-left">
                            <h2>frij</h2>
                            <p>© 2024</p>
                            <p>Shahd Khartabil</p>
                            </div>
                            
                            <div className="footer-right">
                                <div className="footer-nav">
                                    <Link to="/">Find recipes</Link>
                                    <Link to="/how-it-works">How it works</Link>
                                    <Link to="/about-us">About us</Link>
                                </div>
                            </div>
                        </footer>
    </div>
  )
}

export default Footer