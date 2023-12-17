import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import './Hero.css';
const banner = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
};

const letterAni = {
    initial: { y: 400 },
    animate: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
};

const Hero = () => {
    const [playMarquee, setPlayMarquee] = useState(false);

    useEffect(() => {
        setTimeout(() => {
          setPlayMarquee(true);
        }, 2000);
    }, []);
  return (
    <motion.div className="banner" variant={banner}>
        <HeroFirstLine title={"Student"}/>
        <HeroSecondLine title={"Developer"} playMarquee={playMarquee}/>
        <HeroThirdLine title={"Creative"}/>
    </motion.div>
  );
};

const AnimatedLetters = ({ title, disabled }) => (
    <motion.span
      className='row-title'
      variants={disabled ? null : banner}
      initial='initial'
      animate='animate'>
      {[...title].map((letter) => (
        <motion.span
          className='row-letter'
          variants={disabled ? null : letterAni}>
          {letter}
        </motion.span>
      ))}
    </motion.span>
);

const HeroFirstLine = ({ title }) => {
    return (
      <div className={"banner-row"}>
        <div className='row-col'>
          <AnimatedLetters title={title} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 0.4,
          }}
          className='row-col'>
          <span className='row-message'>
            Currently based in Cape Town and Pretoria, and I am
            interested in Specializing in Cyber-Security.
          </span>
        </motion.div>
      </div>
    );
  };
  
  const HeroThirdLine = ({ title }) => {   
    return (
      <div className={"banner-row center"}>
        <AnimatedLetters title={title} />
      </div>
    );
  };
  
  const HeroSecondLine = ({ title, playMarquee }) => {
    return (
      <div className={`banner-row marquee  ${playMarquee && "animate"}`}>
        <motion.div
          initial={{ y: 310 }}
          animate={{ y: 0 }}
          transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
          className='marquee__inner'>
          <AnimatedLetters title={title} disabled />
          <AnimatedLetters title={title} />
          <AnimatedLetters title={title} disabled />
          <AnimatedLetters title={title} disabled />
        </motion.div>
      </div>
    );
  };
  

export default Hero