import { Link } from "react-router-dom"
import { LuMoveUpRight } from "react-icons/lu";
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
import logo12 from "../../assets/partner12.png"
import logo13 from "../../assets/partner13.png"
import sponsor from "../../assets/sponsor.webp"

const PartnerBody = () => {
  return (
    <div className="partner-body">
             <div className="inner-row">
                        <div className="partner-body-content">
                                   <div className="partner-intro">
                                             <h3> YORA fosters a powerful global network, partnering with leading organizations  connecting young entrepreneurs, supporters, and changemakers. This collaborative force empowers them to develop and scale innovative solutions, tackling the critical challenges faced by underserved youth around the world.</h3>
                                             <div className="partner-links">
                                                        <Link to={"/"}>Find out more about becoming a partner <span><LuMoveUpRight /></span></Link>
                                                        {/* <Link to={"/"}>Find out more about becoming a Sponser <span><LuMoveUpRight /></span></Link> */}
                                             </div>
                                   </div>
                                   <div className="partners-row">
                                               <h2>Partners & Exhibitors</h2>
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
                                                           <img src={logo12} alt="" />
                                                           <img src={logo13} alt="" />
                                                </div>



                                                <div className="sponsorship-wrap">
                                                              <img src={sponsor} alt="" />
                                                              <div className="sponsor-texts">
                                                                           <h3>Sponsor Opportunities</h3>
                                                                           <h4>Would you like to join the summit as a sponsor?</h4>
                                                                           <p>Contact us to learn more about sponsorship opportunities</p>

                                                                           <Link to={"/"}>Contact Us</Link>
                                                              </div>
                                                </div>
                                   </div>
                        </div>
             </div>
    </div>
  )
}

export default PartnerBody