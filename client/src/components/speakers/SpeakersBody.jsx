import { speakers } from "../../data/speakers"

const SpeakersBody = () => {
  return (
    <div className="speakers-body">
                <div className="inner-row">
                             <div className="speakers-body-content">
                                         <div className="masterclass-intro">
                                                  <h1>Gain Insights from the Forefront</h1>
                                                  <p>Experience keynotes and thought-provoking track talks from over 20 leading corporate executives and renowned academics across diverse industries.</p>
                                         </div>

                                         <div className="speakers-wrapper">
                                                  { speakers.map(item => 
                                                         <div className="speaker-moja" key={item.id}>
                                                              <div className="image-box">
                                                                       <img src={item.image} alt="" />
                                                                 </div>
                                                              <h3>{item.name}</h3>
                                                              <p>{item.position}</p>
                                                        </div>
                                                  )}
                                         </div>
                             </div>
                </div>
    </div>
  )
}

export default SpeakersBody