/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import { IoCheckboxSharp } from "react-icons/io5";
const MasterclassAccordion = ({ data, current }) => {
    const [status, setStatus] = useState(false);
    
    useEffect(() => {
          if(current === data){
               setStatus(true)
          }
    }, [current, data])
  return (
    <div className={ status ? "masterclass-accordion active" : "masterclass-accordion"}>
              <div className="accordion-header" onClick={() => setStatus(!status)}>
                        <h3>{data.name}</h3>
                        <span><GoPlus /></span>
              </div>
              <div className="accordion-answer">
                       <div className="accordion-answer-inner">
                                 <ul>
                                           { data.specifics.map(item => <li key={item}><span><IoCheckboxSharp /></span>{item}</li>)}
                                 </ul>
                       </div>
              </div>
    </div>
  )
}

export default MasterclassAccordion