//import React, { useState } from "react";
import Loader from "react-loaders";
//import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import Logo from '../../../src/assets/images/Logo.png';
import Quize from '../../../src/assets/images/Quize.png';
import Desktop from '../../../src/assets/images/Desktop_App.jpeg';


const Portfolio = () => { 
    
    return (
        <>
            <div >
                <h1 className="page-title"> Projects </h1>
            </div>
            <div className="container portfolio-page">
                
                <div className="image-box">
                    <img 
                    src={Logo}
                    className="portfolio-image"
                    alt="portfolio" />
                    
                    <div className="content">
                        <p className="title">My Portfoilo</p>
                        <h4 className="description">This is portfolio projects that you are currently on it.</h4>

                        <button  target= "_blank" rel="noreferrer"
                            className="btn"
                            href="https://github.com/Mihlayonke/Portfolio"
                       > View Source Code </button>
                    </div>
                </div>
                
                <div className="image-box">
                    <img 
                    src={Quize}
                    className="portfolio-image"
                    alt="portfolio" />
                    
                    <div className="content">
                        <p className="title">The Quize Game</p>
                        <h4 className="description">This is a quzie game</h4>

                        <button  target= "_blank" rel="noreferrer"
                            className="btn"
                            href="https://github.com/Mihlayonke/Quiz_Game"
                       > View Source Code </button>
                    </div>
                </div>
                
                <div className="image-box">
                    <img 
                    src={Desktop}
                    className="portfolio-image"
                    alt="portfolio" />
                    
                    <div className="content">
                        <p className="title">Varsity Pharmacy</p>
                        <h4 className="description">This is a POS desktop app for a Varsity Pharmacy store.</h4>

                        <button  target= "_blank" rel="noreferrer"
                            className="btn"
                            href="https://github.com/Mihlayonkehttps://github.com/Mihlayonke/Varsity_Pharmacy_Windows_Form/"
                       > View Source Code </button>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
}


export default Portfolio;