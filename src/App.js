import React, { Component } from 'react';

import './components/App.css';
import styled from "styled-components";
import WelcomeTag from './components/WelcomeComponent';



import { HashRouter , Route} from 'react-router-dom';
import { Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import Sparkle from 'react-sparkle';



import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import BP from './components/bp';
import AboutMe from './components/aboutMe';
import Hobbies from './components/hobbies';
import Resume from './components/resume';
import ContactMe from './components/contactMe';
import Envelope from './components/envelope';




class App extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 

    };
    
  }

  
  render() {
    return (
      <HashRouter >

      <Navbar/>
      <div>
      <Route path={"/blankpage"} component={BP} />
      <Route path={"/"} component={Homepage} />
      <Route path={"/About Me"} 
             component={(props) => <AboutMe links={["https://www.facebook.com/caroline.hoang.35977",
                                                    "https://github.com/CarolineHoang?tab=repositories",
                                                    "https://www.linkedin.com/in/caroline-hoang-673810146"

                                                  ]}/>} />
     {/* <Route path={"/Hobbies"} component={Hobbies} />  */}
      <Route path={"/Resume"} component={Resume} />
      <Route path={"/Contact Me"} 
             component={(props) => <div> <ContactMe  /> <Envelope/> </div>} />
      
      </div>
      </HashRouter >
    );
  }
}

export default App;


