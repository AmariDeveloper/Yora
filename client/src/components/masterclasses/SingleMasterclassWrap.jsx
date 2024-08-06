import { useContext } from "react"
import { masterclassContext } from "./masterclassctx"
import MasterclassAccordion from "./MasterclassAccordion"
import { AiOutlineMinus,  AiOutlinePlus } from "react-icons/ai";
import { IoTicketOutline } from "react-icons/io5";
import { masterclasses } from "../../data/masterclasses";
import { useParams } from "react-router-dom";
const SingleMasterclassWrap = () => {
    const { name } = useParams();
    const current = masterclasses.find(item=> item.url_param === name);
    const array1 = masterclasses.filter(item => item.url_param !== name);
    array1.unshift(current);
    // eslint-disable-next-line no-unused-vars
    const [ modal, setModal ] = useContext(masterclassContext)
    
    const handleDecrement = () => {
        if(modal.value=== 1){
             setModal({ value: 1})
        }else{ 
            setModal({ value: modal.value - 1})
        }
        
}  
const handleIncrement = () => {
        setModal({ value: modal.value + 1});
}

const openModal = (stuff) => {
       setModal({ value: stuff, status: true })
}
  return (
    <div className="single-masterclass-row">
    <div className="masterclass-list">
             { array1.map(item => <MasterclassAccordion key={item.id} data={item} current={current} />)}
    </div>
    <div className="masterclass-action">
               <h3>Get the Masterclass Ticket(s)</h3>
               <div className="checkout-section">
                        <span onClick={handleDecrement}><AiOutlineMinus /></span>
                        <h5>{modal.value}</h5>
                        <span onClick={handleIncrement}><AiOutlinePlus /></span>
               </div>
               
               <h4>Price: <span>Ksh.</span>{(19500 * modal.value).toLocaleString()}</h4>

               <button onClick={() => openModal(modal.value)}><span><IoTicketOutline /></span>Checkout</button>
    </div>
</div>
  )
}

export default SingleMasterclassWrap