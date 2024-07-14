import { Link } from "react-router-dom"
import tickets from "../../assets/tickets.png"
import { BsArrowRight } from "react-icons/bs";
const Tickets = () => {
  return (
    <div className="tickets-body">
              <div className="tickets-body-column">
                          <div className="tickets-body-content">
                                    <div className="inner-body">
                                            <h1>Unlock the full YORA experience</h1>
                                            <p>Your ticket grants access to our vibrant marketplace, inspiring stage sessions, and exclusive networking events. Choose from two ticket options to find the perfect fit for your needs.</p>

                                            <div className="tickets-body-wrapper">
                                                        <div className="single-ticket">
                                                                    <div className="icon">
                                                                               <img src={tickets} alt="" />
                                                                    </div>
                                                                    <div className="ticket-texts">
                                                                            <div>
                                                                                     <h3>Masterclass Ticket</h3>
                                                                                     <p>Attend 6 masterclass sessions between July and August,2024</p>
                                                                            </div>
                                                                            <h2><span>Ksh.</span> 19,500</h2>
                                                                    </div>
                                                         </div>
                                                         <div className="single-ticket">
                                                                    <div className="icon">
                                                                               <img src={tickets} alt="" />
                                                                    </div>
                                                                    <div className="ticket-texts">
                                                                            <div>
                                                                                     <h3>General Ticket</h3>
                                                                                     <p>General pass to gain entry to all the conferences</p>
                                                                            </div>
                                                                            <h2><span>Ksh.</span>25,000</h2>
                                                                    </div>
                                                         </div>
                                                         <div className="single-ticket">
                                                                    <div className="icon">
                                                                               <img src={tickets} alt="" />
                                                                    </div>
                                                                    <div className="ticket-texts">
                                                                             <div>
                                                                                    <h3>Executive Ticket</h3>
                                                                                    <p>Executive pass for executives</p>
                                                                             </div>
                                                                             <h2><span>Ksh.</span>45,000</h2>
                                                                    </div>
                                                         </div>
                                            </div>

                                            <Link to={"/"}>Learn More <span><BsArrowRight /></span></Link>
                                    </div>
                          </div>
              </div>
              <div className="tickets-body-image"></div>
    </div>
  )
}

export default Tickets