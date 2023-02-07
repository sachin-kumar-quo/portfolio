import React from 'react'
import './Intro.css';

import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png'
import myimage from '../../img/myimage.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';





function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hey! I am</span>
          <span>Sachin Kumar</span>
          <span>Full Stack Developer with high level of experience in web designing and development, producting the Quality work</span>
        </div>
        <button className="button i-button">Hire Me</button>
        
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={Linkedin} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={myimage} alt="" />
        <img src={glassesimoji} alt="" />
        <div className='webdevdiv'>
          <FloatingDiv image={crown} text1="Frontend" text2="Developer"/>
        </div>
        <div className='criticaldiv'>
          <FloatingDiv image={thumbup} text1="Backend" text2="Developer"/>
        </div>
        <div className="blur-purple"></div>
        <div className="blur-blue"></div>
      </div>
    </div>
  )
}

export default Intro;