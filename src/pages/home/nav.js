import React from 'react';
import './home.css';

import { useState, useEffect } from 'react';
import ExpandableCard from './component/expand';
import gsap from 'gsap';
import { NavLink } from 'react-router-dom';

import './home.css';


import { BsPlayCircle } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { Expand } from '@mui/icons-material';


export const Nav = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [phone, setPhone] = useState(false);
  const [contact, setContact] = useState(false);

  const contactMe = () => {
    setContact(!contact);
  }

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      // Slide out animation
      gsap.to('.boxout', { x: '-100%', duration: 0.3, ease: 'power2.inOut' });
    } else {
      // Slide in animation
      gsap.to('.boxout', { x: '0%', duration: 0.3, ease: 'power2.inOut' });
    }

    setMenuOpen(!isMenuOpen);
  };


  useEffect(() => {
    // Function to update screen width and height
    if (window.innerWidth < 1050) {
      setPhone(true);
    }
    else {
      setPhone(false);
    }
    const updateScreenSize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
      if (window.innerWidth < 1050) {
        setPhone(true);
      }
      else {
        setPhone(false);
      }
    };

    // Add a window resize event listener to track changes in screen size
    window.addEventListener('resize', updateScreenSize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  useEffect(() => {
    
    gsap.set('.boxout', { x: '-100%' });
  }, []);

 

  return (
    <div style={{height:'60px', position:'absolute', zIndex:'60', top:'0',width:'100%'}}>
      <div>
        {phone ? <div style={{ position: 'fixed', top: '0', width:'100%'}}>
            <div style={{position:'absolute', top:'0'}}>
              <AiOutlineMenu
                onClick={toggleMenu}
                style={{ position: 'absolute', left: '5px', fontSize: '40px', zIndex:'20'}}
              />
              
              <div className={`boxout ${isMenuOpen ? 'open' : ''}`} style={{width:'100%', position:'relative' }} onClick={toggleMenu}>
                <div style={{backgroundColor:'white', width:'60%', height:'100vh'}}>
                <NavLink to="/">
                  <button style= {{width:'100%', left:'-5px', position:'relative', top:'10%'}} className="button">Home</button>
                </NavLink>
                <NavLink to="/about">
                  <button style= {{width:'100%', left:'-5px', position:'relative', top:'10%'}} className="button">About</button>
                </NavLink>
                <NavLink to="/coding">
                  <button style= {{width:'100%', left:'-5px', position:'relative', top:'10%'}} className="button">Computer Science</button>
                </NavLink>
                <NavLink to="/music">
                  <button style= {{width:'100%', left:'-5px', position:'relative', top:'10%'}} className="button">Music</button>
                </NavLink>
                <button onClick={contactMe} style= {{width:'100%', left:'-5px', position:'relative', top:'10%'}} className="button"><a href="mailto:stephen0.0chang@gmail.com">Contact</a></button>
                
              </div>
              </div>
              </div>
        </div>
          :
            <div className="button-container" style={{}}>
            <NavLink to="/">
                <button className="button" >Home</button>
              </NavLink>
              <NavLink to="/about">
                <button className="button" >About</button>
              </NavLink>
              <NavLink to="/coding">
              <button className="button">Computer Science</button>
              </NavLink>
              <NavLink to="/music">
              <button className="button">Music</button>
              </NavLink>
              <button className="button" onClick={contactMe}>Contact</button>
              {
                  contact?
                  <div>stephen0.0chang@gmail.com</div>
                  :
                  <div></div>
                }
            </div>
       }
        </div>
    </div>
  );
};