import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import LogoS from '../../../../src/assets/images/laptop.png';
import './index.scss'
import React from 'react';

const Logo = () => {
  const solidLogoRef = useRef()

  useEffect(() => {

    gsap.fromTo(
      solidLogoRef.current,
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
    <div className="logo-container" >
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
