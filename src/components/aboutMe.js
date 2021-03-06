import React, { Component } from 'react';


import './App.css';
import styled from "styled-components";
import Sparkle from 'react-sparkle';
import "./css/style.css";
import WelcomeTag from './WelcomeComponent'

import logo from './images/logo.svg';
import img from './images/beautiful-blur-bright-326055.jpg';
import sidebar from "./images/orlova-maria-1351165-unsplash.jpg";
import sidebar2 from "./images/matthew-brindle-1118459-unsplash.jpg";
import me from './images/me.jpg';

import facebook from "./images/iconfinder_facebook_social_shield_2481063.png";
import github from "./images/iconfinder_github_social_shield_2481062.png";
import linkedin from "./images/iconfinder_linkedin_social_shield_2481053.png";




const AppWrapper = styled.div`
  background-color: black;
  position: absolute;
  left: 0px;
  top: 0px;
  width:100%;
  height:100%;
  z-index: -1;

  `
const SideWrapper = styled.div`
  
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  `
const Welcome = styled.div`

  position: absolute;
  left: 20vw;
  top: 5vw;
  width:50vw;
  height:20vw;
  opacity: 1.0;


  color: white;
  font-size: 4vw;
  font-family: 'Playfair Display', serif;

  display: flex;
  justify-content: center;

  
`

const Name = styled.div`

  position: absolute;
  left: 20vw;
  top: 10vw;
  width:50vw;
  height:20vw;
  opacity: 1.0;


  color: white;
  font-size: 4vw;
  font-family: 'Playfair Display', serif;

  display: flex;
  justify-content: center;

  
`


const Description = styled.div`

  position: absolute;
  left: 20vw;
  top: 16vw;
  width:50vw;
  height:20vw;
  opacity: 1.0;


  color: white;
  font-size: 1vw;
  font-family: 'Playfair Display', serif;

  display: flex;
  justify-content: center;

  
`

const Sidebar = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  background-image: url(${sidebar2});
  background-position: 95%;
  background-size: cover;
  width:20%;
  height:100%;
  background-repeat: no-repeat;
  box-shadow: 0 0 70px black inset;

`


const Portrait = styled.div`
  border-width: 0 4px 8px 12px;
  border-color: black;
  position: absolute;
  right: 0px;
  top: 0px;
  background-image: url(${img});
  background-position: 95%;
  background-size: cover;
  width:80%;
  height:100%;
  background-repeat: no-repeat;
  opacity: .7;
  box-shadow: 10px -10px 50px black,
              0 0 70px inset;

  

  overflow: hidden;
            
`

{/*
const Portrait = styled.div`

  border-radius: 5px;
  background-image: url(${img});
  background-position: right top;
  background-size: 100% 100%;
  width: 80vw;
  height: 65vw;

  opacity: .7;
  background-repeat: no-repeat;
  box-shadow: 10px 10px 100px black,
  0 0 150px white inset;
  `

*/}

const Me = styled.div`
  border-radius: 0px 40px 0px 40px;
  position: absolute;
  right: 5vw;
  top: 5vw;
  background-image: url(${me});
  background-position: 95%;
  background-size: contain;
  width:15vw;
  height:15vw;
  opacity: 1.0;
  background-repeat: no-repeat;
  box-shadow: 10px 10px 50px black,
              0 0 70px inset;

  border-style: double;
  border-color: rgb(255, 255, 255); 
  border-color: rgba(255, 255, 255, .5);
  border-width: 30px;
  opacity: .99;
  border-opacity:.3;
  overflow: hidden;

  `
const TabWrapper = styled.div`
  position: absolute;
  left: 2vw;
  top: 5vw; 
  display: flex;
  flex-direction: column;
`

const Tabs = styled.button`
  width:15vw;
  height:5vw;
  margin-bottom: 2vw;
  border-radius: .2vw;
  font-family: 'Raleway', sans-serif;
  font-size: 1vw;
  
  background-color: rgba(255,0,0,.3);
  background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255, 202, 79));
  border: none;
  color: black;
  padding: 16px 32px;
  text-align: center;
  font-size: 18px;
  transition: 0.3s;
  :hover {
    background-image: linear-gradient(to right, rgba(255,0,0,-.2), rgba(255,0,0,1));
    color: white;
  }
  `

  const Tabs2 = styled.button`
  width:15vw;
  height:5vw;
  margin-bottom: 2vw;
  border-radius: .2vw;
  font-family: 'Raleway', sans-serif;
  font-size: 1vw;
  
  background-color: rgba(255,0,0,.3);
  background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255, 202, 79));

  flex: 1 1 auto;

  padding: 20px;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  transition: .3s;

  :after {
    position: absolute;
    transition: .3s;
    content: '';
    width: 0;
    left: 50%;
    bottom: 0;
    height: 3px;
    background: #f7f7f7;
  }

  :after {
    left: 0;
    bottom: auto;
    top: -3px;
    width: 100%; }

    :hover:after {
      top: calc(100% - 3px);
    }



  `

  const Tabs3 = styled.button`
  width:15vw;
  height:5vw;
  margin-bottom: 2vw;
  border-radius: .2vw;
  font-family: 'Raleway', sans-serif;
  font-size: 1vw;
  
  background-color: rgba(255,0,0,.3);
  background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255, 202, 79));

  flex: 1 1 auto;

  padding: 20px;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  transition: .3s;

  :after {
    position: absolute;
    transition: .3s;
    content: '';
    width: 0;
    left: 50%;
    bottom: 0;
    height: 3px;
    background: #f7f7f7;
  }

  :after {
    left: 0;
    bottom: auto;
    top: -3px;
    width: 100%; }

    :hover:after {
      top: calc(100% - 3px);
    }
    padding: 16px 32px;
  text-align: center;
  font-size: 18px;
  transition: 0.3s;
  :hover {
    background-image: linear-gradient(to right, rgba(255,0,0,-.2), rgba(255,0,0,1));
    color: white;
  }


  `
{/*


  >>> disapearing font:     color: rgba(255,0,0,0);
font-family: 'Titillium Web', sans-serif;
  font-family: serif;
      border: 1px solid rgb(127, 0, 0);
    border: 1px solid rgba(255, 0, 0, .5);


  background-size: 75% 80%;
    height:20vw;
  background-image: url(${me});
  background-position: 95%;
  background-size: contain;

  min-width: 100%;
  min-height: 100%;

  opacity: 1.0;
  background-repeat: no-repeat;
    min-width: 50%;
  min-height: 50%;
  
  background-position: top right;
    background-image: url("../beautiful-blur-bright-326055.jpg");
background-color: red;
background-size: auto;
  opacity: .7;

    display: flex;
  justify-content: flex-end;
  align-self: flex-end;

/Users/hoang/Desktop/wsite/src/beautiful-blur-bright-326055.jpg
beautiful-blur-bright-326055.jpg
https://helpx.adobe.com/in/stock/how-to/visual-reverse-image-search/_jcr_content/main-pars/image.img.jpg/visual-reverse-image-search-v2_1000x560.jpg



  position: absolute;
  right: 0px;
  top: 0px;
   */}


 
{/*


  `
