import React from 'react';
import './Preabout.css';
import CV from '../../Assets/CV.pdf';

const Preabout = () => {
  const onButtonClick = () => {
    const pdfUrl = CV;
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = "CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='pre-container'>
      <p className='greeting'>Hello! My name is</p>
      <h1 className='name'>Ndivhuwo Maluleke</h1>
      <div className="button-container">
        <a href='mailto:maluleken04@gmail.com'>
          <button className='contact'>Say Hi!</button>
        </a>
        <button className='contact-1' onClick={onButtonClick}>Resume</button>
      </div>
    </div>
  );
};

export default Preabout;
