import React from 'react';
import WorkExperienceList from './component/worklist';
import { NavLink } from 'react-router-dom';
import './code.css'
import { useState, useEffect } from 'react';
import gsap from 'gsap';
import ExpandableCard from '../home/component/expand';
import { AiFillHome } from 'react-icons/ai';
import amazon from '../../photos/amazon-orange.jpg';
import localight from '../../photos/localight.png';
import g from '../../photos/G.png';
import afe from '../../photos/afe.jpg';
import hack from '../../photos/hack.jpg';
import cpp from '../../photos/cpp.png';
import ipsf from '../../photos/ipsf.jpg';
import cubesat from '../../photos/cubesat.jpg'; 
import h2gp from '../../photos/h2gp.png';
import cyber from '../../photos/cyber.png';
import ncl from '../../photos/ncl.png';
import uci from '../../photos/uci.png';
import {Nav} from '../home/nav'
import bg3 from '../../photos/bg3.png';

export const Coding = () => {
    const [phone, setPhone] = useState(false);

    const changeScreen = () =>{
        if (window.innerWidth < 1233) {
            setPhone(true);
          }
          else {
            setPhone(false);
          }
    } 
    
    
      useEffect(() => {
          window.addEventListener('resize', changeScreen);
          changeScreen();
          return () => {
            window.removeEventListener('resize', changeScreen);
          };
      }, []);

    return (


        <div className="" style={{ width: '100%', position: 'absolute', paddingTop: '100px', alignContent:'center', margin: 'auto', overflowY:'hidden'}}>

            <div >
            <div style={{position:'absolute', backgroundColor:'white', height:'500px', width:"60vw", top:'0px', left:'20vw', zIndex:'-1', opacity:phone?0:'.4', height:'100%'}}/>
            <div className="bg3"style={{position:'absolute', width:"100vw", top:'0px', zIndex:'-2', opacity:phone?0:'1', height:'100%'}}/>

            <h2 style={{color:'black'}}>
                Professional Experiences
            </h2>

            <div className='work-experience-container' style={{ display: 'flex', maxWidth: '55vw', alignContent: 'center', margin: 'auto', color:'black'}}>
                
                <div className='logobox'>
                    <div className='logo'><img src={amazon} style={{ borderRadius: '100%', width: '150px', height: '150px', objectFit: 'cover' }} /></div>
                    <div className='textbox'>
                        <h3 style={{height:'30px', borderBottom:'solid'}}>
                            Amazon
                        </h3>
                        
                        <h4 style={{height:'10px'}}>
                            Software Engineer
                        </h4>
                        <h5>Intern Supply Chain Optimization Technologies team.</h5>
                        Supply Chain Optimization Technologies team.<br />
                        Backend optimization for high load scaling (scale of 500 million request/month) and computation calculation and storage with probabilistic data structures.<br /> Expansion of internal auditing framework.
                        <br />Volunteering as a student brand ambassador, traveling to schools and teacher workshops to talk about teaching computer science to students.
                        <br />Top 250 students in the United States and Canada to receive a $40,000 scholarship.

                    </div>
                </div>
                <div className='logobox'>
                    <div className='logo'> <img src={g} style={{ borderRadius: '100%', height: '150px', width: '150px', objectFit: 'cover' }} /></div>
                    <div className='textbox'>
                        <h3 style={{height:'30px', borderBottom:'solid'}}>
                            Gauge Consulting
                        </h3>
                        <h4  style={{height:'10px'}}>
                            Software Engineering Project Manager
                        </h4>
                        <h5 style={{paddingTop: phone? '10px':''}}>Internal development team</h5>

                        Managing a small software/hardware development team to develop a new form of self checkout stocked by local producers.
                        <br />High velocity development, engaging with client feedback and business needs.

                    </div>
                </div>
                <div className='logobox' >
                    <div className='logo'><img src={localight} style={{ borderRadius: '100%', height: '150px', width: '150px', objectFit: 'scale-down', backgroundColor:'white'}} /></div>
                    <div className='textbox'>
                        <h3 style={{height:'30px', borderBottom:'solid'}}>
                            Localight
                        </h3>
                        <h4  style={{height:'10px'}}>
                            Software Engineer Intern
                        </h4>

                        Backend and frontend work with Django, Python, and Reactjs. A public benefits corporation.<br />
                        Development mockups on Adobe XD<br />
                        Editing grant proposals and business plans.
                    </div>
                </div>
                

                <div className='logobox'>
                    <div className='logo'> <img src={cpp} style={{ borderRadius: '100%', height: '150px', width: '150px', objectFit: 'scale-down', backgroundColor:'white'}} /></div>


                    <div className='textbox'>
                        <h3 style={{height:'30px', borderBottom:'solid'}}>
                            Cal Poly Pomona
                        </h3>
                        <h4  style={{height:'10px'}}>Research Assistant</h4>
                        Self directed research into improved techniques for single channel EEG denoising and BCIs with multipoint EEGs. Advised by CS graduate director at Cal Poly Pomona.

                    </div>
                </div>

            </div>


            <h2>Awards and Activities</h2>
            
                <div className='' style={{maxWidth: '60vw', alignContent: 'center', margin: 'auto' }}>
                    <div style={{display:'flex', flexDirection:phone ? 'column':'row', margin: phone ? '':'', alignContent:'left', alignItems:'left'}}>
                        
                        <div style={{display:'flex', width:'20vw', flexDirection:'column'}}>

                        
                            <div className='logo1'><img src={afe} style={{ borderRadius: '5px', height: 'auto', width: '300px', objectFit: 'scale-down', justifyContent: 'center' }} /></div>
                            
                            <div className='logo1'><img src={hack} style={{ borderRadius: '4%', width: '300px', height: '150px', objectFit: 's' }} /></div>
                        

                            <div className='logo1'><img src={ipsf} style={{ borderRadius: '10px', height: 'auto', width: '250px', objectFit: 'scale-down', justifyContent: 'center' }} /></div>
                            
                        
                        </div>  
                        <div style={{display:'flex', width:'20vw', flexDirection:'column', alignContent:'left'}}>
        
                            <div className='logo1' st>
                                <img className="" src={cubesat} style={{ borderRadius: '50px', height: '150px', width: '150px', objectFit: 'scale-down', justifyContent: 'center' }} />
                            </div>
                            
                            <div className='logo1'><img src={h2gp} style={{ borderRadius: '10px', height: '150px', width: '100px', objectFit: 'scale-down', justifyContent: 'center' }} /></div>
                            
                            <div className='logo1'><img src={cyber} style={{ borderRadius: '10px', height: '150px', width: '150px', objectFit: 'scale-down', justifyContent: 'center' }} /></div>
                        </div>
                        <div style={{display:'flex', width:'20vw', flexDirection:'column', alignContent:'left'}}>
        
                            <div className='logo1'><img src={ncl} style={{ borderRadius: '50px', height: 'auto', width: '150px', objectFit: 'scale-down', justifyContent: 'center' }} /></div>
                            <div className='logo1'><img src={uci} style={{ borderRadius: '10px', height: '150px', width: '150px', objectFit: 'scale-down', justifyContent: 'center' }} /></div>

                            
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    );
}