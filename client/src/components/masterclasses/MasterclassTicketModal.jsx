import { useContext} from "react"
import { CgClose } from "react-icons/cg"
import { masterclassContext } from "./masterclassctx"

const MasterclassTicketModal = () => {
    const [ modal, setModal ] = useContext(masterclassContext)

    const closeModal = () => {
          setModal({ value: modal.value, status: false})
    }
  return (
    <div className={modal.status ? "modal active" : "modal"}>
                <div className="masterclass-checkout">
                           <div className="checkout-wrapper">
                                     <div className="checkout-header">
                                                <h3>Masterclass Checkout</h3>
                                                <span onClick={closeModal}><CgClose /></span>
                                     </div>
                                    <div className="checkout-form">
                                               <h3>Billing Information</h3>
                                               <p>Please fill in your information below to enable us process your ticket</p>

                                               <form action="">
                                                         <div className="form-row">
                                                                    <div className="form-input">
                                                                              <span className="spany">Full name<span>*</span></span>
                                                                              <input type="text" className="form-input-control" required />
                                                                    </div>
                                                         </div>
                                                         <div className="form-row">
                                                                <div className="form-input">
                                                                              <span className="spany">Email Address<span>*</span></span>
                                                                              <input type="email" className="form-input-control" required />
                                                                    </div>
                                                         </div>
                                                         <div className="form-row">
                                                                <div className="form-input">
                                                                              <span className="spany">Phone Number<span>*</span></span>
                                                                              <input type="email" className="form-input-control" required />
                                                                    </div>
                                                         </div>
                                                         <div className="form-row">
                                                                   <label htmlFor="masterclass">Most interested in which Masterclass?</label>
                                                                   <select className="form-control">
                                                                             <option value="All">All</option>
                                                                             <option value="Business of Sports and Athletics Masterclass">Business of Sports and Athletics Masterclass</option>
                                                                             <option value="Technology, AI & Digital Economy Masterclass">Technology, AI & Digital Economy Masterclass</option>
                                                                             <option value="Agri-business, Trade & Market Access Summit">Agri-business, Trade & Market Access Summit</option>
                                                                             <option value="Environment and Climate Summit">Environment and Climate Summit</option>
                                                                             <option value="Investment Summit">Investment Summit</option>
                                                                             <option value="Fintech and Capital Access Masterclass">Fintech and Capital Access Masterclass</option>
                                                                   </select>
                                                         </div>

                                                           <div className="order-summary">
                                                                     <h3>Order Summary</h3>
                                                                    <p>Below is a breakdown of your order:</p>

                                                                    <div className="order-strip">
                                                                             <p>{modal.value} x Masterclass ticket</p>
                                                                             <span><span>Ksh:</span> 19,500</span>
                                                                  </div>
                                                                    <div className="total-strip">
                                                                             <h4>Total</h4>
                                                                             <h4><span>Ksh.</span>{(modal.value * 19500).toLocaleString()}</h4>
                                                                    </div>
                                                                    <button type="submit">Purchase your Ticket</button>
                                                         </div>
                                               </form>
                                    </div>
                                  
                           </div>
                           <div className="order-summary">
                                   
                           </div>
                </div>
    </div>
  )
}

export default MasterclassTicketModal