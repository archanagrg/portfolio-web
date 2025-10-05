import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <section id='hero'>
      <div className="heroContent">
        <span className="hi">Hi,</span>
        <span className="heroText">
          I'm <span className='heroName'>Archana Gurung</span> <br />Frontend Developer
        </span>
        <p className='heroPara'>
          A coder and creator turning ideas into digital experiences. <br /> 
          I mix logic with creativity to build projects that inspire and perform.
        </p>
        <div className="hero-action">
          <AnchorLink href="#connect" className="hero-connect">
            Let's Connect
          </AnchorLink>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hero-resume">
            My Resume
          </a>
        </div>
      </div>
      <img src={profile_img} alt="Profile" className='profile_img' />
    </section>
  )
}

export default Hero;
