import gsap from 'gsap'
import { useContext, useEffect, useRef,} from "react";
import { sidebarContext } from "./sidebarContext";
import logo from '../../../assets/logo2.png'
import { Link, NavLink} from 'react-router-dom';
import { CgClose } from 'react-icons/cg';

const Sidebar = () => {
  const [sidebarStatus,setSidebarStatus] = useContext(sidebarContext)
  const sidebarRef = useRef();

  useEffect(() =>{
          if(sidebarStatus){
                sidebarRef.current.classList.add('active');
                const tl = gsap.timeline();

                tl.to(sidebarRef.current.querySelector('.sidebar-overlay'), {
                        y: 0,
                        duration: 1
                })
                tl.to(sidebarRef.current.querySelector('.sidebar-content'), {
                       x: 0,
                       duration: 1
                })
          }else{
            const tl2 = gsap.timeline();
            tl2.to(sidebarRef.current.querySelector('.sidebar-content'), {
                    x: '-100%',
                    duration: 1
            })
            tl2.to(sidebarRef.current.querySelector('.sidebar-overlay'), {
                  y: '-100%',
                  duration: 1
            })
            setTimeout(() => {
                   sidebarRef.current.classList.remove("active")
            }, 2000)
          }
  }, [sidebarStatus])

  const closeSidebar = () => setSidebarStatus(false);
  return (
    <div ref={sidebarRef} className="sidebar-section">
               <div className="sidebar-overlay"></div>
               <div className="sidebar-content">
                           <div className="sidebar-inner">
                                     <div className="sidebar-head">
                                              <Link to={'/'} className="logo">
                                                    <img src={logo} alt="" />              
                                             </Link>
                                             <span onClick={closeSidebar} className="closebtn"><CgClose /></span>
                                     </div>
                                     <nav>
                                          <ul>
                                                   <li><NavLink to={"/"}>Home</NavLink></li>
                                                   <li><NavLink to={"/about-us"}>About Us</NavLink></li>
                                                   <li><NavLink to={"/masterclasses"}>Masterclasses</NavLink></li>
                                                   <li><NavLink to={"/speakers"}>Speakers</NavLink></li>
                                                   <li><NavLink to={"/partners"}>Partners</NavLink></li>
                                                   <li><NavLink to={"/contact-us"}>Contact Us</NavLink></li>
                                          </ul>
                                     </nav>

                                     <div className="sidebar-details">
                                             <Link to={"/"}>Grab a Ticket</Link>
                                     </div>
                           </div>
               </div>
    </div>
  )
}

export default Sidebar