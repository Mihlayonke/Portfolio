import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import "./project.scss";
import Logo from '../../../src/assets/images/Logo.png';
import Web_App from '../../../src/assets/images/Pharmacy Web.jpeg';
import Desktop from '../../../src/assets/images/Desktop_App.jpeg';
import { Link } from 'react-router-dom';


const Portfolio = () => { 

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
                    My Projects
                 </h1>
                  <p>
                    These are my personal projects and academic projects. You can view the source code on my Github.
                    Point to project card to review more infor about the project. Note that these are not limited projects, 
                    there are more to be uploaded here and you can find more on my Github profile.
                  </p>
                
            </div>

            <div className="container portfolio-page" >
                
                <div className="image-box" ref={box1}>
                    <img 
                    src={Logo}
                    className="portfolio-image"
                    alt="portfolio" />
                    
                    <div className="content">
                        <p className="title">My Website</p>
                        <h4 className="description">This is my website that you are currently vising. 
                          <br/>
                          <br/>
                          It was built by my-self using React library, JavaScrip, SCSS, HTML, and then I deployed 
                          it by hosting on Firebase. It was programmed on Microsft Visual Code 2022 and using Node.js runtime environment.
                          <br/>
                          <br/>
                          Date: 09/2022 - 12/2022
                        </h4>

                        <a target= "_blank" rel="noreferrer" href='https://github.com/Mihlayonke/Portfolio'>
                            <button className="btn"> View Code </button>
                        </a>
                    </div>
                </div>
                
                <div className="image-box" ref={box2}>
                    <img 
                    src={Web_App}
                    className="portfolio-image"
                    alt="portfolio" />
                    
                    <div className="content">
                        <p className="title">Pharmacy Web App</p>
                        <h4 className="description">
                          This is a website for a varsity pharmacy. 
                          <br/>
                          <br/>
                          It was an academic groung project where I was a group leader of five members. It was built using 
                          ASP.Net Core framework with C#, JavaScrip, HTML5, and CSS3. It was programmed on Microsoft Visual Studio 2019.
                          <br/>
                          <br/>
                          Date: 07/2021 - 11/2021
                        </h4>

                       <a target= "_blank" rel="noreferrer" href="https://github.com/Mihlayonke/Varsity_Phamarcy_Web">
                            <button className="btn"> View Code </button>
                        </a>
                    </div>
                </div>
                
                <div className="image-box" ref={box3}>
                    <img 
                    src={Desktop}
                    className="portfolio-image"
                    alt="portfolio" />
                    
                    <div className="content">
                        <p className="title">Pharmacy Desktop App</p>
                        <h4 className="description">
                          This is a desktop app for varsity a pharmacy. 
                          <br/>
                          <br/>
                          It was an academic groung project where I was a group leader of five members. It was built using 
                          ASP.Net MVC framework with C#, and SQL. It was programmed on Microsoft Visual Studio 2019 and SQL Server.
                          <br/>
                          <br/>
                          Date: 02/2021 - 05/2021
                        </h4>

                       <a target= "_blank" rel="noreferrer" href="https://github.com/Mihlayonke/Varsity_Pharmacy_Windows_Form/">
                            <button className="btn"> View Code </button>
                        </a>
                    </div>
                </div>
            </div>

            <div className='button1-zone'>

              <Link to ="/contacts" className = 'flat-button'> CONTACT ME </Link>

            </div>

          <div>
                 
      </div>   
            
    </>
  );
}


export default Portfolio;