import React, { useState } from "react";
import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import Logo from '../../../src/assets/images/Logo.png';
import Web_App from '../../../src/assets/images/Pharmacy Web.jpeg';
import Desktop from '../../../src/assets/images/Desktop_App.jpeg';
//import { Link } from 'react-router-dom';


const Portfolio = () => { 
    const [letterClass] = useState('text-animate');

    const box1 = useRef()
    const box2 = useRef()
    const box3 = useRef()
    

    useEffect(() => {
    
        gsap.fromTo(
          box1.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            delay: 2,
          }
          
        )
        
        gsap.fromTo(
          box2.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            delay: 2,
          }
          
        )
        
        gsap.fromTo(
          box3.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            delay: 2,
          }
          
        )
      }, [])

    
    return (
        <>
            <div className="page-header">
                <h1 > 
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Projects".split("")}
                        idx={15}/>
                 </h1>
                  <p>
                    These are my personal projects and academic projects. You can know more about them and view the source code too on my Github.
                    Point to project card to review more infor about the project.
                  </p>
                
            </div>

            <div className="container portfolio-page" >
                
                <div className="image-box" ref={box1}>
                    <img 
                    src={Logo}
                    className="portfolio-image"
                    alt="portfolio" />
                    
                    <div className="content">
                        <p className="title">Mihla's Portfoilo</p>
                        <h4 className="description">This is portfolio projects that you are currently on it. It was build my me using React framework,
                            JavaScrip, SCSS, HTML, and it then deployed it by hosting on Firebase. It was programmed on Microsft Visual Code 2022.
                        </h4>

                        <a target= "_blank" rel="noreferrer" href='https://github.com/Mihlayonke/Portfolio'>
                            <button className="btn"> View Source Code </button>
                        </a>
                    </div>
                </div>
                
                <div className="image-box" ref={box2}>
                    <img 
                    src={Web_App}
                    className="portfolio-image"
                    alt="portfolio" />
                    
                    <div className="content">
                        <p className="title">Varsity Pharmacy Web App</p>
                        <h4 className="description">
                          This is a website for a pharmacy store. It was an academic groung project where I was a groung leader. It was build using 
                          ASP.Net Core with C#, JavaScrip, HTML5, and CSS3. It was programmed on Microsoft Visual Studio 2019.
                        
                        </h4>

                       <a target= "_blank" rel="noreferrer" href="https://github.com/Mihlayonke/Varsity_Phamarcy_Web">
                            <button className="btn"> View Source Code </button>
                        </a>
                    </div>
                </div>
                
                <div className="image-box" ref={box3}>
                    <img 
                    src={Desktop}
                    className="portfolio-image"
                    alt="portfolio" />
                    
                    <div className="content">
                        <p className="title">Varsity Pharmacy Desktop App</p>
                        <h4 className="description">This is a POS desktop app for a pharmacy store. It was an academic groung project where I was a groung leader. It was build using 
                          ASP.Net MVC with C#, and SQL. It was programmed on Microsoft Visual Studio 2019.
                        
                        </h4>

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