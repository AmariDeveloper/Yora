import { ImArrowUpRight2 } from "react-icons/im";

const CallToAction = () => {
  return (
    <div className="call-to-action">
               <div className="inner-row">
                        <div className="call-to-action-content">
                                   <div className="left-column">
                                             <h1>The Year of Return Summit 2024</h1>
                                             <h4>Nairobi, 8<sup>th</sup> - 10<sup>th</sup> October 2024</h4>
                                   </div>
                                   <div className="right-column">
                                              <h3>Video <span><ImArrowUpRight2 /></span></h3>
                                              <h3>Request Program <span><ImArrowUpRight2 /></span></h3>
                                              <h3>Register <span><ImArrowUpRight2 /></span></h3>
                                              <h3>Contact Us<span><ImArrowUpRight2 /></span></h3>
                                   </div>
                        </div>
               </div>
    </div>
  )
}

export default CallToAction