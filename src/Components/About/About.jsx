import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
// import profile_img from '../../assets/about_profile.png'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern}alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                {/* <img src={profile_img} alt="" /> */}
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I have a passion for web development, programming, and creating meaningful digital experiences. I enjoy turning ideas into functional projects, blending creativity with technical skills. Over time, I’ve gained experience in front-end development with HTML, CSS, JavaScript, and React.js, along with backend exposure through Nodejs and databases.</p>
                    <p>Beyond coding, I’m driven by curiosity and a desire to make an impact. I enjoy building projects that not only work seamlessly but also inspire and engage users. My goal is to grow as a developer, take on challenging projects, and contribute to meaningful solutions that bridge technology and creativity. I’m constantly seeking opportunities to learn, innovate, and bring ideas to life.</p>
                </div>
                {/* <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}} /></div>
                </div> */}
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
            </div> 
            <hr />
            <div className="about-achievement">
                <h1>3+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
      
    </div>
  )
}

export default About
