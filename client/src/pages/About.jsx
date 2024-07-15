import AboutBody from "../components/about/AboutBody"
import AboutThemes from "../components/about/AboutThemes"
import Navbar from "../components/common/navigation/Navbar"
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
    </>
  )
}

export default About