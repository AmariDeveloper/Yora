import AboutBenefits from "../components/about/AboutBenefits"
import AboutBody from "../components/about/AboutBody"
import AboutThemes from "../components/about/AboutThemes"
import CallToAction from "../components/common/CallToAction"
import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import Testimonials from "../components/home/Testimonials"
import Tickets from "../components/home/Tickets"
import "../css/about.css"
const About = () => {
  return (
    <>
             <div className="hero-landing about">
                        <Navbar />
                        <div className="hero-landing-body">
                                  <div className="inner-row">
                                        <h1>YORA Summit</h1>
                                        <h4>3 highly interactive days of peer-to-peer exchange & learning on key entrepreneurship topics</h4>
                                  </div>
                        </div>
             </div>
             <AboutBody />
             <AboutThemes />
             <AboutBenefits />
             <Tickets />
             <Testimonials />
            <CallToAction />
            <Footer />
    </>
  )
}

export default About