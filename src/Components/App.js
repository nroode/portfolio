import React, { Component } from 'react';
import About from './About.js';
import Header from './Header.js';
import Projects from './Projects.js';

import '../Styling/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        <About />
        <Projects />

      </div>
    );
  }
}

export default App;
