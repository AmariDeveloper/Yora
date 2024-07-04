import { BsDashLg } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { IoCalendarOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Autoplay, } from "swiper/modules"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

const HeroSection = () => {
  return (
    <div className="hero-section">
            <div className="hero-slider">
                        <Swiper
                               effect={"creative"}
                               speed={1500}
                               creativeEffect={{
                                    prev: {
                                         shadow: true,
                                         translate: ["-20%", 0, -1]
                                    },
                                    next: {
                                          translate: ["100%", 0, 0]
                                    }
                               }}
                               loop={true}
                               autoplay={{
                                      delay: 5000,
                                      disableOnInteraction: false
                               }}
                               modules={[EffectCreative, Autoplay]}
                         >
                                   <SwiperSlide>
                                            <div className="hero-slide-moja">
                                                    <div className="inner-row">
                                                               <div className="hero-texts">
                                                                        <div className="hero-date-venue">
                                                                                  <div className="date"> 
                                                                                            <span><IoCalendarOutline /></span>
                                                                                            <h4>8<sup>th</sup> <span><BsDashLg /></span> 10<sup>th</sup> October, 2024</h4>
                                                                                  </div>
                                                                                  <span className="dashy"></span>
                                                                                  <div className="venue">
                                                                                            <span><GrLocation /></span>
                                                                                            <h4>Sarit Expo Center, Westlands Nairobi</h4>
                                                                                  </div>
                                                                       </div>
                                                                        <h1>The Biggest African Entreprenuarship Summit.</h1>
                                                                        <p>Join this year&apos;s biggest entreprenuarship conference with over 150 participants and some of the most renowned keynote speakers of the present day.</p>

                                                                        <div className="hero-btns">
                                                                                   <Link to={"/"}>Register Now</Link>
                                                                                   <Link to={"/"}>Explore</Link>
                                                                        </div>
                                                                   </div>
                                                       </div>
                                                       <div className="hero-slide-image one"></div>
                                            </div>
                                   </SwiperSlide>
                                   <SwiperSlide>
                                            <div className="hero-slide-moja">
                                            <div className="hero-slide-image two"></div>
                                                    <div className="inner-row">
                                                               <div className="hero-texts">
                                                                        <div className="hero-date-venue">
                                                                                  <div className="date"> 
                                                                                            <span><IoCalendarOutline /></span>
                                                                                            <h4>8<sup>th</sup> <span><BsDashLg /></span> 10<sup>th</sup> October, 2024</h4>
                                                                                  </div>
                                                                                  <span className="dashy"></span>
                                                                                  <div className="venue">
                                                                                            <span><GrLocation /></span>
                                                                                            <h4>Sarit Expo Center, Westlands Nairobi</h4>
                                                                                  </div>
                                                                       </div>
                                                                        <h1>The Biggest African Entreprenuarship Summit.</h1>
                                                                        <p>Join this year&apos;s biggest entreprenuarship conference with over 150 participants and some of the most renowned keynote speakers of the present day.</p>

                                                                        <div className="hero-btns">
                                                                                   <Link to={"/"}>Register Now</Link>
                                                                                   <Link to={"/"}>Explore</Link>
                                                                        </div>
                                                                   </div>
                                                       </div>
                                            </div>
                                   </SwiperSlide>
                        </Swiper>
            </div>
    </div>
  )
}

export default HeroSection