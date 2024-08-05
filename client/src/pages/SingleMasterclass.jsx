import Navbar from "../components/common/navigation/Navbar"
import SingleMasterclassBody from "../components/masterclasses/SingleMasterclassBody"
const SingleMasterclass = () => {
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
            <SingleMasterclassBody />
     </>
  )
}

export default SingleMasterclass