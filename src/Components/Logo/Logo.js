import React from 'react';
import Tilt from 'react-parallax-tilt';
import face from './face.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
                <Tilt className="parallax-effect br2 shadow-2" perspective={500}>
                <div className="inner-element">
                <img style={{paddingTop: '5px'}} alt='logo' src={face} />
                </div>
                </Tilt>
        </div>
    );
}

export default Logo;