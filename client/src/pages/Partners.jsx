import CallToAction from "../components/common/CallToAction"
import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import PartnerBody from "../components/partners/PartnerBody"
import "../css/partners.css"

const Partners = () => {
  return (
    <>
            <div className="hero-landing partners">
                       <Navbar />
                       <div className="hero-landing-body">
                                  <div className="inner-row">
                                         <div className="hero-landing-texts">
                                                 <div className="left-stuff">
                                                           <h1>YORA Partners</h1>
                                                          <h4>Gain Insights and Spark Innovation: Engage with Leading Entrepreneurs and Supportive Sponsors at Summit 2024.</h4>
                                                   </div>
                                         </div>
                                  </div>
                        </div>
            </div>
            <PartnerBody />
            <CallToAction />
            <Footer />
    </>
  )
}

export default Partners