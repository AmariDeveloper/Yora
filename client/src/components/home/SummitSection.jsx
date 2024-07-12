import { FaSquareFull } from "react-icons/fa6";
import { Link } from "react-router-dom"
import sports from "../../assets/sports.jpg"
import technology from "../../assets/tech.jpg"
import agriculture from "../../assets/agriculture.jpg"
import environment from "../../assets/environment.jpg"
const SummitSection = () => {
  return (
    <div className="summit-section">
               <div className="inner-row">
                           <div className="summit-section-content">
                                     <div className="summit-intro">
                                                 <h3>Key Sectors</h3>
                                                 <h1><span>Shape Your Future</span>: A Powerful Summit Experience</h1>
                                                 <p>Gain valuable insights and practical skills through insightful presentations, interactive discussions, and engaging activities exploring key themes</p>
                                     </div>

                                     <div className="summit-wrapper">
                                                <div className="theme-moja">
                                                           <div className="number">
                                                                      <span>01</span>
                                                                      <span className="icon"><FaSquareFull /></span>
                                                           </div>
                                                           <h3>Business of Sports & Athletics</h3>
                                                </div>
                                                <div className="theme-moja">
                                                           <div className="number">
                                                                      <span>2</span>
                                                                      <span className="icon"><FaSquareFull /></span>
                                                           </div>
                                                           <h3>Technology, AI & Digital Economy</h3>
                                                </div>
                                                <div className="theme-moja">
                                                           <div className="number">
                                                                      <span>3</span>
                                                                      <span className="icon"><FaSquareFull /></span>
                                                           </div>
                                                           <h3>Agri-business, Trade & Market Access</h3>
                                                </div>
                                                <div className="theme-moja">
                                                           <div className="number">
                                                                      <span>4</span>
                                                                      <span className="icon"><FaSquareFull /></span>
                                                           </div>
                                                           <h3>Environment and Climate</h3>
                                                </div>
                                                {/* <div className="theme-moja">
                                                           <div className="number">
                                                                      <span>5.</span>
                                                           </div>
                                                           <h3>Investments</h3>
                                                </div> */}
                                                <div className="theme-moja">
                                                           <div className="number">
                                                                      <span>5</span>
                                                                      <span className="icon"><FaSquareFull /></span>
                                                           </div>
                                                           <h3>Fintech & Capital Access</h3>
                                                </div>
                                                <div className="theme-moja">
                                                           <div className="number">
                                                                      <span>6</span>
                                                                      <span className="icon"><FaSquareFull /></span>
                                                           </div>
                                                           <h3>Employment Opportunities in Maritime & Blue Economy</h3>
                                                </div>
                                                <div className="theme-moja">
                                                           <div className="number">
                                                                      <span>7</span>
                                                                      <span className="icon"><FaSquareFull /></span>
                                                           </div>
                                                           <h3>Wildlife, Culture & Tourism</h3>
                                                </div>
                                                <div className="theme-moja">
                                                           <div className="number">
                                                                      <span>8</span>
                                                                      <span className="icon"><FaSquareFull /></span>
                                                           </div>
                                                           <h3>Film, Music & Entertainment</h3>
                                                </div>
                                     </div>

                                     <div className="masterclasses-wrapper">
                                                 <div className="masterclasses-intro">
                                                             <div className="masterclass-column">
                                                                       <h2>Masterclasses & Sessions</h2>
                                                                       <p>We have curated a selection of masterclasses focused on the thematic areas we outlined above. Explore the list below to find the perfect session to supercharge your knowledge.</p>
                                                             </div>
                                                             <Link to={"/masterclasses"}>View All Masterclasses</Link>
                                                 </div>
                                                 <div className="masterclasses-init">
                                                             <div className="masterclass-moja">
                                                                      <div className="masterclass-overlay">
                                                                                <img src={sports} alt="" />
                                                                                <div className="overlay-texts">
                                                                                          <h4>Business of Sports and Athletics Master Class</h4>
                                                                                          <p>Participate in a 12-session athletics masterclass with World Class Runners</p>
                                                                                          <Link to={"/"}>Explore</Link>
                                                                                </div>
                                                                      </div>
                                                                      <h4  className="m-n">Business of Sports and Athletics Master Class</h4>
                                                             </div>
                                                             <div className="masterclass-moja">
                                                                      <div className="masterclass-overlay">
                                                                                <img src={technology} alt="" />
                                                                                <div className="overlay-texts">
                                                                                          <h4>Technology, AI, & Digital Economy Master Class</h4>
                                                                                          <p>Dive into a 12-session technology and ai masterclass with industry experts.</p>
                                                                                          <Link to={"/"}>Explore</Link>
                                                                                </div>
                                                                      </div>
                                                                      <h4  className="m-n">Technology, AI, & Digital Economy Master Class</h4>
                                                             </div>
                                                             <div className="masterclass-moja">
                                                                      <div className="masterclass-overlay">
                                                                                <img src={agriculture} alt="" />
                                                                                <div className="overlay-texts">
                                                                                          <h4>Agri-Business, Trade & Market Access Master Class</h4>
                                                                                          <p>Attend a 12-session agri-business, trade and market access masterclass led by industry experts.</p>
                                                                                          <Link to={"/"}>Explore</Link>
                                                                                </div>
                                                                      </div>
                                                                      <h4  className="m-n">Agri-Business, Trade & Market Access Master Class</h4>
                                                             </div>
                                                             <div className="masterclass-moja">
                                                                      <div className="masterclass-overlay">
                                                                                <img src={environment} alt="" />
                                                                                <div className="overlay-texts">
                                                                                          <h4>Environment & Climate Master Class</h4>
                                                                                          <p>Participate in a 12-session environment and climate masterclass guided by renowned experts in the field.</p>
                                                                                          <Link to={"/"}>Explore</Link>
                                                                                </div>
                                                                      </div>
                                                                      <h4  className="m-n">Environment & Climate Master Class</h4>
                                                             </div>
                                                 </div>
                                     </div>
                           </div>
               </div>
    </div>
  )
}

export default SummitSection