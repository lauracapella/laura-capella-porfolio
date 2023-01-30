import './index.scss';
import LogoS from '../../../assets/images/logo-s.png';
import { useEffect, useRef } from 'react';
/* import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
 import gsap from 'gsap-trial';*/

const Logo = () => {
    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

useEffect(() => {
/*     gsap.registerPlugin(DrawSVGPlugin)
 */
    /* gsap.timeline().to(bgRef.current, {
        duration:1,
        opacity:1,
    })
     .from(outlineLogoRef.current, {
        drawSVG: 1,
        duration: 20,
    })  */

},[])

    return (
        <div className='logo-container' ref={bgRef}>
{/*         <img ref={solidLogoRef} className='solid-logo' src={LogoS} alt='s'/>
 */}        {/* <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 191.39 226.49">
            <path ref={outlineLogoRef} fill={'#d9ff02'} stoke={'#d9ff02'} d="M179.64,198.8a7.16,7.16,0,0,0-7.15,7.15V206L28.23,230.38,125.92,22.65a6.25,6.25,0,0,0,1.16.11,7.2,7.2,0,1,0-4.77-1.84l-98,208.31L13.8,214.35,94.14,38.93a7.18,7.18,0,1,0-3.88-1.14l-80.58,176s0,0,0,.06a1.59,1.59,0,0,0-.07.2,1.21,1.21,0,0,0-.05.18,1.23,1.23,0,0,0,0,.19,2.77,2.77,0,0,0,0,.58,1.21,1.21,0,0,0,.05.18l.06.19a1.19,1.19,0,0,0,.08.16,1.18,1.18,0,0,0,.11.19l0,.06,13,18.37a2,2,0,0,0,1.63.84,1.38,1.38,0,0,0,.2,0,1.94,1.94,0,0,0,.68,0l148.27-25a7.15,7.15,0,1,0,6-11.08ZM127.08,12.45a3.16,3.16,0,1,1-3.16,3.15A3.15,3.15,0,0,1,127.08,12.45Zm-33,16.17A3.16,3.16,0,1,1,91,31.77,3.15,3.15,0,0,1,94.12,28.62ZM179.64,209.1A3.15,3.15,0,1,1,182.8,206,3.16,3.16,0,0,1,179.64,209.1Zm14.1-30.93a7.15,7.15,0,0,0-7.13,6.65L59.19,206.32l7.72-16.85,104-17.54a2.28,2.28,0,0,0,.59-.2,7.14,7.14,0,1,0-1.56-4.45,6.28,6.28,0,0,0,0,.75l-101,17L133.53,44a7.75,7.75,0,0,0,1.09.09,7.19,7.19,0,1,0-4.72-1.79L54.2,207.61a2,2,0,0,0-.16,1.14,1.78,1.78,0,0,0,0,.46,2,2,0,0,0,2,1.67,1.84,1.84,0,0,0,.33,0l131.06-22.11h0a7.15,7.15,0,1,0,6.29-10.56Zm-16.7-14a3.15,3.15,0,1,1-3.15,3.15A3.15,3.15,0,0,1,177,164.13ZM134.62,33.77a3.16,3.16,0,1,1-3.16,3.16A3.16,3.16,0,0,1,134.62,33.77Zm59.12,154.7a3.15,3.15,0,1,1,3.15-3.15A3.15,3.15,0,0,1,193.74,188.47Z" transform="translate(-9.5 -8.45)"/>
        </svg> */}
        <svg 
            
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 192.39 227.49">
        <g
            className='svg-container'
            fill='none'>

        <path 
            ref={outlineLogoRef} 

            d="M179.64,198.8a7.16,7.16,0,0,0-7.15,7.15V206L28.23,230.38,125.92,22.65a6.25,6.25,0,0,0,1.16.11,7.2,7.2,0,1,0-4.77-1.84l-98,208.31L13.8,214.35,94.14,38.93a7.18,7.18,0,1,0-3.88-1.14l-80.58,176s0,0,0,.06a1.59,1.59,0,0,0-.07.2,1.21,1.21,0,0,0-.05.18,1.23,1.23,0,0,0,0,.19,2.77,2.77,0,0,0,0,.58,1.21,1.21,0,0,0,.05.18l.06.19a1.19,1.19,0,0,0,.08.16,1.18,1.18,0,0,0,.11.19l0,.06,13,18.37a2,2,0,0,0,1.63.84,1.38,1.38,0,0,0,.2,0,1.94,1.94,0,0,0,.68,0l148.27-25a7.15,7.15,0,1,0,6-11.08ZM127.08,12.45a3.16,3.16,0,1,1-3.16,3.15A3.15,3.15,0,0,1,127.08,12.45Zm-33,16.17A3.16,3.16,0,1,1,91,31.77,3.15,3.15,0,0,1,94.12,28.62ZM179.64,209.1A3.15,3.15,0,1,1,182.8,206,3.16,3.16,0,0,1,179.64,209.1Zm14.1-30.93a7.15,7.15,0,0,0-7.13,6.65L59.19,206.32l7.72-16.85,104-17.54a2.28,2.28,0,0,0,.59-.2,7.14,7.14,0,1,0-1.56-4.45,6.28,6.28,0,0,0,0,.75l-101,17L133.53,44a7.75,7.75,0,0,0,1.09.09,7.19,7.19,0,1,0-4.72-1.79L54.2,207.61a2,2,0,0,0-.16,1.14,1.78,1.78,0,0,0,0,.46,2,2,0,0,0,2,1.67,1.84,1.84,0,0,0,.33,0l131.06-22.11h0a7.15,7.15,0,1,0,6.29-10.56Zm-16.7-14a3.15,3.15,0,1,1-3.15,3.15A3.15,3.15,0,0,1,177,164.13ZM134.62,33.77a3.16,3.16,0,1,1-3.16,3.16A3.16,3.16,0,0,1,134.62,33.77Zm59.12,154.7a3.15,3.15,0,1,1,3.15-3.15A3.15,3.15,0,0,1,193.74,188.47Z" 
            transform="translate(-9 -7.95)"
           
            />
        </g>
        </svg>
        </div>
    );
}

export default Logo;