import { masterclasses } from "../../data/masterclasses"
import { Link } from "react-router-dom"
const MasterclassBody = () => {
  return (
    <div className="masterclass-body">
                <div className="inner-row">
                             <div className="masterclasses-content">
                                           <div className="masterclass-intro">
                                                      <h1>Choose a Masterclass that befits you</h1>
                                                      <p></p>
                                           </div>
                                           <div className="masterclasses-row">
                                                       { masterclasses.map(item => 
                                                        <div className="masterclass-moja" key={item.id}>
                                                                      <div className="masterclass-overlay">
                                                                                <img src={item.image} alt="" />
                                                                                <div className="overlay-texts">
                                                                                          <h4>{item.name}</h4>
                                                                                          <p>{item.description}</p>
                                                                                          <Link to={item.link}>Explore</Link>
                                                                                </div>
                                                                      </div>
                                                                      <h4  className="m-n">{item.name}</h4>
                                                             </div>
                                                       )}
                                           </div>
                             </div>
                </div>
    </div>
  )
}

export default MasterclassBody