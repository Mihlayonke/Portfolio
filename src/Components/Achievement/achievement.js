
import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import "./achievement.scss";
import Certificate1 from '../../../src/assets/images/JSCertificate.jpeg';
import Certificate2 from '../../../src/assets/images/Degree.jpg';
import { Link } from 'react-router-dom';


const Achievement = () => { 
    

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
                    Achievements
                 </h1>
                  <p>
                    These are my certificates from University and online BootCamps. You can view the source of the certification.
                    Point to Certificate card to review more information about the certification.
                  </p>
                
            </div>

            <div className="container achievement-page" >
                
                <div className="image-box_" ref={box1}>
                    <img 
                    src={Certificate1}
                    className="certificate-image"
                    alt="certificate" />
                    
                    <div className="content_">
                        <p className="title_">Developer Certificate</p>
                        <h4 className="description_">This is my Developer Certificate. 
                          <br/>
                          <br/>
                            It was obtained on freeCodeCamp where I completed some projects focusing of Javascript Algorithms
                            and Data Structures. This if a form of left teaching and practicing routine to cultivate skill and 
                            keep up to date with programming languages.
                          <br/>
                          <br/>
                          Date: 10/11/2022
                        </h4>

                        <a target= "_blank" rel="noreferrer" href='https://freecodecamp.org/certification/Mihlayonke/javascript-algorithms-and-data-structures'>
                            <button className="btn"> Verify Certificate </button>
                        </a>
                    </div>
                </div>

                <div className="image-box_" ref={box2}>
                    <img 
                    src={Certificate2}
                    className="certificate-image"
                    alt="certificate" />
                    
                    <div className="content_">
                        <p className="title_">Degree Statement</p>
                        <h4 className="description_">This is my Bachelor's Degree Statement. 
                          <br/>
                          <br/>
                            It was obtained on 2021 when I completed my Bachelor's Degree in Computer Science and Information Technology
                            at the University of Kwa-Zulu Natal Westville Campus under the discipline of Computer Science and Information Systems & Technology.
                          <br/>
                          <br/>
                          Date: 31/11/2021
                        </h4>

                        <a target= "_blank" rel="noreferrer" href='https://www.linkedin.com/in/mihlayonke-tembe-280650151/'>
                            <button className="btn"> Verify Certificate </button>
                        </a>
                        
                    </div>
                </div>

            </div>

            <div className='button1-zone'>

              <Link to ="/project" className = 'flat-button'> MY PROJECTS </Link>

            </div>

          <div>
                 
      </div>   
            
    </>
  );
}


export default Achievement;