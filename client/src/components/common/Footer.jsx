import { Link } from "react-router-dom"
import { PiEnvelopeLight } from "react-icons/pi";
import { HiOutlinePhone } from "react-icons/hi2";
import { FaFacebookF,FaXTwitter,FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
              <div className="inner-row">
                      <div className="footer-content">
                                 <div className="footer-column">
                                            <h3>About the Event</h3>
                                            <ul>
                                                        <li><Link to={'/'}>The Event</Link></li>
                                                        <li><Link to={"/"}>Who is Attending</Link></li>
                                                        <li><Link to={"/"}>Speakers</Link></li>
                                                        <li><Link to={"/"}>Partners</Link></li>
                                            </ul>
                                 </div>
                                 <div className="footer-column">
                                              <h3>Useful Links</h3>
                                              <ul>
                                                       <li><Link to={"/"}>Tickets</Link></li>
                                                       <li><Link to={"/"}>Masterclasses</Link></li>
                                                       <li><Link to={"/"}>Terms & Conditions</Link></li>
                                              </ul>
                                 </div>
                                 <div className="footer-column">
                                           <h3>Contact Details</h3>

                                           <div className="details-row">
                                                   <h5><span><PiEnvelopeLight /></span> Write an Email</h5>
                                                   <h5><span><HiOutlinePhone /></span>+254 790 616 483</h5>
                                                   <p>Sarit Expo Center, Westlands, <span>Nairobi Kenya</span></p>
                                           </div>

                                           <div className="footer-social-links">
                                                     <ul>
                                                               <li><Link to={"/"}><span><FaFacebookF /></span></Link></li>
                                                               <li><Link to={"/"}><span><FaXTwitter /></span></Link></li>
                                                               <li><Link to={"/"}><span><FaInstagram /></span></Link></li>
                                                     </ul>
                                           </div>
                                 </div>
                      </div>

                      <div className="copyright">
                                <p>All rights reserved &copy;{new Date().getFullYear()} YORA</p>
                      </div>
              </div>
    </footer>
  )
}

export default Footer