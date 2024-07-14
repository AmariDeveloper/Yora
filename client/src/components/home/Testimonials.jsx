import { useEffect, useRef } from "react";
import { testimonials } from "../../data/testimonials";
import dummyImg from "../../assets/dummy.jpg"
const Testimonials = () => {
    const scrollerRef = useRef();

    useEffect(() => {
        const scrollerInner = scrollerRef.current.querySelector('.testimonial-scroller')
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach(item => {
               const duplicatedItem = item.cloneNode(true);
               duplicatedItem.setAttribute("aria-hidden", true);
               scrollerInner.appendChild(duplicatedItem);
         })
    }, [])
  return (
    <div className="testimonials-section">
                <div className="inner-row">
                              <div className="testimonials-section-content">
                                        <div className="testimonials-intro">
                                                    <h3>Testimonials</h3>
                                                    <h1>Find out How the Conference has helped people like you.</h1>
                                        </div>

                                        <div ref={scrollerRef} className="testimonials-row">
                                                  <div className="testimonial-scroller">
                                                            { testimonials.map(item => 
                                                              <div className="single-testimonial" key={item.id}>
                                                                         <p>{item.saying}</p>
                                                                         <div className="testimonial-profile">
                                                                                    <img src={item.image && item.image !== "" ? item.image : dummyImg} alt="" />
                                                                                     <div className="profile-texts">
                                                                                              <h4>{item.name}</h4>
                                                                                              <p>{item.position}</p>
                                                                                     </div>
                                                                         </div>
                                                              </div>
                                                            )}
                                                  </div>
                                        </div>
                              </div>
                </div>
    </div>
  )
}

export default Testimonials