import { Link } from "react-router-dom"
import CallToAction from "../components/common/CallToAction"
import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import SpeakersBody from "../components/speakers/SpeakersBody"
import "../css/speakers.css"
const Speakers = () => {
  return (
    <> 
            <div className="hero-landing speakers">
                       <Navbar />
                       <div className="hero-landing-body">
                                  <div className="inner-row">
                                         <div className="hero-landing-texts">
                                                 <div className="left-stuff">
                                                           <h1>YORA Speakers</h1>
                                                          <h4>Who Will Shape Your Entrepreneurial Journey? Meet Our Inspiring Entrepreneurship Speakers.</h4>
                                                   </div>
                                                   <Link to={"/"}>Become a Speaker</Link>
                                         </div>
                                  </div>
                        </div>
            </div>

            <SpeakersBody />
            <CallToAction />
            <Footer />
    </>
  )
}

export default Speakers