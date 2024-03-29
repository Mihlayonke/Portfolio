
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './contact.scss'


const Contact = () => {
  
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = 'service_p5yz2pi';
    const templateID = 'template_5pvx098';

    emailjs
    .sendForm(serviceID, templateID, form.current,'Am8a-BEPN66EMdum5')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }
  
  return (
    <>

      <div className="page-header">
        <h1 > 
          Contact Me
        </h1>
          
                
      </div>

      <div className="container contact-page">
        <div className="text-zone">

          <p>
            Thank you for your visite.
            <br/>
            I look forward to hearing from you.
          </p>


          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              
              <ul>
                <li className="half">
                  <input placeholder=" Your name" type="text" name="from_name" required />
                </li>
                <li className="half">
                  <input
                    placeholder=" Your e-mail"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>

                <li className='button-zone'>
                    <input type="submit" className="flat-button" value="SEND MESSAGE" />
                </li>
                
              </ul>
            </form>
          </div>
        </div>
        <div className="info">

          ▸Physical Address:
          <br />
           -  Table View,
          <br />
           -  Cape Town, 
           <br />
           -  Western Cape, South Africa 
           <br />
           -  7441
           <br />
            <br />
            ▸Email: mihlatembe@outlook.com 
            <br />
            ▸Call/WhatsApp: (+27) 72 178 7779 
            <br />
            <br />
              <div className='message'>
                Point here to view my photo.
                  <div className='copyright'>
                    ©2023
                  </div>
              </div>
        </div> 

      </div>

      
    </>
  )
}

export default Contact
