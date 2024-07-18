import email from "../../assets/mail.png"
const ContactBody = () => {
  return (
    <div className="contact-body">
               <div className="inner-row">
                         <div className="contact-body-content">
                                    <div className="contact-intro">
                                              <h3>If you&apos;d like to get in touch with us, if you have questions, compliments or complaints, we want to hear from you.</h3>
                                    </div>
                                    <div className="contact-box-wrap">
                                                <div className="contact-email-moja">
                                                            <div className="icon">
                                                                      <img src={email} alt="" />
                                                            </div>
                                                            <div className="email-texts">
                                                                        <h3>Tickets Info</h3>
                                                                        <p>ticketsupport@yora.com</p>
                                                            </div>
                                                </div>
                                                <div className="contact-email-moja">
                                                            <div className="icon">
                                                                      <img src={email} alt="" />
                                                            </div>
                                                            <div className="email-texts">
                                                                        <h3>Partnerships info</h3>
                                                                        <p>partnerships@yora.com</p>
                                                            </div>
                                                </div>
                                                <div className="contact-email-moja">
                                                            <div className="icon">
                                                                      <img src={email} alt="" />
                                                            </div>
                                                            <div className="email-texts">
                                                                        <h3>General Inquiries</h3>
                                                                        <p>info@yora.com</p>
                                                            </div>
                                                </div>
                                    </div>
                         </div>
               </div>
    </div>
  )
}

export default ContactBody