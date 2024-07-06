import Navbar from "../components/common/navigation/Navbar"
import AboutSection from "../components/home/AboutSection"
import Banner from "../components/home/Banner"
import HeroSection from "../components/home/HeroSection"
import "../css/home.css"

const Home = () => {
  return (
    <>
         <div className="landing">
                   <Navbar />
                   <HeroSection />
                   <AboutSection />
                   <Banner />
         </div>
    </>
  )
}

export default Home