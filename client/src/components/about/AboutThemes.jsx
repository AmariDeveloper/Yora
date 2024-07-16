import { Link } from "react-router-dom"
import about1 from "../../assets/about5.jpg"
import { IoCheckmark } from "react-icons/io5";
import about2 from "../../assets/about3.jpg"
import about3 from "../../assets/about6.jpg"
import about4 from "../../assets/about7.jpg"
const AboutThemes = () => {
  return (
    <div className="about-themes">
              <div className="inner-row">
                          <div className="about-themes-content">
                                     <div className="about-themes-intro">
                                               <div className="about-themes-left">
                                                      <h2>Unleash Your Creative Spark at YORA: Explore Three Intertwined Themes</h2>
                                                      <p>We&apos;ll be exploring key themes through thought-provoking presentations, interactive discussions, and hands-on activities that will keep you engaged and inspired.</p>
                                               </div>
                                               <Link to={"/"}>Request Program</Link>
                                     </div>
                                       <div className="about-themes-row-moja">
                                                     <div className="themes-row">
                                                                 <h2>1. NexGen Africa</h2>
                                                     </div>
                                                     <div className="themes-row-texts">
                                                                 <img src={about1} alt="" />
                                                                 <p><span>Igniting Africa&apos;s Future: Empowering the next generation of entrepreneurs</span>. We identify talented individuals, provide them with critical resources and mentorship, and connect them with valuable networks. Our program empowers aspiring African entrepreneurs through access to essential resources, mentorship, and networking opportunities, nurturing their potential and fueling the continent&apos;s future.</p>
                                                                 <p>We are going to be focusing on the following: </p>
                                                                 <ul>
                                                                          <li><span><IoCheckmark /></span>Facilitate market access for 5,000 African startups and SMEs</li>
                                                                          <li><span><IoCheckmark /></span>Organize 50 trade missions annually to key international markets</li>
                                                                          <li><span><IoCheckmark /></span>Secure $50 million in funding and investment opportunities</li>
                                                                          <li><span><IoCheckmark /></span>Establish a network of 20,000 African and international entrepreneurs, investors, and mentors.</li>
                                                                 </ul>
                                                     </div>
                                       </div>
                                       <div className="about-themes-row-moja">
                                                     <div className="themes-row">
                                                                 <h2>2. African Unicorn Summit</h2>
                                                     </div>
                                                     <div className="themes-row-texts">
                                                                 <img src={about2} alt="" />
                                                                 <p><span> Africa&apos;s Innovation Powerhouse Convenes: Leaders Unite at the Africa Unicorn Summit.</span>. Nairobi plays host to a premier event, bringing together industry leaders from across Africa and the globe to ignite innovation across all sectors.</p>
                                                                 <p>We are going to be focusing on the following: </p>
                                                                 <ul>
                                                                          <li><span><IoCheckmark /></span>Empowering Business Startups</li>
                                                                          <li><span><IoCheckmark /></span>Creation of Unicorns</li>
                                                                          <li><span><IoCheckmark /></span>Business of Sports, Film, and Theater</li>
                                                                          <li><span><IoCheckmark /></span>Cultural Fusion in Entrepreneurship</li>
                                                                 </ul>
                                                     </div>
                                       </div>
                                       <div className="about-themes-row-moja">
                                                     <div className="themes-row">
                                                                 <h2>3. Climate Action & Green Entrepreneurship</h2>
                                                     </div>
                                                     <div className="themes-row-texts">
                                                                 <div className="themes-row-images">
                                                                            <img src={about3} alt="" />
                                                                            <img src={about4} alt="" />
                                                                 </div>
                                                                 <p>Welcome to the <span>Climate Action and Green Entrepreneurship section of the Year of Return Africa (YORA) Summit 2024! </span> In alignment with global efforts to address climate change and promote sustainable development, this segment of the summit focuses on empowering entrepreneurs to drive environmental innovation and create positive impact in their communities..</p>
                                                                 <p>We are going to be focusing on the following: </p>
                                                                 <ul>
                                                                          <li><span><IoCheckmark /></span>Sensitize entrepreneurs on the challenges of the climate crisis and its impact on the economy</li>
                                                                          <li><span><IoCheckmark /></span>Share information on how they build business resilience and develop adaptation strategies</li>
                                                                          <li><span><IoCheckmark /></span>Providing skills and resources helps youth start and grow climate-resilient businesses.</li>
                                                                 </ul>
                                                                 <p>In addition to promoting green entrepreneurship, Abana International who is hosting this climate segment  is dedicated to giving back to the community. Through partnerships with local organizations and initiatives, we strive to support environmental conservation efforts, promote renewable energy solutions, and empower communities to mitigate the effects of climate change. Part. Of the proceeds of this event will be channeled back to the community through youth training, business start ups and mentoring for vulnerable and marginalized populations, with special focus on Abana’s Beacon of Hope project that supports orphans.</p>
                                                                 <p>Abana International seeks to engage youth in resolving critical world challenges such as climate action (SDG 13), development (SDG 8 and 9) and peace (SDG 16) with a view to contributing towards the Sustainable Development Goals and Agenda 2030.</p>
                                                     </div>
                                       </div>
                          </div>
              </div>
    </div>
  )
}

export default AboutThemes