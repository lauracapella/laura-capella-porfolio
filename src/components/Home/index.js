import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Logo from './Logo'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['a', 'u', 'r', 'a',' ', 'C','a','p','e','l','l','a','.'];
    const jobArray = ['U','X','U','I',' ','D', 'e', 's', 'i', 'g', 'n', 'e', 'r', ' ', 'F','r','o','n','t',' ','d','e','v','e','l','o','p','e','r'];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)  
    }, []);

 return(
     <div className="container home-page">
        <div className="text-zone">
            <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass}_12`}>i, </span>
            <span className={`${letterClass}_13`}>I</span>
            <span className={`${letterClass}_14`}>'m</span>

            <img src={LogoTitle} alt='developer' className='logo-text'></img>
            <AnimatedLetters letterClass={letterClass} 
            strArray={nameArray}
            idx={21} />
            <br />
            <AnimatedLetters letterClass={letterClass} 
            strArray={jobArray}
            idx={50} />
            <br />
            </h1>
            <br />
            <h2>
            <br />
                Html5 | CSS3 | JavaScript | React | Vue
            </h2> 
            <Link to="/contact" className='flat-button'>Contact Me</Link>
        </div>
        <Logo />
     </div>
 );
}
export default Home;