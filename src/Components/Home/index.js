import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import React from 'react';
import Logo from './Logo'

const Home = () => {

    // eslint-disable-next-line no-unused-vars
    const [lettersClass, setLetterClass] = useState('text-animate');

    const arrayGreet = ['H', 'i',','];
    const arrayName = ['I',"'",'m',' ','M', 'i', 'h', 'l', 'a', 'y', 'o', 'n', 'k', 'e', ' ', 'T', 'e', 'm', 'b', 'e', ','];
    const arrayJob = ['I',"'",'m',' ','a',' ','S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.' ];
    const arrayMore = ['Web Developer ',' / ',' Front-End Developer ', ' / ', ' Back-End Developer']

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    
                    <AnimatedLetters lettersClass={lettersClass} strArray={arrayGreet} idx={10}/> 
                    <br/>
                    
                    <AnimatedLetters lettersClass={lettersClass} strArray={arrayName} idx={30}/> 
                    <br/>

                    <AnimatedLetters lettersClass={lettersClass} strArray={arrayJob} idx={60}/> 
                    <br/>
                </h1>

                <h2> 
                    <AnimatedLetters lettersClass={lettersClass} strArray={arrayMore} idx={90}/> 
                </h2>

                <Link to ="/about" className = 'flat-button'> ABOUT ME </Link>
            </div>

            <Logo/>

        </div>
    )

    
} 

export default Home;