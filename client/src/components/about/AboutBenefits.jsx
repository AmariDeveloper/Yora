import benefit1 from "../../assets/benefit3.jpg"
import benefit2 from "../../assets/benefit2.jpg"
import benefit3 from "../../assets/benefit1.jpg"

const AboutBenefits = () => {
  return (
    <div className="about-benefits">
              <div className="inner-row">
                         <div className="about-benefits-content">
                                     <div className="about-benefits-intro">
                                              <h1>Goals & Objectives</h1>
                                              <p>Empowering African startups goes beyond just funding. It&apos;s about creating a holistic ecosystem that fosters innovation and growth. Here&apos;s what it entails:</p>
                                     </div>
                                     <div className="about-benefits-row">
                                                <div className="about-benefit-moja">
                                                             <img src={benefit1} alt="" />
                                                             <h2>Fostering Innovation</h2>
                                                             <p>Innovation can lead to the creation of new ideas, products, or services that can address existing challenges or opportunities in the ecosystem. Meet other ecosystem members and collaborate to generate new solutions that can drive growth and competitivenes.</p>
                                                </div>
                                                <div className="about-benefit-moja">
                                                             <img src={benefit2} alt="" />
                                                             <h2>Promoting Collaboration</h2>
                                                             <p>Collaborate with the leaders and visionaries spearheading the future of innovation with different perspectives and expertise. Share ideas and leverage each others&apos; strengths and resources, close deals with new partners spur innovation, and foster economic growth as we build a thriving ecosystem.</p>
                                                </div>
                                                <div className="about-benefit-moja">
                                                             <img src={benefit3} alt="" />
                                                             <h2>Startup Ecosystem</h2>
                                                             <p>Engage with 500+ innovative startups from early-stage to unicorns and centaurs. Connect with a diverse network of 1000+ investors, including venture capitalists, investment funds, and angel investors. Secure new funding, partnerships, accelerate your growth, and level up.</p>
                                                </div>
                                     </div>
                         </div>
              </div>
    </div>
  )
}

export default AboutBenefits