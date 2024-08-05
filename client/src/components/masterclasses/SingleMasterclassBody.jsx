import { useParams } from "react-router-dom"
import { masterclasses } from "../../data/masterclasses"
import MasterclassAccordion from "./MasterclassAccordion"

const SingleMasterclassBody = () => {
    const { name } = useParams();
    const current = masterclasses.find(item=> item.url_param === name);
    const array1 = masterclasses.filter(item => item.url_param !== name);
    array1.unshift(current);
  return (
    <div className="single-masterclass-body">
               <div className="inner-row">
                         <div className="single-masterclass-row">
                                     <div className="masterclass-list">
                                              { array1.map(item => <MasterclassAccordion key={item.id} data={item} current={current} />)}
                                     </div>
                                     <div className="masterclass-action"></div>
                         </div>
               </div>
    </div>
  )
}

export default SingleMasterclassBody