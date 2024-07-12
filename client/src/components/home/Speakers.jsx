import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { speakers } from "../../data/speakers";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import { useState } from "react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const Speakers = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    const prevHandler = () => swiperRef.slidePrev();
    const nextHandler = () => swiperRef.slideNext();

  return (
    <div className="speakers-section">
             <div className="inner-row">
                        <div className="speakers-section-content">
                                  <div className="speakers-intro">
                                              <div className="speakers-text">
                                                       <h1>Speakers & Facilitators</h1>
                                                       <p>Keynotes, track talks and labs by 30+ senior speakers from different industries and academic experts.</p>
                                              </div>
                                              <div className="speakers-action">
                                                        <div className="slider-navigation">
                                                                   <span onClick={prevHandler}><LiaLongArrowAltLeftSolid /></span>
                                                                   <span onClick={nextHandler}><LiaLongArrowAltRightSolid /></span>
                                                        </div>
                                                        <Link to={"/"}>View All</Link>
                                              </div>
                                  </div>


                                  <div className="speakers-row">
                                          <Swiper
                                                   slidesPerView={4}
                                                   spaceBetween={30}
                                                   autoplay={{
                                                           delay: 5000,
                                                           disableOnInteraction: false
                                                    }}
                                                   loop={true}
                                                   modules={[Autoplay]}
                                                   onSwiper={(swiper) => setSwiperRef(swiper) }
                                           >
                                                    { speakers.map(item => 
                                                          <SwiperSlide key={item.id}>
                                                                    <div className="speaker-moja" key={item.id}>
                                                                              <div className="image-box">
                                                                                       <img src={item.image} alt="" />
                                                                              </div>
                                                                              <h3>{item.name}</h3>
                                                                              <p>{item.position}</p>
                                                                     </div>
                                                          </SwiperSlide>
                                                    )}
                                          </Swiper>
                                  </div>


                                  <div className="extra-attendance">
                                            <h2>Who you&apos;ll run into</h2>
                                            <div className="attendance-wrapper">
                                                          <div className="attendance-row">
                                                                      <div className="attendance-moja">
                                                                                <h4>1M+ per month businesses & startups</h4>
                                                                      </div>
                                                                      <div className="attendance-moja">
                                                                                <h4>Fastest growing companies in Africa</h4>
                                                                      </div>
                                                                      <div className="attendance-moja">
                                                                                <h4>Celebrities in business, sports, film & Theatre</h4>
                                                                      </div>
                                                                      <div className="attendance-moja">
                                                                                <h4>Successful investor and venture capitalists & thought leaders</h4>
                                                                      </div>
                                                                      <div className="attendance-moja">
                                                                                <h4>Innovative entrepreneurs in all sectors</h4>
                                                                      </div>
                                                         </div>
                                                         <h3>Plus gurus, employees and owners of many of our partner companies and more</h3>
                                            </div>
                                  </div>
                        </div>
             </div>
    </div>
  )
}

export default Speakers