import { programs } from "../../data/programs"

const TicketsSection = () => {
  return (
    <div className="tickets-section">
              <div className="inner-row">
                         <div className="tickets-section-content">
                                    <div className="tickets-intro">
                                              <h3>Pricing Plans</h3>
                                               <h1>Get your Tickets to Access a variety of Summit Programs</h1>
                                    </div>
                                    <div className="tickets-row">
                                            { programs.map(item => 
                                                  <div className="ticket-moja" key={item.id}>
                                                            <img src={item.image} alt="" />
                                                            <h3>{item.title}</h3>
                                                            <p>{item.description}</p>
                                                  </div>
                                            )}
                                    </div>
                         </div>
              </div>
    </div>
  )
}

export default TicketsSection