import './home.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import AnimatedLetters from '../Animation/animation';
import React from 'react';
import Logo from './Logo/logo'

const Home = () => {

    // eslint-disable-next-line no-unused-vars
    const [lettersClass, setLetterClass] = useState('text-animate');

    const arrayGreet = ['W', 'e','l','c','o','m','e','.',' ',''];
    const arrayName = ['I',"'",'m',' ','M', 'i', 'h', 'l', 'a', 'y', 'o', 'n', 'k', 'e', ' ', 'T', 'e', 'm', 'b', 'e', ','];
    const arrayJob = [ 'a',' ','J','r.',' ','S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.' ];
    const arrayMore = ['BSc Graduate ',' | ',' Full-Stake Developer ',' | ','Freelancer',]

    return (
        <>
             <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    
                    <AnimatedLetters lettersClass={lettersClass} strArray={arrayGreet} idx={20}/> 
                    <br/>
                    <br/>
                    <AnimatedLetters lettersClass={lettersClass} strArray={arrayName} idx={35}/> 
                    <br/>
                    <AnimatedLetters lettersClass={lettersClass} strArray={arrayJob} idx={60}/> 
                    <br/>
                </h1>

                <h2> 
                    <AnimatedLetters lettersClass={lettersClass} strArray={arrayMore} idx={85}/> 
                </h2>

                <div className='button-zone'>

                    <Link to ="/about" className = 'flat-button'> ABOUT ME </Link>
                
                </div>
            </div>

            <Logo/>

        </div>
        </>
       
    )

} 

export default Home;