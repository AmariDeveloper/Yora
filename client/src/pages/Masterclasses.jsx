import CallToAction from "../components/common/CallToAction"
import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import MasterclassBody from "../components/masterclasses/MasterclassBody"
import "../css/masterclass.css"
const Masterclasses = () => {
  return (
    <>
            <div className="hero-landing masterclasses">
                       <Navbar />
                       <div className="hero-landing-body">
                                  <div className="inner-row">
                                        <h1>YORA Masterclasses</h1>
                                        <h4>Learn from the Best: Attend Our Masterclasses Led by Industry Experts.</h4>
                                  </div>
                        </div>
            </div>
            <MasterclassBody />
            <CallToAction />
            <Footer />
    </>
  )
}

export default Masterclasses