import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './about.scss';
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
import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
  

const About = () => {
  

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
       <div className="page-header">
          <h1 > 
              About Me
          </h1>
        
        </div>

      <div className='container about-page'>
          <div className='text-zone'>

              <p> I have obtained great knowledge and skills in software Development,
                  database management, and problem-solving during my undergraduate, practice, work-experience and self-taught.
              </p>

              <p>
                  I have a Bachelor's Degree in Computer Science and Information 
                  Technology obtained at the University of Kwa-Zulu Natal and other certificates awarded from online boot camps.
              </p>

              <p>
                  I know Computer Science fundamentals such as Computer Architecture, Data Structures, 
                  Algorithms, and Databases. I know methodologies such as System Development 
                  Life Cycle focusing on Agile Development. I use Object-Oriented Programming pagradigm 
                  and other important programming practices when I'm programming.
              </p>

              <p>
                  I have skills and experience with the following languages: Java, C#, Python, 
                  JavaScrip, TypeScrip, HTML5, CSS3, and SQL including frameworks and libraries such as 
                  ASP.Net CORE & MVC, Angular2+, and React.JS.
              </p>
                  
              <p>
                  I have a knowledge and experience with using the following tools: Github,
                  VS Code, Microsft SQL, Postgres SQL, Visual Studio, PowerShell, IntelliJ, PyCharm, Jira for 
                  collaboration and Microsoft Power BI for data visualization and analysis. I have excelent skill of 
                  computer literacy and Office Suite such as Word, PowerPoint and Excel.
              </p>

              <div className='button-zone'>

                <Link to ="/awards" className = 'flat-button'> MY AWARDS </Link>
 
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