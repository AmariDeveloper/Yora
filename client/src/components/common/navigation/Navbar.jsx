import { useState } from "react"
import { sidebarContext } from "./sidebarContext";
import Header from "./Header";
const Navbar = () => {
    const [sidebarStatus, setSidebarStatus] = useState();
  return (
    <sidebarContext.Provider value={[sidebarStatus, setSidebarStatus]}>
              <Header />
    </sidebarContext.Provider>
  )
}

export default Navbar