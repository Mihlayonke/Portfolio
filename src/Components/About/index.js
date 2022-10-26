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
import Loader from 'react-loaders';
import { useState } from 'react';
  

const About = () => {
  const [letterClass] = useState('text-animate')

  
  return ( 
    <>
      <div className='container about-page'>
          <div className='text-zone'>
              <h1>
                  <AnimatedLetters letterClass={letterClass} strArray={['A','b','o','u','t',' ','M','e']} 
                  idx={10} />
              </h1>

              <p> I have obtained great knowledge and skills in software
                  programming, web development, databases, operating systems, 
                  and problem-solving during my undergraduate years and through
                  self-taught.
              </p>

              <p>
                  I know Computer Science fundamentals such as
                  Object-Oriented Programming, System Development Life Cycle
                  "SDLC", Agile Development, Data Structures, and Complex
                  Analysis.
              </p>

              <p>
                  I have a Bachelor's Degree in Computer Science and Information 
                  Technology that I obtained at the University of Kwa-Zulu Natal.
              </p>

              <p>
                  I have skills and experience with the following languages: Java, C#, Python, 
                  JavaScrip, TypeScrip, HTML5, CSS3, ASP.Net, Visual Basic, Angular2+, React, and SQL.
              </p>
                  
              <p>
                  I have a knowledge and experience with using the following tools: Github, Git,
                  VS Code, Microsft SQL, Visual Studio, Terminals, IntelliJ, Jira, and NodeJS.
              </p>
              
              <Link to ="/contact" className = 'flat-button'> CONTACT ME </Link>

            <div/>
          </div>

          <div className="stage-cube-cont">
        <div className="cubespinner">
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

    <Loader type="pacman" />

    </>
    )
}

export default About;