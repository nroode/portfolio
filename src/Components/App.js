import React, { Component } from 'react';
import About from './About.js';
import Contact from './Contact.js';
import Header from './Header.js';
import Projects from './Projects.js';

import '../Styling/App.scss';


class App extends Component {
  
  render() {
    return (
      
        <div className="App">
            <Header name="section-header" />
            <About name="section-about" />
            <Projects name="section-projects"  />
            <Contact name="section-contact"  />
        </div>
    );
  }
}

export default App;


// {this.state.isTop ? className="App" : className="App" }
// <div className="App-gradient"></div>