const AppWrapper = styled.div`
  margin-bottom: 8rem;

  `
const AppWrapper = styled.div`
  margin-bottom: 8rem;

  `
   */}


{/*
 */}
const IconWrapper = styled.div`

   z-index: 4;
   position: absolute;
   left: 25vw;
   top: 25vw;
   border-radius: 5px;

   width: 70vw;
   height:20vw;

   background-color:  rgba(0,0,0,.4);
   display: flex;
   justify-content: space-evenly
   align-items: center;

   :hover{
    transition: .2s;

    box-shadow: 0px 0px 75px rgba(0,0,0,.2),
    0 0 70px rgba(0,0,0,.4) inset;}
    
`


const Facebook = styled.a`

   background-image: url(${facebook});
   background-position: 95%;
   background-size: contain;
   width:10vw;
   height:10vw;
   opacity: 1.0;
   background-repeat: no-repeat;
   
   opacity: .99;
   border-opacity:.3;
   overflow: hidden;

   border-radius: 5px 5px 70px 70px;
   box-shadow: 0px 0px 50px rgba(255,255,255,.4),
   0 0 70px rgba(255,255,255,.4) inset;

   transition: 0.2s;
   :hover{
    width:11vw;
    height:11vw;
    box-shadow: 0px 0px 70px rgba(255,255,255,.7),
    0 0 70px rgba(255,255,255,.4) inset;
    
   }

   `


const Github = styled.a`


    background-image: url(${github});
    background-position: 95%;
    background-size: contain;
    width:10vw;
    height:10vw;
    opacity: 1.0;
    background-repeat: no-repeat;

    opacity: .99;
    border-opacity:.3;
    overflow: hidden;

    border-radius: 5px 5px 70px 70px;
    box-shadow: 0px 0px 50px rgba(255,255,255,.4),
    0 0 70px rgba(255,255,255,.4) inset;

    transition: 0.2s;
    :hover{
     width:11vw;
     height:11vw; 
     box-shadow: 0px 0px 70px rgba(255,255,255,.7),
     0 0 70px rgba(255,255,255,.4) inset;
     
    }

    `

const LinkedIn = styled.a`


    background-image: url(${linkedin});
    background-position: 95%;
    background-size: contain;
    width:10vw;
    height:10vw;
    opacity: 1.0;
    background-repeat: no-repeat;


    opacity: .99;
    border-opacity:.3;
    overflow: hidden;

    border-radius: 5px 5px 70px 70px;
    box-shadow: 0px 0px 50px rgba(255,255,255,.4),
    0 0 70px rgba(255,255,255,.4) inset;
    
    transition: ;
    :hover{
     width:11vw;
     height:11vw;  
     box-shadow: 0px 0px 70px rgba(255,255,255,.7),
     0 0 70px rgba(255,255,255,.4) inset;
     
    }
    `

class aboutMe extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 

    };
    
  }

  
  
  render() {
    return (
      <AppWrapper>
      

      <SideWrapper>
{/*       
      <Sidebar>

      </Sidebar>

      <TabWrapper>
      <Tabs3>About Me</Tabs3>
      <Tabs3>Hobbies</Tabs3>
      <Tabs3>Resume</Tabs3>
      <Tabs3>Contact Me</Tabs3>


      <Tabs2>Testing Testing 123</Tabs2>
      <Tabs3>Testing Testing 123</Tabs3>

      </TabWrapper>
*/}
      <Portrait>
      <Sparkle  
      fadeOutSpeed={10}
      minSize={5}
      maxSize={15}/>

      </Portrait>
      <IconWrapper>
          <Facebook href = {this.props.links[0]}/>
          <Github href = {this.props.links[1]}/>
          <LinkedIn href = {this.props.links[2]}/>
      </IconWrapper>
      <Welcome>A little about myself...</Welcome>
      <Description>I'm currently studying Computer Science at Columbia University <br/>
      in the Fu Foundation School of Engineering and Applied Science (SEAS).<br/>
      <br/>
      
      You can also find me on:
      </Description>
      </SideWrapper>
      
      </AppWrapper>
    );
  }
}

export default aboutMe;



{/*
<LinkStyle href = {this.props.articles[0]}>
      <div className="App">
      <p> hello world
      </p>  
      </div>

      (response) => {

        some shit in js
      }

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
*/}
