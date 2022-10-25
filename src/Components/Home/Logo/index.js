import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import LogoS from '../../../../src/assets/images/laptop.png';
import './index.scss'
import React from 'react';

const Logo = () => {
  const bgRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 5,
        duration: 3,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="Laptop pic"
      />

    </div>
  )
}

export default Logo
