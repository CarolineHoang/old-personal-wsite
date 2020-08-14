import React, { Component } from 'react';

import './App.css';
import styled from "styled-components";
import Sparkle from 'react-sparkle';
import "./css/style.css";
import "./css-letter-opening/css/style.css"
import WelcomeTag from './WelcomeComponent'






const Email = styled.a `
    text-decoration: none;
    font-family: 'Kurale', serif;
`



class envelope extends Component {
    constructor(props) {
      super(props);
      // Don't call this.setState() here!
      this.state = { 
  
      };
      
    }
  
    
    
    render() {
      return (
        <div>
        <div class="container">
 
            <div class="back">
            
                <div class="paper">
                    <Email href= "mailto: cjh2222@columbia.edu"><h1>cjh2222@columbia.edu</h1></Email>
                </div> 
                <div class="clickBaiter">
                    <Email href= "mailto: cjh2222@columbia.edu"><h2>[~Over Here!~]<br/></h2></Email><h2>V</h2>
                </div> 
                
                <div class="cover">
                </div>
                <div class="bottom">
                   
                </div>  
                
            </div> 
            
            </div> 
        </div>
      );
    }
  }
  
  export default envelope;
  