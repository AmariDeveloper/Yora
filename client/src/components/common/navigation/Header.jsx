import  {Link, NavLink } from "react-router-dom"
import logo from "../../../assets/logo2.png"
import { CgMenuRight } from "react-icons/cg";
import { useContext } from "react";
import { sidebarContext } from "./sidebarContext";
const Header = () => {
  const [sidebarStatus, setSidebarStatus ] = useContext(sidebarContext)
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
                                                   <li><NavLink to={"/the-event"}>The Event</NavLink></li>
                                                   <li><NavLink to={"/masterclasses"}>Masterclasses</NavLink></li>
                                                   <li><NavLink to={"/speakers"}>Speakers</NavLink></li>
                                                   <li><NavLink to={"/partners"}>Partners</NavLink></li>
                                          </ul>

                                          <div className="header-actions">
                                                   <Link to="/">Buy Ticket</Link>

                                                   <span className="menu-btn" onClick={() => setSidebarStatus(true)}><CgMenuRight /></span>
                                          </div>
                                  </nav>
                       </div>
             </div>
    </header>
  )
}

export default Header