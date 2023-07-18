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

              <p> 
                  I have obtained great knowledge and skills in Software Development, database management, and 
                  problem-solving during my undergraduate, practice, work, and self-taught. I have a bachelor's 
                  degree in Computer Science and Information Technology obtained at the University of Kwa-Zulu 
                  Natal and other certificates awarded from online boot camps.
              </p>

              <p>
                  I know Computer Science fundamentals such as Computer Architecture, Data Structures, Algorithms, and 
                  Databases. I know methodologies such as System Development Life Cycle focusing on Agile Development. 
                  I use Object-Oriented Programming paradigms and other important programming practices.
              </p>

              <p>
                  I have skills in these languages: Java, C#, Python, JavaScript, Typescript, HTML5, 
                  CSS3, and SQL including frameworks and libraries such as .Net Framework, and React.js.
              </p>
                  
              <p>
                  I have experience with these tools: GitHub, VS Code, Microsoft SQL sever, Postgres SQL, 
                  Visual Studio, PowerShell, Microsoft Visio,IntelliJ, PyCharm, Jira for collaboration, and Microsoft Power BI for data visualization and 
                  analysis, but these are not limited tools I know. Also, I have skills in computer literacy and office suite.
              </p>

              <p>
                  My favourit and recommended book is called Systems Analysis and Design in a Changing World 7th Edition, 
                  it is written by John W. Satzinger; Robert B. Jackson; Stephen D. Burd. This book guid and provide me with immense 
                  knowledge about Systems Development.
              </p>
              
              <div className='button-zone'>

                <Link to ="/certificates" className = 'flat-button'> MY CERTIFICATES </Link>
 
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