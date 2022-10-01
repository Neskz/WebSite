import React from 'react';
import './App.css';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Interests from './Interests';
import Navigation from './Navigation';
import Skills from './Skills';
import './styles.css';
import Projects from './Projects';
import { FiChevronUp } from "react-icons/fi";
import ScrollToTop from "react-scroll-up";
import FooterTwo from './Footer';

class App extends React.Component {
  render(){
    return (
      <>
      <Navigation />
      <div class="container-fluid p-0">
        <About />
        <hr class="m-0" />
        <Education />
        <hr class="m-0" />
        <Experience />
        <hr class="m-0" />
        <Projects />
        <hr class="m-0" /> 
        <Skills />       
        <hr class="m-0" />
        <Interests />        
      </div>
      <hr style={{color:"black"}}></hr>
      <FooterTwo></FooterTwo>
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
    </>
    );
  }
}

export default App;
