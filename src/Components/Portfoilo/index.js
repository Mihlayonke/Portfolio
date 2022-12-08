import React, { useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import Logo from '../../../src/assets/images/Logo.png';
import Web_App from '../../../src/assets/images/Pharmacy Web.jpeg';
import Desktop from '../../../src/assets/images/Desktop_App.jpeg';
//import { Link } from 'react-router-dom';


const Portfolio = () => { 
    const [letterClass] = useState('text-animate');

    
    return (
        <>
            <div >
                <h1 className="page-title"> 
                <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Projects".split("")}
                        idx={15}/>
                 </h1>

                
            </div>

            <div className="container portfolio-page">
                
                <div className="image-box">
                    <img 
                    src={Logo}
                    className="portfolio-image"
                    alt="portfolio" />
                    
                    <div className="content">
                        <p className="title">Mihla's Portfoilo</p>
                        <h4 className="description">This is portfolio projects that you are currently on it.</h4>

                        <a target= "_blank" rel="noreferrer" href='https://github.com/Mihlayonke/Portfolio'>
                            <button className="btn"> View Source Code </button>
                        </a>
                    </div>
                </div>
                
                <div className="image-box">
                    <img 
                    src={Web_App}
                    className="portfolio-image"
                    alt="portfolio" />
                    
                    <div className="content">
                        <p className="title">Varsity Pharmacy Web App</p>
                        <h4 className="description">This is a website for a pharmacy store</h4>

                       <a target= "_blank" rel="noreferrer" href="https://github.com/Mihlayonke/Varsity_Phamarcy_Web">
                            <button className="btn"> View Source Code </button>
                        </a>
                    </div>
                </div>
                
                <div className="image-box">
                    <img 
                    src={Desktop}
                    className="portfolio-image"
                    alt="portfolio" />
                    
                    <div className="content">
                        <p className="title">Varsity Pharmacy Desktop App</p>
                        <h4 className="description">This is a POS desktop app for a pharmacy store.</h4>

                       <a target= "_blank" rel="noreferrer" href="https://github.com/Mihlayonke/Varsity_Pharmacy_Windows_Form/">
                            <button className="btn"> View Source Code </button>
                        </a>
                    </div>
                </div>
            </div>

            <div>
                 
            </div>
           
            
        </>
    );
}


export default Portfolio;