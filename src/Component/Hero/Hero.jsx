import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png"
import { Button } from 'react-scroll';
import { motion } from 'framer-motion'
import { type } from '@testing-library/user-event/dist/type';

function Hero() {
  const transition = {
    type: "spring",
    duration: 3
  }
  return (
    <>
      <div className="hero">
        <div className="blur hero-blur"></div>
        <div className="left-h">
          <Header />
          {/* the best ad */}
          <div className="the-best-ad">
            <motion.div
              initial={{ left: '238px' }}
              whileInView={{ left: '8px' }}
              transition={{ ...transition, type: 'tween' }}>


            </motion.div>
            <span>the best fitness club in the town</span>
          </div>
          {/* Hero Heading */}
          <div className="hero-text">
            <div>
              <span className='stroke-text'>Shape </span>
              <span>Your</span>
            </div>
            <div>
              <span>Ideal Body</span>
            </div>
            <div>
              <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
            </div>
          </div>
          {/* Figures */}

          <div className="figures">
            <div>
              <span>+140</span>
              <span>Expert Coaches</span>
            </div>
            <div>
              <span>+978</span>
              <span>Member Joined</span>
            </div>
            <div>
              <span>+50</span>
              <span>fitness Progress</span>
            </div>
            <div></div>
            <div></div>
          </div>

          {/* Hero Buttons */}

          <div className="hero-buttons">
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>
          </div>
        </div>

        {/* RIGHT HEADER */}
        <div className="right-h">
          <button className='btn'>join Now</button>
          <motion.div
            initial={{ right: '-1rem' }}
            transition={{ ...transition, type: 'tween' }}
            whileInView={{ right: '4rem' }} className="heart-rate">
            <img src={Heart} alt='' />
            <span>Heart Rate</span>
            <span>116 bpm</span>
          </motion.div>
          {/* hero images */}
          <img src={hero_image} alt='' className='hero-image' />
          <motion.img
            initial={{ right: '11rem' }}
            transition={{ ...transition, type: 'tween' }}
            whileInView={{ right: '20rem' }}
            src={hero_image_back} alt='' className='hero-image-back' />

          {/* Calories */}

          <motion.div
            initial={{ right: '37rem' }}
            transition={{ ...transition, type: 'tween' }}
            whileInView={{ right: '28rem' }}
            className="calories">
            <img src={Calories} alt='' />
            <div>
              <span>Calories burned</span>
              <span>220 kcal</span>
            </div>

          </motion.div >
        </div>
      </div>
    </>
  )
}

export default Hero