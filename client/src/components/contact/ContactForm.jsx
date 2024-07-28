
const ContactForm = () => {
  return (
    <div className="contact-form">
              <form>
                       <div className="form-row split">
                                 <div className="form-column">
                                             <label htmlFor="fullname">Full name <span>*</span></label>
                                             <input type="text" className="form-control" placeholder="Full name" />
                                 </div>
                                 <div className="form-column">
                                            <label htmlFor="email">Email Address <span>*</span></label>
                                            <input type="email" className="form-control" placeholder="Email Address" />
                                 </div>
                      </div>
                        <div className="form-row">
                                 <label htmlFor="phone">Phone Number <span>*</span></label>
                                 <input type="number" placeholder="Phone no" className="form-control"/>
                        </div>
                        <div className="form-row">
                                     <label htmlFor="message">Message</label>
                                     <textarea  placeholder="Write a message"></textarea>
                        </div>
                        <div className="form-btn">
                                   <button type="submit">Submit Message</button>
                        </div>
              </form>
    </div>
  )
}

export default ContactForm