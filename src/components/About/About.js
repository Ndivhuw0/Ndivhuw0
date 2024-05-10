import React, { useEffect } from 'react';
import Me from '../../Assets/Me.jpeg';
import './About.css';
import 'animate.css';
import { Link } from 'react-scroll';

const About = () => {
    useEffect(() => {
        const elements = document.querySelectorAll('.aboutmelist li');
    
        const handleScroll = () => {
          elements.forEach((element, index) => {
            if (isElementInViewport(element)) {
              element.classList.add('animate__animated', 'animate__slideInUp');
            } else {
              element.classList.remove('animate__animated', 'animate__slideInUp');
            }
          });
        };
    
        const isElementInViewport = (el) => {
          const rect = el.getBoundingClientRect();
          return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
          );
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
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
                    <li><Link to='java' spy={true} smooth={true} duration={500} className='animate__animated'>Java</Link></li>
                    <li><Link to='python' spy={true} smooth={true} duration={500} className='animate__animated'>Python</Link></li>
                    <li><Link to='java' spy={true} smooth={true} duration={500} className='animate__animated'>JavaScript</Link></li>
                    <li><Link to='python' spy={true} smooth={true} duration={500} className='animate__animated'>HTML & CSS</Link></li>
                    <li><Link to='java' spy={true} smooth={true} duration={500} className='animate__animated'>React</Link></li>
                    <li><Link to='python' spy={true} smooth={true} duration={500} className='animate__animated'>Node.js</Link></li>
                    <li><Link to='java' spy={true} smooth={true} duration={500} className='animate__animated'>MySQL</Link></li>
                </ul>
            </div>
        </div>
        <div className='pic-my'>
            <img className='my-about-me-picture' alt='me' src={Me} height={500} width={333}/>
        </div>
    </div>
  )
}

export default About