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
import h2gp from '../../photos/h2gp.jpg';
import cyber from '../../photos/cyber.png';


export const Coding = () => {

    return (


        <div className="background-container2" style={{ width: '100%', height: '300vh', position: 'absolute', paddingTop: '100px' }}>





            <h2>
                Work
            </h2>

            <div className='work-experience-container' style={{ display: 'flex', maxWidth: '60vw', alignContent: 'center', margin: 'auto' }}>
                <div className='logobox' >
                    <div className='logo'><img src={localight} style={{ borderRadius: '', height: 'auto', width: '300px', objectFit: 'scale-down' }} /></div>
                    <div className='textbox'>
                        <h4>
                            Software Engineer Intern
                        </h4>

                        Backend and frontend work with Django, Python, and Reactjs. A public benefits corporation.<br />
                        Development mockups on Adobe XD<br />
                        Editing grant proposals and business plans.
                    </div>
                </div>
                <div className='logobox'>
                    <div className='logo'><img src={amazon} style={{ borderRadius: '100%', width: '150px', height: '150px', objectFit: 'cover' }} /></div>
                    <div className='textbox'>
                        <h4>
                            Software Engineer Intern
                        </h4>
                        Supply Chain Optimization Technologies team.<br />
                        Backend optimization for high load scaling (scale of 500 million request/month) and computation calculation and storage with probabilistic data structures.<br /> Expansion of internal auditing framework.
                        <br />Volunteering as a student brand ambassador, traveling to schools and teacher workshops to talk about teaching computer science to students.
                        <br />Top 250 students in the United States and Canada to receive a $40,000 scholarship.

                    </div>
                </div>
                <div className='logobox'>
                    <div className='logo'> <img src={g} style={{ borderRadius: '100%', height: '150px', width: '150px', objectFit: 'cover' }} /></div>
                    <div className='textbox'>
                        (Gauge consulting)
                        <h4>
                            Software Engineering Project Manager
                        </h4>

                        <br />Managing a small software/hardware development team to develop a new form of self checkout stocked by local producers.
                        <br />High velocity development, engaging with client feedback and business needs.

                    </div>
                </div>

                <div className='logobox'>
                    <div className='logo'> <img src={cpp} style={{ borderRadius: '', height: 'auto', width: '300px', objectFit: 'scale-down' }} /></div>


                    <div className='textbox'>
                        (Cal Poly Pomona)
                        <h4>Research Assistant</h4>
                        <br />Self directed research into improved techniques for single channel EEG denoising and BCIs with multipoint EEGs. Advised by CS graduate director at Cal Poly Pomona.

                    </div>
                </div>

            </div>


            <h2>Awards and Activities</h2>
            <div className='work-experience-container1' style={{ display: '', maxWidth: '60vw', alignContent: 'center', margin: 'auto' }}>
                <div className='logobox1'>
                    <div className='logo1'><img src={afe} style={{ borderRadius: '5px', height: 'auto', width: '300px', objectFit: 'scale-down', justifyContent: 'center' }} /></div>
                    <div className='textbox'>
                        <h4>
                            Amazon Future Engineer Scholarship
                        </h4>
                    </div>
                </div>
                <div className='logobox1'>
                    <div className='logo1'><img src={hack} style={{ borderRadius: '4%', width: '300px', height: '150px', objectFit: 's' }} /></div>
                    <div className='textbox'>
                        <h4>
                            HackMIT 1st Place Interactive Media Track
                        </h4>
                    </div>
                </div>

                <div className='logobox1' >
                    <div className='logo1'><img src={ipsf} style={{ borderRadius: '5px', height: 'auto', width: '250px', objectFit: 'scale-down', justifyContent: 'center' }} /></div>
                    <div className='textbox'>
                        <h4>
                            ISPF
                        </h4>
                    </div>
                </div>
                <div className='logobox1' >
                    <div className='logo1'><img src={cubesat} style={{ borderRadius: '10px', height: 'auto', width: '250px', objectFit: 'scale-down', justifyContent: 'center' }} /></div>
                    <div className='textbox'>
                        <h4>
                            Irvine Cubesat
                        </h4>
                    </div>
                </div>
                <div className='logobox1' >
                    <div className='logo1'><img src={h2gp} style={{ borderRadius: '10px', height: 'auto', width: '200px', objectFit: 'scale-down', justifyContent: 'center' }} /></div>
                    <div className='textbox'>
                        <h4>
                            H2GP Hydrogen Fuel Cell Car
                        </h4>
                    </div>
                </div>
                <div className='logobox1' >
                    <div className='logo1'><img src={cyber} style={{ borderRadius: '10px', height: 'auto', width: '200px', objectFit: 'scale-down', justifyContent: 'center' }} /></div>
                    <div className='textbox'>
                        <h4>
                            CyberPatriot
                        </h4>
                    </div>
                </div>




            </div>



        </div>
    );
}