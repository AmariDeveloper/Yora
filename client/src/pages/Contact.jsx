import Navbar from "../components/common/navigation/Navbar"
import ContactBody from "../components/contact/ContactBody"
import "../css/contact.css"
import Footer from "../components/common/Footer"
const Contact = () => {
  return (
     <>
            <div className="hero-landing contact">
                       <Navbar />
                       <div className="hero-landing-body">
                                  <div className="inner-row">
                                         <div className="hero-landing-texts">
                                                 <div className="left-stuff">
                                                           <h1>Contact Us</h1>
                                                   </div>
                                         </div>
                                  </div>
                        </div>
            </div>
            <ContactBody />
            <Footer />
      </>
  )
}

export default Contact