import './App.css';
import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import Preloader from './components/Preloader/Preloader';
import Hero from './components/Hero/Hero';
import Navbar from './components/NavBar/Navbar';
import Preabout from './components/Preabout/Preabout';
import About from './components/About/About';
import { Widget } from './components/Widgets/Widget';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the timeout based on your preloader animation duration

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Preabout />
          <About />
          <Widget />
          <Projects />
          <Contact />
        </>
      )}
    </>
  );
}

export default App;
