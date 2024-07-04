import  {Link, NavLink } from "react-router-dom"
import logo from "../../../assets/logo2.png"
const Header = () => {
  return (
    <header>
             <div className="inner-row">
                       <div className="header-content">
                                  <Link to="/" className="logo">
                                           <img src={logo} alt="" />
                                  </Link>
                                  <nav>
                                          <ul>
                                                   <li><NavLink to={"/"}>Home</NavLink></li>
                                                   <li><NavLink to={"/about-us"}>About Us</NavLink></li>
                                                   <li><NavLink to={"/masterclasses"}>Masterclasses</NavLink></li>
                                                   <li><NavLink to={"/speakers"}>Speakers</NavLink></li>
                                                   <li><NavLink to={"/partners"}>Partners</NavLink></li>
                                          </ul>

                                          <div className="header-actions">
                                                   <Link to="/">Buy Ticket</Link>
                                          </div>
                                  </nav>
                       </div>
             </div>
    </header>
  )
}

export default Header