import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)  
    }, []);
    return(
    <>
    <div className="container about-page">
        <div className="text-zone">
            <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','m','e']}
                    idx={15}
                />
            </h1>
            <p>
            I am an enthusiastic and pixel-perfeccionist web developer, I contribute from the front-end to the development of applications UX-oriented web and UI.</p>
            <p>I have solid experience in web design, digital communication and web layout. Throughout my career my interest in programming has grown and recently I studied front-end development (Javascript, Vue and React).</p>
            <p>I am looking for a position as a web layout artist and developer of web applications where I can add value both for my programming knowledge as well as my experience in web design and layout.</p>
        </div>
    </div>
    <Loader type="pacman" />
    </>
    )
}

export default About;



