import { useState } from "react";
import MasterclassTicketModal from "./MasterclassTicketModal";
import { masterclassContext } from "./masterclassctx";
import SingleMasterclassWrap from "./SingleMasterclassWrap";
const SingleMasterclassBody = () => {
     const [ modal, setModal ] = useState({ value: 1, status: false})
  return (
    <masterclassContext.Provider value={[modal, setModal]}>
          <div className="single-masterclass-body">
               <div className="inner-row">
                         <SingleMasterclassWrap />
               </div>
               <MasterclassTicketModal  />
    </div>
    </masterclassContext.Provider>
  )
}

export default SingleMasterclassBody