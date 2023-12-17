import React from 'react';
import Me from '../../Assets/Me.jpg';
import './About.css';

const About = () => {
  return (
    <div className='sectionAbout' id='about'>
        <div className='col'>
            <h3 className='sectionTitle'>
                About me
            </h3>
        </div>
        <div className='row'>
            <div className='section_about_me'>
                <p>I'm a BSc Computer Science student at the University of The Western Cape, hoping to 
                    pursue a career in CyberSecurity and Software Engineering.
                </p>
                <p>
                My academic journey in computer science has been transformative, refining my skills across 
                various domains. Pursuing my degree provided a solid foundation in software development methodologies, 
                database management, computer networks, operating systems, and computer architecture. The 
                coursework also introduced me to introductory concepts in machine learning and artificial intelligence.
                </p>
                <p>
                Engaging in collaborative projects and hackathons has allowed me to enhance my teamwork and 
                communication skills. Effectively conveying technical concepts to diverse audiences has become 
                second nature, thanks to these experiences. The challenges presented in these environments have 
                fostered my critical thinking, problem-solving abilities, and a commitment to continuous learning.
                </p>
                <p>
                    Here are some techonologies that i have worked with:
                </p>
                <ul className='aboutmelist'>
                    <li>Java</li>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>HTML & CSS</li>
                    <li>Node.js</li>
                    <li>React</li>
                    <li>MySQL</li>
                </ul>
            </div>
        </div>
        <div className='pic-my'>
            <img className='my-about-me-picture' alt='me' src={Me} height={450} width={325}/>
        </div>
    </div>
  )
}

export default About