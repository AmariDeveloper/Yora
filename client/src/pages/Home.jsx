import Footer from "../components/common/Footer"
import CallToAction from "../components/common/CallToAction"
import Navbar from "../components/common/navigation/Navbar"
import AboutSection from "../components/home/AboutSection"
import Banner from "../components/home/Banner"
import HeroSection from "../components/home/HeroSection"
import Speakers from "../components/home/Speakers"
import SummitSection from "../components/home/SummitSection"
import Testimonials from "../components/home/Testimonials"
import Tickets from "../components/home/Tickets"
import TicketsSection from "../components/home/TicketsSection"
import "../css/home.css"

const Home = () => {
  return (
    <>
         <div className="landing">
                   <Navbar />
                   <HeroSection />
         </div>
         <AboutSection />
         <Banner />
         <SummitSection />
         <Speakers />
         <TicketsSection />
         <Tickets />
         <Testimonials />
         <CallToAction />
         <Footer />
    </>
  )
}

export default Home