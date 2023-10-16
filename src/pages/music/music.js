import React from 'react';

import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { NavLink } from 'react-router-dom';



import ReactPlayer from "react-player"
import {Nav} from '../home/nav' 


import { BsPlayCircle } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { Expand } from '@mui/icons-material';
import {YoutubeEmbed } from './component/youtube'
import PhotoAlbum from "react-photo-album";
import guitar from '../../photos/Guitar.PNG'
import stage from '../../photos/stage.jpg'
import bg4 from '../../photos/bg4.png'



export const Music = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          zIndex: '-1',
        }}
      >
        <img src={bg4} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    <div style={{ paddingTop: '60px', height: '100%' }}>
        <div>
        <h2>Music</h2>
        <div style={{width:'50vw', margin:'auto', backgroundColor:'white', borderRadius:'5px', padding:'10px'}}>Hello! I play Electric Guitar and Keys/Synth primarily. I've traveled all around Southern California, playing in front of
            tens of thousands of people. I love making new music with friends and playing live shows. I also enjoy recording and producing
            unqiue songs using effects and sampling.
        </div>
        <h3>Saddleback Church and live show</h3>
        <div className = " work-experience-container" style={{display:'flex', padding:'50px'}}>
                    <YoutubeEmbed embedId="grfAflGeMcs" />  
                    <YoutubeEmbed embedId="H4tpT77f37c" /> 
                    <img src={guitar} style={{height:'400px', objectFit:'contain'}}/> 
                    <img src={stage} style={{height:'400px', objectFit:'contain'}}/> 
                    
        </div>
        <h3>Original works and covers</h3>
        <div className = " work-experience-container" style={{display:'flex', padding:'50px'}}>
                    <ReactPlayer width='30%' height='200px' style={{margin:'auto', marginTop:'50px'}} url="https://soundcloud.com/likapichu/guita-4"/>
                    <ReactPlayer width='30%' height='200px' style={{margin:'auto', marginTop:'50px'}} url="https://soundcloud.com/likapichu/coolios"/>
                    <ReactPlayer width='30%' height='200px' style={{margin:'auto', marginTop:'50px'}} url="https://soundcloud.com/likapichu/you-name"/>
        </div>
      
        </div>
    </div>
    </div>
  );
  
};