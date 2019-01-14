import React, { Component } from 'react';
import About from './About.js';
import Header from './Header.js';
import Projects from './Projects.js';

import '../Styling/App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTop: true,
      colorClass: 'App',
    };
    // this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {

    document.addEventListener('scroll', () => {
      //calc px scrolled down from vh
      const windowHeightPx = (window.innerHeight);
      //begin transition .5 through the scroll
      const partialHeightPx = (windowHeightPx *.5);
      // let animationTimeout = 50;
      //check if at top by seeing if scrolled more than window height
      const isTop = window.scrollY < windowHeightPx;

      // if (isTop !== this.state.isTop) {
      //   this.onScroll(isTop);

      if (window.scrollY <= windowHeightPx - partialHeightPx) {

        this.setState({ colorClass: 'App' });
      }
      //if value is between windowHeightPx and 2(windowHeightPx) add green class - About
      else if ((window.scrollY <= (windowHeightPx * 2 - partialHeightPx)) && (window.scrollY > (windowHeightPx - partialHeightPx))) {

        // requestAnimationFrame(() => {
        //   this.setState({ colorClass: 'App bk-purple-gradient' });
        // });

        // this.startAnimation(() => {
        //   this.setState({ colorClass: 'App bk-purple-gradient' });
        // });

        this.setState({ colorClass: 'App bk-green-gradient' });


      }
      //if value is between 2windowHeightPx and 3(windowHeightPx) add blue class - Project 1

      else if ((window.scrollY <= (windowHeightPx * 3 - partialHeightPx)) && (window.scrollY > (windowHeightPx * 2 - partialHeightPx))) {
        this.setState({ colorClass: 'App bk-blue-gradient' });

      }

      //if value is between 3windowHeightPx and 4(windowHeightPx) add purple class - Project 2

      else if ((window.scrollY <= (windowHeightPx * 4 - partialHeightPx)) && (window.scrollY > (windowHeightPx * 3 ))) {
        this.setState({ colorClass: 'App bk-purple-gradient' });

      }

      //if value is between 4windowHeightPx and 5(windowHeightPx) add teal class - Project 3
      else if ((window.scrollY <= (windowHeightPx * 5 - partialHeightPx)) && (window.scrollY > (windowHeightPx * 4 ))) {
        this.setState({ colorClass: 'App bk-teal-gradient' });
      }
      //toggle opacity for the class - if not used opacity = 0, if used opacity = 1

      //check to see how far down the page we've scrolled

      //if value is between 4windowHeightPx and 5(windowHeightPx) add green class - Project 3

      //if value is greater or equal to 5windowHeightPx add teal class - contact

      // }
    });

  }




  render() {
    return (
      
        <div className="App">
          <div className="App-gradient"></div>
          <div className={this.state.colorClass}>

            <Header id="section-header" />
            <About />
            <Projects id="section-projects" />

          </div>
        </div>

    );
  }
}

export default App;


// {this.state.isTop ? className="App" : className="App" }