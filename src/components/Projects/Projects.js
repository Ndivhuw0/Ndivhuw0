import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className='projects-container' id='projects'>
      <h3 className='sectionTitle-3'>Projects</h3>
      <div className="cards-container">
        <div className="cards">
          <div className="tools">
            <div className="circle">
              <span className="red box"></span>
            </div>
            <div className="circle">
              <span className="yellow box"></span>
            </div>
            <div className="circle">
              <span className="green box"></span>
            </div>
          </div>
          <div className="card__content">
            Project 1. Projects will be uploaded soon
          </div>
        </div>

        <div className="cards">
          <div className="tools">
            <div className="circle">
              <span className="red box"></span>
            </div>
            <div className="circle">
              <span className="yellow box"></span>
            </div>
            <div className="circle">
              <span className="green box"></span>
            </div>
          </div>
          <div className="card__content">
            Project 2. Projects will be uploaded soon
          </div>
        </div>

        <div className="cards">
          <div className="tools">
            <div className="circle">
              <span className="red box"></span>
            </div>
            <div className="circle">
              <span className="yellow box"></span>
            </div>
            <div className="circle">
              <span className="green box"></span>
            </div>
          </div>
          <div className="card__content">
            Project 3. Projects will be uploaded soon
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
