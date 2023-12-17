import React, { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 100) {
        setCount(count + 1);
      } else {
        setIsVisible(false);
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className={`preloader ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="container">
        <div className="count">{count}</div>
      </div>
    </div>
  );
};

export default Preloader;
