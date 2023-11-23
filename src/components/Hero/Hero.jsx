 import React from 'react'
 import {HiLocationMarker} from 'react-icons/hi'
 import './Hero.css'
import CountUp from 'react-countup'
 const Hero = () => {
   return (
     <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container ">
            {/* left side */}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    {/* orange circle */}
                    <div className="orange-circle"/>

                    <h1>Search For Homes <br/>In California</h1>
                </div>
                <div className="flexColStart hero-des">
                    <span className='secondaryText'>
                        Find a variety of properties that suit you easily
                    </span>
                    <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
                </div>
                <div className="search-bar flexCenter">
                    <HiLocationMarker
                    color='var(--blue)' size={25}/>
                    <input type='text'/>
                    <button className="button">SEARCH</button>
                </div>
                    
                    {/*counter  */}

                <div className="flexCenter stats">
                    <div className="flexColStart stat">
                        <span>
                            <CountUp start={5000} end={6470} duration={4}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'> Houses sold</span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={4500} end={5000} duration={4}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'> Happy Customer</span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp end={64} />
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>state</span>
                    </div>
                </div>
            </div>

            {/* right side */}
            <div className="hero-right">
                <div className="image-container">
                    <img src="./hero-image.png" alt="" />
                </div>
            </div>
        </div>
     </section>
       

   )
 }
 
 export default Hero
 