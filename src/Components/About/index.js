import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import React from 'react';
import { 
    faAngular,
    faSquareJs,
    faJava,
    faGithub,
    faHtml5,
    faReact,
  } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
  

const About = () => {
  const [letterClass] = useState('text-animate')

  const cube = useRef()
    
  useEffect(() => {
  
      gsap.fromTo(
        cube.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 1.5,
        }
        
      )
      
    }, [])
  
  return ( 
    <>
      <div className='container about-page'>
          <div className='text-zone'>
              <h1>
                  <AnimatedLetters letterClass={letterClass} strArray={['A','b','o','u','t']} 
                  idx={10} />
              </h1>

              <p> I have obtained great knowledge and skills in software Development,
                  database management, and problem-solving during my undergraduate, practice and self-taught.
              </p>

              <p>
                  I have a Bachelor's Degree in Computer Science and Information 
                  Technology obtained at the University of Kwa-Zulu Natal.
              </p>

              <p>
                  I know Computer Science fundamentals such as Computer Architecture, Data Structures, 
                  Algorithms, and Databases. I know methodologies such as System Development 
                  Life Cycle focusing on Agile Development. I use Object-Oriented Programminpag radigm 
                  when I program and other important programming practices.
              </p>

              <p>
                  I have skills and experience with the following languages: Java, C#, Python, 
                  JavaScrip, TypeScrip, HTML5, CSS3, and SQL including frameworks such as ASP.Net, Angular2+, and React.
              </p>
                  
              <p>
                  I have a knowledge and experience with using the following tools: Github, Git,
                  VS Code, Microsft SQL, Postgres SQL, Visual Studio, Terminals, IntelliJ, Jira and Microsoft Power BI
                  for data visualization. I have excelent skill for computer literacy and Office suite such as Word, 
                  PowerPoint and Excel.
              </p>

              <div className='button-zone'>

                <Link to ="/contact" className = 'flat-button'> CONTACT ME </Link>
 
              </div>
 
            <div/>
          </div>

          <div className="stage-cube-cont" ref={cube}>
            
            <div className="cubespinner" >
              <div className="face1">
                <FontAwesomeIcon icon={faAngular} color="#DD0031" />
              </div>

              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>

              <div className="face3">
                <FontAwesomeIcon icon={faJava} color="#28A4D9" />
              </div>

              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>

              <div className="face5">
                <FontAwesomeIcon icon={faSquareJs} color="#EFD81D" />
              </div>

              <div className="face6">
                <FontAwesomeIcon icon={faGithub} color="#ffffff" />
              </div>
              
            </div>
          </div>
        </div>

    </>
  )
}

export default About;