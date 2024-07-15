import about1 from "../../assets/about4.jpg"
import { PiDotOutlineFill } from "react-icons/pi";

const AboutBody = () => {
  return (
    <div className="about-body-section">
              <div className="inner-row">
                         <div className="about-body-content">
                                   <div className="about-body-texts">
                                              <img src={about1} alt="" />

                                              <h1>Engage <span><PiDotOutlineFill /></span> Connect <span><PiDotOutlineFill /></span> Innovate</h1>
                                              <h3>with 200+ innovation professionals across Africa</h3>

                                              <p>The Summit isn&apos;t just about insightful presentations; it&apos;s about  <span>interactive learning and powerful connections.</span> We&apos;ve crafted a highly engaging format that blends thought-provoking talks with a variety of discussion sessions and ample networking opportunities. This allows you to:</p>

                                              <ul>
                                                        <li><span>Engage in dynamic exchanges:</span> Delve deeper into specific challenges with industry peers during discussion sessions.</li>
                                                        <li><span>Expand your network:</span> Connect and exchange experiences with corporate executives from diverse fields at informal networking events.</li>
                                                        <li><span>Tailor your learning:</span> Choose your path! The Summit is organized across 3 innovation themes with multiple tracks. Focus on the presentations and roundtable discussions most relevant to your specific needs and challenges.</li>
                                              </ul>
                                   </div>
                                   <div className="about-extra-texts">
                                                <h3>Our Background</h3>
                                                <p>Yora Summit has organized 50 large-scale events in Africa since 2019. Our network, comprised of 50+ leading multinationals, fosters a vibrant community for corporate professionals driving innovation and startup culture. Experience unparalleled events that spark in-depth dialogue and forge valuable connections with like-minded peers.</p>
                                                <p>The First Year Of Return was a campaign pioneered by the president of Ghana in 2019 as a major landmark spiritual and birth-right journey inviting the Global African family, home and abroad to reconnect, heal and rebuild the homeland.</p>
                                                <p>Africa is blessed with a wealth of natural resources and vibrant young minds. <span>The Year of Return, Africa 2024</span>, aims to empowering African youth & businesses through innovation, entrepreneurship, and skill-building initiatives.</p>
                                                <p>YORA Kenya, 2024 is a two-day conference taking place on 8th – 9th October 2024.</p>
                                   </div>
                         </div>
              </div>
    </div>
  )
}

export default AboutBody