import React, { useState, useEffect } from 'react';
import './home.css';
import gsap from 'gsap';
import { BsPlayCircle } from 'react-icons/bs';
import g0 from '../../photos/g0.jpg';
import g1 from '../../photos/g1.JPG';
import g2 from '../../photos/g2.png';
import g3 from '../../photos/g3.png';

export const Home = () => {


  const images = [g0, g1, g2, g3];
  const [currentImage, setCurrentImage] = useState(0);
  const [imgSwitch, setImgSwitch] = useState(false);
  



  useEffect(() => {
    const tl = gsap.timeline();
    tl.set('.line', { scaleX: 0, y: '100%' });
    tl.set('.line2', { scaleX: 2 });
    tl.set('.text', { opacity: 0, y: '-10%', duration: 1, ease: 'power2.out' });
    tl.to('.text', { opacity: 0, y: '0%', duration: 1, ease: 'power2.out' });
    tl.to('.line', { scaleX: 1, y: '100%', duration: 1, ease: 'power2.out' });
    tl.from('.text', { opacity: 1, y: '-10%', duration: 0.5, ease: 'power2.out' }, '-=0.5');
  }, []);


  const switchImage = () => {
    if (imgSwitch){
        setCurrentImage((currentImage + 1) % images.length);
      }
  };
  const toggler = () => {
    setImgSwitch(!imgSwitch);
    console.log('switched')
  };

  useEffect(() => {
    const interval = setInterval(switchImage, 5000);
    return () => clearInterval(interval);
  }, [currentImage, imgSwitch]);


  return (
    <div style={{ width: '100%' }}>
      <div style={{overflow:'hidden', height:'100vh', position:'absolute', width:'100vw'}}>
        <img className="background-image" src={images[currentImage]} alt={`image${currentImage + 1}`} />
      </div>
      <div style={{fontSize:'10px', position:'absolute', right:'0', bottom:'0'}}>
        Please note that this website is hand coded and may cause jank if not viewed on a desktop.
      </div>
      

      <div>
        <div className="content">
          <div
            className="container"
            style={{ position: 'relative', height: '50%', top: '240px', margin: 'auto', zIndex: 2 }}
          >
            <div className="line top" style={{ margin: 'auto', position: 'relative' }}></div>
            <div className="text">
              <section id="banner" style={{ height: '150px', margin: 'auto', position: 'sticky' }}>
                <div className="inner">
                  <h2>Stephen Junha Chang</h2>
                  <p style={{ width: '50vw', textAlign: 'center', margin: 'auto' }}>Software Engineer</p>
                </div>
              </section>
            </div>
            <div className="line bottom" style={{ margin: 'auto', position: 'relative' }} />

            <BsPlayCircle className="play-button" onClick={toggler} style={{zIndex:50, opacity: imgSwitch? '.2' : 1}}/>
          </div>
          <div className="contact-button">
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
};