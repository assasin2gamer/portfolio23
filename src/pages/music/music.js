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




export const Music = () => {
  return (
    <div style={{paddingTop:'60px'}}>
        <div>
                <div>
                    <ReactPlayer width='40%' height='200px' style={{margin:'auto', marginTop:'50px'}} url="https://soundcloud.com/likapichu/guita-4"/>
                </div>
                <div>
                    <ReactPlayer width='40%' height='200px' style={{margin:'auto', marginTop:'50px'}} url="https://soundcloud.com/likapichu/coolios"/>
                </div>
                <div>
                    <ReactPlayer width='40%' height='200px' style={{margin:'auto', marginTop:'50px'}} url="https://soundcloud.com/likapichu/you-name"/>
                </div>
                <div className = " work-experience-container" style={{display:'flex', padding:'50px'}}>
                    <YoutubeEmbed embedId="grfAflGeMcs" />  
                    <YoutubeEmbed embedId="H4tpT77f37c" /> 
                    <img src={guitar} style={{height:'400px', objectFit:'contain'}}/> 
                    <img src={stage} style={{height:'400px', objectFit:'contain'}}/> 
                </div>
                
        </div>
    </div>
  );
  
};