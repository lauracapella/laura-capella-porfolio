import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import Logo from "../Home/Logo"
import './index.scss';


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)  
    }, []);
    return(
    <>
    <div className="container about-page">
    <Logo />
        <div className="text-zone">
            <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t']}
                    idx={15}
                />
            </h1>
            <a href="mailto:laura@laguapacomunicacion.com">
            laura@laguapacomunicacion.com</a>
        </div>
    </div>
    <Loader type="pacman" />
    </>
    )
}

export default Contact;



