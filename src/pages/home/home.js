import React from 'react';
import './home.css';

import { useState, useEffect } from 'react';
import ExpandableCard from './component/expand';
import gsap from 'gsap';
import { NavLink } from 'react-router-dom';

import {Nav} from  './nav'


import { BsPlayCircle } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { Expand } from '@mui/icons-material';


export const Home = () => {
 



  useEffect(() => {
    const tl = gsap.timeline();
    tl.set(".line", { scaleX: 0, y: '100%' });
    tl.set(".line2", { scaleX: 2 });
    tl.set(".text", { opacity: 0, y: "-10%", duration: 1, ease: "power2.out" });
    tl.to(".text", { opacity: 0, y: "0%", duration: 1, ease: "power2.out" });
    tl.to(".line", { scaleX: 1, y: "100%", duration: 1, ease: "power2.out" });
    tl.from(".text", { opacity: 1, y: "-10%", duration: 0.5, ease: "power2.out" }, "-=0.5");
  }, []);

  return (
    <div style={{ width: '100%' }}>
      <div className="background-image"></div>
      <div>
        <div className="content">
          <div className="container" style={{ position: 'relative', height: "50%", top: '240px', margin: 'auto', zIndex: 2 }}>
            <div className="line top" style={{ margin: 'auto', position: 'relative' }}></div>
            <div className="text">
              <section id="banner" style={{ height: '150px', margin: 'auto', position: 'sticky' }}>
                <div class="inner">
                  <h2>Stephen Junha Chang</h2>
                  <p style={{ width: '50vw', textAlign: 'center', margin: 'auto' }}>Software Engineer</p>
                </div>
              </section>
            </div>
            <div className="line bottom" style={{ margin: 'auto', position: 'relative' }} />

            <BsPlayCircle className='play-button' />


          </div>
          <div className="contact-button">
            <button></button>
          </div>

        </div>
      </div>

    </div>
  );
};