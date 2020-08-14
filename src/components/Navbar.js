import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sidebar2 from "./images/matthew-brindle-1118459-unsplash.jpg";
import styled from "styled-components";
import "./css/style.css";
import Sparkle from 'react-sparkle';





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
z-index:2;
`
const TabWrapper = styled.div`
  position: absolute;
  left: 2vw;
  top: 5vw; 
  display: flex;
  flex-direction: column;
  z-index:3;
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

  const Home = styled.button`
  width:15vw;
  height:5vw;
  margin-bottom: 2vw;
  border-radius: .2vw;
  font-family: 'Raleway', sans-serif;
  font-size: 1vw;
  
  background-color: rgba(0,0,0,.3);
  background-image: linear-gradient(to right, rgba(0,0,0,0), rgba(255, 202, 79));

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

  
  class Navbar extends Component {

  render() {
    return (
      <header>
<Sidebar>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <Sparkle  
      fadeOutSpeed={2}
      minSize={5}
      maxSize={10}/>
      flickerSpeed={'slowest'}     
</Sidebar>


<TabWrapper>
<Link to="/"><Home>Home</Home></Link>
<Link to="/About Me"><Tabs3>About Me</Tabs3></Link>
 {/* <Link to="/Hobbies"><Tabs3>Hobbies</Tabs3></Link> */}
    {/*   <Link to="/Resume"><Tabs3>Resume</Tabs3></Link>   */}
<Link to="/Contact Me"><Tabs3>Contact Me</Tabs3></Link>
</TabWrapper>
      </header>
    )
  }
}
export default Navbar;