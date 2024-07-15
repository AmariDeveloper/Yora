import { Link } from "react-router-dom"

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
                                       
                          </div>
              </div>
    </div>
  )
}

export default AboutThemes