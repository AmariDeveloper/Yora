import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Masterclasses from './pages/Masterclasses'
import Speakers from './pages/Speakers'
import Partners from './pages/Partners'
import Contact from './pages/Contact'
import SingleMasterclass from './pages/SingleMasterclass'
import { useEffect } from 'react'
import Tickets from './pages/Tickets'

function App() {
  const location = useLocation();

  useEffect(()=> {
         window.scrollTo(0, 0);
  }, [location])

  return (
    <Routes>
             <Route path='/' element={<Home />} />
             <Route path="/the-event" element={<About />} />
             <Route path="/masterclasses" element={<Masterclasses />} />
             <Route path='/masterclass/:name' element={<SingleMasterclass />} />
             <Route path='/speakers' element={<Speakers />} />
             <Route path='/partners' element={<Partners />} />
             <Route path='/contact' element={<Contact />} />
             <Route path='/tickets' element={<Tickets />} />
    </Routes>
  )
}

export default App
