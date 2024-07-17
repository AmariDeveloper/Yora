import CounterWrap from "./CounterWrap";
import logo1 from "../../assets/partner1.webp"
import logo2 from "../../assets/partner2.webp"
import logo3 from "../../assets/partner3.webp"
import logo4 from "../../assets/partner4.webp"
import logo5 from "../../assets/partner5.webp"
import logo6 from "../../assets/partner6.webp"
import logo7 from "../../assets/partner7.webp"
import logo8 from "../../assets/partner8.webp"
import logo9 from "../../assets/partner9.webp"
import logo10 from "../../assets/partner10.jpeg"
import logo11 from "../../assets/partner11.png"
// import logo12 from "../../assets/partner12.png"
import logo13 from "../../assets/partner13.png"
import { Link } from "react-router-dom";
import about1 from "../../assets/about1.webp"
import about2 from "../../assets/about2.webp"

const AboutSection = () => {
 const DAYS_TO_GO = new Date("2024-10-8").getTime();
  return (
    <div className="about-section">
                <div className="inner-row">
                           <div className="about-section-content">
                                     <div className="countdown-strip">
                                                  <h3>Days to Go</h3>
                                                 <CounterWrap targetDate={DAYS_TO_GO}  />
                                     </div>

                                     <div className="partners-section">
                                                <div className="partners-texts">
                                                         <h1>Partners & Exhibitors</h1>
                                                         <p>Calling all Kenyan businesses! Partner and showcase your brand at our upcoming entrepreneurship conference.</p>
                                                </div>
                                                <div className="partners-logos">
                                                           <img src={logo1} alt="" />
                                                           <img src={logo2} alt="" />
                                                           <img src={logo3} alt="" />
                                                           <img src={logo4} alt="" />
                                                           <img src={logo5} alt="" />
                                                           <img src={logo6} alt="" />
                                                           <img src={logo7} alt="" />
                                                           <img src={logo8} alt="" />
                                                           <img src={logo9} alt="" />
                                                           <img src={logo10} alt="" />
                                                           <img src={logo11} alt="" />
                                                           {/* <img src={logo12} alt="" /> */}
                                                           <img src={logo13} alt="" />
                                                </div>
                                     </div>


                                     <div className="about-description-wrapper">
                                                <div className="about-description-texts">
                                                             <h3>Year of Return Africa, 2024</h3>
                                                             <h1>Igniting Africa&apos;s Entrepreneurship: Fueling Unicorns</h1>
                                                             <p>This immersive program empowers African youth and businesses through innovation, skill-building, and networking. Join us for two days of inspiring keynotes, workshops, exhibitions, and pitch competitions, followed by a day of outdoor adventures in Nairobi! Choose your path - golf, game drives, or corporate tours - and connect with Africa&apos;s future leaders.</p>

                                                             <div className="about-time-venue">
                                                                        <div className="about-box">
                                                                                   <h4>Where</h4>
                                                                                   <p>Sarit Expo Center <br />Westlands Nairobi</p>
                                                                        </div>
                                                                        <div className="about-box">
                                                                                   <h4>When</h4>
                                                                                   <p>Tuesday to Thursday<br /> 8-10th October, 2024</p>
                                                                        </div>
                                                             </div>

                                                             <Link to={"/"}>Read More about the Summit</Link>
                                                </div>
                                                <div className="about-description-images">
                                                         <div className="image-box">
                                                                     <div className="overlay"></div>
                                                                     <img src={about1} alt="" />
                                                         </div>
                                                         <img className="large-image" src={about2} alt="" />
                                                </div>
                                     </div>
                           </div>
                </div>
    </div>
  )
}

export default AboutSection